import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Sparkles } from "lucide-react";
import velvetImage from "@/assets/velvet-starter.jpg";

const VelvetStarter = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      
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
              src={velvetImage} 
              alt="Luxury diamond on velvet" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          <div className="text-center mb-12">
            <div className="text-6xl mb-6">💎</div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Velvet Starter
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Deploy-ready luxury template with ceremonial blessing. The foundation of digital empires.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "⚡", title: "Instant Deploy", desc: "Launch ready in minutes" },
              { icon: "🎨", title: "Premium Design", desc: "Luxury aesthetics built-in" },
              { icon: "🛡️", title: "Battle Tested", desc: "Production-grade quality" }
            ].map((feature, i) => (
              <div key={i} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:border-primary/50 transition-all">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-playfair text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-accent" />
              <p className="text-accent font-medium">Premium Template</p>
            </div>
            <p className="text-muted-foreground mb-6">
              Everything you need to launch your velvet empire
            </p>
            <Button size="lg" variant="default" className="gap-2">
              <Download className="w-5 h-5" />
              Get Started
            </Button>
          </div>

          {/* Quote */}
          <div className="mt-12 text-center">
            <blockquote className="font-playfair italic text-lg text-foreground/80">
              "Not just a template. A ceremonial beginning."
            </blockquote>
            <cite className="text-accent not-italic text-sm">— Miguel</cite>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VelvetStarter;
