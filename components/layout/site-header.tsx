import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "A propos" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Realisations" },
  { href: "/sur-mesure", label: "Sur-mesure" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src={siteConfig.logoPath} alt="Logo SEIN'BIOZE" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
          <span className="font-serif text-xl text-brand-700">
            SEIN'BIOZE <span className="font-sans text-xs uppercase tracking-[0.2em] text-brand-500">By Kris Design</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-[#6e5138] hover:text-brand-700">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">
            <Button variant="ghost">WhatsApp</Button>
          </a>
          <Link href="/contact">
            <Button>Nous contacter</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
