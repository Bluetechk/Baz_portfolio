import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeaderImg from "@/assets/baz9.jpeg";

const LeaderServant = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src={LeaderImg} 
          alt="Leader & Servant" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-royal-blue/60 to-transparent flex items-end">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8 ml-6 md:ml-12 pb-12 tracking-wide">
            LEADER & SERVANT
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        <div className="container px-4 py-16">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-ink-black mb-4 tracking-wide">
              CULTIVATING EXCELLENCE & ACCOUNTABILITY
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A visionary leader who builds high-performing teams and organizations by cultivating cultures of growth, accountability, and excellence.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-xl font-bold text-ink-black mb-4 tracking-widest">LEADERSHIP APPROACH</h3>
              <p className="text-gray-600 leading-relaxed">
                Baz believes leadership is fundamentally about service—creating environments where people can achieve their full potential. His approach combines visionary thinking with hands-on engagement, ensuring strategic direction translates into organizational reality.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-xl font-bold text-ink-black mb-4 tracking-widest">CULTURE BUILDING</h3>
              <p className="text-gray-600 leading-relaxed">
                Through mentorship and example, Baz demonstrates that sustainable success comes from building trust-based cultures where accountability is embraced and excellence becomes the standard. His organizations become breeding grounds for future leaders.
              </p>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="bg-gradient-to-r from-royal-blue to-vivid-azure p-8 md:p-12 rounded-3xl text-white mb-16">
            <h3 className="text-2xl font-black mb-6 tracking-wide">LEADERSHIP PRINCIPLES</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Visionary Strategic Direction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>People-Centric Development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Authentic Accountability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Continuous Organizational Evolution</span>
              </li>
            </ul>
          </div>

          {/* Detailed Leadership Philosophy */}
          <div className="mb-16">
            <h3 className="text-2xl font-black text-ink-black mb-8 tracking-wide">LEADERSHIP IS OFTEN MISUNDERSTOOD</h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Many assume it is defined by titles, positions, or authority. But the most enduring forms of leadership rarely begin with power. They begin with influence, example, and service.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Baz approaches leadership as a responsibility to contribute meaningfully to the lives of others and to the progress of the communities he is part of.
            </p>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8">
              <p className="text-gray-600 leading-relaxed mb-4">
                His philosophy of leadership is rooted in a simple but demanding idea: that true leadership is measured not by the positions you hold, but by <strong>how many people grow because of your influence.</strong>
              </p>
              <p className="text-gray-600 leading-relaxed">
                This perspective shapes the way he engages with young people, emerging leaders, and communities seeking direction.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Through mentorship, public engagement, and community initiatives, Baz encourages individuals to see leadership as a discipline that begins with personal disciplines: integrity, and the willingness to serve.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <p className="text-gray-600 leading-relaxed mb-4">
                Because leadership, at its core, is not about standing above others.
              </p>
              <p className="text-gray-600 leading-relaxed font-bold text-ink-black">
                It is about standing <em>for</em> something that lifts others higher.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-black text-ink-black mb-6 tracking-wide">TRANSFORM YOUR ORGANIZATION</h3>
            <Link 
              to="/book-keynote"
              className="inline-block bg-gradient-to-r from-royal-blue to-vivid-azure text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              EXPLORE CONSULTING
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LeaderServant;
