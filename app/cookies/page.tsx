import { Cookie } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | CDF Studio",
  description: "Learn about how we use cookies and similar technologies",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Cookie className="w-12 h-12 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Cookie Policy
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
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>

            <h2>2. Types of Cookies We Use</h2>
            
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
            </p>

            <h3>Performance Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance.
            </p>

            <h3>Functionality Cookies</h3>
            <p>
              These cookies allow the website to remember choices you make (such as your language preference or theme selection) and provide enhanced, more personal features.
            </p>

            <h3>Analytics Cookies</h3>
            <p>
              We use analytics cookies to understand how visitors use our website. This information helps us improve our content and user experience.
            </p>

            <h2>3. Third-Party Cookies</h2>
            <p>
              We may use third-party services that also set cookies on your device. These include:
            </p>
            <ul>
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms for sharing content</li>
              <li>Marketing and advertising partners</li>
            </ul>

            <h2>4. How to Control Cookies</h2>
            <p>
              You can control and manage cookies in various ways:
            </p>
            <ul>
              <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies through their settings</li>
              <li><strong>Delete Cookies:</strong> You can delete cookies that have already been set</li>
              <li><strong>Opt-Out Tools:</strong> Use browser extensions or opt-out tools provided by advertising networks</li>
            </ul>

            <h2>5. Impact of Disabling Cookies</h2>
            <p>
              If you choose to disable cookies, some features of our website may not function properly. Essential cookies are required for the website to work, while other cookies enhance your experience.
            </p>

            <h2>6. Cookie Duration</h2>
            <p>
              We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period or until you delete them).
            </p>

            <h2>7. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. We encourage you to review this page periodically.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> info@cdfstudio.com<br />
              <strong>Phone:</strong> +31 6 87620061
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Need More Information?
            </h3>
            <p className="text-slate-600 mb-6">
              If you have any questions about our cookie practices, feel free to reach out to us.
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
