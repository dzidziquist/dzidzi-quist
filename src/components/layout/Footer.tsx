import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 py-8">
        <p className="text-sm text-muted-foreground text-center inline-flex items-center justify-center w-full gap-1">
          Copyright © 2026 Dzidzi Quist. Made with <Heart className="h-4 w-4 text-primary fill-primary" />.
        </p>
      </div>
    </footer>
  );
};
