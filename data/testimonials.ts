export type Testimonial = {
  id: string;
  firstName: string;
  city: string;
  quote: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    firstName: "Nadia",
    city: "Baie-Mahault",
    service: "Prothèse externe",
    quote:
      "Je me suis sentie écoutée dès le premier échange. Le résultat est confortable, très naturel, et surtout je me sens moi à nouveau."
  },
  {
    id: "t2",
    firstName: "Claire",
    city: "Le Gosier",
    service: "Pigmentation réparatrice",
    quote:
      "L'accompagnement est délicat du début à la fin. Les explications sont claires et la prestation se fait en toute confiance."
  },
  {
    id: "t3",
    firstName: "Sonia",
    city: "Petit-Bourg",
    service: "Tatouage 3D aréolo-mammaire",
    quote:
      "Le rendu est subtil et élégant. J'ai retrouvé une sérénité que je pensais impossible après mon parcours."
  }
];

