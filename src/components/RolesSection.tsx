import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import heroImg from "@/assets/BazTeacher.png";
import CreatorImg from "@/assets/Enterpreneur1.png";
import InterpImg from "@/assets/baz4.jpeg";
import AuthImg from "@/assets/Bazthinker.png";
import PublicImg from "@/assets/BAZ_publicvoice.jpeg";
import LeaderImg from "@/assets/baz9.jpeg";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const roles = [
  { 
    title: "PUBLIC VOICE", 
    image: PublicImg,
    description: "A thought leader whose voice shapes conversations on business, leadership, and personal transformation across continents and industries.",
    path: "/roles/public-voice"
  },
  { 
    title: "SPEAKER & TEACHER", 
    image: heroImg,
    description: "A dynamic presenter who captivates audiences with insights that challenge conventional wisdom and inspire action in over 40 countries.",
    path: "/roles/speaker-teacher"
  },
  { 
    title: "THINKER & WRITER", 
    image: AuthImg,
    description: "A best-selling writer who distills complex business concepts and life philosophies into compelling narratives that resonate globally.",
    path: "/roles/thinker-writer"
  },
  { 
    title: "ENTERPRENEUR & BUILDER", 
    image: InterpImg,
    description: "A venture capitalist and strategic investor who identifies opportunities and builds ventures with exponential impact potential.",
    path: "/roles/entrepreneur-builder"
  },
  { 
    title: "LEADER & SERVENT", 
    image: LeaderImg,
    description: "A visionary leader who builds high-performing teams and organizations by cultivating cultures of growth, accountability, and excellence.",
    path: "/roles/leader-servant"
  },
  { 
    title: "CREATIVE", 
    image: CreatorImg,
    description: "An innovator who creates content, ideas, and experiences that push boundaries and redefine what's possible in modern leadership.",
    path: "/roles/creative"
  },
];

const RolesSection = () => {
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollReveal();

  const handleRoleClick = (path: string) => {
    navigate(path);
  };

  return (
    <section 
      ref={ref}
      className={`bg-gradient-premium py-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-full px-4 md:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-0 md:-ml-4">
            {roles.map((role) => (
              <CarouselItem
                key={role.title}
                className="pl-0 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="flex flex-col">
                  {/* Title */}
                  <div className="text-center py-4">
                    <h3 className="text-[10px] md:text-xs tracking-widest font-bold text-foreground">
                      {role.title}
                    </h3>
                  </div>

                  {/* Image */}
                  <div className="glass-card rounded-2xl p-2 md:p-3 mx-2">
                    <div
                      className="group relative overflow-hidden aspect-square cursor-pointer rounded-xl image-frame-premium"
                    onMouseEnter={() => setHoveredRole(role.title)}
                    onMouseLeave={() => setHoveredRole(null)}
                    onClick={() => handleRoleClick(role.path)}
                  >
                    <img
                      src={role.image}
                      alt={role.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Hover overlay with description */}
                    {hoveredRole === role.title && (
                      <div className="absolute inset-0 bg-background/70 flex flex-col items-center justify-center p-4 transition-opacity duration-500 animate-in fade-in">
                        <p className="text-xs md:text-sm text-foreground text-center leading-relaxed">
                          {role.description}
                        </p>
                        <p className="text-xs md:text-sm text-aqua-blue mt-4 font-bold tracking-widest hover:text-white transition-colors">
                          READ MORE
                        </p>
                      </div>
                    )}
                  </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default RolesSection;
