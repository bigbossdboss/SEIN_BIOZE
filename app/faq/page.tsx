import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "FAQ",
  description: "Reponses aux questions frequentes sur nos prestations et notre accompagnement.",
  path: "/faq"
});

export default function FaqPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-serif text-4xl text-brand-700">FAQ</h1>
      <div className="mt-8 space-y-4">
        {[
          {
            q: "Combien de temps dure un premier rendez-vous ?",
            a: "Le premier rendez-vous dure generalement entre 60 et 90 minutes."
          },
          {
            q: "Les prestations sont-elles confidentielles ?",
            a: "Oui, chaque echange et chaque dossier sont traites avec confidentialite stricte."
          },
          {
            q: "Comment connaitre le tarif ?",
            a: "Le tarif est communique apres un premier echange personnalise."
          },
          {
            q: "Puis-je etre accompagnee lors du rendez-vous ?",
            a: "Oui, vous pouvez venir avec une personne de confiance."
          },
          {
            q: "Intervenez-vous uniquement en Guadeloupe ?",
            a: "L'activite est basee en Guadeloupe avec etude des demandes hors zone au cas par cas."
          }
        ].map((item) => (
          <article key={item.q} className="rounded-xl border border-brand-100 p-6 shadow-card">
            <h2 className="font-semibold text-brand-700">{item.q}</h2>
            <p className="mt-2 text-sm text-[#6e5138]">{item.a}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
