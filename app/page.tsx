import { HeroSection } from "@/components/sections/hero-section";
import {
  AboutStorySection,
  AdvantagesSection,
  ContactBlockSection,
  CraftSection,
  PigmentationServicesSection,
  ProductsSection,
  TestimonialsSection
} from "@/components/sections/home-sections";
import { createMetadata, defaultSeoKeywords } from "@/lib/site";

export const metadata = createMetadata({
  title: "SEIN'BIOZE By Kris Design",
  description:
    "Protheses mammaires externes en silicone medical, pigmentation reparatrice et tatouage 3D areolo-mammaire en Guadeloupe.",
  path: "/",
  keywords: defaultSeoKeywords
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutStorySection />
      <ProductsSection />
      <PigmentationServicesSection />
      <CraftSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <ContactBlockSection />
    </>
  );
}
