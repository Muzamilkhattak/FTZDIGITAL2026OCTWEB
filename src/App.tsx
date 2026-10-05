import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Preloader } from "@/components/Preloader";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ContactPage from "@/pages/ContactPage";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import CaseStudiesPage from "@/pages/CaseStudiesPage";
import CaseStudyDetailPage from "@/pages/CaseStudyDetailPage";
import BlogDetailPage from "@/pages/BlogDetailPage";
import BlogPage from "@/pages/BlogPage";
import WebsitesPortfolioPage from "@/pages/WebsitesPortfolioPage";
import GraphicsPortfolioPage from "@/pages/GraphicsPortfolioPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useEffect } from "react";
import { initPerformanceOptimizations } from "@/utils/performanceOptimizations";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Reduce unnecessary re-fetches
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame for smoother scroll
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/services/:slug" component={ServiceDetailPage} />
      <Route path="/portfolio/websites" component={WebsitesPortfolioPage} />
      <Route path="/portfolio/graphics" component={GraphicsPortfolioPage} />
      <Route path="/case-studies" component={CaseStudiesPage} />
      <Route path="/case-studies/:slug" component={CaseStudyDetailPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogDetailPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize performance optimizations on app mount
  useEffect(() => {
    // Defer initialization to avoid blocking initial render
    if (typeof window !== 'undefined') {
      // Use native requestIdleCallback if available, otherwise use setTimeout
      const scheduleInit = () => {
        try {
          initPerformanceOptimizations();
        } catch (error) {
          console.error('Performance optimization init failed:', error);
        }
      };

      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(scheduleInit, { timeout: 2000 });
      } else {
        setTimeout(scheduleInit, 100);
      }
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Preloader />
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Router />
          <WhatsAppButton />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
