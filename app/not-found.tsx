import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container py-16">
      <h1 className="font-serif text-4xl text-brand-700">Page introuvable</h1>
      <p className="mt-4 text-[#6e5138]">La page demandee n'existe pas ou a ete deplacee.</p>
      <Link href="/" className="mt-6 inline-block text-sm font-semibold text-brand-500 underline underline-offset-4">
        Retour a l'accueil
      </Link>
    </div>
  );
}
