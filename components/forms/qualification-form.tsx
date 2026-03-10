"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function QualificationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(formData: FormData) {
    setIsSubmitting(true);
    setFeedback("");
    setError("");
    try {
      const payload = {
        mainNeed: String(formData.get("mainNeed") || ""),
        wantedService: String(formData.get("wantedService") || ""),
        location: String(formData.get("location") || ""),
        contactPreference: String(formData.get("contactPreference") || ""),
        message: String(formData.get("message") || ""),
        rgpdConsent: formData.get("rgpdConsent") === "on"
      };
      const response = await fetch("/api/qualification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi.");
      }
      setFeedback("Merci. Votre demande de qualification a bien ete enregistree.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form action={onSubmit} className="space-y-4 rounded-xl border border-brand-100 bg-white p-6 shadow-card">
      <div>
        <label className="mb-2 block text-sm font-medium text-brand-700">Besoin principal</label>
        <Select name="mainNeed" defaultValue="" required>
          <option value="" disabled>
            Selectionnez
          </option>
          <option value="retrouver-equilibre">Retrouver un equilibre de silhouette</option>
          <option value="corriger-contrast">Corriger une zone visible</option>
          <option value="reconstruction-esthetique">Finaliser ma reconstruction esthetique</option>
        </Select>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-brand-700">Prestation souhaitee</label>
        <Select name="wantedService" defaultValue="" required>
          <option value="" disabled>
            Selectionnez
          </option>
          <option value="prothese">Prothese mammaire externe</option>
          <option value="pigmentation">Pigmentation reparatrice</option>
          <option value="tatouage-3d">Tatouage 3D areolo-mammaire</option>
          <option value="a-definir">A definir ensemble</option>
        </Select>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-brand-700">Zone geographique</label>
        <Select name="location" defaultValue="" required>
          <option value="" disabled>
            Selectionnez
          </option>
          <option value="grande-terre">Grande-Terre</option>
          <option value="basse-terre">Basse-Terre</option>
          <option value="dependances">Dependances de Guadeloupe</option>
          <option value="hors-zone">Hors Guadeloupe</option>
        </Select>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-brand-700">Preference de contact</label>
        <Select name="contactPreference" defaultValue="" required>
          <option value="" disabled>
            Selectionnez
          </option>
          <option value="telephone">Telephone</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="email">Email</option>
        </Select>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-brand-700">Message libre (optionnel)</label>
        <Textarea name="message" />
      </div>
      <label className="flex items-start gap-2 text-sm text-[#6e5138]">
        <input name="rgpdConsent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-brand-300" />
        J'accepte le traitement de mes donnees pour etre recontactee.
      </label>
      {feedback ? <p className="text-sm font-medium text-green-700">{feedback}</p> : null}
      {error ? <p className="text-sm font-medium text-red-700">{error}</p> : null}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Envoi..." : "Envoyer ma demande"}
      </Button>
    </form>
  );
}

