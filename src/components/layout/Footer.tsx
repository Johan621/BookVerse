import * as React from "react";
import { Container } from "@/components/common/Container";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 py-6 md:py-8">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Havnark. All rights reserved.
        </p>
        {/* Footer Links Placeholder */}
      </Container>
    </footer>
  );
};
