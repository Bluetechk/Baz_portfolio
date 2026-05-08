import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mediaItems = [
  {
    id: 1,
    title: "Official Bio (PDF)",
    description: "Comprehensive biography for use in event programs and media releases."
  },
  {
    id: 2,
    title: "High-Resolution Photos",
    description: "Professional headshots and event photography for media usage."
  },
  {
    id: 3,
    title: "Logo Package",
    description: "Official logos and branding assets in various formats."
  },
  {
    id: 4,
    title: "Speaker Rider",
    description: "Technical requirements and specifications for speaking engagements."
  },
];

const MediaKite = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ink-black mb-8">Media Kit</h1>
          <p className="text-gray-600 mb-12">Download official branding assets, high-resolution photos, and press materials.</p>
          <div className="space-y-6">
            {mediaItems.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row md:items-center md:justify-between bg-white border border-gray-100 shadow-xl rounded-3xl  p-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-ink-black font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                <button className="bg-primary text-primary-foreground px-6 py-2 text-sm font-semibold rounded-full hover:opacity-90 transition-opacity whitespace-nowrap">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MediaKite;