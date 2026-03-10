import Link from "next/link";
import { createMetadata } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = createMetadata({
  title: "A propos",
  description: "L'histoire, la philosophie et les engagements de SEIN'BIOZE By Kris Design en Guadeloupe.",
  path: "/a-propos"
});

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <SectionHeading
        eyebrow="Notre vision"
        title="Replacer l'humain au centre de la reconstruction esthetique"
        description="SEIN'BIOZE By Kris Design est ne d'une conviction : chaque femme merite un accompagnement discret, respectueux et techniquement exigeant."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="rounded-xl border border-brand-100 p-6 shadow-card">
          <h2 className="font-serif text-2xl text-brand-700">Une pratique sensible</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#6e5138]">
            Nous prenons le temps de comprendre votre histoire avant toute proposition. Cette phase d'ecoute permet d'ajuster chaque geste a votre confort et a votre rythme.
          </p>
        </article>
        <article className="rounded-xl border border-brand-100 p-6 shadow-card">
          <h2 className="font-serif text-2xl text-brand-700">Une exigence premium</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#6e5138]">
            Materiaux de qualite, finitions soignées et protocoles rigoureux : nous combinons savoir-faire artisanal et standards professionnels pour un resultat fiable et elegant.
          </p>
        </article>
      </div>
      <div className="mt-10 rounded-xl bg-brand-50/60 p-6">
        <h3 className="font-serif text-2xl text-brand-700">Ce qui nous guide au quotidien</h3>
        <ul className="mt-4 space-y-2 text-sm text-[#6e5138]">
          <li>Ecoute active et absence de jugement.</li>
          <li>Informations claires a chaque etape.</li>
          <li>Respect de l'intimite et confidentialite renforcee.</li>
          <li>Suivi personnalise dans la duree.</li>
        </ul>
        <Link href="/reservation" className="mt-5 inline-block text-sm font-semibold text-brand-500 underline underline-offset-4">
          Prendre rendez-vous
        </Link>
      </div>
    </div>
  );
}
