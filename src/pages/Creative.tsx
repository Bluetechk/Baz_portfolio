import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CreatorImg from "@/assets/Enterpreneur1.png";

const Creative = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src={CreatorImg} 
          alt="Creative" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-royal-blue/60 to-transparent flex items-end">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8 ml-6 md:ml-12 pb-12 tracking-wide">
            CREATIVE
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        <div className="container px-4 py-16">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-ink-black mb-4 tracking-wide">
              PUSHING BOUNDARIES & REDEFINING POSSIBILITIES
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              An innovator who creates content, ideas, and experiences that push boundaries and redefine what's possible in modern leadership.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-xl font-bold text-ink-black mb-4 tracking-widest">CREATIVE DIRECTION</h3>
              <p className="text-gray-600 leading-relaxed">
                Baz's creative vision extends across multiple mediums—from multimedia content and digital experiences to immersive learning platforms. His projects challenge conventional narratives and invite audiences to see leadership through fresh perspectives.
              </p>
            </div>
            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-xl font-bold text-ink-black mb-4 tracking-widest">INNOVATION IN ACTION</h3>
              <p className="text-gray-600 leading-relaxed">
                By combining storytelling, technology, and psychological insight, Baz creates experiences that inform, inspire, and transform. His creative work consistently pushes the envelope of what's expected in leadership communication and personal development.
              </p>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="bg-gradient-to-r from-royal-blue to-vivid-azure p-8 md:p-12 rounded-3xl text-white mb-16">
            <h3 className="text-2xl font-black mb-6 tracking-wide">CREATIVE PLATFORMS</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Multimedia Content Creation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Digital Experience Design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Immersive Learning Platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Innovative Brand Experiences</span>
              </li>
            </ul>
          </div>

          {/* Detailed Creative Initiatives */}
          <div className="mb-16">
            <h3 className="text-2xl font-black text-ink-black mb-8 tracking-wide">IDEAS TRAVEL FURTHER WHEN EXPRESSED CREATIVELY</h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              In a world where attention is constantly divided, creativity becomes one of the most powerful tools for communicating ideas that matter.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Baz embraces creativity as a vital part of his work — using media, storytelling, and digital platforms to translate deep ideas about personal growth, leadership, and mindset into conversations that resonate with everyday life.
            </p>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8">
              <h4 className="text-xl font-bold text-ink-black mb-4 tracking-widest">THE THRIVE</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                <em>The Thrive</em> is a platform for thoughtful conversations about growth, mindset, leadership, and the pursuit of a meaningful life.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Each episode explores ideas and experiences that challenge listeners to think more deeply about their lives and how they can live with greater intentionality.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8">
              <h4 className="text-xl font-bold text-ink-black mb-4 tracking-widest">THRIVE WITH BAZ</h4>
              <p className="text-gray-600 leading-relaxed">
                In addition to the podcast, Baz hosts <em>"Thrive with Baz,"</em> a monthly mentorship gathering held every first Saturday. These sessions create a space for individuals seeking practical guidance, honest conversations, and intellectual growth within a supportive learning environment.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8">
              <h4 className="text-xl font-bold text-ink-black mb-4 tracking-widest">THE PINNACLE CIRCLE</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                For those seeking deeper engagement, <em>The Pinnacle Circle</em> is an annual mentoring community designed for individuals committed to disciplined growth, leadership development, and meaningful contribution to society.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through these creative platforms, Baz continues to do what has always been central to his work: translate ideas into experiences that inspire people to grow, lead, and thrive.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-black text-ink-black mb-6 tracking-wide">COLLABORATE ON CREATIVE PROJECTS</h3>
            <Link 
              to="/book-keynote"
              className="inline-block bg-gradient-to-r from-royal-blue to-vivid-azure text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Creative;
