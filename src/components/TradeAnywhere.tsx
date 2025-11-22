const TradeAnywhere = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Trade anytime, anywhere!</h2>
            <p className="text-muted-foreground mb-8">Trade anytime, anywhere!Trade anytime, anywhere!Trade anytime, anywhere!</p>
          </div>

          <div className="relative h-96 rounded-2xl bg-gradient-to-br from-card/50 to-secondary/30 border border-primary/20 overflow-hidden">
            {/* Space for trading platform screenshot */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-sm">Trading Platform Screenshot Space</p>
                <p className="text-xs mt-2">(Dashboard interface)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeAnywhere;
