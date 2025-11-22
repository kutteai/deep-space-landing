import { Shield, TrendingUp, Eye } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fully Decentralized",
    description: "No middlemen. Trade directly from your wallet with audited smart contracts."
  },
  {
    icon: TrendingUp,
    title: "Two Profit Modes",
    description: "Choose hands-on manual trading or fully passive automated bots"
  },
  {
    icon: Eye,
    title: "Transparent Results",
    description: "Every trade verifiable on-chain. No hidden fees or black boxes."
  }
];

const WhyPlatform = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Our Platform Beats Traditional Trading</h2>
          <p className="text-muted-foreground">Trade Directly, Earn Automatically—All Backed by Blockchain Transparency.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-glow-sm">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow-sm">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyPlatform;
