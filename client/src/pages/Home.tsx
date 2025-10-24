import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8 py-20">
        <h1
          className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight transition-all duration-700 animate-in fade-in slide-in-from-bottom-8"
          data-testid="text-hero-title"
        >
          Poetic Soul 🖤
        </h1>
        
        <p
          className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide transition-all duration-700 animate-in fade-in slide-in-from-bottom-8 delay-150"
          data-testid="text-hero-tagline"
        >
          Where feelings find their rhythm.
        </p>
        
        <div className="pt-8 transition-all duration-700 animate-in fade-in slide-in-from-bottom-8 delay-300">
          <Button
            size="lg"
            asChild
            className="rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <a href="/poems" data-testid="link-read-poems">
              Read Poems
            </a>
          </Button>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background pointer-events-none" />
    </div>
  );
}
