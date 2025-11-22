import { Shield, Lock, FileCheck } from "lucide-react";
import security3d from "@/assets/security-3d.png";

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

          <div className="relative h-[500px] flex items-center justify-center">
            <img 
              src={security3d} 
              alt="3D Holographic Security Face - Blockchain Security Verification" 
              className="h-full object-contain drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafeReliable;
