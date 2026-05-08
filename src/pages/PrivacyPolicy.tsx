import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white">
        <div className="container px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-black text-ink-black mb-8 tracking-wide">
            PRIVACY POLICY
          </h1>
          <div className="max-w-3xl prose prose-invert">
            <p className="text-gray-600 mb-6">
              Effective Date: January 1, 2025
            </p>
            
            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and otherwise process your information in connection with our websites, applications, and services.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We may collect personal information including but not limited to:
            </p>
            <ul className="text-gray-600 mb-4 list-disc list-inside">
              <li>Name, email address, and contact information</li>
              <li>Booking and transaction information</li>
              <li>Device information and browsing data</li>
              <li>Information provided through forms and surveys</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              Your information is used to:
            </p>
            <ul className="text-gray-600 mb-4 list-disc list-inside">
              <li>Process bookings and transactions</li>
              <li>Send updates and communications</li>
              <li>Improve our services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">5. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to access, correct, or delete your personal information. Contact us for any requests regarding your data.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">6. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              For questions about this Privacy Policy, please contact us at infoBazemmanuel.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
