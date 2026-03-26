import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#e7d9d0] bg-[radial-gradient(circle_at_20%_20%,rgba(147,96,105,0.1),transparent_45%)]">
      <div className="container grid gap-10 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c5f67]">SEIN'BIOZE - Restaurer, Sublimer, Accompagner</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-[#4f2b2f] md:text-5xl">
            Des solutions intimes, artisanales et humaines pour votre reconstruction.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#6b4b4f]">
            Prothèses mammaires externes en silicone médical, pigmentation réparatrice et tatouage 3D aréolo-mammaire.
            Chaque accompagnement est pensé avec écoute, précision et confidentialité.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#contact">
              <Button>Parlons de vos besoins</Button>
            </Link>
            <Link href="/#nos-produits">
              <Button variant="secondary">Découvrir nos solutions</Button>
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-[#e2d3cb] bg-[#f3e9df] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8f6068]">Pour tous</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-[#512c30]">Des solutions pour chacun</h2>
          <ul className="mt-6 space-y-3 text-sm text-[#6a4b50]">
            <li>✓ Reconstruction après chirurgie</li>
            <li>✓ Expression personnelle et authenticité</li>
            <li>✓ Accompagnement bienveillant et discret</li>
            <li>✓ Confidentialité respectée</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
