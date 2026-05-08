import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PublicImg from "@/assets/BAZ_publicvoice.jpeg";

const PublicVoice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src={PublicImg} 
          alt="Public Voice" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-royal-blue/60 to-transparent flex items-end">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8 ml-6 md:ml-12 pb-12 tracking-wide">
            PUBLIC VOICE
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        <div className="container px-4 py-16">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-ink-black mb-4 tracking-wide">
              CHALLENGING ASSUMPTIONS & SHAPING PERSPECTIVES
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A public voice contributing to conversations that shape how people understand themselves and what they can become.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-xl font-bold text-ink-black mb-4 tracking-widest">VOICE FOR CHANGE</h3>
              <p className="text-gray-600 leading-relaxed">
                Through media platforms, conversations, and public engagement, Baz speaks to the deeper questions of identity, personal growth, leadership, and possibility—especially among young people navigating the complexities of the modern world.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-xl font-bold text-ink-black mb-4 tracking-widest">EXPANDING CONVERSATIONS</h3>
              <p className="text-gray-600 leading-relaxed">
                His work continues to evolve across digital platforms, traditional media, and public forums—creating spaces where individuals can think differently about who they are and what they can become.
              </p>
            </div>
          </div>

          {/* Detailed Philosophy Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-black text-ink-black mb-8 tracking-wide">IDEAS SHAPE THE FUTURE LONG BEFORE INSTITUTIONS DO</h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Every generation is ultimately defined by the voices that challenge its assumptions, confront its fears, and awaken its sense of possibility.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Baz is emerging as one of those voices.
            </p>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8">
              <p className="text-gray-600 leading-relaxed mb-4">
                His work in the public space centers on a single conviction: that societies change when individuals begin to think differently about who they are and what they can become.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through media platforms, conversations, and public engagement, Baz speaks to the deeper questions of identity and personal growth—especially among young people navigating the complexities of the modern world.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8">
              <h4 className="text-lg font-bold text-ink-black mb-3">BROADCAST LEGACY</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                His journey in public communication includes hosting <em>"For Boys Only"</em> on Harvest Intercontinental Radio for two years—a program dedicated to helping young men grow into their potential.
              </p>
              <p className="text-gray-600 leading-relaxed">
                He later served as a guest host on TAMTA TV and led discussions on <em>"Men Only,"</em> exploring the many dimensions of manhood, responsibility, and social expectations. During this period, each decision was designed to challenge views and approach each day with intentional purpose and disciplined thinking.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Today, Baz continues to use media, public platforms, and digital spaces to advance conversations around mindset, growth, and leadership.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <p className="text-gray-600 leading-relaxed mb-4">
                Because in a world full of noise, the voices that matter most are those that help people see themselves—and their future—clearly.
              </p>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="bg-gradient-to-r from-royal-blue to-vivid-azure p-8 md:p-12 rounded-3xl text-white mb-16">
            <h3 className="text-2xl font-black mb-6 tracking-wide">SPEAKING PLATFORMS</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Radio & Broadcast Programming</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Media & Digital Engagement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Public Speaking Events</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Conversations on Identity & Growth</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-black text-ink-black mb-6 tracking-wide">ENGAGE WITH THIS VOICE</h3>
            <Link 
              to="/book-keynote"
              className="inline-block bg-gradient-to-r from-royal-blue to-vivid-azure text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              BOOK SPEAKING ENGAGEMENT
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PublicVoice;
