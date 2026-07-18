import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

import { Providers } from "@/components/layout/Providers";
import { BackgroundWrapper } from "@/components/layout/BackgroundWrapper";
import { AnimatedCursor } from "@/components/layout/AnimatedCursor";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ReticleDev } from "./reticle-dev";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://havnark.com"),
  title: {
    default: "Havnark | Discover. Exchange. Grow.",
    template: "%s | Havnark",
  },
  description: "Havnark is an AI-powered knowledge platform where readers discover books, exchange them, organize personal libraries, receive intelligent recommendations, and connect through a collaborative reading community.",
  keywords: ["book exchange", "student books", "AI book pricing", "used books", "college books", "textbook exchange"],
  authors: [{ name: "Havnark Team" }],
  creator: "Havnark",
  publisher: "Havnark",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Havnark | Discover. Exchange. Grow.",
    description: "Havnark is an AI-powered knowledge platform where readers discover books, exchange them, organize personal libraries, receive intelligent recommendations, and connect through a collaborative reading community.",
    url: "https://havnark.com",
    siteName: "Havnark",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Havnark Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Havnark | Discover. Exchange. Grow.",
    description: "Havnark is an AI-powered knowledge platform where readers discover books, exchange them, organize personal libraries, receive intelligent recommendations, and connect through a collaborative reading community.",
    images: ["/images/og-image.jpg"],
    creator: "@Havnark",
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
        {process.env.NODE_ENV === 'development' ? <ReticleDev /> : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Havnark",
              url: "https://havnark.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://havnark.com/books?q={search_term_string}",
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
              name: "Havnark",
              url: "https://havnark.com",
              logo: "https://havnark.com/opengraph-image.png",
              description: "Havnark is an AI-powered knowledge platform where readers discover books, exchange them, organize personal libraries, receive intelligent recommendations, and connect through a collaborative reading community.",
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
