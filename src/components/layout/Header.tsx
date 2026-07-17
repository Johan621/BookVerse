import * as React from "react";
import { Container } from "@/components/common/Container";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full glass border-b-0 border-white/5">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-gradient">BookVerse</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {/* Navigation Placeholder */}
        </nav>
        <div className="flex items-center gap-4">
          {/* Actions Placeholder */}
        </div>
      </Container>
    </header>
  );
};
