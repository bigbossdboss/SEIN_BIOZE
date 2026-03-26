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
    <header className="sticky top-0 z-50 border-b border-[#dbcfc9] bg-[#faf6f1]/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src={siteConfig.logoPath} alt="Logo SEIN'BIOZE" width={44} height={44} className="h-11 w-11 rounded-2xl border border-[#decfca] object-cover p-1" />
          <span className="font-serif text-lg text-[#4b2930] sm:text-xl">
            SEIN'BIOZE <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#936069]">By Kris Design</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-[#6b4e52] hover:text-[#7d2438]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">
            <Button variant="ghost">WhatsApp</Button>
          </a>
          <Link href="/#contact">
            <Button>Nous ecrire</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
