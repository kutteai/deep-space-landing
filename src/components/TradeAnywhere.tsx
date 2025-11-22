import tradingPlatform from "@/assets/trading-platform.png";

const TradeAnywhere = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Trade anytime, anywhere!</h2>
            <p className="text-muted-foreground mb-8">Trade anytime, anywhere!Trade anytime, anywhere!Trade anytime, anywhere!</p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-glow">
            <img 
              src={tradingPlatform} 
              alt="Advanced Trading Platform Interface - BTC/USDT Charts and Order Book" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeAnywhere;
