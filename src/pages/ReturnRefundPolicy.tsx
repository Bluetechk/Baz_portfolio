import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ReturnRefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white">
        <div className="container px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-black text-ink-black mb-8 tracking-wide">
            RETURN & REFUND POLICY
          </h1>
          <div className="max-w-3xl prose prose-invert">
            <p className="text-gray-600 mb-6">
              Effective Date: January 1, 2025
            </p>
            
            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">1. Return Period</h2>
            <p className="text-gray-600 mb-4">
              We offer a 30-day return period from the date of purchase for eligible items. Items must be unused and in original packaging.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">2. Refund Eligibility</h2>
            <p className="text-gray-600 mb-4">
              To be eligible for a refund, items must:
            </p>
            <ul className="text-gray-600 mb-4 list-disc list-inside">
              <li>Be returned within 30 days of purchase</li>
              <li>Be unused and in original condition</li>
              <li>Include all original packaging and documentation</li>
              <li>Have a valid proof of purchase</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">3. Non-Refundable Items</h2>
            <p className="text-gray-600 mb-4">
              The following items are non-refundable:
            </p>
            <ul className="text-gray-600 mb-4 list-disc list-inside">
              <li>Digital products and downloads</li>
              <li>Event tickets and registrations</li>
              <li>Customized items</li>
              <li>Items damaged due to customer misuse</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">4. Return Process</h2>
            <p className="text-gray-600 mb-4">
              To initiate a return, please contact our customer support at infoBazemmanuel.com with your order number and reason for return. We will provide you with return shipping instructions.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">5. Refund Timeline</h2>
            <p className="text-gray-600 mb-4">
              Once we receive and inspect your returned item, refunds will be processed within 5-7 business days to your original payment method.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">6. Shipping Costs</h2>
            <p className="text-gray-600 mb-4">
              Customers are responsible for return shipping costs unless the return is due to our error or defective product.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">7. Exchanges</h2>
            <p className="text-gray-600 mb-4">
              For product exchanges, please contact our customer service team within 30 days of purchase.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">8. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              For questions about our Return & Refund Policy, please contact us at infoBazemmanuel.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReturnRefundPolicy;
