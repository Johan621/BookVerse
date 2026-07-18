import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-min-h-screen bg-background">
      {children}
    </main>
  );
}
