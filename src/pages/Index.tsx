import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyPlatform from "@/components/WhyPlatform";
import MarketUpdate from "@/components/MarketUpdate";
import BotMarketplace from "@/components/BotMarketplace";
import SafeReliable from "@/components/SafeReliable";
import Testimonials from "@/components/Testimonials";
import TradeAnywhere from "@/components/TradeAnywhere";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyPlatform />
        <MarketUpdate />
        <BotMarketplace />
        <SafeReliable />
        <Testimonials />
        <TradeAnywhere />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
