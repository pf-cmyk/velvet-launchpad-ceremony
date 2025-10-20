import { Button } from "@/components/ui/button";
import { ArrowLeft, Diamond, Star } from "lucide-react";
import dynastyImage from "@/assets/diamond-dynasty.jpg";

const DiamondDynasty = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      
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
              src={dynastyImage} 
              alt="Majestic castle fortress at night" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🏰</div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Diamond Dynasty
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Full-service launch with personal Miguel consultation. The pinnacle of digital empire creation.
            </p>
          </div>

          {/* Exclusive Features */}
          <div className="grid gap-6 mb-12">
            {[
              { icon: "🎩", title: "Personal Consultation", desc: "Direct strategy sessions with Miguel himself" },
              { icon: "🔮", title: "Custom Architecture", desc: "Bespoke solutions tailored to your empire" },
              { icon: "🌟", title: "VIP Treatment", desc: "Priority support and exclusive access" },
              { icon: "♾️", title: "Lifetime Updates", desc: "Forever access to all future enhancements" }
            ].map((feature, i) => (
              <div key={i} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 flex gap-4 hover:border-secondary/50 transition-all">
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h3 className="font-playfair text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-secondary/30 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-primary/10" />
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Diamond className="w-5 h-5 text-secondary" />
                <p className="text-secondary font-medium">Limited Availability</p>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Join the elite circle of digital dynasty builders
              </p>
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 text-lg px-8">
                <Star className="w-5 h-5" />
                Begin Your Dynasty
              </Button>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-12 text-center">
            <blockquote className="font-playfair italic text-xl text-foreground/80">
              "For those who refuse to settle for ordinary."
            </blockquote>
            <cite className="text-secondary not-italic">— Miguel</cite>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DiamondDynasty;
