import Link from "next/link";
import { services } from "@/data/services";
import { createMetadata, defaultSeoKeywords } from "@/lib/site";

export const metadata = createMetadata({
  title: "Services",
  description: "Prestations en Guadeloupe : prothese externe en silicone medical, pigmentation reparatrice et tatouage 3D areolo-mammaire.",
  path: "/services",
  keywords: defaultSeoKeywords
});

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-serif text-5xl text-[#4f2b2f]">Services</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#6a4c50]">
        Chaque prestation est construite autour de votre confort, de votre morphologie et de votre histoire. Nous privilegions la precision technique et la douceur relationnelle.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.slug} className="rounded-3xl border border-[#e1d1cb] bg-white p-6 shadow-card">
            <h2 className="font-serif text-3xl text-[#4f2b2f]">{service.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#6a4c50]">{service.shortDescription}</p>
            <p className="mt-4 text-sm font-medium text-[#80555e]">Approche personnalisee, sans protocole standardise.</p>
            <Link href={`/services/${service.slug}`} className="mt-4 inline-block text-sm font-semibold text-[#7f2438] underline underline-offset-4">
              En savoir plus
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
