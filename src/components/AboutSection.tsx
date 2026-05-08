import { useScrollReveal } from "@/hooks/useScrollReveal";
import speakerImg from "@/assets/Bazpro2.jpeg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section 
      ref={ref}
      id="about" 
      className={`py-25 bg-gradient-premium transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container px-4">
        <h2 className="text-3xl md:text-5xl font-display font-black text-center text-gradient mb-16 tracking-wide drop-shadow-md"><br />
          A DISRUPTIVE THINKER
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative glass-card p-2 md:p-4 rounded-2xl">
            <img
              src={speakerImg}
              alt="BAZ speaking on stage"
              className="w-full aspect-[3/4] object-cover image-frame-premium shadow-2xl"
            />
          </div>

          <div className="space-y-6 text-foreground/90 leading-relaxed text-sm md:text-base glass-card p-6 md:p-10 rounded-2xl shadow-xl border-l-4 border-l-vivid-azure">
            <p>
              What truly changes a life? <br />
              Is it opportunity? <br />
              Is it talent? <br />
              Is it luck? <br />
              Or is it something far more fundamental

            </p>
            
            <p>
             Most people believe transformation begins with resources — more money, more connections, more opportunities.
            But history tells a different story.
            Every meaningful change in a person’s life begins with awareness.
            The awareness that your current thinking is limiting your future.
            The awareness that your environment does not have to define your destiny.
            The awareness that the person you are becoming is still within your control.
            Growth begins the moment a person becomes conscious of their potential.
            That moment is where mindset shifts.
            That moment is where courage begins.
            That moment is where leadership is born.

            </p>

            <p className="text-foreground font-semibold text-lg mt-8">
              Here's what separates Baz from every other suit with a microphone:
            </p>
            <p>
              Every generation is ultimately defined by the voices that challenge its assumptions, confront its fears, and awaken its sense of possibility. <br />...Baz got it.
            </p>
            <p>
              His work in the public space centers on a single conviction: that societies change when individuals begin to think differently about who they are and what they can become.
              Through media platforms, conversations, and public engagement, Baz speaks to the deeper questions of identity, responsibility, leadership, and personal growth — especially among young people navigating the complexities of the modern world.
            </p>
            <p>
              Today, Baz continues to use media, public platforms, and digital spaces to advance conversations around mindset, growth, character, and leadership.
              Because in a world full of noise, the voices that matter most are those that help people see themselves and their future more clearly.

            </p>
          </div>
        </div>
      </div>
    </section>
   
  );
};

export default AboutSection;
