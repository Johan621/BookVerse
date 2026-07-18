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
  metadataBase: new URL("https://bookverse.ai"),
  title: {
    default: "BookVerse AI | The Future of Student Book Exchange",
    template: "%s | BookVerse AI",
  },
  description: "An AI-powered Online Book Exchange Platform for students to buy, sell, donate, and exchange books with intelligent price estimation.",
  keywords: ["book exchange", "student books", "AI book pricing", "used books", "college books", "textbook exchange"],
  authors: [{ name: "BookVerse AI Team" }],
  creator: "BookVerse AI",
  publisher: "BookVerse AI",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BookVerse AI | The Future of Student Book Exchange",
    description: "An AI-powered Online Book Exchange Platform for students.",
    url: "https://bookverse.ai",
    siteName: "BookVerse AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BookVerse AI Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BookVerse AI | The Future of Student Book Exchange",
    description: "An AI-powered Online Book Exchange Platform for students.",
    images: ["/images/og-image.jpg"],
    creator: "@BookVerseAI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "BookVerse AI",
              url: "https://bookverse.ai",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://bookverse.ai/books?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BookVerse AI",
              url: "https://bookverse.ai",
              logo: "https://bookverse.ai/images/og-image.jpg",
              description: "An AI-powered Online Book Exchange Platform for students.",
            }),
          }}
        />
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
