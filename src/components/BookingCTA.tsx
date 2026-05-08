import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BookingCTA = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section 
      ref={ref}
      className={`py-24 bg-white text-center transition-all duration-1000 relative overflow-hidden shadow-sm ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container px-4 max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-display font-black text-ink-black mb-4 leading-snug">
          The only thing more expensive than hiring Baz is.
        </h2>
        <p className="text-royal-blue text-xl md:text-2xl font-display font-bold mb-8">
          the opportunity you miss by not hiring him.
        </p>
        <p className="text-gray-600 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Move Beyond memorable. Go legendary. Some events just shift a perspective. yours can shift an entire industry. the question is: which event are you planning?
        </p>
        <Link
          to="/about"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest font-bold rounded-full hover:bg-royal-blue transition-colors"
        >
          LEARN MORE
        </Link>
      </div>
    </section>
  );
};

export default BookingCTA;
