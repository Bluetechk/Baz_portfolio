import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import pressMagazine from "@/assets/press_magazine.png";
import pressEvent from "@/assets/press_event.png";

const pressItems = [
  {
    id: 1,
    title: "Forbes Africa Feature",
    description: "Read more about Baz's latest media appearances and press coverage.",
    image: pressMagazine
  },
  {
    id: 2,
    title: "CNBC Interview",
    description: "Exclusive interview discussing business trends and leadership insights.",
    image: pressEvent
  },
  {
    id: 3,
    title: "TED Talk Spotlight",
    description: "Powerful presentation on innovation and personal transformation.",
    image: pressEvent
  },
  {
    id: 4,
    title: "Business Day Profile",
    description: "In-depth profile covering Baz's journey and impact.",
    image: pressMagazine
  },
  {
    id: 5,
    title: "Entrepreneur Magazine",
    description: "Feature story on entrepreneurship and venture capital insights.",
    image: pressMagazine
  },
  {
    id: 6,
    title: "Sky News Appearance",
    description: "Global media coverage of Baz's commentary on market trends.",
    image: pressEvent
  },
];

const PressRoom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="container">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ink-black mb-8">Press Room</h1>
          <p className="text-gray-600 mb-12 max-w-2xl">Latest media coverage, press releases, and featured articles about Baz.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressItems.map((item) => (
              <div key={item.id} className="bg-white border border-gray-100 shadow-xl rounded-3xl  p-6 hover:border-primary/50 transition-colors">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-full aspect-video object-cover object-top rounded mb-4" />
                ) : (
                  <div className="aspect-video bg-gray-50 rounded mb-4 flex items-center justify-center text-gray-600">
                    <span className="text-sm">Image placeholder - Add image to {item.id} in pressItems</span>
                  </div>
                )}
                <h3 className="font-display text-lg font-bold text-ink-black mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PressRoom;