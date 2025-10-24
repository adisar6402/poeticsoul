import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { PoemModal } from "@/components/PoemModal";
import type { Poem } from "@shared/schema";

export default function Poems() {
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);

  const { data: poems, isLoading, error } = useQuery<Poem[]>({
    queryKey: ["/api/poems"],
  });

  const getExcerpt = (content: string) => {
    const lines = content.split("\n").filter((line) => line.trim());
    return lines.slice(0, 2).join("\n") + "...";
  };

  return (
    <div className="min-h-screen py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4 transition-all duration-700 animate-in fade-in slide-in-from-top">
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold"
            data-testid="text-poems-title"
          >
            Poetry Collection
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through love, loss, and the beauty of human emotion
          </p>
          <div className="h-1 w-24 bg-primary rounded-full mx-auto" />
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card
                key={i}
                className="p-6 md:p-8 rounded-2xl animate-pulse"
                data-testid={`skeleton-poem-${i}`}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-muted rounded" />
                    <div className="flex-1 h-8 bg-muted rounded" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-3/4" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-16">
            <p className="text-lg text-destructive mb-4" data-testid="text-error">
              Failed to load poems. Please try again later.
            </p>
          </div>
        )}

        {poems && poems.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poems.map((poem, index) => (
              <Card
                key={poem.id}
                className="p-6 md:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 cursor-pointer group animate-in fade-in slide-in-from-bottom hover-elevate"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedPoem(poem)}
                data-testid={`card-poem-${poem.id}`}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl" aria-hidden="true">
                      {poem.emoji}
                    </span>
                    <h2
                      className="font-serif text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors"
                      data-testid={`text-poem-title-${poem.id}`}
                    >
                      {poem.title}
                    </h2>
                  </div>

                  <p
                    className="text-base text-muted-foreground leading-relaxed line-clamp-3 whitespace-pre-line"
                    data-testid={`text-poem-excerpt-${poem.id}`}
                  >
                    {getExcerpt(poem.content)}
                  </p>

                  <button
                    className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-all mt-4 inline-block"
                    data-testid={`button-read-more-${poem.id}`}
                  >
                    Read More →
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {poems && poems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground" data-testid="text-no-poems">
              No poems available yet. Check back soon!
            </p>
          </div>
        )}
      </div>

      {selectedPoem && (
        <PoemModal poem={selectedPoem} onClose={() => setSelectedPoem(null)} />
      )}
    </div>
  );
}
