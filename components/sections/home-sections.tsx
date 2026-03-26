import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Heart,
  ShieldCheck,
  Sparkles,
  UserRound,
  Hand,
  Search,
  Paintbrush,
  BadgeCheck
} from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { galleryItems } from "@/data/gallery";
import { siteConfig } from "@/lib/site";
import { RealisationsGallery } from "@/components/sections/realisations-gallery";
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
    <section id="qui-sommes-nous" className="container py-14 md:py-18">
      <div className="grid gap-8 rounded-[30px] border border-[#e3d8cf] bg-white p-6 shadow-card md:p-8 lg:grid-cols-[1.05fr_0.95fr]">
        <article id="a-propos" className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c5f67]">Notre mission</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-[#4f2b2f] md:text-5xl">Au coeur de votre bien-etre</h2>
          <p className="mt-5 text-base leading-relaxed text-[#6a4c50]">
            SEIN'BIOZE est nee d'une volonte simple: accompagner chaque personne avec dignite, douceur et exigence apres un parcours de reconstruction.
          </p>
          <p className="mt-3 text-base leading-relaxed text-[#6a4c50]">
            Nos protheses externes en silicone medical sont le fruit d'un travail artisanal precis, associe a une ecoute attentive et une approche humaine.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#e5d8cf] bg-[#f8f1e9] p-4 text-center">
              <p className="text-3xl font-semibold text-[#8b3347]">100%</p>
              <p className="mt-1 text-sm text-[#6d4f53]">Silicone medical</p>
            </div>
            <div className="rounded-2xl border border-[#e5d8cf] bg-[#f8f1e9] p-4 text-center">
              <p className="text-3xl font-semibold text-[#8b3347]">10+</p>
              <p className="mt-1 text-sm text-[#6d4f53]">Tailles disponibles</p>
            </div>
          </div>
        </article>

        <div className="rounded-[24px] border border-[#e8ddd4] bg-[#f4ebe2] p-6">
          <div className="flex h-full min-h-[250px] items-center justify-center rounded-[20px] border border-[#e6d8cc] bg-[#f8f1ea]">
            <div className="rounded-full border border-[#cfb7a8] bg-[#ead8ca] p-8">
              <div className="rounded-full border border-[#b88f80] bg-[#d8b5a4] p-6">
                <div className="h-5 w-5 rounded-full bg-[#7f3e46]" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-[#6b4b51]">Aspect naturel et toucher realiste</p>
        </div>
      </div>
    </section>
  );
}

export function CraftSection() {
  const steps = [
    {
      number: "1",
      title: "Empreinte",
      desc: "Prise minutieuse de l'empreinte de votre mamelon",
      icon: Hand
    },
    {
      number: "2",
      title: "Analyse",
      desc: "Etude detaillee pour une adaptation parfaite",
      icon: Search
    },
    {
      number: "3",
      title: "Creation",
      desc: "Modelage artisanal en silicone medical",
      icon: Paintbrush
    },
    {
      number: "4",
      title: "Finition",
      desc: "Finitions precises et controle qualite",
      icon: BadgeCheck
    }
  ];

  return (
    <section id="savoir-faire" className="container py-14 md:py-18">
      <SectionIntro
        eyebrow="Savoir-faire"
        title="Sur mesure, entierement realisee a la main"
        description="Chaque prothese est unique, creee specialement pour vous a partir de l'empreinte precise de votre anatomie."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step.number} className="relative rounded-3xl border border-[#e3d6cd] bg-white p-5 shadow-card">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3e7dc] text-[#8a2e42]">
              <step.icon size={20} />
            </div>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#8a2d3f] text-sm font-semibold text-white">
              {step.number}
            </span>
            <h3 className="mt-3 font-serif text-3xl text-[#4f2b2f]">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6a4c50]">{step.desc}</p>
            {index < steps.length - 1 ? (
              <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-[#c09a8c] xl:block">→</span>
            ) : null}
          </article>
        ))}
      </div>

      <article className="mt-8 rounded-3xl border border-[#e1d5cc] bg-[#f8f2eb] p-6">
        <h3 className="font-serif text-3xl text-[#4f2b2f]">Travail entierement a la main</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#6a4c50]">
          De la prise d'empreinte a la finition, chaque etape est realisee par nos artisans avec patience et precision.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-[#6a4c50]">
          <li>✓ Empreinte precise et personnalisee</li>
          <li>✓ Modelage artisanal minutieux</li>
          <li>✓ Respect du detail et controle qualite</li>
          <li>✓ Prothese unique et confortable</li>
        </ul>
      </article>
    </section>
  );
}

