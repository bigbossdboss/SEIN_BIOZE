import { ServiceDetailPage } from "@/components/sections/service-detail-page";
import { serviceMap } from "@/data/services";
import { createMetadata } from "@/lib/site";

const service = serviceMap.get("tatouage-3d-areolo-mammaire");

export const metadata = createMetadata({
  title: service?.seoTitle || "Tatouage 3D areolo-mammaire",
  description: service?.seoDescription || "Service de tatouage 3D areolo-mammaire en Guadeloupe.",
  path: "/services/tatouage-3d-areolo-mammaire"
});

export default function TatouagePage() {
  if (!service) {
    return null;
  }
  return <ServiceDetailPage service={service} />;
}
