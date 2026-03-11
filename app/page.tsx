import { HeroSection } from "@/components/sections/hero-section";
import {
  ConfidentialitySection,
  ContactBlockSection,
  FaqPreviewSection,
  ProcessSection,
  RealisationsPreviewSection,
  ServicesOverviewSection,
  TestimonialsSection,
  TrustSection
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
      <TrustSection />
      <ServicesOverviewSection />
      <ProcessSection />
      <RealisationsPreviewSection />
      <ConfidentialitySection />
      <TestimonialsSection />
      <FaqPreviewSection />
      <ContactBlockSection />
    </>
  );
}
