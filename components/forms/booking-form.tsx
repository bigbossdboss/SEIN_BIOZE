"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/data/services";
import { getUpcomingSlots } from "@/lib/time-slots";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type BookingResponse = {
  ok: boolean;
  checkoutUrl?: string;
  bookingId?: string;
  error?: string;
};

export function BookingForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const dates = useMemo(() => getUpcomingSlots(), []);
  const slots = dates.find((item) => item.dateIso === selectedDate)?.slots ?? [];

  async function onSubmit(formData: FormData) {
    setIsSubmitting(true);
    setError("");
    try {
      const payload = {
        serviceSlug: String(formData.get("serviceSlug") || ""),
        firstName: String(formData.get("firstName") || ""),
        lastName: String(formData.get("lastName") || ""),
        email: String(formData.get("email") || ""),
        phone: String(formData.get("phone") || ""),
        date: String(formData.get("date") || ""),
        slot: String(formData.get("slot") || ""),
        note: String(formData.get("note") || ""),
        rgpdConsent: formData.get("rgpdConsent") === "on"
      };
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = (await response.json()) as BookingResponse;
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Impossible d'envoyer votre demande.");
      }
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
        return;
      }
      router.push(`/reservation/success?bookingId=${data.bookingId || ""}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form action={onSubmit} className="space-y-5 rounded-xl border border-brand-100 bg-white p-6 shadow-card">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-brand-700">Prestation souhaitee</label>
          <Select name="serviceSlug" required defaultValue="">
            <option value="" disabled>
              Selectionnez une prestation
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-brand-700">Prenom</label>
          <Input name="firstName" required />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-brand-700">Nom</label>
          <Input name="lastName" required />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-brand-700">Email</label>
          <Input name="email" type="email" required />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-brand-700">Telephone</label>
          <Input name="phone" required />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-brand-700">Date souhaitee</label>
          <Select name="date" required value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)}>
            <option value="" disabled>
              Choisissez une date
            </option>
            {dates.map((item) => (
              <option key={item.dateIso} value={item.dateIso}>
                {item.labelDate}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-brand-700">Creneau horaire</label>
          <Select name="slot" required disabled={!selectedDate} defaultValue="">
            <option value="" disabled>
              Choisissez un horaire
            </option>
            {slots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </Select>
        </div>
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-brand-700">Message (optionnel)</label>
          <Textarea name="note" placeholder="Contexte, besoins, informations utiles..." />
        </div>
      </div>
      <label className="flex items-start gap-2 text-sm text-[#6e5138]">
        <input name="rgpdConsent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-brand-300" />
        J'accepte que mes donnees soient utilisees pour traiter ma demande de reservation.
      </label>
      {error ? <p className="text-sm font-medium text-red-700">{error}</p> : null}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Traitement en cours..." : "Reserver avec acompte securise"}
      </Button>
      <p className="text-xs text-[#836249]">
        Pour les prestations sensibles, un acompte est demande afin de confirmer le rendez-vous et preparer votre dossier.
      </p>
    </form>
  );
}
