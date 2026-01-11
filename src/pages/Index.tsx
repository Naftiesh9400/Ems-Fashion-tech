import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyFashionTech from "@/components/WhyFashionTech";
import ProgramsSection from "@/components/ProgramsSection";
import MentorsSection from "@/components/MentorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyFashionTech />
      <ProgramsSection />
      <section id="mentors">
        <MentorsSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <DifferentiatorsSection />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
