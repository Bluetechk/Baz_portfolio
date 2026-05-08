import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import baz9 from "@/assets/baz9.jpeg";
import baz10 from "@/assets/baz10.jpeg";
import baz11 from "@/assets/baz11.jpeg";
import baz12 from "@/assets/baz12.jpeg";
import baz13 from "@/assets/baz13.jpeg";
import Bazpro from "@/assets/Bazpro.jpeg";

const Blogg = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const poems = [
    {
      id: 1,
      title: "The Courage to Break",
      description: "A poetic reflection on innovation and the courage it takes to break boundaries.",
      image: baz9
    },
    {
      id: 2,
      title: "The Rising Continent",
      description: "Celebrating the spirit and untapped potential of a continent rising to greatness.",
      image: baz10
    },
    {
      id: 3,
      title: "Wisdom in the Fall",
      description: "Finding wisdom and beauty in the moments when we fall and rise again.",
      image: baz11
    },
    {
      id: 4,
      title: "Vision and Value",
      description: "Poetry on strategy, vision, and the art of building wealth with intention.",
      image: baz12
    },
    {
      id: 5,
      title: "Marks in the Sand",
      description: "Verses about creating meaning and leaving a mark that endures through time.",
      image: baz13
    },
    {
      id: 6,
      title: "The Hidden Moments",
      description: "Reflections on life's greatest performances and hidden moments of clarity.",
      image: Bazpro
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="container">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ink-black mb-8">Diary of a Thriving Man</h1>
          <p className="text-gray-600 mb-12 max-w-2xl">Insights, stories, and lessons from the world of Ideas  and Creativity through Poems.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {poems.map((poem) => (
              <article key={poem.id} className="bg-white border border-gray-100 shadow-xl rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 flex flex-col group">
                <div className="overflow-hidden">
                  <img src={poem.image} alt={poem.title} className="w-full h-64 sm:h-72 md:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-grow bg-white relative z-10">
                  <span className="text-royal-blue font-black text-xs tracking-widest uppercase mb-2">POEM</span>
                  <h3 className="font-display text-xl font-black text-ink-black mb-2 leading-tight group-hover:text-royal-blue transition-colors">{poem.title}</h3>
                  <p className="text-gray-600 text-sm mb-5 flex-grow line-clamp-2">{poem.description}</p>
                  <span className="text-royal-blue text-sm font-black tracking-wide">Read More →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogg;