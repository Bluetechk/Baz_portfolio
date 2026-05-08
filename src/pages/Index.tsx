import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BookingCTA from "@/components/BookingCTA";
import RolesSection from "@/components/RolesSection";
import PressRoom from "@/components/PressRoom";
import TestimonialsSection from "@/components/TestimonialsSection";
import SalesMasterySection from "@/components/SalesMasterySection";
import Footer from "@/components/Footer";
import TruthAbout from "@/components/TruthAbout";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TruthAbout />
      <BookingCTA />
      <RolesSection />
      <PressRoom />
      <TestimonialsSection />
      <SalesMasterySection />
      <Footer />
    </div>
  );
};

export default Index;
