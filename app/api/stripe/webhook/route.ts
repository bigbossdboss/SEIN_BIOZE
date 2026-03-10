import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getSupabaseServerClient } from "@/lib/supabase";
import { getStripeClient } from "@/lib/stripe";

export async function POST(request: Request) {
  const stripe = getStripeClient();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripe || !webhookSecret) {
    return NextResponse.json({ ok: false, error: "Webhook non configure." }, { status: 503 });
  }

  try {
    const body = await request.text();
    const signature = headers().get("stripe-signature");
    if (!signature) {
      return NextResponse.json({ ok: false, error: "Signature manquante." }, { status: 400 });
    }

    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    const supabase = getSupabaseServerClient();

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const bookingId = session.metadata?.bookingId;

      if (supabase) {
        await supabase.from("payments").insert({
          stripe_checkout_session_id: session.id,
          stripe_payment_intent_id: session.payment_intent?.toString() || null,
          booking_id: bookingId || null,
          amount: (session.amount_total || 0) / 100,
          currency: session.currency || "eur",
          status: "paid",
          payment_type: bookingId ? "deposit" : "product"
        });

        if (bookingId) {
          await supabase.from("bookings").update({ status: "confirmed" }).eq("id", bookingId);
        }
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: "Webhook invalide." }, { status: 400 });
  }
}

