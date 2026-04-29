"use client";

import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

export default function BulkProductionPage() {
  return (
    <ServiceDetailTemplate
      iconName="package"
      title="Bulk Production"
      description="Scalable production capacity from 1,000 to 500,000 units per order. Flexible MOQs for growing brands and established enterprises."
      image="/hero/hero-4.webp"
      benefit="Scale your business without capital investment in facilities"
      example="Managed 50,000-unit orders with 98.5% on-time delivery rate"
    />
  );
}
