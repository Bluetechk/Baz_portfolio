import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import speakerImg from "@/assets/Bazpro2.jpeg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="container">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ink-black mb-8">About Baz</h1>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <p className="text-gray-600 leading-relaxed mb-6">
                Baz Emmanuel Barzon is one of the most sought-after speakers on the global circuit. Known as the "Rockstar of Public Speaking," he has delivered keynotes in over 40 countries, spoken to audiences exceeding 500,000 people, and continues to redefine what it means to lead in the modern era.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                A venture capitalist, best-selling author, and serial entrepreneur, Baz's insights bridge the gap between boardroom strategy and real-world execution.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                His ability to distil complex business concepts into actionable insights has made him a trusted advisor to Fortune 500 companies and ambitious startups alike.
              </p>
              <div className="bg-gradient-to-br from-royal-blue to-vivid-azure shadow-2xl rounded-3xl p-8 md:p-10 transform hover:-translate-y-2 transition-transform duration-500">
                <h2 className="font-display text-2xl font-black text-white mb-6 tracking-wide drop-shadow-sm">KEY ACHIEVEMENTS</h2>
                <ul className="space-y-5 text-white/90 font-medium">
                  <li className="flex items-center gap-4"><span className="text-yellow-300 font-black text-xl">•</span> Keynotes in 40+ countries</li>
                  <li className="flex items-center gap-4"><span className="text-yellow-300 font-black text-xl">•</span> 500,000+ audience members</li>
                  <li className="flex items-center gap-4"><span className="text-yellow-300 font-black text-xl">•</span> Best-selling author</li>
                  <li className="flex items-center gap-4"><span className="text-yellow-300 font-black text-xl">•</span> Venture capitalist & investor</li>
                  <li className="flex items-center gap-4"><span className="text-yellow-300 font-black text-xl">•</span> Serial entrepreneur</li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={speakerImg} 
                alt="Baz Emmanuel Barzon" 
                className="w-full aspect-[3/4] object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-ink-black mb-4 tracking-wide">
              WHAT PEOPLE SAY ABOUT BAZ
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Influence is often best understood through the experiences of those who encounter it. Over the years, Baz has engaged with students, emerging leaders, professionals, and communities seeking clarity, growth, and direction. For many, these encounters have sparked conversations, challenged assumptions, and opened new perspectives on leadership and personal development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl p-8 md:p-10 border-l-4 border-vivid-azure flex flex-col justify-between group">
              <div>
                <h3 className="text-xl font-black text-ink-black mb-4 tracking-wide leading-snug group-hover:text-royal-blue transition-colors">A VOICE THAT CHALLENGES YOU TO THINK</h3>
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "Baz has a rare ability to challenge the way people think without dismissing where they are. His ideas provoke reflection and inspire action."
                </p>
              </div>
              <p className="text-sm font-black tracking-widest text-royal-blue uppercase">— Community Leader</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl p-8 md:p-10 border-l-4 border-royal-blue flex flex-col justify-between group">
              <div>
                <h3 className="text-xl font-black text-ink-black mb-4 tracking-wide leading-snug group-hover:text-royal-blue transition-colors">MORE THAN MOTIVATION</h3>
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "What makes Baz different is that he doesn't just motivate people — he teaches them how to think differently about their lives and their future."
                </p>
              </div>
              <p className="text-sm font-black tracking-widest text-royal-blue uppercase">— Youth Development Advocate</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl p-8 md:p-10 border-l-4 border-vivid-azure flex flex-col justify-between group">
              <div>
                <h3 className="text-xl font-black text-ink-black mb-4 tracking-wide leading-snug group-hover:text-royal-blue transition-colors">A MENTOR WHO INVESTS IN PEOPLE</h3>
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "My interactions with Baz helped me realize that growth is not accidental. It requires intentional decision-making and the courage to confront your limitations."
                </p>
              </div>
              <p className="text-sm font-black tracking-widest text-royal-blue uppercase">— Young Professional</p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl p-8 md:p-10 border-l-4 border-royal-blue flex flex-col justify-between group">
              <div>
                <h3 className="text-xl font-black text-ink-black mb-4 tracking-wide leading-snug group-hover:text-royal-blue transition-colors">LEADERSHIP WITH PURPOSE</h3>
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "Baz speaks about leadership in a way that emphasizes responsibility and service. His perspective is refreshing and deeply needed among young leaders today."
                </p>
              </div>
              <p className="text-sm font-black tracking-widest text-royal-blue uppercase">— Education Professional</p>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl p-8 md:p-10 border-l-4 border-vivid-azure flex flex-col justify-between md:col-span-2 group">
              <div>
                <h3 className="text-xl font-black text-ink-black mb-4 tracking-wide leading-snug group-hover:text-royal-blue transition-colors">A BUILDER OF PEOPLE</h3>
                <p className="text-gray-600 italic mb-6 leading-relaxed max-w-3xl">
                  "Through mentorship and conversations, Baz creates spaces where young people feel challenged to go deeper and develop character."
                </p>
              </div>
              <p className="text-sm font-black tracking-widest text-royal-blue uppercase">— Former Mentee</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
