import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check } from "lucide-react";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-8 py-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </a>
            </Button>
            <div>
              <h1 className="font-playfair text-xl font-bold text-foreground">Velvet Ceremony Checkout</h1>
              <p className="text-sm text-muted-foreground">Your empire awaits</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <Card className="p-8 bg-velvet-gradient border-border shadow-velvet">
            <h2 className="font-playfair text-2xl font-bold mb-6 text-foreground">
              Order Summary
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-foreground">Velvet Starter</h3>
                  <p className="text-sm text-muted-foreground">Deploy-ready luxury template</p>
                </div>
                <div className="text-lg font-bold text-secondary">A$97</div>
              </div>
            </div>

            <div className="border-t border-border pt-4 mb-8">
              <div className="flex justify-between text-lg font-bold">
                <span className="text-foreground">Total</span>
                <span className="text-secondary">A$97</span>
              </div>
            </div>

            {/* What's Included */}
            <div className="space-y-3">
              <h3 className="font-playfair text-lg font-semibold text-foreground">What's Included:</h3>
              {[
                "Complete Velvet Starter template",
                "Deploy-ready codebase", 
                "Comprehensive setup guide",
                "Premium design system",
                "Responsive luxury components"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Payment Notice */}
          <div className="space-y-8">
            <Card className="p-8 border-border">
              <div className="text-center">
                <div className="text-4xl mb-4 text-primary">🔒</div>
                <h2 className="font-playfair text-2xl font-bold mb-4 text-foreground">
                  Secure Payment Processing
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  To complete your velvet ceremony and process payments securely, 
                  this platform needs to be connected to a payment processor.
                </p>
                <div className="bg-muted rounded-lg p-6 text-left">
                  <h3 className="font-semibold text-foreground mb-3">Next Steps:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Connect Stripe payment processing</li>
                    <li>• Set up secure customer data handling</li>
                    <li>• Configure automated product delivery</li>
                    <li>• Enable order confirmation emails</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Testimonial */}
            <Card className="p-6 border-border bg-card">
              <div className="font-playfair italic text-accent text-center">
                "The velvet ceremony isn't just a purchase. It's an initiation into digital royalty."
                <div className="text-muted-foreground text-sm mt-2">— Miguel</div>
              </div>
            </Card>

            {/* Contact */}
            <Card className="p-6 border-border">
              <h3 className="font-semibold text-foreground mb-2">Questions?</h3>
              <p className="text-sm text-muted-foreground">
                Contact Miguel directly for white-glove service and custom empire consultation.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;