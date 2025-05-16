import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./components/ui/theme-provider";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toaster as Sonner } from "sonner";
import { Toaster } from "./components/ui/toaster";
import BackToTop from "./components/ui/back-to-top";
import PerformanceMonitor from "./components/ui/performance-monitor";
import SEO from "./components/SEO";
import { Suspense, lazy } from "react";

// Lazy load components for better performance
const LazyIndex = lazy(() => import("./pages/Index"));
const LazyNotFound = lazy(() => import("./pages/NotFound"));

// Create a new query client with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider defaultTheme="system">
        <TooltipProvider>
          <SEO />
          <Toaster />
          <Sonner position="top-right" richColors closeButton />
          <BackToTop />
          <PerformanceMonitor sendToAnalytics={true} />
          <BrowserRouter>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<LazyIndex />} />
                {/* Redirect common misspelled paths to home */}
                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="/index" element={<Navigate to="/" replace />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<LazyNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
