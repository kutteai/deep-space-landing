import { Button } from "@/components/ui/button";

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
          
          <div className="relative h-96 rounded-2xl bg-gradient-to-br from-card/50 to-secondary/30 border border-primary/20 shadow-glow flex items-center justify-center">
            {/* Space for robot and chart image */}
            <div className="text-center text-muted-foreground">
              <p className="text-sm">Hero Image Space</p>
              <p className="text-xs mt-2">(Robot with trading chart)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
