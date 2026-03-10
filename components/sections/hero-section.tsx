import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top_left,_rgba(232,180,94,0.22),_transparent_55%),radial-gradient(circle_at_80%_10%,_rgba(200,121,40,0.16),_transparent_40%)]" />
      <div className="container relative grid gap-10 py-16 md:py-22 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-500">Guadeloupe - accompagnement intime et discret</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-brand-700 md:text-5xl">
            Retrouver votre harmonie avec une approche humaine, delicate et sur mesure.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#6e5138]">
            Protheses mammaires externes en silicone medical, pigmentation reparatrice et tatouage 3D areolo-mammaire.
            Chaque accompagnement est pense avec ecoute, pudeur et excellence artisanale.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/reservation">
              <Button>Prendre rendez-vous</Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary">Decouvrir les services</Button>
            </Link>
          </div>
        </div>
        <div className="rounded-xl border border-brand-100 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-500">Votre parcours en 4 etapes</p>
          <ol className="mt-4 space-y-4">
            <li className="rounded-lg bg-brand-50 p-4">
              <p className="font-semibold text-brand-700">1. Empreinte</p>
              <p className="text-sm text-[#6e5138]">Ecoute de votre histoire, prise de mesures et attentes.</p>
            </li>
            <li className="rounded-lg bg-brand-50 p-4">
              <p className="font-semibold text-brand-700">2. Analyse</p>
              <p className="text-sm text-[#6e5138]">Evaluation des besoins esthetiques, techniques et de confort.</p>
            </li>
            <li className="rounded-lg bg-brand-50 p-4">
              <p className="font-semibold text-brand-700">3. Creation</p>
              <p className="text-sm text-[#6e5138]">Conception personnalisee avec une approche precise et sensible.</p>
            </li>
            <li className="rounded-lg bg-brand-50 p-4">
              <p className="font-semibold text-brand-700">4. Finition</p>
              <p className="text-sm text-[#6e5138]">Ajustements, conseils d'entretien et suivi rassurant.</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

