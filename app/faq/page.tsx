import { faqItems } from "@/data/faq";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "FAQ",
  description: "Reponses aux questions frequentes sur nos prestations et notre accompagnement.",
  path: "/faq"
});

export default function FaqPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-serif text-5xl text-[#4f2b2f]">FAQ</h1>
      <div className="mt-8 space-y-4">
        {faqItems.map((item) => (
          <article key={item.question} className="rounded-3xl border border-[#e1d1cb] bg-white p-6 shadow-card">
            <h2 className="font-semibold text-[#4f2b2f]">{item.question}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#6a4c50]">{item.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
