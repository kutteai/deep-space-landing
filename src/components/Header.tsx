import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">DCTAP</div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Products</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Learn</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Service</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Community</a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="outline">Login</Button>
            <Button className="bg-gradient-primary shadow-glow">Launch App</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
