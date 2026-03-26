import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[#dccfc6]">
      <div className="grid md:grid-cols-[0.34fr_0.66fr]">
        <aside className="bg-gradient-to-b from-[#7d2438] to-[#5f1d2e] px-6 py-10 text-[#f3dde1] md:px-8">
          <div className="flex items-center gap-3">
            <Image src={siteConfig.logoPath} alt="Logo SEIN'BIOZE" width={52} height={52} className="h-12 w-12 rounded-full border border-white/30 object-cover" />
            <p className="font-serif text-2xl text-white">SEIN'BIOZE</p>
          </div>
          <p className="mt-3 text-sm tracking-[0.16em] text-[#e9cdd3]">RESTAURER . SUBLIMER . ACCOMPAGNER</p>
          <div className="mt-8 space-y-2 text-sm text-[#efd9de]">
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
            <p>{siteConfig.address}</p>
          </div>
        </aside>

        <div className="bg-[#f8f3ee] px-6 py-10 md:px-10">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8e6470]">Navigation</h4>
              <ul className="mt-4 space-y-2 text-sm text-[#684850]">
                <li><Link href="/#qui-sommes-nous">Qui sommes nous</Link></li>
                <li><Link href="/#nos-produits">Nos produits</Link></li>
                <li><Link href="/#savoir-faire">Savoir-faire</Link></li>
                <li><Link href="/#temoignages">Temoignages</Link></li>
                <li><Link href="/#contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8e6470]">Informations</h4>
              <ul className="mt-4 space-y-2 text-sm text-[#684850]">
                <li><Link href="/mentions-legales">Mentions legales</Link></li>
                <li><Link href="/politique-de-confidentialite">Confidentialite</Link></li>
                <li><Link href="/cgv">CGV</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/realisations">Realisations</Link></li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-xs text-[#87616c]">© {new Date().getFullYear()} SEIN'BIOZE. Tous droits reserves.</p>
        </div>
      </div>
    </footer>
  );
}
