import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Accompagnement",
  description: "Un accompagnement personnalise avant, pendant et apres la prestation.",
  path: "/accompagnement"
});

export default function AccompagnementPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-serif text-4xl text-brand-700">Accompagnement personnalise</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#6e5138]">
        Au-dela du geste technique, nous vous accompagnons dans la duree avec un cadre rassurant, des conseils concrets et un suivi adapte a votre evolution.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="rounded-xl border border-brand-100 bg-white p-6 shadow-card">
          <h2 className="font-serif text-2xl text-brand-700">Avant la prestation</h2>
          <p className="mt-3 text-sm text-[#6e5138]">Evaluation du besoin, orientation et preparation en toute clarte.</p>
        </article>
        <article className="rounded-xl border border-brand-100 bg-white p-6 shadow-card">
          <h2 className="font-serif text-2xl text-brand-700">Pendant la prestation</h2>
          <p className="mt-3 text-sm text-[#6e5138]">Ecoute continue, ajustements progressifs et confort prioritaire.</p>
        </article>
        <article className="rounded-xl border border-brand-100 bg-white p-6 shadow-card">
          <h2 className="font-serif text-2xl text-brand-700">Apres la prestation</h2>
          <p className="mt-3 text-sm text-[#6e5138]">Conseils de suivi, entretien et rendez-vous de verification si besoin.</p>
        </article>
        <article className="rounded-xl border border-brand-100 bg-white p-6 shadow-card">
          <h2 className="font-serif text-2xl text-brand-700">Confidentialite</h2>
          <p className="mt-3 text-sm text-[#6e5138]">Protection de vos donnees, accueil discret et communication respectueuse.</p>
        </article>
      </div>
    </div>
  );
}
