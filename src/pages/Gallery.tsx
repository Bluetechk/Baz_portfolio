import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const galleryItems = [
  { id: 1, title: "Photo 1" },
  { id: 2, title: "Photo 2" },
  { id: 3, title: "Photo 3" },
  { id: 4, title: "Photo 4" },
  { id: 5, title: "Photo 5" },
  { id: 6, title: "Photo 6" },
  { id: 7, title: "Photo 7" },
  { id: 8, title: "Photo 8" },
  { id: 9, title: "Photo 9" },
];

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="container">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ink-black mb-12">Gallery</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item) => (
              <div key={item.id} className="aspect-square bg-white border border-gray-100 shadow-xl rounded-3xl  border border-border flex items-center justify-center text-gray-600 hover:border-primary/50 transition-colors">
                <span className="text-sm">Photo {item.id} - Add image</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;