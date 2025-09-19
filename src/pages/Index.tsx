import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <section className="velvet-starter max-w-2xl w-full text-center bg-velvet-gradient rounded-xl p-12 shadow-velvet">
        {/* Diamond Icon */}
        <div className="text-5xl mb-6 text-primary">💎</div>
        
        {/* Main Heading */}
        <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-3 leading-tight text-foreground">
          Feel the weight of tradition.<br />
          The shimmer of potential.
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg mb-8 text-muted-foreground">
          Your launch awaits the ceremonial blessing.
        </p>
        
        {/* Quote */}
        <div className="font-playfair italic text-accent text-lg mb-8 leading-relaxed">
          "I don't launch products. I birth empires from velvet dreams."<br />
          <span className="text-base">— Miguel, in the Velvet Chamber</span>
        </div>
        
        {/* Price */}
        <div className="text-4xl md:text-5xl font-bold text-secondary mb-4">
          A$97
        </div>
        
        {/* Features List */}
        <ul className="list-none space-y-2 mb-8 text-muted-foreground">
          <li>Velvet Starter</li>
          <li>Deploy-ready template</li>
          <li>Setup guide</li>
        </ul>
        
        {/* CTA Button */}
        <Button 
          variant="velvet" 
          size="lg" 
          className="text-lg px-8 py-4 mb-4 font-playfair"
        >
          🧿 Begin the Velvet Ceremony
        </Button>
        
        {/* Sub-quote */}
        <div className="text-sm italic text-muted-foreground mb-8 font-playfair">
          "Your royal launch awaits" — Miguel
        </div>
        
        {/* Navigation */}
        <div className="text-sm">
          <a 
            href="/gallery" 
            className="text-muted-foreground hover:text-primary underline transition-colors"
          >
            ← Return to Miguel's Gallery
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;