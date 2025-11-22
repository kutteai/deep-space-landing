import { Facebook, Instagram, Youtube, Globe } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    aboutUs: ["About", "Careers", "Announcements", "News", "Terms", "Privacy", "Blog"],
    products: ["Exchange", "Buy Crypto", "Leveraged Tokens", "TradingView", "Pay", "Gift Card", "ETH Staking", "NFT", "Auto-Invest"],
    learn: ["Learn & Earn", "Browse Crypto Prices", "Bitcoin Price", "Ethereum Price", "Browse Crypto Price Prediction", "Buy Bitcoin", "Buy Ethereum", "Buy Tradable Altcoins"],
    service: ["Affiliate", "Referral", "OTC Trading", "Historical Market Data", "Proof of Reserves", "Trading Rules", "24/7 Chat Support", "Support Center", "Product Feedback", "Trading Rules"]
  };

  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerLinks.aboutUs.map((link) => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerLinks.products.map((link) => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Learn</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerLinks.learn.map((link) => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Service</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerLinks.service.map((link) => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-4">
              <div className="text-sm">
                <p className="text-muted-foreground mb-1">Language</p>
                <div className="flex items-center gap-2 text-foreground">
                  <Globe className="w-4 h-4" />
                  <span>English</span>
                </div>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground mb-1">Currency</p>
                <span className="text-foreground">$ USD - $</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>DemoCrypto® 2025 | Cookie Preferences</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
