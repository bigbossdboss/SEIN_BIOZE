import { testimonials } from "@/data/testimonials";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Temoignages",
  description: "Retour d'experience de clientes accompagnees en Guadeloupe.",
  path: "/temoignages"
});

export default function TemoignagesPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-serif text-4xl text-brand-700">Temoignages</h1>
      <p className="mt-4 max-w-3xl text-base text-[#6e5138]">Des mots simples qui expriment la confiance, l'ecoute et le soulagement ressenti.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.id} className="rounded-xl border border-brand-100 p-6 shadow-card">
            <p className="text-sm leading-relaxed text-[#6e5138]">"{item.quote}"</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-brand-500">
              {item.firstName} - {item.city}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
