import { useScrollReveal } from "@/hooks/useScrollReveal";

const pressLogos = [
 ,
];

const brandNames = [
  
];

const PressRoom = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section 
      ref={ref}
      id="press" 
      className={`py-8 bg-glossy-dark border-t border-b border-aqua-blue/10 transition-all duration-1000 relative overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container px-4">
        <div className="flex items-center gap-8 md:gap-12 overflow-x-auto scrollbar-hide">
          <span className="text-[10px] tracking-[0.2em] text-muted-foreground font-bold whitespace-nowrap border-r border-border pr-8">
           
          </span>
          {brandNames.map((name) => (
            <span
              key={name}
              className="text-xs md:text-sm tracking-widest text-muted-foreground font-semibold whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressRoom;
