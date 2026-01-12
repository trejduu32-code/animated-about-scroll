import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import TimelineSection from "@/components/TimelineSection";
import PartnersSection from "@/components/PartnersSection";
import PlatformsSection from "@/components/PlatformsSection";
import SecuritySection from "@/components/SecuritySection";
import IntegrationsSection from "@/components/IntegrationsSection";
import UseCasesSection from "@/components/UseCasesSection";
import AchievementsSection from "@/components/AchievementsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <PlatformsSection />
      <TestimonialsSection />
      <SecuritySection />
      <UseCasesSection />
      <IntegrationsSection />
      <TimelineSection />
      <AchievementsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;