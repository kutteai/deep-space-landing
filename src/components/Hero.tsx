import { Button } from "@/components/ui/button";
import heroRobot from "@/assets/hero-robot.png";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-primary">Earn</span> Daily<br />
              with Decentralized<br />
              Trading Bots
            </h1>
            <p className="text-xl text-muted-foreground">
              Trustless algorithmic trading powered by smart contracts.<br />
              Your keys, your profits
            </p>
            <Button size="lg" className="bg-gradient-primary shadow-glow">
              Get Started
            </Button>
          </div>
          
          <div className="relative h-[900px] flex items-center justify-center">
            <img 
              src={heroRobot} 
              alt="AI Trading Bot with Stock Exchange Chart - Decentralized Trading Platform" 
              className="w-full h-full object-contain animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
