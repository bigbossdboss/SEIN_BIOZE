"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(formData: FormData) {
    setIsSubmitting(true);
    setError("");
    setMessage("");
    try {
      const payload = {
        firstName: String(formData.get("firstName") || ""),
        lastName: String(formData.get("lastName") || ""),
        email: String(formData.get("email") || ""),
        phone: String(formData.get("phone") || ""),
        message: String(formData.get("message") || ""),
        rgpdConsent: formData.get("rgpdConsent") === "on"
      };
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi.");
      }
      setMessage("Votre message a bien ete envoye. Nous revenons vers vous rapidement.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form action={onSubmit} className="space-y-4 rounded-xl border border-brand-100 bg-white p-6 shadow-card">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-brand-700">Prenom</label>
          <Input name="firstName" required />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-brand-700">Nom</label>
          <Input name="lastName" required />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-brand-700">Email</label>
          <Input name="email" type="email" required />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-brand-700">Telephone</label>
          <Input name="phone" required />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-brand-700">Votre message</label>
        <Textarea name="message" required />
      </div>
      <label className="flex items-start gap-2 text-sm text-[#6e5138]">
        <input name="rgpdConsent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-brand-300" />
        J'accepte que mes donnees soient utilisees pour repondre a ma demande.
      </label>
      {message ? <p className="text-sm font-medium text-green-700">{message}</p> : null}
      {error ? <p className="text-sm font-medium text-red-700">{error}</p> : null}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Envoi..." : "Envoyer mon message"}
      </Button>
    </form>
  );
}

