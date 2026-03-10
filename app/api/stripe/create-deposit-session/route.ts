import { NextResponse } from "next/server";
import { serviceMap } from "@/data/services";
import { siteConfig } from "@/lib/site";
import { getStripeClient } from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const stripe = getStripeClient();
    if (!stripe) {
      return NextResponse.json({ ok: false, error: "Stripe non configure." }, { status: 503 });
    }

    const body = (await request.json()) as { serviceSlug?: string; bookingId?: string; email?: string };
    const service = serviceMap.get(body.serviceSlug || "");
    if (!service) {
      return NextResponse.json({ ok: false, error: "Service introuvable." }, { status: 404 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${siteConfig.url}/reservation/success?bookingId=${body.bookingId || ""}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteConfig.url}/reservation/cancel`,
      customer_email: body.email,
      metadata: {
        bookingId: body.bookingId || "",
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

    return NextResponse.json({ ok: true, checkoutUrl: session.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: "Erreur serveur Stripe." }, { status: 500 });
  }
}

