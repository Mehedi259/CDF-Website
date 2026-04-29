import { FileText } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | CDF Studio",
  description: "Terms and conditions for using our manufacturing services",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-12 h-12 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Terms of Service
            </h1>
          </div>
          <p className="text-xl text-white/90">
            Last updated: April 30, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using CDF Studio's services, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>

            <h2>2. Services Description</h2>
            <p>
              CDF Studio provides apparel manufacturing services including but not limited to:
            </p>
            <ul>
              <li>Garment production and manufacturing</li>
              <li>Fabric sourcing and procurement</li>
              <li>Sampling and prototyping</li>
              <li>Quality control and inspection</li>
              <li>Private label and OEM/ODM services</li>
            </ul>

            <h2>3. Orders and Payments</h2>
            <p>
              All orders are subject to acceptance by CDF Studio. Payment terms will be specified in individual quotations and contracts. Standard payment terms include:
            </p>
            <ul>
              <li>30% deposit upon order confirmation</li>
              <li>70% balance before shipment</li>
              <li>Payment methods: Bank transfer, Letter of Credit</li>
            </ul>

            <h2>4. Minimum Order Quantities (MOQ)</h2>
            <p>
              MOQs vary by product type and will be specified in quotations. We strive to accommodate smaller orders for new clients and sample runs.
            </p>

            <h2>5. Lead Times</h2>
            <p>
              Production lead times typically range from 30-45 days after order confirmation and sample approval. Rush orders may be accommodated with additional fees.
            </p>

            <h2>6. Quality Standards</h2>
            <p>
              All products are manufactured according to AQL 2.5 standards. We conduct multi-stage quality inspections including inline, pre-final, and final inspections.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              All designs, specifications, and technical information provided by clients remain their property. We maintain strict confidentiality and do not reproduce client designs without authorization.
            </p>

            <h2>8. Liability and Warranties</h2>
            <p>
              We warrant that all products will be manufactured according to approved specifications. Our liability is limited to the replacement or refund of defective products.
            </p>

            <h2>9. Cancellations and Returns</h2>
            <p>
              Order cancellations must be made in writing. Cancellation fees may apply based on production stage. Returns are accepted only for manufacturing defects.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              For questions about these Terms of Service:
            </p>
            <p>
              <strong>Email:</strong> info@cdfstudio.com<br />
              <strong>Phone:</strong> +31 6 87620061
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-600 mb-6">
              Contact us to discuss your manufacturing needs and receive a detailed quotation.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-lg transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
