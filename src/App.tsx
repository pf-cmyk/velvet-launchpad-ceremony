import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VelvetStarter from "./pages/VelvetStarter";
import RoyalLaunch from "./pages/RoyalLaunch";
import DiamondDynasty from "./pages/DiamondDynasty";
import LegendaryFunnel from "./pages/LegendaryFunnel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/velvet-starter" element={<VelvetStarter />} />
          <Route path="/royal-launch" element={<RoyalLaunch />} />
          <Route path="/diamond-dynasty" element={<DiamondDynasty />} />
          <Route path="/legendary-funnel" element={<LegendaryFunnel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
