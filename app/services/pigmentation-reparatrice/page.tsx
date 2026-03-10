import { ServiceDetailPage } from "@/components/sections/service-detail-page";
import { serviceMap } from "@/data/services";
import { createMetadata } from "@/lib/site";

const service = serviceMap.get("pigmentation-reparatrice");

export const metadata = createMetadata({
  title: service?.seoTitle || "Pigmentation reparatrice",
  description: service?.seoDescription || "Service de pigmentation reparatrice en Guadeloupe.",
  path: "/services/pigmentation-reparatrice"
});

export default function PigmentationPage() {
  if (!service) {
    return null;
  }
  return <ServiceDetailPage service={service} />;
}
