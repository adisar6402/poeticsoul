import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 transition-all duration-700 animate-in fade-in slide-in-from-left">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/attached_assets/poet_1761306544283.jpeg"
                  alt="Julius Samuel Ikechukwu - Poetic Soul"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  data-testid="img-poet-portrait"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div
                  className="hidden w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 items-center justify-center"
                  data-testid="div-poet-fallback"
                >
                  <span className="text-8xl font-serif font-bold text-muted-foreground/50">
                    PSI
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8 transition-all duration-700 animate-in fade-in slide-in-from-right delay-150">
            <div>
              <h1
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                data-testid="text-about-title"
              >
                About the Poet
              </h1>
              <div className="h-1 w-24 bg-primary rounded-full mb-8" />
            </div>

            <p
              className="text-lg md:text-xl leading-relaxed text-foreground/90"
              data-testid="text-poet-bio"
            >
              Poetic Soul (Julius Samuel Ikechukwu) is a Nigerian poet whose
              words breathe love, heartbreak, reflection, and rebirth. His art
              translates silence into rhythm, and emotions into timeless verses.
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                asChild
                className="rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-shadow duration-300 gap-2"
              >
                <a
                  href="https://wa.me/2349063887291"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-chat-poet"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  Chat with the Poet
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
