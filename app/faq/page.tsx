import { faqItems } from "@/data/faq";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "FAQ",
  description: "Reponses aux questions frequentes sur nos prestations et la reservation.",
  path: "/faq"
});

export default function FaqPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-serif text-4xl text-brand-700">FAQ</h1>
      <div className="mt-8 space-y-4">
        {faqItems.map((item) => (
          <article key={item.question} className="rounded-xl border border-brand-100 p-6 shadow-card">
            <h2 className="font-semibold text-brand-700">{item.question}</h2>
            <p className="mt-2 text-sm text-[#6e5138]">{item.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
