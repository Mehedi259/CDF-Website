"use client";

import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

export default function ApparelManufacturingPage() {
  return (
    <ServiceDetailTemplate
      iconName="factory"
      title="Apparel Manufacturing"
      description="Full-scale garment production with state-of-the-art machinery and skilled workforce. From basic tees to complex technical wear."
      image="/hero/hero-1.webp"
      benefit="Reduce production costs by 40% while maintaining premium quality standards"
      example="Produced 2M+ units for Fortune 500 sportswear brands"
    />
  );
}
