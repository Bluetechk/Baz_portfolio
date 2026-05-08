import { useScrollReveal } from "@/hooks/useScrollReveal";
import speakerImg from "@/assets/Baz_Auth.jpeg";

const TruthAbout = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section 
      ref={ref}
      id="about" 
      className={`py-25 bg-gradient-premium mt-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div className="relative space-y-6 text-foreground/90 leading-relaxed text-base md:text-lg order-2 lg:order-1 px-4 lg:px-8">
                 <div className="absolute -top-16 -left-4 md:-left-8 text-[180px] text-aqua-blue/10 font-serif leading-none select-none" aria-hidden="true">"</div>
                 
                 <div className="relative z-10">
                   <h3 className="text-aqua-blue font-display font-bold text-xl md:text-2xl mb-6 tracking-wide">
                        Here's the uncomfortable truth:
                    </h3>
                    <p>
                       Most people will never become who they are capable of becoming.

                            Not because opportunity never came.
                            Not because the world was unfair.
                            Not because they lacked talent.

                            But because they quietly negotiated with their own potential.

                            They postponed the hard work.
                            They silenced the voice that told them they could do more.
                            They traded discipline for comfort and conviction for approval.

                            And slowly, without announcing it, they settled.
                      </p>
                           
                    <p className="mt-4">
                        The uncomfortable truth is that growth is rarely limited by circumstance.
                            More often, it is limited by the stories people tell themselves about what they cannot do.

                            The tragedy of human potential is not that people dream too big.

                            It is that most people stop dreaming at the exact moment their dreams begin to demand courage.

                            And over time, the life they live becomes smaller than the life they were capable of building.
                    </p>

                    <p className="mt-4">
                        But growth rarely happens alone.

                        It happens in environments where people are challenged, supported, and held accountable to the standards they claim for themselves.

                        
                    </p>
                    <p className="mt-4">
                      So the real question becomes:

                        Do you need a circle of like-minded individuals who will challenge your thinking, hold you accountable to your growth, and provide the resources and encouragement needed to keep moving forward?
                    </p>

                    <p className="mt-8 font-black text-lg md:text-xl text-vivid-azure">
                        If your answer is yes, join the PINNACLE Circle today.
                    </p>
                 </div>
               </div>
                  <div className="relative order-1 lg:order-2 glass-card p-2 md:p-4 rounded-2xl">
            <img
              src={speakerImg}
              alt="BAZ speaking on stage"
              className="w-full aspect-[4/5] object-cover image-frame-premium shadow-2xl"
            />
          </div>
                </div>
          
      </div>
    </section>
  );
};

export default TruthAbout;
