import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white">
        <div className="container px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-black text-ink-black mb-8 tracking-wide">
            TERMS AND CONDITIONS
          </h1>
          <div className="max-w-3xl prose prose-invert">
            <p className="text-gray-600 mb-6">
              Effective Date: January 1, 2025
            </p>
            
            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="text-gray-600 mb-4 list-disc list-inside">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose</li>
              <li>Attempting to decompile or reverse engineer any software</li>
              <li>Removing any copyright or proprietary notations</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">4. Limitations</h2>
            <p className="text-gray-600 mb-4">
              In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-600 mb-4">
              The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">6. Links</h2>
            <p className="text-gray-600 mb-4">
              We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">7. Modifications</h2>
            <p className="text-gray-600 mb-4">
              We may revise these terms and conditions for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms and conditions.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">8. Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These terms and conditions are governed by and construed in accordance with applicable law, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">9. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms and Conditions, please contact us at infoBazemmanuel.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
