import Link from "next/link";

export default function BoutiqueSuccessPage() {
  return (
    <div className="container py-16">
      <h1 className="font-serif text-4xl text-brand-700">Paiement confirme</h1>
      <p className="mt-4 max-w-2xl text-base text-[#6e5138]">
        Merci pour votre commande. Un recu vous est transmis par email et nous vous contacterons si un suivi est necessaire.
      </p>
      <Link href="/boutique" className="mt-6 inline-block text-sm font-semibold text-brand-500 underline underline-offset-4">
        Retour a la boutique
      </Link>
    </div>
  );
}
