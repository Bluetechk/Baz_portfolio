import heroImg from "@/assets/hero-speaker.jpg";
import pstImg from "@/assets/pstJC_Mulbah.jpeg";
import shekuImg from "@/assets/shekuSKamara.jpeg";
import emmanuelImg from "@/assets/Emmanuel Cisco.jpeg";
import andrewImg from "@/assets/Andrew_Nuch_Kenyor.PNG";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "A visionary young leader whose passion for excellence and innovation consistently stands out.",
    hoverText: "A dedicated leader with strong character. From Harvest Intercontinental Radio to university president, he is dependable, creative, and deeply committed to growth and meaningful impact.",
    name: "PST. JC MULBAH",
    title: "Manager — Harvest Intercontinental Radio 103.5FM",
    image: pstImg,
  },
  {
    quote: "A rare combination of a visionary and a humble leader with exceptional character and unwavering integrity.",
    hoverText: "An upright, modest gentleman who deeply understands the importance of boundaries. As a leader, he doesn't just command; he partners. A quintessential team player and an asset to any team.",
    name: "SHEKU S. KAMARA (Dcn.)",
    title: "Founder/Creative Director, Dynamic Audiovisual",
    image: shekuImg,
  },
  {
    quote: "I don't just see a young leader, I see the future of Liberia taking shape in real time.",
    hoverText: "A fast learner, deeply intentional, and driven by a purpose far greater than himself. He’s not waiting for change, he is gradually becoming the kind of change he wants to see.",
    name: "EMMANUEL CISCO",
    title: "Author and Motivational Speaker",
    image: emmanuelImg,
  },
  {
    quote: "Someone who taps into the minds of readers, leaders, and people driven by curiosity and the courage to make moves.",
    hoverText: "He has remained a gifted servant of humanity; committed to impacting mankind with purpose and intention.",
    name: "ANDREW NUCH KENYOR",
    title: "The Baby Step Man",
    image: andrewImg,
  },
  {
    quote: "Baz is a remarkable speaker. Deeply authentic. Don't be deceived, a truly gifted minister!",
    name: "BISHOP TD JAKES",
    title: "Bishop, Author and Filmmaker",
    image: heroImg,
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section 
      ref={ref}
      className={`py-24 bg-white transition-all duration-1000 overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-display font-black text-center text-ink-black mb-16 tracking-wide">
          WHAT PEOPLE SAY ABOUT BAZ
        </h2>

        <div className="flex w-full overflow-hidden group">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="w-[300px] md:w-[400px] px-4 shrink-0"
              >
                <div className="bg-gray-50 h-full group/card border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent p-4 pt-20 transition-opacity duration-500 group-hover/card:opacity-0">
                      <p className="text-ink-black text-sm md:text-base leading-relaxed italic font-medium drop-shadow-md">
                        "{t.quote}"
                      </p>
                    </div>
                    {/* Hover Overlay */}
                    {(t as any).hoverText && (
                      <div className="absolute inset-0 bg-ink-black/80 backdrop-blur-sm flex items-center justify-center p-6 translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-in-out">
                        <p className="text-white text-sm md:text-base leading-relaxed text-center font-medium">
                          "{(t as any).hoverText}"
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-sm tracking-widest text-royal-blue font-bold">
                      {t.name}
                    </p>
                    <p className="text-[10px] text-gray-500 mt-1 leading-relaxed">
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
