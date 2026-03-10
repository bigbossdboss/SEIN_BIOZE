export type ServiceItem = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  duration: string;
  fromPrice: number;
  depositAmount: number;
  needsDeposit: boolean;
  seoTitle: string;
  seoDescription: string;
};

export const services: ServiceItem[] = [
  {
    slug: "protheses-mammaires-externes",
    name: "Prothèses mammaires externes en silicone médical",
    shortDescription: "Confort, équilibre de silhouette et douceur au quotidien.",
    longDescription:
      "Chaque prothèse est pensée avec vous, à partir de vos besoins de confort, de votre morphologie et de votre rythme de vie. L'objectif est de retrouver une harmonie naturelle, stable et discrète.",
    duration: "1h30 à 2h",
    fromPrice: 290,
    depositAmount: 80,
    needsDeposit: true,
    seoTitle: "Prothèse mammaire externe en Guadeloupe",
    seoDescription:
      "Réalisation sur mesure de prothèse mammaire externe en silicone médical en Guadeloupe, avec accompagnement délicat et professionnel."
  },
  {
    slug: "pigmentation-reparatrice",
    name: "Pigmentation réparatrice",
    shortDescription: "Uniformiser, adoucir, restaurer visuellement les tissus.",
    longDescription:
      "La pigmentation réparatrice permet de corriger des contrastes de teinte et de redonner une lecture plus douce de la peau. Le protocole est progressif, avec une écoute attentive de vos attentes.",
    duration: "1h15 à 1h45",
    fromPrice: 220,
    depositAmount: 70,
    needsDeposit: true,
    seoTitle: "Pigmentation réparatrice en Guadeloupe",
    seoDescription:
      "Séances de pigmentation réparatrice en Guadeloupe pour reconstruction esthétique post-opératoire et restauration de l'harmonie visuelle."
  },
  {
    slug: "tatouage-3d-areolo-mammaire",
    name: "Tatouage 3D aréolo-mammaire",
    shortDescription: "Restituer volume, relief visuel et naturel avec précision.",
    longDescription:
      "Le tatouage 3D aréolo-mammaire est réalisé avec une approche artistique et technique minutieuse. L'illusion de relief est construite couche après couche pour un résultat sobre et fidèle.",
    duration: "2h à 2h30",
    fromPrice: 360,
    depositAmount: 100,
    needsDeposit: true,
    seoTitle: "Tatouage 3D aréole mammaire Guadeloupe",
    seoDescription:
      "Tatouage 3D aréolo-mammaire en Guadeloupe : prestation personnalisée, discrète et hautement précise pour reconstruction esthétique."
  }
];

export const serviceMap = new Map(services.map((service) => [service.slug, service]));

