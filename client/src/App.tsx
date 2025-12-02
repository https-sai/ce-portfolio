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
  const [location, setLocationState] = React.useState(() => {
    // Initialize with current location
    if (typeof window === "undefined") return "/";
    const path = window.location.pathname;
    if (basePath && path.startsWith(basePath)) {
      const stripped = path.slice(basePath.length);
      return stripped || "/";
    }
    return path || "/";
  });

  const setLocation = React.useCallback(
    (to: string, options?: { replace?: boolean }) => {
      const newPath = basePath + (to.startsWith("/") ? to : "/" + to);
      if (options?.replace) {
        window.history.replaceState(null, "", newPath);
      } else {
        window.history.pushState(null, "", newPath);
      }
      // Use the 'to' parameter directly since we just set it
      // This avoids reading window.location which might not be updated yet
      const newLocation = to.startsWith("/") ? to : "/" + to;
      setLocationState(newLocation);
    },
    [basePath]
  );

  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const newLocation =
        basePath && path.startsWith(basePath)
          ? path.slice(basePath.length) || "/"
          : path || "/";
      setLocationState(newLocation);
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
