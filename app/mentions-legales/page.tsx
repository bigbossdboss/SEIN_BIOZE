import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Mentions legales",
  description: "Mentions legales de SEIN'BIOZE By Kris Design.",
  path: "/mentions-legales"
});

export default function MentionsLegalesPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-serif text-4xl text-brand-700">Mentions legales</h1>
      <div className="mt-6 space-y-5 text-sm leading-relaxed text-[#6e5138]">
        <p><strong>Editeur :</strong> SEIN'BIOZE By Kris Design - Guadeloupe.</p>
        <p><strong>Contact :</strong> contact@seinbioze-krisdesign.fr - +590 (0)690 90 45 81.</p>
        <p><strong>Hebergement :</strong> Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
        <p><strong>Propriete intellectuelle :</strong> Tous les contenus de ce site sont proteges. Toute reproduction est interdite sans autorisation ecrite.</p>
      </div>
    </div>
  );
}
