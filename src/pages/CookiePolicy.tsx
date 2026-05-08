import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white">
        <div className="container px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-black text-ink-black mb-8 tracking-wide">
            COOKIE POLICY
          </h1>
          <div className="max-w-3xl prose prose-invert">
            <p className="text-gray-600 mb-6">
              Effective Date: January 1, 2025
            </p>
            
            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files placed on your device when you visit our website. They help us remember your preferences and improve your browsing experience.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">2. Types of Cookies We Use</h2>
            <p className="text-gray-600 mb-4">
              We use the following types of cookies:
            </p>
            <ul className="text-gray-600 mb-4 list-disc list-inside">
              <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how you use our site</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant content</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">3. Cookie Consent</h2>
            <p className="text-gray-600 mb-4">
              We obtain consent for non-essential cookies before placing them on your device. You can manage your cookie preferences at any time through your browser settings.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-600 mb-4">
              Third-party service providers may place cookies on your device to provide analytics and marketing services.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">5. Disabling Cookies</h2>
            <p className="text-gray-600 mb-4">
              You can disable cookies through your browser settings, though this may affect website functionality.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">6. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              For questions about this Cookie Policy, please contact us at infoBazemmanuel.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
