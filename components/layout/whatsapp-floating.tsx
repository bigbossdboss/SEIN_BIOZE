import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function WhatsAppFloating() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20vos%20prestations.`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand-700 px-4 py-3 text-sm font-semibold text-white shadow-soft hover:bg-[#6c3f17]"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle size={16} />
      WhatsApp
    </a>
  );
}

