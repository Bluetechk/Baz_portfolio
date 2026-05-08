import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import bookWeight from "@/assets/book_weight.png";
import bookRebel from "@/assets/book_rebel.png";

const bookItems = [
  {
    id: 1,
    title: "The Weight of Time: Confession of a Man Still Becoming",
    description: "Some of us never get to be children we got responsibilities instead. Silent where safety should have been. We got strength before we were ever allow to be soft. This book is for us.",
    image: bookWeight
  },
  {
    id: 2,
    title: "Rebel By Design",
    description: "An insightful guide to understanding and leveraging disruptive forces in your industry and personal growth journey.",
    image: bookRebel
  },
];

const Books = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-50 to-white" />
        
        <div className="container max-w-5xl relative z-10">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-royal-blue to-vivid-azure mb-16 text-center drop-shadow-sm">
            BOOKS
          </h1>
          <div className="space-y-16">
            {bookItems.map((book) => (
              <div key={book.id} className="flex flex-col md:flex-row gap-10 bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-500 rounded-3xl p-6 md:p-10 group">
                {book.image ? (
                  <img src={book.image} alt={book.title} className="w-full md:w-56 aspect-[3/4] object-cover rounded-2xl shadow-md group-hover:scale-[1.02] transition-transform duration-500 flex-shrink-0" />
                ) : (
                  <div className="w-full md:w-56 aspect-[3/4] bg-gray-100 rounded-2xl flex-shrink-0 flex items-center justify-center text-gray-400 border border-gray-200">
                    <span className="text-xs font-semibold tracking-widest">NO IMAGE</span>
                  </div>
                )}
                <div className="flex flex-col justify-center">
                  <h2 className="font-display text-2xl md:text-3xl font-black text-ink-black mb-4 leading-tight">{book.title}</h2>
                  <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">{book.description}</p>
                  <div>
                    <button className="bg-gradient-to-r from-royal-blue to-vivid-azure text-white px-10 py-4 text-sm tracking-widest font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:scale-105 transition-all duration-300">
                      ORDER NOW
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

export default Books;