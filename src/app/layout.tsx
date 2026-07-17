import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

import { Providers } from "@/components/layout/Providers";
import { BackgroundWrapper } from "@/components/layout/BackgroundWrapper";
import { AnimatedCursor } from "@/components/layout/AnimatedCursor";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "BookVerse AI | The Future of Student Book Exchange",
    template: "%s | BookVerse AI",
  },
  description: "An AI-powered Online Book Exchange Platform for students to buy, sell, donate, and exchange books.",
  openGraph: {
    title: "BookVerse AI",
    description: "An AI-powered Online Book Exchange Platform for students.",
    url: "https://bookverse.ai",
    siteName: "BookVerse AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BookVerse AI",
    description: "An AI-powered Online Book Exchange Platform for students.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen font-sans antialiased bg-background text-foreground overflow-x-hidden`}>
        <Providers>
          <AnimatedCursor />
          <BackgroundWrapper>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 flex flex-col">
                {children}
              </main>
              <Footer />
            </div>
          </BackgroundWrapper>
        </Providers>
      </body>
    </html>
  );
}
