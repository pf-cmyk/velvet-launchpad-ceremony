import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Index = () => {
  const funnels = [
    {
      title: "Velvet Starter",
      description: "Deploy-ready luxury template with ceremonial blessing",
      icon: "💎",
      url: "/velvet-starter",
      gradient: "from-primary/20 via-transparent to-transparent"
    },
    {
      title: "Royal Launch Suite", 
      description: "Complete empire-building toolkit with premium support",
      icon: "👑",
      url: "/royal-launch",
      gradient: "from-accent/20 via-transparent to-transparent"
    },
    {
      title: "Diamond Dynasty",
      description: "Full-service launch with personal Miguel consultation",
      icon: "🏰",
      url: "/diamond-dynasty",
      gradient: "from-secondary/20 via-transparent to-transparent"
    },
    {
      title: "Legendary Funnel",
      description: "Miguel's legendary funnel system for empire conversions",
      icon: "⚡",
      url: "/legendary-funnel",
      gradient: "from-primary/20 via-accent/20 to-transparent"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="pt-20 pb-16 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-6xl mb-8 animate-pulse">💎</div>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
              Miguel's Velvet Archive
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Where digital empires are forged from velvet dreams. An exclusive exhibition of legendary conversion architectures.
            </p>
          </div>
        </header>

        {/* Funnels Showcase Grid */}
        <main className="px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {funnels.map((funnel, index) => (
                <div
                  key={index}
                  className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)]"
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${funnel.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-5xl">{funnel.icon}</div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-xs text-primary font-medium">LIVE</span>
                      </div>
                    </div>
                    
                    <h3 className="font-playfair text-3xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {funnel.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {funnel.description}
                    </p>
                    
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full group/btn bg-background/50 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300"
                      asChild
                    >
                      <a href={funnel.url} className="flex items-center justify-center gap-2">
                        <span className="font-playfair text-base">Preview Experience</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Signature Quote */}
            <div className="relative bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5" />
              <div className="relative">
                <div className="text-2xl mb-4">🧿</div>
                <blockquote className="font-playfair italic text-2xl md:text-3xl text-foreground/90 leading-relaxed max-w-4xl mx-auto mb-4">
                  "I don't just create templates. I architect digital dynasties. Each launch carries the whisper of ancient luxury and the promise of modern conquest."
                </blockquote>
                <cite className="text-lg text-accent not-italic">— Miguel, Master of Velvet Ceremonies</cite>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;