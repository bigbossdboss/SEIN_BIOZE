import { ServiceDetailPage } from "@/components/sections/service-detail-page";
import { serviceMap } from "@/data/services";
import { createMetadata } from "@/lib/site";

const service = serviceMap.get("protheses-mammaires-externes");

export const metadata = createMetadata({
  title: service?.seoTitle || "Protheses mammaires externes",
  description: service?.seoDescription || "Service de protheses mammaires externes en silicone medical en Guadeloupe.",
  path: "/services/protheses-mammaires-externes"
});

export default function ProthesesPage() {
  if (!service) {
    return null;
  }
  return <ServiceDetailPage service={service} />;
}
