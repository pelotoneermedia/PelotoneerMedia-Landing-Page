import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionStrip from "@/components/MissionStrip";
import FeaturedContent from "@/components/FeaturedContent";
import PhilosophySection from "@/components/PhilosophySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <MissionStrip />
        <FeaturedContent />
        <PhilosophySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
