import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PrideModeProvider } from "./hooks/use-pride-mode";
import Navigation from "./components/navigation";
import SponsorBanner from "./components/sponsor-banner";
import Footer from "./components/footer";
import Home from "./pages/home";
import Board from "./pages/board";
import Ratings from "./pages/ratings";
import Scorekeeping from "./pages/scorekeeping";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

function ScrollProgress() {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const progressBar = document.getElementById('scrollProgress');
      if (progressBar) {
        progressBar.style.width = scrollPercent + '%';
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/board" component={Board} />
      <Route path="/ratings" component={Ratings} />
      <Route path="/scorekeeping" component={Scorekeeping} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PrideModeProvider>
          <div className="min-h-screen">
            <ScrollProgress />
            <Navigation />
            <SponsorBanner />
            <main>
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </PrideModeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
