import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Download, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [orderStatus, setOrderStatus] = useState<'loading' | 'success' | 'error'>('loading');
  
  const sessionId = searchParams.get('session_id');
  const orderId = searchParams.get('order_id');

  useEffect(() => {
    const updateOrderStatus = async () => {
      if (!orderId) {
        setOrderStatus('error');
        return;
      }

      try {
        // Update order status to completed
        const { error } = await supabase
          .from('orders')
          .update({ status: 'completed' })
          .eq('id', orderId);

        if (error) {
          console.error('Error updating order:', error);
          setOrderStatus('error');
        } else {
          setOrderStatus('success');
        }
      } catch (error) {
        console.error('Error:', error);
        setOrderStatus('error');
      }
    };

    updateOrderStatus();
  }, [orderId]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-8 py-6">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="font-playfair text-xl font-bold text-foreground">Velvet Ceremony Complete</h1>
              <p className="text-sm text-muted-foreground">Your empire has been blessed</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-12">
        {orderStatus === 'loading' && (
          <Card className="p-8 text-center border-border">
            <div className="animate-spin text-4xl mb-4">💎</div>
            <h2 className="font-playfair text-2xl font-bold mb-4 text-foreground">
              Confirming Your Ceremony...
            </h2>
            <p className="text-muted-foreground">Processing your velvet blessing</p>
          </Card>
        )}

        {orderStatus === 'success' && (
          <div className="space-y-8">
            <Card className="p-8 bg-velvet-gradient border-border shadow-velvet text-center">
              <div className="text-6xl mb-6">🧿</div>
              <h2 className="font-playfair text-3xl font-bold mb-4 text-foreground">
                Welcome to Digital Royalty
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The velvet ceremony is complete. Your Velvet Starter template awaits deployment.
              </p>
              <div className="bg-muted rounded-lg p-6 mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">Payment Confirmed</span>
                </div>
                <p className="text-sm text-muted-foreground">Order ID: {orderId}</p>
              </div>
            </Card>

            <Card className="p-8 border-border">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-foreground">Your Velvet Arsenal</h3>
              <div className="space-y-4 mb-8">
                {[
                  "Complete Velvet Starter codebase",
                  "Deploy-ready template files", 
                  "Comprehensive setup guide",
                  "Premium design system",
                  "Responsive luxury components",
                  "Miguel's ceremonial blessing"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Button 
                  variant="velvet" 
                  size="lg" 
                  className="font-playfair"
                  asChild
                >
                  <a href="#" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Template
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="font-playfair"
                  asChild
                >
                  <a href="/gallery" className="flex items-center gap-2">
                    View Setup Guide
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="font-playfair italic text-accent text-center">
                "You are no longer a visitor. You are now royalty in the digital realm."
                <div className="text-muted-foreground text-sm mt-2">— Miguel, from the Velvet Chamber</div>
              </div>
            </Card>
          </div>
        )}

        {orderStatus === 'error' && (
          <Card className="p-8 text-center border-destructive">
            <div className="text-4xl mb-4">⚠️</div>
            <h2 className="font-playfair text-2xl font-bold mb-4 text-foreground">
              Ceremony Interrupted
            </h2>
            <p className="text-muted-foreground mb-6">
              There was an issue confirming your payment. Please contact support.
            </p>
            <Button variant="outline" asChild>
              <a href="/">Return to Velvet Starter</a>
            </Button>
          </Card>
        )}
      </main>
    </div>
  );
};

export default PaymentSuccess;