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
    firstName: "Marie-Claire",
    city: "Cliente depuis 2023",
    service: "Prothese externe",
    quote:
      "SEIN'BIOZE m'a permis de retrouver confiance en moi apres ma mastectomie. La qualite des protheses et l'accompagnement de l'equipe ont fait toute la difference."
  },
  {
    id: "t2",
    firstName: "Sophie",
    city: "Cliente janvier 2025",
    service: "Pigmentation reparatrice",
    quote:
      "Le confort est remarquable et l'approche est humaine. J'ai trouve exactement ce que je cherchais depuis des annees."
  },
  {
    id: "t3",
    firstName: "Justine",
    city: "Cliente fevrier 2025",
    service: "Tatouage 3D areolo-mammaire",
    quote:
      "Une equipe bienveillante et tres professionnelle. Le rendu est naturel, discret et parfaitement adapte a ma morphologie."
  }
];
