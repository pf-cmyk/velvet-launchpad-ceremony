import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Lock } from "lucide-react";

const PaymentForm = () => {
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to proceed.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      // Get current user session if exists
      const { data: { session } } = await supabase.auth.getSession();
      
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: { email },
        headers: session ? {
          Authorization: `Bearer ${session.access_token}`,
        } : {},
      });

      if (error) {
        console.error('Payment error:', error);
        toast({
          title: "Payment Error",
          description: error.message || "Failed to initiate payment. Please try again.",
          variant: "destructive",
        });
        return;
      }

      if (data?.url) {
        // Redirect to Stripe checkout
        window.open(data.url, '_blank');
      } else {
        toast({
          title: "Error",
          description: "Failed to create payment session. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="p-8 border-border">
      <div className="text-center mb-8">
        <div className="text-4xl mb-4 text-primary">💳</div>
        <h2 className="font-playfair text-2xl font-bold mb-4 text-foreground">
          Complete Your Velvet Ceremony
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Enter your email to proceed with secure Stripe checkout
        </p>
      </div>

      <form onSubmit={handlePayment} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="miguel@velvetempire.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-background border-border"
          />
          <p className="text-xs text-muted-foreground">
            You'll receive order confirmation and download links here
          </p>
        </div>

        <div className="bg-muted rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">Secure Payment</span>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Powered by Stripe - industry-leading security</li>
            <li>• SSL encrypted checkout process</li>
            <li>• No payment details stored on our servers</li>
            <li>• Instant access after payment confirmation</li>
          </ul>
        </div>

        <Button 
          type="submit" 
          variant="velvet" 
          size="lg" 
          className="w-full font-playfair text-lg py-6"
          disabled={isProcessing}
        >
          {isProcessing ? (
            <span className="flex items-center gap-2">
              <div className="animate-spin">💎</div>
              Preparing Ceremony...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Begin Velvet Ceremony - A$97
            </span>
          )}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          By proceeding, you agree to receive the Velvet Starter template and ceremonial blessing from Miguel's digital empire.
        </p>
      </form>
    </Card>
  );
};

export default PaymentForm;