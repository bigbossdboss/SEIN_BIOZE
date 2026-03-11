import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "CGV",
  description: "Conditions generales de vente des prestations.",
  path: "/cgv"
});

export default function CgvPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-serif text-4xl text-brand-700">Conditions generales de vente</h1>
      <div className="mt-6 space-y-5 text-sm leading-relaxed text-[#6e5138]">
        <p>Les prestations sont realisees sur rendez-vous apres validation du besoin et des modalites avec la cliente.</p>
        <p>Les reports de rendez-vous se font au minimum 48h a l'avance, selon les disponibilites.</p>
        <p>Les recommandations de suivi et d'entretien sont fournies a titre informatif et ne remplacent pas un avis medical.</p>
        <p>Toute demande specifique fait l'objet d'un devis ou d'une proposition personnalisee ecrite.</p>
      </div>
    </div>
  );
}
