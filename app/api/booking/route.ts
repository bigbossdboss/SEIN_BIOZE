import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { serviceMap } from "@/data/services";
import { getStripeClient } from "@/lib/stripe";
import { siteConfig } from "@/lib/site";
import { getSupabaseServerClient } from "@/lib/supabase";
import { bookingSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Formulaire invalide." }, { status: 400 });
    }

    const data = parsed.data;
    const service = serviceMap.get(data.serviceSlug);
    if (!service) {
      return NextResponse.json({ ok: false, error: "Service introuvable." }, { status: 404 });
    }

    const bookingId = randomUUID();
    const supabase = getSupabaseServerClient();

    if (supabase) {
      await supabase.from("bookings").insert({
        id: bookingId,
        service_slug: data.serviceSlug,
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        preferred_date: data.date,
        preferred_slot: data.slot,
        customer_note: data.note,
        status: service.needsDeposit ? "pending_deposit" : "requested",
        deposit_amount: service.depositAmount
      });
    }

    if (!service.needsDeposit) {
      return NextResponse.json({ ok: true, bookingId });
    }

    const stripe = getStripeClient();
    if (!stripe) {
      return NextResponse.json({ ok: true, bookingId });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${siteConfig.url}/reservation/success?bookingId=${bookingId}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteConfig.url}/reservation/cancel`,
      customer_email: data.email,
      metadata: {
        bookingId,
        serviceSlug: service.slug
      },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: service.depositAmount * 100,
            product_data: {
              name: `Acompte - ${service.name}`
            }
          }
        }
      ]
    });

    return NextResponse.json({ ok: true, bookingId, checkoutUrl: session.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: "Erreur serveur." }, { status: 500 });
  }
}

