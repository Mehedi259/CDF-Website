"use client";

import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

export default function QualityControlPage() {
  return (
    <ServiceDetailTemplate
      iconName="shield-check"
      title="Quality Control"
      description="Multi-stage inspection process: inline, pre-final, and final AQL 2.5 standard checks. Third-party audit compliance."
      image="/hero/hero-6.webp"
      benefit="Guarantee product quality, reduce returns and customer complaints"
      example="Maintained 99.2% quality pass rate across 10M+ units"
    />
  );
}
