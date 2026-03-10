import Link from "next/link";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Blog",
  description: "Conseils et informations autour de la reconstruction esthetique mammaire en Guadeloupe.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-serif text-4xl text-brand-700">Blog</h1>
      <p className="mt-4 max-w-3xl text-base text-[#6e5138]">
        Cette section est prete a accueillir vos futurs articles SEO locaux (Guadeloupe) sur les protheses externes, la pigmentation reparatrice et le tatouage 3D areolo-mammaire.
      </p>
      <Link href="/contact" className="mt-6 inline-block text-sm font-semibold text-brand-500 underline underline-offset-4">
        Nous contacter pour un sujet precis
      </Link>
    </div>
  );
}
