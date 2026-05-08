import { useScrollReveal } from "@/hooks/useScrollReveal";
import salesImg from "@/assets/sales-mastery.jpg";

const SalesMasterySection = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section 
      ref={ref}
      className={`relative py-32 overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <img
        src={salesImg}
        alt="Sales Mastery"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 container px-4 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-2">
          <span className="text-vivid-azure">#</span>An Invitation to 
        </h2>
        <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-6">
          Thrive with Baz
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8 text-sm md:text-base leading-relaxed">
          Every person who has made meaningful progress in life has encountered moments of conversation, guidance, and reflection that helped them see further than they could on their own.
        </p>
        <a
          href="#"
          className="inline-block bg-primary text-primary-foreground rounded-full px-8 py-3 text-xs tracking-widest font-bold hover:bg-royal-blue transition-colors"
        >
          LEARN MORE
        </a>
      </div>
    </section>
  );
};

export default SalesMasterySection;
