import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-brand-100 bg-brand-50/50">
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl text-brand-700">SEIN'BIOZE By Kris Design</h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#6e5138]">
            Accompagnement discret et hautement personnalisé en Guadeloupe pour reconstruction esthétique mammaire.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-500">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm text-[#6e5138]">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/accompagnement">Accompagnement</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/blog">Blog (a venir)</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-500">Coordonnees</h4>
          <ul className="mt-4 space-y-2 text-sm text-[#6e5138]">
            <li>{siteConfig.address}</li>
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
          </ul>
          <div className="mt-6 space-x-4 text-sm text-[#6e5138]">
            <Link href="/mentions-legales">Mentions legales</Link>
            <Link href="/politique-de-confidentialite">Confidentialite</Link>
            <Link href="/cgv">CGV</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-100 py-4 text-center text-xs text-[#836249]">
        © {new Date().getFullYear()} SEIN'BIOZE By Kris Design - Tous droits reserves.
      </div>
    </footer>
  );
}

