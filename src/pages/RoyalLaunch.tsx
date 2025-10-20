import { Button } from "@/components/ui/button";
import { ArrowLeft, Crown, Zap } from "lucide-react";
import royalImage from "@/assets/royal-launch.jpg";

const RoyalLaunch = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-secondary/5" />
      <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-8 py-6">
            <Button variant="ghost" size="sm" asChild>
              <a href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Gallery
              </a>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <main className="max-w-4xl mx-auto px-8 py-16">
          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden mb-12 border border-border/50 shadow-velvet">
            <img 
              src={royalImage} 
              alt="Royal crown on throne" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          <div className="text-center mb-12">
            <div className="text-6xl mb-6">👑</div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
              Royal Launch Suite
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Complete empire-building toolkit with premium support. For those who demand excellence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: "🎯", title: "Full Suite", desc: "Everything included, nothing held back" },
              { icon: "💬", title: "Premium Support", desc: "Direct access to expert guidance" },
              { icon: "🚀", title: "Rapid Launch", desc: "From zero to empire in record time" },
              { icon: "📈", title: "Growth Tools", desc: "Scale without limits" }
            ].map((feature, i) => (
              <div key={i} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-accent/50 transition-all">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-playfair text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="w-5 h-5 text-accent" />
              <p className="text-accent font-medium">Royal Treatment</p>
            </div>
            <p className="text-muted-foreground mb-6">
              Build your digital kingdom with unmatched support
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
              <Zap className="w-5 h-5" />
              Claim Your Throne
            </Button>
          </div>

          {/* Quote */}
          <div className="mt-12 text-center">
            <blockquote className="font-playfair italic text-lg text-foreground/80">
              "Where entrepreneurs become emperors."
            </blockquote>
            <cite className="text-accent not-italic text-sm">— Miguel</cite>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RoyalLaunch;
