import Link from "next/link";

export default function ReservationSuccessPage() {
  return (
    <div className="container py-16">
      <h1 className="font-serif text-4xl text-brand-700">Reservation enregistree</h1>
      <p className="mt-4 max-w-2xl text-base text-[#6e5138]">
        Merci. Votre demande a bien ete prise en compte. Vous recevrez une confirmation par email avec les prochaines etapes.
      </p>
      <Link href="/" className="mt-6 inline-block text-sm font-semibold text-brand-500 underline underline-offset-4">
        Retour a l'accueil
      </Link>
    </div>
  );
}
