import Link from "next/link";

export default function ReservationCancelPage() {
  return (
    <div className="container py-16">
      <h1 className="font-serif text-4xl text-brand-700">Paiement annule</h1>
      <p className="mt-4 max-w-2xl text-base text-[#6e5138]">
        Votre paiement n'a pas ete valide. Vous pouvez reprendre la reservation quand vous le souhaitez.
      </p>
      <Link href="/reservation" className="mt-6 inline-block text-sm font-semibold text-brand-500 underline underline-offset-4">
        Revenir a la reservation
      </Link>
    </div>
  );
}
