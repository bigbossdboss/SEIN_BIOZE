export type ShopProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  stripePriceId?: string;
};

export const shopProducts: ShopProduct[] = [
  {
    id: "gift-card-100",
    name: "Carte cadeau accompagnement - 100 EUR",
    description: "Carte digitale à offrir pour un accompagnement personnalisé en douceur.",
    price: 100
  },
  {
    id: "bon-suivi-post-seance",
    name: "Bon d'accompagnement post-séance",
    description: "Session de suivi dédiée aux ajustements de confort et conseils d'entretien.",
    price: 65
  },
  {
    id: "kit-entretien-silicone",
    name: "Accessoire d'entretien silicone médical",
    description: "Kit essentiel pour prolonger la qualité et la durabilité de votre prothèse.",
    price: 39
  }
];

