"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen font-sans antialiased bg-background text-foreground flex items-center justify-center`}>
        <div className="flex flex-col items-center justify-center text-center p-8">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10 mb-8">
            <AlertTriangle className="h-12 w-12 text-red-500" aria-hidden="true" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Critical System Error</h1>
          <p className="text-xl text-muted-foreground max-w-lg mb-8">
            A critical error occurred that prevented the application from loading.
          </p>
          <Button onClick={() => reset()} variant="primary" size="lg">
            Try to Recover
          </Button>
        </div>
      </body>
    </html>
  );
}
