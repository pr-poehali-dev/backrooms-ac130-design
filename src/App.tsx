
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Index from "./pages/Index";
import Download from "./pages/Download";
import NotFound from "./pages/NotFound";
import Icon from "@/components/ui/icon";

const AMBIENT_URL = "https://cdn.poehali.dev/projects/8285aaae-1c53-493c-a1f9-07e07b4a64d2/bucket/f63862eb-b87d-430a-bc11-b4ca643d0dc8.wav";

const queryClient = new QueryClient();

function AmbientPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;
    audio.loop = true;
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!started) setStarted(true);
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={AMBIENT_URL} preload="auto" />
      <button
        onClick={toggle}
        title={playing ? "Выключить звук" : "Включить эмбиент"}
        className="fixed bottom-6 right-6 z-50 w-11 h-11 flex items-center justify-center transition-all duration-200 hover:scale-110"
        style={{
          background: playing ? "#cc1a1a" : "rgba(20,20,20,0.85)",
          border: `1px solid ${playing ? "#cc1a1a" : "rgba(204,26,26,0.3)"}`,
          backdropFilter: "blur(8px)",
          clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
          boxShadow: playing ? "0 0 20px rgba(204,26,26,0.5)" : "none",
        }}
      >
        <Icon name={playing ? "Volume2" : "VolumeX"} size={18} className="text-white" />
      </button>
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AmbientPlayer />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/download" element={<Download />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
