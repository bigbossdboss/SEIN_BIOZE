import { BookingForm } from "@/components/forms/booking-form";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Reservation",
  description: "Reservez votre rendez-vous en Guadeloupe avec selection de service, date, creneau et paiement d'acompte securise.",
  path: "/reservation"
});

export default function ReservationPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-serif text-4xl text-brand-700">Reservation</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#6e5138]">
        Choisissez votre prestation, votre date et votre creneau. Pour les services sensibles, un acompte securise via Stripe confirme votre rendez-vous.
      </p>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <aside className="rounded-xl bg-brand-50/70 p-6">
          <h2 className="font-serif text-2xl text-brand-700">Informations utiles</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#6e5138]">
            <li>Accueil uniquement sur rendez-vous.</li>
            <li>Confirmation envoyee par email apres validation.</li>
            <li>Possibilite de replanifier selon disponibilites.</li>
          </ul>
        </aside>
        <BookingForm />
      </div>
    </div>
  );
}
