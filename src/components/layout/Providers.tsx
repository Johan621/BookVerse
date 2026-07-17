"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";
import { ReactLenis } from "lenis/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster 
          position="bottom-right" 
          toastOptions={{
            className: "glass !bg-background/80 !border-border",
            descriptionClassName: "!text-muted-foreground",
          }}
        />
      </NextThemesProvider>
    </ReactLenis>
  );
}
