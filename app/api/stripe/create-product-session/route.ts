import { NextResponse } from "next/server";
import { shopProducts } from "@/data/products";
import { siteConfig } from "@/lib/site";
import { getStripeClient } from "@/lib/stripe";
import { productCheckoutSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const stripe = getStripeClient();
    if (!stripe) {
      return NextResponse.json({ ok: false, error: "Stripe non configure." }, { status: 503 });
    }

    const body = await request.json();
    const parsed = productCheckoutSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Requete invalide." }, { status: 400 });
    }

    const data = parsed.data;
    const product = shopProducts.find((item) => item.id === data.productId);
    if (!product) {
      return NextResponse.json({ ok: false, error: "Produit introuvable." }, { status: 404 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${siteConfig.url}/boutique/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteConfig.url}/boutique/cancel`,
      line_items: [
        product.stripePriceId
          ? {
              price: product.stripePriceId,
              quantity: data.quantity
            }
          : {
              quantity: data.quantity,
              price_data: {
                currency: "eur",
                unit_amount: product.price * 100,
                product_data: {
                  name: product.name,
                  description: product.description
                }
              }
            }
      ],
      metadata: {
        productId: product.id
      }
    });

    return NextResponse.json({ ok: true, checkoutUrl: session.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: "Erreur serveur Stripe." }, { status: 500 });
  }
}

