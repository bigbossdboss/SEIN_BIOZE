import Link from "next/link";
import { ServiceItem } from "@/data/services";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function ServiceDetailPage({ service }: { service: ServiceItem }) {
  return (
    <div className="container py-12 md:py-16">
      <nav className="mb-8 text-sm text-[#816047]">
        <Link href="/">Accueil</Link> / <Link href="/services">Services</Link> / {service.name}
      </nav>
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <h1 className="font-serif text-5xl leading-tight text-[#4f2b2f]">{service.name}</h1>
          <p className="mt-5 text-base leading-relaxed text-[#6a4c50]">{service.longDescription}</p>
          <ul className="mt-6 space-y-2 text-sm text-[#6a4c50]">
            <li>Duree indicative : {service.duration}</li>
            <li>Protocole defini selon votre situation personnelle.</li>
            <li>Orientation progressive et respect de votre rythme.</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">
              <Button>Parler sur WhatsApp</Button>
            </a>
            <Link href="/contact">
              <Button variant="ghost">Poser une question</Button>
            </Link>
          </div>
        </div>
        <aside className="rounded-3xl border border-[#e1d1cb] bg-[#f3e9df] p-6">
          <h2 className="font-serif text-3xl text-[#4f2b2f]">Notre promesse</h2>
          <ul className="mt-4 space-y-3 text-sm text-[#6a4c50]">
            <li>Evaluation personnalisee sans jugement.</li>
            <li>Approche delicate, respectueuse et progressive.</li>
            <li>Discretion totale dans les echanges et les soins.</li>
          </ul>
        </aside>
      </section>
    </div>
  );
}
