import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Download, ArrowRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <Card className="max-w-2xl w-full p-12 text-center bg-velvet-gradient border-border shadow-velvet">
        {/* Success Icon */}
        <div className="text-6xl mb-6 text-primary">
          <Check className="w-16 h-16 mx-auto bg-primary text-primary-foreground rounded-full p-4" />
        </div>
        
        {/* Main Heading */}
        <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Welcome to the Velvet Empire! 👑
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg mb-8 text-muted-foreground">
          Your ceremonial purchase is complete. The velvet blessing has been bestowed upon your digital empire.
        </p>
        
        {/* Order Details */}
        <div className="bg-muted/20 rounded-lg p-6 mb-8">
          <h2 className="font-playfair text-xl font-semibold mb-4 text-foreground">Order Complete</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>• Velvet Starter Template - A$97</p>
            <p>• Deploy-ready codebase included</p>
            <p>• Premium setup guide provided</p>
            <p>• Lifetime access guaranteed</p>
          </div>
          {sessionId && (
            <p className="text-xs mt-4 text-muted-foreground/70">
              Session ID: {sessionId}
            </p>
          )}
        </div>

        {/* Next Steps */}
        <div className="space-y-4 mb-8">
          <div className="bg-card rounded-lg p-6 text-left">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Download className="w-4 h-4" />
              What's Next:
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Check your email for download instructions</li>
              <li>• Access your premium template files</li>
              <li>• Follow the velvet setup guide</li>
              <li>• Join the exclusive Velvet Empire community</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button 
            variant="velvet" 
            size="lg" 
            className="text-lg px-8 py-4 font-playfair w-full"
            asChild
          >
            <a href="/gallery">
              <ArrowRight className="w-4 h-4 mr-2" />
              Explore More Templates
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 font-playfair w-full"
            asChild
          >
            <a href="/">Return to Homepage</a>
          </Button>
        </div>
        
        {/* Footer Quote */}
        <div className="mt-12 font-playfair italic text-accent">
          "Your empire begins now. Rule with velvet authority."
          <div className="text-muted-foreground text-sm mt-2">— Miguel, Velvet Architect</div>
        </div>
      </Card>
    </div>
  );
};

export default PaymentSuccess;