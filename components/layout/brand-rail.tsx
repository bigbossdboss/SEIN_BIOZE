import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const railLinks = [
  { href: "/#qui-sommes-nous", label: "Qui sommes nous" },
  { href: "/#a-propos", label: "A propos" },
  { href: "/#nos-produits", label: "Nos produits" },
  { href: "/#avantages", label: "Avantages" },
  { href: "/#contact", label: "Contact" }
];

export function BrandRail() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-52 flex-col justify-between border-r border-[#a56670] bg-gradient-to-b from-[#7d2438] to-[#5c1a2b] px-6 py-8 text-white xl:flex">
      <div>
        <div className="rounded-2xl border border-white/25 bg-white/10 p-3">
          <Image src={siteConfig.logoPath} alt="Logo SEIN'BIOZE" width={72} height={72} className="mx-auto h-16 w-16 rounded-full object-cover" />
        </div>
        <p className="mt-5 font-serif text-3xl leading-tight">SEIN'BIOZE</p>
        <p className="mt-1 text-sm tracking-[0.2em] text-[#e9c9cf]">By Kris Design</p>
        <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#eedce0]">
          Restaurer. Sublimer. Accompagner.
        </p>
      </div>

      <nav className="space-y-3 text-sm">
        {railLinks.map((item) => (
          <Link key={item.href} href={item.href} className="block text-[#f2dee2] transition hover:text-white">
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

