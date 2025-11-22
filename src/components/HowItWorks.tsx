const steps = [
  {
    number: "1",
    title: "Connect Wallet",
    description: "MetaMask/WalletConnect integration graphic"
  },
  {
    number: "2",
    title: "Choose Strategy",
    description: "Display of 3-5 bot options with performance stats"
  },
  {
    number: "3",
    title: "Set Parameters",
    description: "Simple slider interface for risk tolerance"
  },
  {
    number: "4",
    title: "Earn Passively",
    description: "Growing crypto balance animation"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-2xl bg-gradient-to-br from-card/50 to-secondary/30 border border-primary/20 flex items-center justify-center">
            {/* Space for mobile app mockup */}
            <div className="text-center text-muted-foreground">
              <p className="text-sm">Mobile App Mockup Space</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground">Effortless Crypto Earnings in Four Simple Steps</p>
            </div>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-2xl font-bold shadow-glow">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
