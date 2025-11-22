import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const bots = [
  { pair: "BTC/FDUSD", pnl: "$2,880.72", roi: "2.19%", runtime: "2d 3h 24m", minInvest: "1,214.65 FDUSD", trades: "70/196", apr: "4.09%" },
  { pair: "DOGE/USDT", pnl: "$2,880.72", roi: "2.19%", runtime: "2d 3h 24m", minInvest: "1,214.65 FDUSD", trades: "70/196", apr: "4.09%" },
  { pair: "ARDR/BTC", pnl: "$2,880.72", roi: "2.19%", runtime: "2d 3h 24m", minInvest: "1,214.65 FDUSD", trades: "70/196", apr: "4.09%" },
];

const BotMarketplace = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">Bot Marketplace</h2>
            <p className="text-muted-foreground">Copy top traders and discover strategies to earn like a pro effortlessly.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {bots.map((bot, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-glow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{bot.pair}</h3>
                  <p className="text-sm text-muted-foreground">PNL (USD)</p>
                </div>
                <Button size="sm" className="bg-gradient-primary shadow-glow-sm">Copy</Button>
              </div>

              <div className="mb-4">
                <div className="text-3xl font-bold text-success mb-2">{bot.pnl}</div>
                <div className="h-16 rounded-lg bg-gradient-to-r from-success/20 to-success/5 flex items-end p-2">
                  {/* Chart placeholder */}
                  <div className="w-full h-full bg-success/10 rounded"></div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ROI</span>
                  <span className="font-semibold">{bot.roi}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Runtime</span>
                  <span className="font-semibold">{bot.runtime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Min. Investment</span>
                  <span className="font-semibold">{bot.minInvest}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">24h/Total Matched Trades</span>
                  <span className="font-semibold">{bot.trades}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">APR</span>
                  <span className="font-semibold">{bot.apr}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BotMarketplace;
