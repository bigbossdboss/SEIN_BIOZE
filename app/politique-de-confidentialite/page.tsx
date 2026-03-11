import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Politique de confidentialite",
  description: "Traitement des donnees personnelles et droits RGPD.",
  path: "/politique-de-confidentialite"
});

export default function ConfidentialitePage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-serif text-4xl text-brand-700">Politique de confidentialite</h1>
      <div className="mt-6 space-y-5 text-sm leading-relaxed text-[#6e5138]">
        <p>Nous collectons uniquement les donnees necessaires au traitement de vos demandes (contact, qualification).</p>
        <p>Ces donnees sont conservees de facon securisee et ne sont jamais vendues a des tiers.</p>
        <p>Conformement au RGPD, vous pouvez exercer vos droits d'acces, rectification et suppression a l'adresse contact@seinbioze-krisdesign.fr.</p>
        <p>Les informations partagees servent uniquement a vous accompagner avec discretion et pertinence.</p>
      </div>
    </div>
  );
}
