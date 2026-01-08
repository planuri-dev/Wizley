import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { WhyWizleySection } from "@/components/WhyWizleySection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background" data-testid="landing-page">
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        <WhyWizleySection />
        <PortfolioSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}
