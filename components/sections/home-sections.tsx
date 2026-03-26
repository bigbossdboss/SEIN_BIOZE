import { CheckCircle2, Heart, ShieldCheck, Sparkles, UserRound, Wrench } from "lucide-react";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c5f67]">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-4xl leading-tight text-[#4f2b2f] md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-[#6c4e52]">{description}</p>
    </div>
  );
}

export function AboutStorySection() {
  return (
    <section id="qui-sommes-nous" className="container py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="rounded-3xl border border-[#e2d3cb] bg-[#f3e9df] p-8">
          <div className="flex h-full min-h-[230px] items-center justify-center rounded-2xl border border-[#eadcd3] bg-[#f6efe8] text-[#8a5a62]">
            <UserRound size={74} strokeWidth={1.4} />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
            <div className="rounded-2xl bg-white p-3 text-[#6d4d52]"><p className="font-semibold">2025</p><p>Création</p></div>
            <div className="rounded-2xl bg-white p-3 text-[#6d4d52]"><p className="font-semibold">Guadeloupe</p><p>Ancrage local</p></div>
            <div className="rounded-2xl bg-white p-3 text-[#6d4d52]"><p className="font-semibold">100%</p><p>Artisanal</p></div>
          </div>
        </div>

        <article id="a-propos">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c5f67]">Notre histoire</p>
          <h2 className="mt-3 font-serif text-5xl leading-tight text-[#4f2b2f]">Qui sommes nous</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[#6b4b4f]">
            <p>
              Je suis une professionnelle guadeloupéenne issue du soin, reconvertie dans la dermopigmentation réparatrice et la création de prothèses mammaires externes.
            </p>
            <p>
              Cette reconversion unit mes deux piliers: l'aide à la personne et l'esthétique réparatrice. Chaque accompagnement est conçu avec écoute, pudeur et exigence.
            </p>
            <p>
              Chez SEIN'BIOZE, chaque création est personnalisée pour que vous retrouviez confiance, confort et harmonie dans votre corps.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export function ProductsSection() {
  const cards = [
    {
      title: "Forme Naturelle",
      badge: "Populaire",
      desc: "Prothèse symétrique offrant un galbe harmonieux et un décolleté naturel, pensée pour le quotidien.",
      details: "Tailles A à F · Légère · Aspect réaliste"
    },
    {
      title: "Forme Anatomique",
      badge: "Précision",
      desc: "Design asymétrique reproduisant fidèlement la forme naturelle du sein pour une adaptation fine.",
      details: "Tailles A à C · Ultra légère · Confort longue durée"
    },
    {
      title: "Forme Ronde",
      badge: "Nouveau",
      desc: "Prothèse ronde avec effet volume pour occasions spéciales et besoins de projection plus marqués.",
      details: "Tailles B à E · Effet volume · Finition douce"
    }
  ];

  return (
    <section id="nos-produits" className="bg-[#f8f2ec] py-16 md:py-20">
      <div className="container">
        <SectionIntro
          eyebrow="Nos solutions"
          title="Prothèses mammaires en silicone"
          description="Une gamme complète pour répondre à vos besoins avec différentes formes et tailles, pour une adaptation parfaite à votre morphologie."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="rounded-3xl border border-[#e1d1cb] bg-white p-6 shadow-card">
              <div className="mb-5 flex h-44 items-center justify-center rounded-2xl border border-[#ece0d7] bg-[#f3e9df]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d4b8aa] bg-[#ead8ca]" />
              </div>
              <span className="rounded-full bg-[#7d2438] px-3 py-1 text-xs font-semibold text-white">{card.badge}</span>
              <h3 className="mt-4 font-serif text-3xl text-[#4f2b2f]">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6a4c50]">{card.desc}</p>
              <p className="mt-4 text-sm font-medium text-[#83545d]">{card.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PigmentationServicesSection() {
  return (
    <section className="container py-16 md:py-20">
      <SectionIntro
        eyebrow="Services de pigmentation"
        title="Pigmentation réparatrice et tatouage 3D"
        description="Complétez votre reconstruction avec des techniques de dermopigmentation précises, artistiques et harmonieuses."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-[#e1d1cb] bg-white p-6 shadow-card">
          <div className="mb-5 flex h-52 items-center justify-center rounded-2xl border border-[#ece0d7] bg-[#f3e9df]">
            <Wrench size={72} strokeWidth={1.2} className="text-[#8c5f67]" />
          </div>
          <h3 className="font-serif text-3xl text-[#4f2b2f]">Pigmentation Réparatrice</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#6a4c50]">
            Camouflage artistique de cicatrices et irrégularités cutanées. Technique fine et naturelle pour rétablir l'uniformité de la peau.
          </p>
          <ul className="mt-4 space-y-1 text-sm text-[#6a4c50]">
            <li>✓ Camouflage de cicatrices</li>
            <li>✓ Uniformité cutanée</li>
            <li>✓ Pigments adaptés à votre teinte</li>
          </ul>
        </article>

        <article className="rounded-3xl border border-[#e1d1cb] bg-white p-6 shadow-card">
          <div className="mb-5 flex h-52 items-center justify-center rounded-2xl border border-[#ece0d7] bg-[#f3e9df]">
            <Sparkles size={72} strokeWidth={1.2} className="text-[#8c5f67]" />
          </div>
          <h3 className="font-serif text-3xl text-[#4f2b2f]">Tatouage 3D Aréolo-Mammaire</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#6a4c50]">
            Création de l'illusion 3D de la plaque aréolo-mammaire par tatouage artistique, entièrement personnalisée pour une reconstruction cohérente.
          </p>
          <ul className="mt-4 space-y-1 text-sm text-[#6a4c50]">
            <li>✓ Effet 3D ultra réaliste</li>
            <li>✓ Entièrement personnalisé</li>
            <li>✓ Reconstruction complète</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export function CraftSection() {
  const steps = [
    { number: "1", title: "Empreinte", desc: "Prise minutieuse de l'empreinte de votre mamelon" },
    { number: "2", title: "Analyse", desc: "Étude détaillée pour une adaptation parfaite" },
    { number: "3", title: "Création", desc: "Modelage artisanal en silicone médical" },
    { number: "4", title: "Finition", desc: "Finitions précises et test de qualité" }
  ];

  return (
    <section id="savoir-faire" className="bg-[#f8f2ec] py-16 md:py-20">
      <div className="container">
        <SectionIntro
          eyebrow="Savoir-faire"
          title="Sur mesure, entièrement réalisée à la main"
          description="Chaque prothèse est unique, créée à partir de l'empreinte précise de votre mamelon, du premier geste à la finition."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="rounded-3xl border border-[#e1d1cb] bg-white p-6 shadow-card">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#8a2d3f] text-lg font-semibold text-white">
                {step.number}
              </div>
              <h3 className="font-serif text-3xl text-[#4f2b2f]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6a4c50]">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdvantagesSection() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Qualité médicale",
      desc: "Silicone de grade médical, hypoallergénique et certifié pour un contact prolongé avec la peau."
    },
    {
      icon: Heart,
      title: "Confort absolu",
      desc: "Légèreté et douceur pour un port confortable tout au long de la journée."
    },
    {
      icon: CheckCircle2,
      title: "Aspect naturel",
      desc: "Texture et mouvement réalistes pour une apparence discrète sous les vêtements."
    },
    {
      icon: UserRound,
      title: "Accompagnement",
      desc: "Conseils personnalisés pour trouver la solution la plus adaptée à votre besoin."
    }
  ];

  return (
    <section id="avantages" className="container py-16 md:py-20">
      <SectionIntro
        eyebrow="Pourquoi nous choisir"
        title="L'excellence au service de votre bien-être"
        description="Une pratique experte, humaine et artisanale pour vous accompagner dans la durée."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="rounded-3xl border border-[#e1d1cb] bg-white p-6 shadow-card">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-[#8e3043] to-[#642232] text-white">
              <item.icon size={22} />
            </div>
            <h3 className="font-serif text-3xl text-[#4f2b2f]">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6a4c50]">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section id="temoignages" className="bg-gradient-to-b from-[#97394c] to-[#6b2435] py-16 md:py-20">
      <div className="container">
        <SectionIntro
          eyebrow="Témoignages"
          title="Témoignages de nos clientes"
          description="Découvrez comment SEIN'BIOZE a transformé le quotidien de femmes accompagnées avec respect et précision."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.id} className="rounded-3xl border border-white/35 bg-white/10 p-6 text-[#f7e9ec] backdrop-blur-sm">
              <p className="text-sm leading-relaxed">"{item.quote}"</p>
              <div className="mt-6 border-t border-white/35 pt-4 text-xs uppercase tracking-[0.12em] text-[#f4dce1]">
                {item.firstName} · {item.city}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactBlockSection() {
  return (
    <section id="contact" className="container py-16 md:py-20">
      <div className="grid gap-8 rounded-3xl border border-[#decfc7] bg-white p-8 shadow-card lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c5f67]">Contact</p>
          <h2 className="mt-3 font-serif text-5xl leading-tight text-[#4f2b2f]">Parlons de vos besoins</h2>
          <p className="mt-4 text-base leading-relaxed text-[#6c4e52]">
            Notre équipe est à votre écoute pour vous accompagner dans le choix de la solution idéale pour vous.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">
            <Button>WhatsApp</Button>
          </a>
          <Link href="/contact">
            <Button variant="secondary">Formulaire complet</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
