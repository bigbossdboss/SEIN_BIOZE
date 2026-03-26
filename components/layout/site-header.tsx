import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/#qui-sommes-nous", label: "Qui sommes nous" },
  { href: "/#a-propos", label: "A propos" },
  { href: "/#nos-produits", label: "Nos produits" },
  { href: "/#avantages", label: "Avantages" },
  { href: "/#contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ded2c9] bg-[#faf7f3]/95 backdrop-blur">
      <div className="container py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#dacbc1] bg-white p-1.5">
              <Image src={siteConfig.logoPath} alt="Logo SEIN'BIOZE" width={48} height={48} className="h-11 w-11 rounded-full object-cover" />
            </div>
            <div>
              <p className="font-serif text-xl leading-none text-[#4e2831] sm:text-2xl">SEIN'BIOZE</p>
              <p className="mt-1 text-xs tracking-[0.18em] text-[#755159]">RESTAURER . SUBLIMER . ACCOMPAGNER</p>
            </div>
          </Link>

          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer" className="sm:hidden">
            <Button variant="ghost" className="px-4 py-2 text-xs">WhatsApp</Button>
          </a>

          <div className="hidden items-center gap-3 sm:flex">
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">
              <Button variant="ghost">WhatsApp</Button>
            </a>
            <Link href="/#contact">
              <Button>Nous ecrire</Button>
            </Link>
          </div>
        </div>

        <nav className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#e4d9d1] pt-3 text-sm text-[#6d4a52]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#7a2b3d]">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
