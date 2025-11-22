import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const cryptos = [
  { rank: 1, name: "Bitcoin", symbol: "BTC", price: "$36,623.54", change: "+1.45%", volume: "1.68B", positive: true },
  { rank: 2, name: "Ethereum", symbol: "ETH", price: "$36,623.54", change: "-5.92%", volume: "1.05B", positive: false },
  { rank: 3, name: "Tether", symbol: "USDT / USD", price: "$36,623.54", change: "+7.12%", volume: "230.20M", positive: true },
  { rank: 4, name: "BNB", symbol: "BNB/USD", price: "$36,623.54", change: "-5.23%", volume: "210.20M", positive: false },
  { rank: 5, name: "Solana", symbol: "SOL", price: "$36,623.54", change: "+5.12%", volume: "130.20M", positive: true },
  { rank: 6, name: "XRP", symbol: "XRP", price: "$36,623.54", change: "-6.12%", volume: "70.20M", positive: false },
  { rank: 7, name: "Cardano", symbol: "ADA", price: "$36,623.54", change: "-1.92%", volume: "30.20M", positive: false },
  { rank: 8, name: "Avalanche", symbol: "AVAX", price: "$36,623.54", change: "+2.12%", volume: "10.20M", positive: true },
];

const MarketUpdate = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Market Update</h2>
          <p className="text-muted-foreground">The key to creation an affective FAQ page is to anticipate the question your customers or users may have and provide clear and concise answers.</p>
        </div>

        <Tabs defaultValue="popular" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="gainers">Gainers</TabsTrigger>
            <TabsTrigger value="newly">Newly listed</TabsTrigger>
          </TabsList>
          <TabsContent value="popular">
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-border">
                    <tr className="text-muted-foreground text-sm">
                      <th className="text-left p-4">#</th>
                      <th className="text-left p-4">Name</th>
                      <th className="text-right p-4">Last Price</th>
                      <th className="text-right p-4">24h %</th>
                      <th className="text-right p-4">24h volume</th>
                      <th className="text-right p-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cryptos.map((crypto) => (
                      <tr key={crypto.rank} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                        <td className="p-4 text-muted-foreground">{crypto.rank}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-primary/20"></div>
                            <span className="font-semibold">{crypto.name}</span>
                            <span className="text-muted-foreground text-sm">{crypto.symbol}</span>
                          </div>
                        </td>
                        <td className="p-4 text-right font-semibold">{crypto.price}</td>
                        <td className={`p-4 text-right font-semibold ${crypto.positive ? 'text-success' : 'text-error'}`}>
                          {crypto.change}
                        </td>
                        <td className="p-4 text-right text-muted-foreground">{crypto.volume}</td>
                        <td className="p-4 text-right">
                          <Button size="sm" variant="outline">Details</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MarketUpdate;
