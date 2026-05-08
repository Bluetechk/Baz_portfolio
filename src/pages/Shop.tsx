import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import shopMagnacarta from "@/assets/shop_magnacarta.png";
import shopSales from "@/assets/shop_sales.png";
import shopLeadership from "@/assets/shop_leadership.png";
import shopMerch from "@/assets/shop_merch.png";

const shopItems = [
  {
    id: 1,
    title: "The Magna Carta of Exponentiality",
    price: "$29.99",
    image: shopMagnacarta
  },
  {
    id: 2,
    title: "Sales Mastery Course",
    price: "$99.99",
    image: shopSales
  },
  {
    id: 3,
    title: "Leadership Blueprint",
    price: "$79.99",
    image: shopLeadership
  },
  {
    id: 4,
    title: "Branded Merchandise",
    price: "$34.99",
    image: shopMerch
  },
];

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-50 to-white" />

        <div className="container relative z-10">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-royal-blue to-vivid-azure mb-6 text-center drop-shadow-sm">
            SHOP
          </h1>
          <p className="text-gray-600 text-lg md:text-xl text-center mb-16 max-w-2xl mx-auto">Books, courses, and exclusive merchandise.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {shopItems.map((item) => (
              <div key={item.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col">
                <div className="overflow-hidden">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <div className="aspect-[4/5] bg-gray-50 flex items-center justify-center text-gray-400 border-b border-gray-100 group-hover:bg-gray-100 transition-colors">
                      <span className="text-xs font-semibold tracking-widest">NO IMAGE</span>
                    </div>
                  )}
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="font-display text-lg md:text-xl font-bold text-ink-black mb-2 leading-snug">{item.title}</h3>
                  <p className="text-royal-blue text-lg font-black mb-6">{item.price}</p>
                  <div className="mt-auto">
                    <button className="w-full bg-gradient-to-r from-royal-blue to-vivid-azure text-white py-3 md:py-4 text-xs md:text-sm tracking-widest font-bold rounded-full hover:shadow-[0_0_15px_rgba(0,163,255,0.4)] transition-all duration-300">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shop;