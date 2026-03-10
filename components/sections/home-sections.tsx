import Link from "next/link";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { faqItems } from "@/data/faq";
import { siteConfig } from "@/lib/site";
import { toCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function TrustSection() {
  return (
    <section className="container py-14">
      <div className="grid gap-4 rounded-xl border border-brand-100 bg-white p-6 shadow-card md:grid-cols-3">
        {[
          "Cabinet discret et accueil sur rendez-vous uniquement",
          "Protocoles adaptes a votre parcours personnel",
          "Respect absolu de la confidentialite et de votre rythme"
        ].map((item) => (
          <p key={item} className="text-sm text-[#6e5138]">{item}</p>
        ))}
      </div>
    </section>
  );
}

export function ServicesOverviewSection() {
  return (
    <section className="bg-brand-50/60 py-16">
      <div className="container">
        <SectionHeading
          eyebrow="Prestations"
          title="Des services experts pour chaque etape de votre reconstruction esthetique"
          description="Une approche sur mesure, avec des decisions prises ensemble, sans pression."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="rounded-xl border border-brand-100 bg-white p-6 shadow-card">
              <h3 className="font-serif text-2xl text-brand-700">{service.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6e5138]">{service.shortDescription}</p>
              <p className="mt-4 text-sm font-medium text-brand-700">A partir de {toCurrency(service.fromPrice)}</p>
              <Link className="mt-5 inline-block text-sm font-semibold text-brand-500 underline underline-offset-4" href={`/services/${service.slug}`}>
                Voir le detail
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    {
      title: "Empreinte",
      description: "Nous identifions votre besoin principal, vos attentes et vos priorites de confort."
    },
    {
      title: "Analyse",
      description: "Nous etablissons une strategie esthetique personnalisee et adaptee a votre peau."
    },
    {
      title: "Creation",
      description: "La realisation est faite avec precision, douceur et sens du detail."
    },
    {
      title: "Finition",
      description: "Nous effectuons les ajustements fins et planifions un suivi durable."
    }
  ];

  return (
    <section className="container py-16">
      <SectionHeading
        eyebrow="Parcours"
        title="Un accompagnement clair, progressif et respectueux"
        description="Chaque etape est expliquee avant de commencer, pour avancer avec confiance."
        centered
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-xl border border-brand-100 bg-white p-6 shadow-card">
            <p className="text-sm font-semibold text-brand-500">Etape {index + 1}</p>
            <h3 className="mt-2 font-serif text-2xl text-brand-700">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#6e5138]">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ConfidentialitySection() {
  return (
    <section className="bg-brand-700 py-14 text-white">
      <div className="container grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">Confidentialite & soins</p>
          <h2 className="mt-4 font-serif text-3xl">Votre intimite est au coeur de notre pratique.</h2>
        </div>
        <ul className="space-y-3 text-sm text-[#f6e7d5]">
          <li>Consultations individuelles dans un cadre discret.</li>
          <li>Dossier client securise et traitement RGPD.</li>
          <li>Recommandations ecrites de suivi et d'entretien personnalisees.</li>
        </ul>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="container py-16">
      <SectionHeading eyebrow="Temoignages" title="Elles parlent d'un accompagnement rassurant et profondement humain" />
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <blockquote key={item.id} className="rounded-xl border border-brand-100 bg-white p-5 shadow-card">
            <p className="text-sm leading-relaxed text-[#6e5138]">"{item.quote}"</p>
            <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-brand-500">
              {item.firstName}, {item.city} - {item.service}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export function FaqPreviewSection() {
  return (
    <section className="bg-brand-50/60 py-16">
      <div className="container">
        <SectionHeading eyebrow="FAQ" title="Questions frequentes" />
        <div className="mt-8 space-y-3">
          {faqItems.slice(0, 4).map((item) => (
            <article key={item.question} className="rounded-lg border border-brand-100 bg-white p-5">
              <h3 className="font-semibold text-brand-700">{item.question}</h3>
              <p className="mt-2 text-sm text-[#6e5138]">{item.answer}</p>
            </article>
          ))}
        </div>
        <Link href="/faq" className="mt-6 inline-block text-sm font-semibold text-brand-500 underline underline-offset-4">
          Voir la FAQ complete
        </Link>
      </div>
    </section>
  );
}

export function ContactBlockSection() {
  return (
    <section className="container py-16">
      <div className="rounded-xl border border-brand-100 bg-white p-8 shadow-card">
        <SectionHeading
          eyebrow="Contact"
          title="Parlons de votre besoin en toute discretion"
          description="Un premier echange suffit pour vous orienter vers la solution la plus juste."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/reservation">
            <Button>Prendre rendez-vous</Button>
          </Link>
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">
            <Button variant="secondary">Ecrire sur WhatsApp</Button>
          </a>
          <Link href="/contact">
            <Button variant="ghost">Formulaire de contact</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

