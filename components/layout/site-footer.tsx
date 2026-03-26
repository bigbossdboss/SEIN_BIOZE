import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[#d2c2bd] bg-gradient-to-r from-[#7d2438] to-[#5e1b2c] text-[#f3dde1]">
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image src={siteConfig.logoPath} alt="Logo SEIN'BIOZE" width={52} height={52} className="h-12 w-12 rounded-full border border-white/30 object-cover" />
            <h3 className="font-serif text-xl text-white">SEIN'BIOZE By Kris Design</h3>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#f1d7dc]">
            Restaurer, sublimer et accompagner avec bienveillance, discrétion et exigence artisanale.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f7e8eb]">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm text-[#f1d7dc]">
            <li><Link href="/#qui-sommes-nous">Qui sommes nous</Link></li>
            <li><Link href="/#nos-produits">Nos produits</Link></li>
            <li><Link href="/#avantages">Avantages</Link></li>
            <li><Link href="/#temoignages">Temoignages</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f7e8eb]">Coordonnees</h4>
          <ul className="mt-4 space-y-2 text-sm text-[#f1d7dc]">
            <li>{siteConfig.address}</li>
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#f1d7dc]">
            <Link href="/mentions-legales">Mentions legales</Link>
            <Link href="/politique-de-confidentialite">Confidentialite</Link>
            <Link href="/cgv">CGV</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-4 text-center text-xs text-[#efd4d9]">
        © {new Date().getFullYear()} SEIN'BIOZE. Tous droits reserves.
      </div>
    </footer>
  );
}
