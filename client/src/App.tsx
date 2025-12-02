import React from "react";
import { Switch, Route, Router } from "wouter";
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
  // Use the browser's location API directly
  const getLocation = () => {
    if (typeof window === "undefined") return "/";
    const path = window.location.pathname;
    if (basePath && path.startsWith(basePath)) {
      const stripped = path.slice(basePath.length);
      return stripped || "/";
    }
    return path || "/";
  };

  const [location, setLocationState] = React.useState(() => {
    // Initialize with current location
    return getLocation();
  });

  const setLocation = React.useCallback(
    (to: string, options?: { replace?: boolean }) => {
      const newPath = basePath + (to.startsWith("/") ? to : "/" + to);
      if (options?.replace) {
        window.history.replaceState(null, "", newPath);
      } else {
        window.history.pushState(null, "", newPath);
      }
      // Update state immediately
      setLocationState(getLocation());
      // Trigger a popstate event to notify wouter
      window.dispatchEvent(new PopStateEvent("popstate"));
    },
    []
  );

  React.useEffect(() => {
    const handlePopState = () => {
      setLocationState(getLocation());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [basePath]);

  return [location, setLocation];
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
