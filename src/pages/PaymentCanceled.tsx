import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, ArrowLeft } from "lucide-react";

const PaymentCanceled = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <Card className="max-w-2xl w-full p-12 text-center bg-card border-border">
        {/* Cancel Icon */}
        <div className="text-6xl mb-6">
          <X className="w-16 h-16 mx-auto text-muted-foreground bg-muted rounded-full p-4" />
        </div>
        
        {/* Main Heading */}
        <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
          The Ceremony Was Paused
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg mb-8 text-muted-foreground">
          Your payment was not completed. The velvet gates remain closed, but you're always welcome to return.
        </p>
        
        {/* Message */}
        <div className="bg-muted/20 rounded-lg p-6 mb-8">
          <h2 className="font-playfair text-xl font-semibold mb-4 text-foreground">What Happened?</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>• Payment was canceled or interrupted</p>
            <p>• No charges were made to your account</p>
            <p>• Your velvet ceremony can be resumed anytime</p>
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
            <a href="/checkout">
              🧿 Try the Ceremony Again
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 font-playfair w-full"
            asChild
          >
            <a href="/gallery">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Browse Other Templates
            </a>
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg" 
            className="text-lg px-8 py-4 font-playfair w-full"
            asChild
          >
            <a href="/">Return to Homepage</a>
          </Button>
        </div>
        
        {/* Footer Quote */}
        <div className="mt-12 font-playfair italic text-muted-foreground">
          "Every empire builder needs time to reflect. Return when ready."
          <div className="text-muted-foreground text-sm mt-2">— Miguel</div>
        </div>
      </Card>
    </div>
  );
};

export default PaymentCanceled;