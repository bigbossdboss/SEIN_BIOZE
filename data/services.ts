export type ServiceItem = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  duration: string;
  seoTitle: string;
  seoDescription: string;
};

export const services: ServiceItem[] = [
  {
    slug: "protheses-mammaires-externes",
    name: "Protheses mammaires externes en silicone medical",
    shortDescription: "Confort, equilibre de silhouette et douceur au quotidien.",
    longDescription:
      "Chaque prothese est pensee avec vous, a partir de vos besoins de confort, de votre morphologie et de votre rythme de vie. L'objectif est de retrouver une harmonie naturelle, stable et discrete.",
    duration: "1h30 a 2h",
    seoTitle: "Prothese mammaire externe en Guadeloupe",
    seoDescription:
      "Realisation sur mesure de prothese mammaire externe en silicone medical en Guadeloupe, avec accompagnement delicat et professionnel."
  },
  {
    slug: "pigmentation-reparatrice",
    name: "Pigmentation reparatrice",
    shortDescription: "Uniformiser, adoucir, restaurer visuellement les tissus.",
    longDescription:
      "La pigmentation reparatrice permet de corriger des contrastes de teinte et de redonner une lecture plus douce de la peau. Le protocole est progressif, avec une ecoute attentive de vos attentes.",
    duration: "1h15 a 1h45",
    seoTitle: "Pigmentation reparatrice en Guadeloupe",
    seoDescription:
      "Seances de pigmentation reparatrice en Guadeloupe pour reconstruction esthetique post-operatoire et restauration de l'harmonie visuelle."
  },
  {
    slug: "tatouage-3d-areolo-mammaire",
    name: "Tatouage 3D areolo-mammaire",
    shortDescription: "Restituer volume, relief visuel et naturel avec precision.",
    longDescription:
      "Le tatouage 3D areolo-mammaire est realise avec une approche artistique et technique minutieuse. L'illusion de relief est construite couche apres couche pour un resultat sobre et fidele.",
    duration: "2h a 2h30",
    seoTitle: "Tatouage 3D areole mammaire Guadeloupe",
    seoDescription:
      "Tatouage 3D areolo-mammaire en Guadeloupe : prestation personnalisee, discrete et hautement precise pour reconstruction esthetique."
  }
];

export const serviceMap = new Map(services.map((service) => [service.slug, service]));
