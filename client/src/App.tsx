import { Switch, Route, useLocation, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// Get base path from Vite's import.meta.env.BASE_URL
const base = import.meta.env.BASE_URL;
const basePath = base === "/" ? "" : base.replace(/\/$/, "");

// Create a custom location hook that strips the base path
function useBaseLocation(): [
  string,
  (to: string, options?: { replace?: boolean }) => void
] {
  const [location, setLocation] = useLocation();

  // Strip the base path from the location for matching
  const pathWithoutBase = location.startsWith(basePath)
    ? location.slice(basePath.length) || "/"
    : location;

  // Create a setter that adds the base path back
  const setLocationWithBase = (to: string, options?: { replace?: boolean }) => {
    const newPath = basePath + (to.startsWith("/") ? to : "/" + to);
    setLocation(newPath, options);
  };

  return [pathWithoutBase, setLocationWithBase];
}

function AppRouter() {
  return (
    <Router hook={useBaseLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
