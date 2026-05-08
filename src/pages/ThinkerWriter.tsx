import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthImg from "@/assets/Bazthinker.png";

const ThinkerWriter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src={AuthImg} 
          alt="Thinker & Writer" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-royal-blue/60 to-transparent flex items-end">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8 ml-6 md:ml-12 pb-12 tracking-wide">
            THINKER & WRITER
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        <div className="container px-4 py-16">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-ink-black mb-4 tracking-wide">
              EXAMINING LIFE, LEADERSHIP & HUMAN PROGRESS
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A thinker and writer who deeply examines life, leadership, and personal potential to shape how people understand themselves and their role in the world.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-xl font-bold text-ink-black mb-4 tracking-widest">DISCIPLINE OF THINKING</h3>
              <p className="text-gray-600 leading-relaxed">
                For Baz, thinking is not an abstract exercise. It is the discipline of examining life, leadership, and personal potential with intention—exploring the ideas that shape personal growth, mindset development, and how individuals carry responsibility in shaping their communities.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-xl font-bold text-ink-black mb-4 tracking-widest">EXPLORING HUMAN PROGRESS</h3>
              <p className="text-gray-600 leading-relaxed">
                Through essays, reflections, and books currently in development, Baz engages questions that sit at the heart of human progress: How does a person cultivate the mindset required for meaningful growth? What distinguishes influence from mere authority? How do individuals build lives that combine personal success with social responsibility?
              </p>
            </div>
          </div>

          {/* Detailed Philosophy Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-black text-ink-black mb-8 tracking-wide">EVERY MEANINGFUL MOVEMENT BEGINS WITH AN IDEA</h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              But before institutions are built, before policies are written, before societies change — someone must first pause long enough to think deeply about the world as it is, and imagine the world as it could be.
            </p>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8">
              <p className="text-gray-600 leading-relaxed">
                His work as a thinker centers on exploring the ideas that shape personal growth, mindset development, leadership culture, and the responsibility individuals carry in shaping their communities.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8">
              <p className="text-gray-600 leading-relaxed">
                His writing goes beyond surface-level discovery, but by a deeper intention—to provoke thoughtful reflection and inspire disciplined thinking.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8">
              <p className="text-gray-600 leading-relaxed mb-4">
                Because the quality of a person's life is often determined by <strong>the quality of the ideas they allow to shape their thinking.</strong>
              </p>
              <p className="text-gray-600 leading-relaxed">
                In a world increasingly driven by speed and noise, Baz believes the ability to think clearly and write thoughtfully remains one of the most powerful contributions a person can make to society.
              </p>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="bg-gradient-to-r from-royal-blue to-vivid-azure p-8 md:p-12 rounded-3xl text-white mb-16">
            <h3 className="text-2xl font-black mb-6 tracking-wide">CORE EXPLORATIONS</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>The Mindset for Meaningful Growth</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Leadership Culture & Authority</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Personal Success & Social Responsibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Disciplined Thinking in Modern Life</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-black text-ink-black mb-6 tracking-wide">EXPLORE PUBLISHED WORKS</h3>
            <Link 
              to="/books"
              className="inline-block bg-gradient-to-r from-royal-blue to-vivid-azure text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              VIEW BOOKS
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThinkerWriter;
