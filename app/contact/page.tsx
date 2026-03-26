import { ContactForm } from "@/components/forms/contact-form";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contactez SEIN'BIOZE By Kris Design pour un echange discret et personnalise en Guadeloupe.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div id="contact" className="py-12 md:py-16">
      <div className="container grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <aside className="rounded-3xl border border-[#decec8] bg-[#f2e7de] p-7 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8f6068]">Contact</p>
          <h1 className="mt-3 font-serif text-5xl leading-tight text-[#4f2b2f]">Parlons de vos besoins</h1>
          <p className="mt-4 text-base leading-relaxed text-[#6c4e52]">
            Notre equipe est a votre ecoute pour vous accompagner dans le choix de la prothese ideale ou d'un service reparateur adapte.
          </p>

          <div className="mt-7 space-y-2 text-sm text-[#6b4b4f]">
            <p><strong>Telephone:</strong> {siteConfig.phone}</p>
            <p><strong>Email:</strong> {siteConfig.email}</p>
            <p><strong>Adresse:</strong> {siteConfig.address}</p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-block text-sm font-semibold text-[#7a2b3c] underline underline-offset-4"
          >
            Ouvrir WhatsApp
          </a>
        </aside>

        <ContactForm />
      </div>
    </div>
  );
}
