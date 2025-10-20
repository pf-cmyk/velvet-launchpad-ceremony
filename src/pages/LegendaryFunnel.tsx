import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, TrendingUp } from "lucide-react";
import funnelImage from "@/assets/legendary-funnel.jpg";

const LegendaryFunnel = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
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
              src={funnelImage} 
              alt="Electric lightning striking gold coins" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          <div className="text-center mb-12">
            <div className="text-6xl mb-6">⚡</div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Legendary Funnel
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Miguel's legendary funnel system for empire conversions. Transform visitors into devoted followers.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { number: "427%", label: "Avg. Conversion Lift" },
              { number: "89%", label: "Close Rate" },
              { number: "12x", label: "ROI Multiplier" }
            ].map((stat, i) => (
              <div key={i} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:border-primary/50 transition-all">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-4 mb-12">
            {[
              { icon: "🎯", title: "Precision Targeting", desc: "Hit the exact psychological triggers" },
              { icon: "🔥", title: "Irresistible Offers", desc: "Crafted to eliminate objections" },
              { icon: "🎭", title: "Emotional Journey", desc: "Guide prospects through transformation" },
              { icon: "💰", title: "Value Stacking", desc: "Make the choice obvious" }
            ].map((feature, i) => (
              <div key={i} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 flex gap-4 hover:border-primary/50 transition-all">
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="font-playfair text-lg font-bold mb-1 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-primary" />
                <p className="text-primary font-medium">Conversion Mastery</p>
              </div>
              <p className="text-muted-foreground mb-6">
                Access the same funnel system that built empires
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <TrendingUp className="w-5 h-5" />
                Deploy Legendary System
              </Button>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-12 text-center">
            <blockquote className="font-playfair italic text-lg text-foreground/80">
              "Not conversion optimization. Conversion domination."
            </blockquote>
            <cite className="text-primary not-italic text-sm">— Miguel</cite>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LegendaryFunnel;
