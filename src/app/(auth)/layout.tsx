import * as React from "react";

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
