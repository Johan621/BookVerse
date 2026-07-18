"use client";

import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted/50 mb-8 glass">
        <FileQuestion className="h-12 w-12 text-muted-foreground" aria-hidden="true" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Page Not Found</h2>
      <p className="mt-4 text-lg text-muted-foreground max-w-md">
        We couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/"><Button variant="primary">Return Home</Button></Link>
        <Link href="/books"><Button variant="outline">Browse Books</Button></Link>
      </div>
    </div>
  );
}
