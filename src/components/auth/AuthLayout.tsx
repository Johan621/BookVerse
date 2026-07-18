"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatedAurora } from "@/components/background/AnimatedAurora";
import { FadeIn } from "@/components/animations/FadeIn";
import { BookOpen } from "lucide-react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  quote?: string;
  quoteAuthor?: string;
}

export const AuthLayout = ({ children, title, subtitle, quote = "“BookVerse AI completely changed how I find textbooks for my semester. I saved thousands of rupees and met amazing people on campus.”", quoteAuthor = "Sarah J., Engineering Student" }: AuthLayoutProps) => {
  return (
    <main className="min-min-h-screen w-full flex bg-background">
      {/* Left Panel: Form (Glassmorphism) */}
      <section className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:w-1/2 xl:w-5/12 relative z-10">
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          {/* Logo & Header */}
          <FadeIn>
            <Link href="/" className="flex items-center gap-2 mb-12">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold text-xl tracking-tight">BookVerse AI</span>
            </Link>

            <h1 className="text-3xl font-extrabold tracking-tight mb-2">
              {title}
            </h1>
            <p className="text-muted-foreground text-sm mb-8">
              {subtitle}
            </p>
          </FadeIn>

          {/* Form Content */}
          <FadeIn delay={0.1}>
            {children}
          </FadeIn>
        </div>
      </section>

      {/* Right Panel: Immersive Background & Testimonial */}
      <aside className="hidden lg:flex flex-1 relative overflow-hidden items-center justify-center">
        {/* Background Animation */}
        <AnimatedAurora />
        
        {/* Overlay Dark Vignette */}
        <div className="absolute inset-0 bg-background/50 [mask-image:radial-gradient(circle_at_center,transparent_0%,black_100%)] z-10 pointer-events-none" />
        
        {/* Decorative Quote */}
        <div className="relative z-20 max-w-lg p-12 text-center">
          <FadeIn delay={0.3}>
            <blockquote className="text-2xl font-medium text-white/90 leading-relaxed mb-6">
              {quote}
            </blockquote>
            <p className="text-primary font-semibold">
              — {quoteAuthor}
            </p>
          </FadeIn>
        </div>
      </aside>
    </main>
  );
};
