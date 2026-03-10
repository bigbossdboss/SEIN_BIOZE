import { QualificationForm } from "@/components/forms/qualification-form";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Sur-mesure",
  description: "Qualification de votre besoin pour definir une solution sur mesure en Guadeloupe.",
  path: "/sur-mesure"
});

export default function SurMesurePage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-serif text-4xl text-brand-700">Approche sur-mesure</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#6e5138]">
        Cette etape nous permet de qualifier votre besoin principal avant de proposer une prestation precise. Vous recevez une orientation claire, personnalisee et realiste.
      </p>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <aside className="rounded-xl bg-brand-50/70 p-6">
          <h2 className="font-serif text-2xl text-brand-700">Pourquoi cette qualification ?</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#6e5138]">
            <li>Identifier le besoin prioritaire avec finesse.</li>
            <li>Orienter vers la prestation la plus adaptee.</li>
            <li>Anticiper les delais, le budget et les etapes de suivi.</li>
          </ul>
        </aside>
        <QualificationForm />
      </div>
    </div>
  );
}
