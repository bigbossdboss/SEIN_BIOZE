import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/a-propos",
  "/services",
  "/services/protheses-mammaires-externes",
  "/services/pigmentation-reparatrice",
  "/services/tatouage-3d-areolo-mammaire",
  "/sur-mesure",
  "/accompagnement",
  "/reservation",
  "/temoignages",
  "/faq",
  "/contact",
  "/boutique",
  "/mentions-legales",
  "/politique-de-confidentialite",
  "/cgv",
  "/blog"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
