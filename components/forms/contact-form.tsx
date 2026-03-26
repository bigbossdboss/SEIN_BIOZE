"use client";

import { useState } from "react";
import { Send } from "lucide-react";
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
    <form action={onSubmit} className="space-y-5 rounded-3xl border border-[#decfc7] bg-white p-7 shadow-card md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#5d353e]">Nom complet</label>
          <Input name="firstName" placeholder="Votre nom" required />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-[#5d353e]">Email</label>
          <Input name="email" type="email" placeholder="votre@email.com" required />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#5d353e]">Telephone</label>
          <Input name="phone" placeholder="Votre numero de telephone" required />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-[#5d353e]">Prenom / Nom</label>
          <Input name="lastName" placeholder="Votre prenom et nom" required />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-[#5d353e]">Message</label>
        <Textarea name="message" placeholder="Comment pouvons-nous vous aider ?" required />
      </div>

      <label className="flex items-start gap-2 text-sm text-[#6e5256]">
        <input name="rgpdConsent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-[#d1b9b5]" />
        J'accepte que mes donnees soient utilisees pour repondre a ma demande.
      </label>

      {message ? <p className="text-sm font-medium text-green-700">{message}</p> : null}
      {error ? <p className="text-sm font-medium text-red-700">{error}</p> : null}

      <Button type="submit" disabled={isSubmitting} className="h-14 w-full text-lg">
        {isSubmitting ? "Envoi..." : "Envoyer votre message"}
        <Send size={18} className="ml-2" />
      </Button>
    </form>
  );
}
