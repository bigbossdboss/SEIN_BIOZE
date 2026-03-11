import { RealisationsGallery } from "@/components/sections/realisations-gallery";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Realisations",
  description: "Galerie de realisations SEIN'BIOZE By Kris Design en Guadeloupe.",
  path: "/realisations"
});

export default function RealisationsPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-serif text-4xl text-brand-700">Realisations</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#6e5138]">
        Une selection de travaux pour illustrer la precision des textures, la justesse des teintes et l'approche artisanale de chaque creation.
      </p>
      <div className="mt-10">
        <RealisationsGallery />
      </div>
      <p className="mt-5 text-xs text-[#836249]">
        Chaque realisation est unique et adaptee a la morphologie, a la carnation et aux attentes de la personne accompagnee.
      </p>
    </div>
  );
}
