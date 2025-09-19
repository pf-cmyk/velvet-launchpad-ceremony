import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6 text-primary">💎</div>
        <h1 className="font-playfair text-4xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-xl text-muted-foreground mb-2">Lost in the velvet void</p>
        <p className="text-muted-foreground mb-8">This path leads nowhere in Miguel's empire.</p>
        <div className="space-y-3">
          <Button asChild variant="velvet" className="w-full">
            <a href="/">Return to Velvet Starter</a>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <a href="/gallery">Browse Miguel's Gallery</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;