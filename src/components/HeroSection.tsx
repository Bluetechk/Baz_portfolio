import { useState, useEffect } from "react";
import heroImg from "@/assets/sales-mastery.jpg";


const achievements = [
  "INTERNATIONAL SERVICE AWARD",
  "VOLUNTEER OF THE YEAR 2024",
  "KEYNOTES SPEAKER",
  "TRAINER AND MENTOR",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isTyping) {
        setIsTyping(false);
      } else {
        setCurrentIndex((prev) => (prev + 1) % achievements.length);
        setIsTyping(true);
      }
    }, isTyping ? 3000 : 900);

    return () => clearTimeout(timeout);
  }, [isTyping, achievements.length]);

  return (
    <section className="relative min-h-screen flex items-start justify-center text-center pb-10 bg-ink-black">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Baz speaking on stage"
        className="absolute inset-0 w-full h-full object-cover"
      />

      
      {/* Premium dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-navy/80 to-transparent" />
      

      <div className="relative z-10 container px-4 max-w-4xl mt-24">
        <div className="text-center">
            <h2 className="font-script text-4xl md:text-6xl lg:text-7xl text-foreground mb-4 drop-shadow-lg">
              Baz Emmanuel Barzon
            </h2>
            <p className="text-xs md:text-sm tracking-[0.3em] text-aqua-blue font-bold uppercase mb-12">
              SPEAKER &nbsp;|&nbsp; Trainer &nbsp;|&nbsp; LEADER
            </p>
          </div>
            
          {/* Smooth Flowing Animation */}
          <div className="h-16 md:h-20 flex items-center justify-center mb-8 w-full">
            <div className="inline-flex relative justify-center">
              <div 
                className="overflow-hidden whitespace-nowrap border-r-[3px] border-vivid-azure"
                style={{
                  maxWidth: isTyping ? '1200px' : '0px',
                  transition: `max-width ${isTyping ? '1.8s' : '0.8s'} ease-in-out`
                }}
              >
                <h1 className="text-[17px] sm:text-2xl md:text-4xl lg:text-5xl font-display font-black text-gradient tracking-wide drop-shadow-md pr-2">
                  {achievements[currentIndex]}
                </h1>
              </div>
            </div>
          </div>
          <p className="text-foreground/90 text-sm md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed font-body">
           A public voice exploring the discipline of personal growth, the power of mindset, and the responsibility of leadership.
            Through speaking, writing, mentorship, and creative platforms, Baz challenges individuals to cultivate awareness, develop courage, and pursue a life of intentional
            {" "}
            <span className="text-aqua-blue italic font-bold">growth.</span>
          </p>
          <a
            href="/book-keynote"
            className="relative inline-flex items-center justify-center overflow-hidden bg-gradient-accent text-ink-black rounded-full px-12 py-5 text-sm md:text-[15px] tracking-[0.25em] font-black hover:scale-105 hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] transition-all duration-300 group"
          >
            <div className="absolute inset-[-150%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#1a1a1a_25%,transparent_50%,#1a1a1a_75%,#ffffff_100%)] opacity-80" style={{ animationDuration: '4s' }} />
            <div className="absolute inset-[2px] bg-gradient-accent rounded-full z-0" />
            <span className="relative z-10 flex items-center gap-2">
              BOOK A KEYNOTE
            </span>
          </a>

        {/* Logos strip */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
          {["Elev8", "Innov8 Africa", "Thrive", "Pinnacle Circle", "Levelup",].map((name) => (
            <span key={name} className="text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground font-bold">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
