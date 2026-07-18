"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In production, log to an error reporting service like Sentry
    console.error("Route Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 mb-6 glass">
        <AlertTriangle className="h-10 w-10 text-red-500" aria-hidden="true" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Something went wrong!</h2>
      <p className="mt-4 text-muted-foreground max-w-md">
        An unexpected error occurred while loading this page. We&apos;ve been notified and are looking into it.
      </p>
      <div className="mt-8">
        <Button onClick={() => reset()} variant="primary">
          Try Again
        </Button>
      </div>
    </div>
  );
}
