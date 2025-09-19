import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CREATE-PAYMENT] ${step}${detailsStr}`);
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Create Supabase client using the anon key for user authentication
  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  try {
    logStep("Payment function started");

    // Get user from auth header (optional for guest checkout)
    let user = null;
    let userEmail = null;
    
    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      const { data } = await supabaseClient.auth.getUser(token);
      user = data.user;
      userEmail = user?.email;
      logStep("User authenticated", { userId: user?.id, email: userEmail });
    }

    // Get email from request body if no authenticated user
    const body = await req.json();
    const email = userEmail || body.email;
    
    if (!email) {
      throw new Error("Email is required");
    }

    logStep("Processing payment for email", { email });

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Check if a Stripe customer record exists for this email
    const customers = await stripe.customers.list({ email, limit: 1 });
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
      logStep("Found existing customer", { customerId });
    } else {
      logStep("No existing customer found");
    }

    // Create order record in database
    const { data: orderData, error: orderError } = await supabaseClient
      .from('orders')
      .insert({
        user_id: user?.id || null,
        email: email,
        product_name: 'Velvet Starter',
        amount_cents: 9700,
        currency: 'aud',
        status: 'pending'
      })
      .select()
      .single();

    if (orderError) {
      logStep("Error creating order", { error: orderError });
      throw new Error(`Failed to create order: ${orderError.message}`);
    }

    logStep("Order created", { orderId: orderData.id });

    // Create a one-time payment session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : email,
      line_items: [
        {
          price: "price_1S915wPSKcW6nG3f7fY15MfG",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/payment-success?session_id={CHECKOUT_SESSION_ID}&order_id=${orderData.id}`,
      cancel_url: `${req.headers.get("origin")}/payment-canceled?order_id=${orderData.id}`,
      metadata: {
        order_id: orderData.id,
        user_id: user?.id || '',
      },
    });

    logStep("Stripe session created", { sessionId: session.id, url: session.url });

    // Update order with session ID
    await supabaseClient
      .from('orders')
      .update({ stripe_session_id: session.id })
      .eq('id', orderData.id);

    return new Response(JSON.stringify({ url: session.url, order_id: orderData.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in create-payment", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});