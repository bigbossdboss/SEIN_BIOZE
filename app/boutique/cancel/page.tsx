import Link from "next/link";

export default function BoutiqueCancelPage() {
  return (
    <div className="container py-16">
      <h1 className="font-serif text-4xl text-brand-700">Paiement interrompu</h1>
      <p className="mt-4 max-w-2xl text-base text-[#6e5138]">
        Aucun debit n'a ete effectue. Vous pouvez relancer le paiement a tout moment depuis la boutique.
      </p>
      <Link href="/boutique" className="mt-6 inline-block text-sm font-semibold text-brand-500 underline underline-offset-4">
        Retour a la boutique
      </Link>
    </div>
  );
}
