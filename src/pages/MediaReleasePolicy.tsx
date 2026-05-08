import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MediaReleasePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white">
        <div className="container px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-black text-ink-black mb-8 tracking-wide">
            MEDIA RELEASE POLICY
          </h1>
          <div className="max-w-3xl prose prose-invert">
            <p className="text-gray-600 mb-6">
              Effective Date: January 1, 2025
            </p>
            
            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">1. Purpose</h2>
            <p className="text-gray-600 mb-4">
              This Media Release Policy outlines the terms and conditions under which participants consent to the use of their image, voice, and likeness in media, photographs, video recordings, and audio recordings.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">2. Grant of Rights</h2>
            <p className="text-gray-600 mb-4">
              By participating in our events, attendees grant permission for their image, voice, and likeness to be recorded and used by us for promotional, educational, and informational purposes.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">3. Use of Media</h2>
            <p className="text-gray-600 mb-4">
              Media containing participant images may be used in:
            </p>
            <ul className="text-gray-600 mb-4 list-disc list-inside">
              <li>Marketing materials and advertisements</li>
              <li>Social media and digital platforms</li>
              <li>Website content and publications</li>
              <li>Educational and promotional videos</li>
              <li>Event documentation and archival purposes</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">4. Duration of Use</h2>
            <p className="text-gray-600 mb-4">
              The rights granted under this policy are perpetual and may be used indefinitely unless the participant specifically requests otherwise in writing.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">5. No Compensation</h2>
            <p className="text-gray-600 mb-4">
              Participants acknowledge that no monetary compensation will be provided for the use of their image, voice, or likeness.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">6. Withdrawal of Consent</h2>
            <p className="text-gray-600 mb-4">
              To withdraw consent for use of your media, please contact us in writing at infoBazemmanuel.com. We will make reasonable efforts to discontinue use of media in future distributions.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">7. Opting Out</h2>
            <p className="text-gray-600 mb-4">
              Participants who do not wish to be photographed or recorded should inform event staff at the time of participation.
            </p>

            <h2 className="text-2xl font-bold text-ink-black mt-8 mb-4">8. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              For questions about this Media Release Policy, please contact us at infoBazemmanuel.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MediaReleasePolicy;
