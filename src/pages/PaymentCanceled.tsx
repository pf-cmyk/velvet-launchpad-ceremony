import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, RotateCcw } from "lucide-react";

const PaymentCanceled = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-8 py-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="/checkout" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Checkout
              </a>
            </Button>
            <div>
              <h1 className="font-playfair text-xl font-bold text-foreground">Ceremony Paused</h1>
              <p className="text-sm text-muted-foreground">The velvet awaits your return</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-8 py-12">
        <Card className="p-8 text-center border-border">
          <div className="text-6xl mb-6">🌙</div>
          <h2 className="font-playfair text-3xl font-bold mb-4 text-foreground">
            The Ceremony Awaits
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Your velvet journey was paused, but the chamber remains open. 
            When you're ready, the blessing shall resume.
          </p>

          <div className="space-y-4 mb-8">
            <Button 
              variant="velvet" 
              size="lg" 
              className="font-playfair w-full"
              asChild
            >
              <a href="/checkout" className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                Resume the Ceremony
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="font-playfair w-full"
              asChild
            >
              <a href="/">Return to Velvet Starter</a>
            </Button>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-3">Need Assistance?</h3>
            <p className="text-sm text-muted-foreground">
              Contact Miguel directly for personalized guidance through the velvet ceremony.
            </p>
          </div>
        </Card>

        <Card className="p-6 border-border bg-card mt-8">
          <div className="font-playfair italic text-accent text-center">
            "Every pause is preparation for a more magnificent entrance."
            <div className="text-muted-foreground text-sm mt-2">— Miguel</div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default PaymentCanceled;