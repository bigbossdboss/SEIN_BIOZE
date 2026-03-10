import { ProductCheckoutButton } from "@/components/forms/product-checkout-button";
import { shopProducts } from "@/data/products";
import { createMetadata } from "@/lib/site";
import { toCurrency } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Boutique",
  description: "Cartes cadeau, bons d'accompagnement et accessoires d'entretien disponibles en paiement direct securise.",
  path: "/boutique"
});

export default function BoutiquePage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-serif text-4xl text-brand-700">Boutique</h1>
      <p className="mt-4 max-w-3xl text-base text-[#6e5138]">
        Une selection d'options simples pour prolonger l'accompagnement ou offrir un geste de soutien avec elegance.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {shopProducts.map((product) => (
          <article key={product.id} className="flex flex-col rounded-xl border border-brand-100 bg-white p-6 shadow-card">
            <h2 className="font-serif text-2xl text-brand-700">{product.name}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6e5138]">{product.description}</p>
            <p className="mt-4 text-lg font-semibold text-brand-700">{toCurrency(product.price)}</p>
            <div className="mt-4">
              <ProductCheckoutButton productId={product.id} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
