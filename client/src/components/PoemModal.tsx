import { useEffect, useState } from "react";
import { X, Volume2, VolumeX } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import type { Poem } from "@shared/schema";

interface PoemModalProps {
  poem: Poem;
  onClose: () => void;
}

export function PoemModal({ poem, onClose }: PoemModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    return () => {
      if (utterance) {
        window.speechSynthesis.cancel();
      }
    };
  }, [utterance]);

  const handleTextToSpeech = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      const newUtterance = new SpeechSynthesisUtterance(
        `${poem.title}. ${poem.content}`
      );
      newUtterance.rate = 0.9;
      newUtterance.pitch = 1;
      newUtterance.onend = () => setIsPlaying(false);
      setUtterance(newUtterance);
      window.speechSynthesis.speak(newUtterance);
      setIsPlaying(true);
    }
  };

  const handleShare = () => {
    const text = encodeURIComponent(
      `${poem.emoji} ${poem.title}\n\n${poem.content}\n\n- ${poem.author}\n\nRead more at: ${window.location.origin}/poems`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-lg animate-in fade-in duration-300"
      onClick={onClose}
      data-testid="div-poem-modal-overlay"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background rounded-3xl shadow-2xl p-8 md:p-16 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
        data-testid="div-poem-modal-content"
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-6 right-6"
          onClick={onClose}
          data-testid="button-close-modal"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </Button>

        <div className="space-y-8">
          <div className="text-center space-y-4">
            <span className="text-5xl md:text-6xl" aria-hidden="true">
              {poem.emoji}
            </span>
            <h1
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold"
              data-testid="text-modal-poem-title"
            >
              {poem.title}
            </h1>
            <div className="h-1 w-24 bg-primary rounded-full mx-auto" />
          </div>

          <div className="max-w-2xl mx-auto">
            <p
              className="font-body text-lg md:text-xl leading-loose whitespace-pre-line text-foreground/90"
              data-testid="text-modal-poem-content"
            >
              {poem.content}
            </p>
          </div>

          <p
            className="text-sm md:text-base italic text-muted-foreground text-right mt-16"
            data-testid="text-modal-poem-author"
          >
            — {poem.author}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8 border-t border-border">
            <Button
              variant="outline"
              size="lg"
              onClick={handleTextToSpeech}
              className="gap-2"
              data-testid="button-listen-poem"
            >
              {isPlaying ? (
                <>
                  <VolumeX className="h-5 w-5" />
                  Stop Listening
                </>
              ) : (
                <>
                  <Volume2 className="h-5 w-5" />
                  🎧 Listen to Poem
                </>
              )}
            </Button>

            <Button
              variant="default"
              size="lg"
              onClick={handleShare}
              className="gap-2"
              data-testid="button-share-whatsapp"
            >
              <FaWhatsapp className="h-5 w-5" />
              Share via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
