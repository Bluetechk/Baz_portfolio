import heroImg from "@/assets/hero-speaker.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "Baz is the rockstar of public speaking.",
    name: "JOHN HOWARD",
    title: "Former Prime Minister of Australia",
    image: heroImg,
  },
  {
    quote: "Baz is a great speaker!",
    name: "SIR BOB GELDOF",
    title: "Singer, Songwriter, Author and Political Activist",
    image: heroImg,
  },
  {
    quote: "Baz is a student of the soul. His perspective for asking questions that matter is what makes him great.",
    name: "SADHGURU",
    title: "Indian Yoga Guru and Author",
    image: heroImg,
  },
  {
    quote: "I have scored with the best speakers and thinkers from all over the world. This guy is top tier. No debate.",
    name: "TOM BILYEU",
    title: "Co-Founder of Quest Nutrition & Impact Theory",
    image: heroImg,
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
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent p-4 pt-20">
                      <p className="text-ink-black text-sm md:text-base leading-relaxed italic font-medium drop-shadow-md">
                        "{t.quote}"
                      </p>
                    </div>
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
