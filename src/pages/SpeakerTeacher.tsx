import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/BazTeacher.png";

const SpeakerTeacher = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src={heroImg} 
          alt="Speaker & Teacher" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-royal-blue/60 to-transparent flex items-end">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8 ml-6 md:ml-12 pb-12 tracking-wide">
            SPEAKER & TEACHER
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        <div className="container px-4 py-16">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-ink-black mb-4 tracking-wide">
              FROM INSPIRATION TO TRANSFORMATION
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A speaker and teacher whose work transcends inspiration to focus on clarity, structure, and transformation.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-xl font-bold text-ink-black mb-4 tracking-widest">SPEAKING FRAMEWORK</h3>
              <p className="text-gray-600 leading-relaxed">
                Baz belongs to a growing class of speakers whose work goes beyond inspiration to focus on clarity, structure, and transformation. His approach to speaking and teaching is grounded in a simple belief: knowledge becomes actionable when it challenges individuals to examine their beliefs and their responsibility to the world around them.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-xl font-bold text-ink-black mb-4 tracking-widest">TEACHING PHILOSOPHY</h3>
              <p className="text-gray-600 leading-relaxed">
                As a teacher, Baz believes that knowledge must never remain abstract. Every insight must eventually become a habit, a decision, or a system that shapes the way a person lives and leads.
              </p>
            </div>
          </div>

          {/* Detailed Philosophy Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-black text-ink-black mb-8 tracking-wide">SOME IDEAS INSPIRE. OTHERS TRANSFORM.</h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Some ideas inspire. Others transform the way people think.
            </p>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Baz speaks on themes at the intersection of personal growth and community leadership—addressing professionals, young people, and community leaders on the disciplines and mindset development needed to navigate complexity with clarity and purpose.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8">
              <p className="text-gray-600 leading-relaxed">
                His sessions are not built around motivational impact. They are built around <strong>frameworks for thinking</strong>—ideas that challenge individuals to examine their assumptions, strengthen their discipline, and pursue a more intentional life.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Over the years, he has taught and facilitated conversations in classrooms, leadership gatherings, media platforms, and mentorship communities, helping individuals translate big ideas into practical action.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8">
              <p className="text-gray-600 leading-relaxed mb-4">
                Because the purpose of learning is not simply to know more.
              </p>
              <p className="text-gray-600 leading-relaxed font-bold text-ink-black">
                It is to become more.
              </p>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="bg-gradient-to-r from-royal-blue to-vivid-azure p-8 md:p-12 rounded-3xl text-white mb-16">
            <h3 className="text-2xl font-black mb-6 tracking-wide">AREAS OF FOCUS</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Personal Growth & Mindset Development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Leadership, Discipline & Purpose</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Frameworks for Intentional Living</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Community & Organizational Transformation</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-black text-ink-black mb-6 tracking-wide">BOOK A SPEAKING ENGAGEMENT</h3>
            <Link 
              to="/book-keynote"
              className="inline-block bg-gradient-to-r from-royal-blue to-vivid-azure text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              REQUEST SPEAKER
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SpeakerTeacher;
