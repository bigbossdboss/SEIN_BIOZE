type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-500">{eyebrow}</p> : null}
      <h2 className="font-serif text-3xl leading-tight text-brand-700 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-[#6e5138]">{description}</p> : null}
    </div>
  );
}

