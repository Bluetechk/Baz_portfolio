import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InterpImg from "@/assets/baz4.jpeg";

const EntrepreneurBuilder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src={InterpImg} 
          alt="Entrepreneur & Builder" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-royal-blue/60 to-transparent flex items-end">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8 ml-6 md:ml-12 pb-12 tracking-wide">
            ENTREPRENEUR & BUILDER
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        <div className="container px-4 py-16">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-ink-black mb-4 tracking-wide">
              IDENTIFYING EXPONENTIAL OPPORTUNITIES
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A venture capitalist and strategic investor who identifies opportunities and builds ventures with exponential impact potential.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-xl font-bold text-ink-black mb-4 tracking-widest">INVESTMENT PHILOSOPHY</h3>
              <p className="text-gray-600 leading-relaxed">
                Baz looks beyond traditional metrics to identify ventures with transformational potential. His investment approach combines rigorous analysis with strategic vision, focusing on businesses that create meaningful value in emerging markets and disruptive sectors.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-xl font-bold text-ink-black mb-4 tracking-widest">VENTURE BUILDING</h3>
              <p className="text-gray-600 leading-relaxed">
                From ideation to scale, Baz brings deep operational experience and strategic guidance to portfolio companies. His involvement extends beyond capital to mentorship, network access, and strategic problem-solving for exponential growth.
              </p>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="bg-gradient-to-r from-royal-blue to-vivid-azure p-8 md:p-12 rounded-3xl text-white mb-16">
            <h3 className="text-2xl font-black mb-6 tracking-wide">INVESTMENT FOCUS AREAS</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Technology & Innovation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Emerging Market Opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Sustainable Business Models</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold mt-1">•</span>
                <span>Leadership Development Platforms</span>
              </li>
            </ul>
          </div>

          {/* Detailed Entrepreneurial Philosophy */}
          <div className="mb-16">
            <h3 className="text-2xl font-black text-ink-black mb-8 tracking-wide">IDEAS ARE POWERFUL</h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              But ideas that are never built into structures rarely change the world.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Baz approaches entrepreneurship not merely as the pursuit of profit, but as the discipline of <strong>building platforms that create opportunity, develop people, and solve real problems within society.</strong>
            </p>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8">
              <p className="text-gray-600 leading-relaxed mb-4">
                At the center of his work is a deep belief that progress happens when individuals move beyond dismissing possibilities and begin constructing systems that make those possibilities accessible to others.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This conviction has led him to develop and support initiatives that sit at the intersection of education, leadership development, creativity, and enterprise.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8">
              <p className="text-gray-600 leading-relaxed">
                As an entrepreneur, Baz is particularly interested in building institutions that empower young people with practical knowledge, relevant skills, and the mindset required to navigate an increasingly complex world.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8">
              <p className="text-gray-600 leading-relaxed">
                His work as a builder reflects a broader philosophy: that meaningful leadership is not only expressed through ideas and influence, but also through the courage to create structures that evolve the individual who started them.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <p className="text-gray-600 leading-relaxed mb-4">
                Because in the end, the enduring impact is not measured by what a person says, but by <strong>what they build and what continues to grow because they chose to build it.</strong>
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-black text-ink-black mb-6 tracking-wide">EXPLORE INVESTMENT OPPORTUNITIES</h3>
            <Link 
              to="/book-keynote"
              className="inline-block bg-gradient-to-r from-royal-blue to-vivid-azure text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              CONNECT WITH TEAM
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EntrepreneurBuilder;
