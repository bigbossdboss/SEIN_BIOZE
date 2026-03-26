import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { BrandRail } from "@/components/layout/brand-rail";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFloating } from "@/components/layout/whatsapp-floating";
import { siteConfig } from "@/lib/site";

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: siteConfig.logoPath,
    shortcut: siteConfig.logoPath,
    apple: siteConfig.logoPath
  },
  openGraph: {
    images: [siteConfig.socialImagePath]
  },
  twitter: {
    card: "summary_large_image",
    images: [siteConfig.socialImagePath]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fontSerif.variable} ${fontSans.variable}`}>
      <body className="xl:pl-52">
        <BrandRail />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