export function ProductsSection() {
  const cards = [
    {
      title: "Forme Naturelle",
      badge: "Populaire",
      desc: "Prothese symetrique offrant un galbe harmonieux et un decollete naturel pour le quotidien.",
      details: "Tailles A a F - Legere"
    },
    {
      title: "Forme Anatomique",
      badge: "Confort",
      desc: "Design asymetrique reproduisant fidelement la forme naturelle du sein.",
      details: "Tailles A a C - Ultra legere"
    },
    {
      title: "Forme Ronde",
      badge: "Nouveau",
      desc: "Prothese ronde pour un effet volume naturel et une adaptation personnalisee.",
      details: "Tailles B a E - Effet volume"
    }
  ];

  return (
    <section id="nos-produits" className="container py-14 md:py-18">
      <SectionIntro
        eyebrow="Nos solutions"
        title="Protheses mammaires en silicone"
        description="Une gamme complete pour repondre a tous les besoins avec differentes formes et tailles, adaptee a chaque morphologie."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {cards.map((card, index) => {
          const image = galleryItems[index];
          return (
            <article key={card.title} className="rounded-3xl border border-[#e1d3cb] bg-white p-6 shadow-card">
              <div className="relative mb-5 overflow-hidden rounded-2xl border border-[#e8dbd1] bg-[#f3e9df]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={1200}
                  className="h-52 w-full object-cover"
                />
                <span className="absolute right-3 top-3 rounded-full bg-[#7d2438] px-3 py-1 text-xs font-semibold text-white">
                  {card.badge}
                </span>
              </div>
              <h3 className="font-serif text-3xl text-[#4f2b2f]">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6a4c50]">{card.desc}</p>
              <p className="mt-4 text-sm font-medium text-[#80535c]">{card.details}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function PigmentationServicesSection() {
  return (
    <section className="bg-[#f8f2eb] py-14 md:py-18">
      <div className="container">
        <SectionIntro
          eyebrow="Services de pigmentation et tatouage"
          title="Reconstruction visuelle harmonieuse"
          description="Completez votre reconstruction avec nos services de dermopigmentation reparatrice et tatouage 3D areolo-mammaire."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-[#e1d3cb] bg-white p-6 shadow-card">
            <div className="overflow-hidden rounded-2xl border border-[#e7dace]">
              <Image src={galleryItems[8].src} alt={galleryItems[8].alt} width={1200} height={1200} className="h-56 w-full object-cover" />
            </div>
            <h3 className="mt-5 font-serif text-3xl text-[#4f2b2f]">Pigmentation reparatrice</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#6a4c50]">
              Camouflage artistique de cicatrices et imperfections cutanees pour retrouver uniformite et serenite.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-[#6a4c50]">
              <li>✓ Camouflage de cicatrices</li>
              <li>✓ Uniformite cutanee</li>
              <li>✓ Pigments adaptes a votre teinte</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-[#e1d3cb] bg-white p-6 shadow-card">
            <div className="overflow-hidden rounded-2xl border border-[#e7dace]">
              <Image src={galleryItems[5].src} alt={galleryItems[5].alt} width={1200} height={1200} className="h-56 w-full object-cover" />
            </div>
            <h3 className="mt-5 font-serif text-3xl text-[#4f2b2f]">Tatouage 3D areolo-mammaire</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#6a4c50]">
              Creation d'un effet 3D realiste de la plaque areolaire, avec un rendu naturel et personnalise.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-[#6a4c50]">
              <li>✓ Effet 3D ultra realiste</li>
              <li>✓ Entierement personnalise</li>
              <li>✓ Reconstruction complete</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export function AdvantagesSection() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Qualite medicale",
      desc: "Silicone de grade medical hypoallergenique et certifie pour un contact prolonge avec la peau."
    },
    {
      icon: Heart,
      title: "Confort absolu",
      desc: "Legerete et douceur exceptionnelles pour un port confortable tout au long de la journee."
    },
    {
      icon: CheckCircle2,
      title: "Aspect naturel",
      desc: "Texture et mouvements realistes pour une apparence discrete sous les vetements."
    },
    {
      icon: UserRound,
      title: "Accompagnement",
      desc: "Conseils personnalises pour vous aider a trouver la solution la plus adaptee."
    }
  ];

  return (
    <section id="avantages" className="container py-14 md:py-18">
      <SectionIntro
        eyebrow="Pourquoi nous choisir"
        title="L'excellence au service de votre bien-etre"
        description="Une demarche humaine, technique et artisanale pour vous accompagner avec respect et discretion."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="rounded-3xl border border-[#e1d3cb] bg-white p-6 shadow-card">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-[#8f3146] to-[#642233] text-white">
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

export function WorkGallerySection() {
  return (
    <section id="realisations" className="bg-[#f8f2eb] py-14 md:py-18">
      <div className="container">
        <SectionIntro
          eyebrow="Realisations"
          title="Decouvrez nos creations"
          description="Une selection de travaux reels pour montrer la precision du modelage, des teintes et des finitions."
        />
        <div className="mt-10">
          <RealisationsGallery limit={6} />
        </div>
        <div className="mt-8 text-center">
          <Link href="/realisations">
            <Button variant="secondary">Voir toutes les realisations</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section id="temoignages" className="bg-gradient-to-b from-[#a34759] to-[#6b2435] py-14 md:py-18">
      <div className="container">
        <SectionIntro
          eyebrow="Temoignages"
          title="Temoignages de nos clientes"
          description="Decouvrez comment SEIN'BIOZE a transforme la vie de nos clientes en 2025."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.id} className="rounded-3xl border border-white/35 bg-white/10 p-6 text-[#f8e9ed] backdrop-blur-sm">
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
    <section id="contact" className="container py-14 md:py-18">
      <div className="grid gap-8 rounded-3xl border border-[#decfc7] bg-white p-8 shadow-card lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c5f67]">Contact</p>
          <h2 className="mt-3 font-serif text-5xl leading-tight text-[#4f2b2f]">Parlons de vos besoins</h2>
          <p className="mt-4 text-base leading-relaxed text-[#6c4e52]">
            Notre equipe est a votre ecoute pour vous accompagner dans le choix de la solution ideale pour vous.
          </p>
          <p className="mt-3 text-sm text-[#6c4e52]">
            Tel: {siteConfig.phone} · Email: {siteConfig.email}
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
