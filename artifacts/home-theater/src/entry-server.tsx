/**
 * SSR entry point for build-time prerendering.
 *
 * Called by prerender.mjs after the client build to render each route to a
 * full HTML string that is injected into <div id="root"> in the static files.
 *
 * This file is intentionally NOT imported by the client app (main.tsx).
 */
import { renderToString } from "react-dom/server";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Awards from "@/pages/Awards";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

export { ROUTE_METADATA } from "@/lib/routeMetadata";

/**
 * A minimal location hook for wouter that returns a fixed path and a no-op
 * navigate function.  Used during SSR so the router doesn't try to access
 * `window.location`.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const makeStaticHook = (path: string): any => () => [path, () => {}] as const;

/**
 * Render the React component tree for `path` to an HTML string.
 * Each call creates a fresh QueryClient so renders are isolated.
 */
export function render(path: string): string {
  const qc = new QueryClient();
  return renderToString(
    <QueryClientProvider client={qc}>
      <TooltipProvider>
        <WouterRouter hook={makeStaticHook(path)}>
          <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1">
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/services" component={Services} />
                <Route path="/projects" component={Projects} />
                <Route path="/awards" component={Awards} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </div>
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>,
  );
}
