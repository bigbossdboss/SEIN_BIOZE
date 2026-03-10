"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type ProductCheckoutButtonProps = {
  productId: string;
};

export function ProductCheckoutButton({ productId }: ProductCheckoutButtonProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function onBuy() {
    setIsSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/stripe/create-product-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity: 1 })
      });
      const data = (await response.json()) as { ok: boolean; checkoutUrl?: string; error?: string };
      if (!response.ok || !data.ok || !data.checkoutUrl) {
        throw new Error(data.error || "Paiement indisponible.");
      }
      window.location.href = data.checkoutUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <Button onClick={onBuy} disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Redirection..." : "Payer maintenant"}
      </Button>
      {error ? <p className="mt-2 text-xs text-red-700">{error}</p> : null}
    </div>
  );
}

