import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/forgot-password"
            element={<Placeholder title="Forgot Password" />}
          />

          <Route path="/dashboard" element={<Index />} />
          <Route path="/my-bots" element={<Placeholder title="My Bots" />} />
          <Route
            path="/create-bot"
            element={<Placeholder title="Create Bot" />}
          />
          <Route path="/settings" element={<Placeholder title="Settings" />} />
          <Route
            path="/usage-stats"
            element={<Placeholder title="Usage Stats" />}
          />
          <Route
            path="/chat-history"
            element={<Placeholder title="Chat History" />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);