"use client";

import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

export default function LogisticsShippingPage() {
  return (
    <ServiceDetailTemplate
      iconName="package"
      title="Logistics & Shipping"
      description="End-to-end logistics management with trusted freight partners. FOB, CIF, DDP terms. Real-time shipment tracking."
      image="/hero/hero-3.webp"
      benefit="Hassle-free delivery to your warehouse or retail locations"
      example="Shipped 10M+ units globally with 99% on-time delivery"
    />
  );
}
