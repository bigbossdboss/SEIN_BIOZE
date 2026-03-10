import { ContactForm } from "@/components/forms/contact-form";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contactez SEIN'BIOZE By Kris Design pour un premier echange discret en Guadeloupe.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-serif text-4xl text-brand-700">Contact</h1>
      <p className="mt-4 max-w-3xl text-base text-[#6e5138]">
        Ecrivez-nous en toute confiance. Nous vous repondons avec discretion et bienveillance sous 24 a 48h ouvrées.
      </p>
      <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-xl bg-brand-50/70 p-6">
          <h2 className="font-serif text-2xl text-brand-700">Coordonnees</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#6e5138]">
            <li>{siteConfig.address}</li>
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
          </ul>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block text-sm font-semibold text-brand-500 underline underline-offset-4"
          >
            Ouvrir WhatsApp
          </a>
        </aside>
        <ContactForm />
      </div>
    </div>
  );
}
