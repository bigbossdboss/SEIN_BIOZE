import Link from "next/link";
import { Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="container py-12 md:py-16">
      <div className="grid gap-8 rounded-[30px] border border-[#e3d7ce] bg-white p-6 shadow-card md:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="rounded-[24px] border border-[#eadfd6] bg-[#f4ebe2] p-6">
          <div className="flex h-52 items-center justify-center rounded-[20px] border border-[#e6d8cc] bg-[#f8f1ea] text-[#8f6068]">
            <Users size={72} strokeWidth={1.4} />
          </div>
          <div className="mt-5 grid gap-3 text-sm text-[#6c4b52]">
            <div className="rounded-2xl bg-white px-4 py-3">✓ Reconstruction apres chirurgie</div>
            <div className="rounded-2xl bg-white px-4 py-3">✓ Expression personnelle et authenticite</div>
            <div className="rounded-2xl bg-white px-4 py-3">✓ Accompagnement bienveillant et discret</div>
            <div className="rounded-2xl bg-white px-4 py-3">✓ Confidentialite respectee</div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c5f67]">Pour tous</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-[#4f2b2f] md:text-5xl">Des solutions pour chacun</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#684a50]">
            Chez SEIN'BIOZE, nos protheses mammaires et prestations reparatrices sont pensees pour celles et ceux qui souhaitent retrouver confiance et harmonie dans leur corps.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#684a50]">
            Chaque accompagnement est personnalise, discret et humain, afin de proposer une solution qui vous ressemble vraiment.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/#nos-produits">
              <Button>Decouvrir nos solutions</Button>
            </Link>
            <Link href="/#contact">
              <Button variant="secondary">Parler a l'equipe</Button>
            </Link>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#dfcfc7] bg-[#f8f1ea] px-4 py-2 text-sm text-[#6b4b52]">
            <Sparkles size={16} className="text-[#8e3347]" />
            Sur-mesure, avec accompagnement confidentiel et humain.
          </div>
        </div>
      </div>
    </section>
  );
}
