import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.seinbioze.krisdesign.fr";

export const siteConfig = {
  name: "SEIN'BIOZE By Kris Design",
  description:
    "Accompagnement personnalisé en Guadeloupe : prothèses mammaires externes en silicone médical, pigmentation réparatrice et tatouage 3D aréolo-mammaire.",
  url: siteUrl,
  phone: "+590 (0)690 90 45 81",
  whatsapp: "590690904581",
  email: "contact@seinbioze-krisdesign.fr",
  address: "Rue de la Dignité, 97139 Les Abymes, Guadeloupe"
};

type MetadataProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createMetadata({ title, description, path, keywords = [] }: MetadataProps): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const canonical = `${siteConfig.url}${path}`;
  return {
    title: fullTitle,
    description,
    alternates: {
      canonical
    },
    keywords,
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      locale: "fr_FR"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description
    }
  };
}

export const defaultSeoKeywords = [
  "prothèse mammaire externe Guadeloupe",
  "prothèse mammaire silicone Guadeloupe",
  "pigmentation réparatrice Guadeloupe",
  "tatouage 3D aréole Guadeloupe",
  "reconstruction mammaire esthétique Guadeloupe"
];

