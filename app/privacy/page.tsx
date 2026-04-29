import { Shield } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | CDF Studio",
  description: "Learn how we collect, use, and protect your personal information",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-12 h-12 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Privacy Policy
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
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>Name and contact information (email, phone number)</li>
              <li>Company name and business details</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and improve our manufacturing services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you updates about your projects</li>
              <li>Communicate about our services and offerings</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your explicit consent</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2>6. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to improve your browsing experience. You can control cookie settings through your browser preferences.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> info@cdfstudio.com<br />
              <strong>Phone:</strong> +31 6 87620061
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Have Questions?
            </h3>
            <p className="text-slate-600 mb-6">
              If you have any questions about our privacy practices, feel free to contact us.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-lg transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
