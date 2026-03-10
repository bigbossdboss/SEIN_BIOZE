import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "CGV",
  description: "Conditions generales de vente des prestations et produits.",
  path: "/cgv"
});

export default function CgvPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-serif text-4xl text-brand-700">Conditions generales de vente</h1>
      <div className="mt-6 space-y-5 text-sm leading-relaxed text-[#6e5138]">
        <p>Les prestations sensibles sont confirmees apres versement d'un acompte non remboursable sauf cas de force majeure justifie.</p>
        <p>En cas d'annulation par la cliente moins de 48h avant le rendez-vous, l'acompte reste acquis.</p>
        <p>Les produits boutique sont payables comptant via Stripe et soumis a disponibilite.</p>
        <p>Toute demande de report se fait par email ou telephone et reste soumise aux creneaux disponibles.</p>
      </div>
    </div>
  );
}
