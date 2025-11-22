import { Shield, Lock, FileCheck } from "lucide-react";

const SafeReliable = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Safe and Reliable</h2>
          <p className="text-muted-foreground">We are committed to safeguarding your assets and ensuring the security of your information.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow-sm">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Protection Fund</h3>
                  <p className="text-muted-foreground">Our $336 M Protection Fund ensures the security of your assets</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow-sm">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cold storage</h3>
                  <p className="text-muted-foreground">We store most digital assets in offline, multi-signature wallets.</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow-sm">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proof of Reserves</h3>
                  <p className="text-muted-foreground">We guarantee at least a 1:1 reserve ratio of our customer funds.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl bg-gradient-to-br from-card/50 to-secondary/30 border border-primary/20 shadow-glow flex items-center justify-center">
            {/* Space for 3D security graphic */}
            <div className="text-center text-muted-foreground">
              <p className="text-sm">3D Security Graphic Space</p>
              <p className="text-xs mt-2">(Holographic head visualization)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafeReliable;
