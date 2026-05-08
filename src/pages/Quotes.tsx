import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Quote } from "lucide-react";

const Quotes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quoteItems = [
    {
      id: 1,
      text: "Before institutions are built, before policies are written, before societies change — someone must first pause long enough to think deeply about the world as it is, and imagine the world as it could be.",
    },
    {
      id: 2,
      text: "The quality of a person's life is often determined by the quality of the ideas they allow to shape their thinking.",
    },
    {
      id: 3,
      text: "Leadership is not about standing above others. It is about how many people grow because of your influence.",
    },
    {
      id: 4,
      text: "In a world increasingly driven by speed and noise, the ability to think clearly remains one of the most powerful contributions a person can make.",
    },
    {
      id: 5,
      text: "Progress happens when individuals move beyond dismissing possibilities and begin constructing systems that make those possibilities accessible to others.",
    },
    {
      id: 6,
      text: "Enduring impact is not measured by what a person says, but by what they build and what continues to grow because they chose to build it.",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="container">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ink-black mb-8">Diary of a Thriving Man</h1>
          <p className="text-gray-600 mb-12 max-w-2xl">Thoughts, reflections, and quotes on leadership, growth, and disruption.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quoteItems.map((quote, index) => {
              const isBlue = index === 1 || index === 4;
              return (
              <div key={quote.id} className={`${isBlue ? 'bg-gradient-to-br from-royal-blue to-vivid-azure text-white border-none' : 'bg-white border border-gray-100 text-ink-black'} shadow-xl rounded-3xl p-8 md:p-10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 flex flex-col group relative overflow-hidden`}>
                <div className={`absolute -top-4 -left-4 ${isBlue ? 'opacity-10 text-white' : 'opacity-5 text-royal-blue group-hover:opacity-10'} transition-opacity`}>
                  <Quote size={120} />
                </div>
                <div className="relative z-10 flex flex-col flex-grow">
                  <span className={`${isBlue ? 'text-yellow-300' : 'text-royal-blue'} font-black text-xs tracking-widest uppercase mb-4`}>QUOTE</span>
                  <p className={`${isBlue ? 'text-white' : 'text-ink-black'} text-lg md:text-xl font-medium leading-relaxed italic mb-6`}>"{quote.text}"</p>
                  <div className={`mt-auto pt-6 border-t ${isBlue ? 'border-white/20' : 'border-gray-100'}`}>
                    <p className={`text-sm font-black ${isBlue ? 'text-white/90' : 'text-gray-800'} tracking-widest`}>— Baz Emmanuel Barzon</p>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Quotes;
