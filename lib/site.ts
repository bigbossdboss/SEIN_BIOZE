import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.seinbioze.krisdesign.fr";

export const siteConfig = {
  name: "SEIN'BIOZE By Kris Design",
  description:
    "Accompagnement personnalise en Guadeloupe : protheses mammaires externes en silicone medical, pigmentation reparatrice et tatouage 3D areolo-mammaire.",
  url: siteUrl,
  phone: "+590 (0)690 90 45 81",
  whatsapp: "590690904581",
  email: "contact@seinbioze-krisdesign.fr",
  address: "Rue de la Dignite, 97139 Les Abymes, Guadeloupe",
  logoPath: "/images/logo-seinbioze.jpeg",
  socialImagePath: "/images/logo-seinbioze.jpeg"
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
  const socialImageUrl = `${siteConfig.url}${siteConfig.socialImagePath}`;

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
      locale: "fr_FR",
      images: [
        {
          url: socialImageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImageUrl]
    }
  };
}

export const defaultSeoKeywords = [
  "prothese mammaire externe Guadeloupe",
  "prothese mammaire silicone Guadeloupe",
  "pigmentation reparatrice Guadeloupe",
  "tatouage 3D areole Guadeloupe",
  "reconstruction mammaire esthetique Guadeloupe"
];
