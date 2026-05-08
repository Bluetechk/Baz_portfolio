import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Biography = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ink-black mb-8">Biography</h1>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>Born and raised in Liberia, Baz Emmanuel Barzon grew up in the. From humble beginnings, he developed an early passion for business and leadership that would shape his extraordinary career.</p>
            <p>By the age of 17, Baz had already begun making waves in the business world. He became one of the youngest directors of a listed company in Liberia, setting the stage for a career defined by breaking barriers.</p>
            <p>Today, Baz is the CEO of MyGrowthFund Venture Partners, a Pan-African venture capital firm focused on investing in high-growth businesses across the continent. His investment philosophy centres on backing entrepreneurs who demonstrate resilience, innovation, and the ability to scale.</p>
            <p>As a speaker, Baz has graced stages at the World Economic Forum, TEDx, and countless corporate events worldwide. His talks blend personal narrative with strategic insight, leaving audiences both inspired and equipped with practical tools for growth.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Biography;
