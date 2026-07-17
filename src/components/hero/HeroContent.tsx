"use client";

import * as React from "react";
import { RevealText } from "@/components/animations/RevealText";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { label: "Books Shared", value: 12000, suffix: "+" },
  { label: "Students", value: 5000, suffix: "+" },
  { label: "Saved by Students", value: 18, prefix: "₹", suffix: " Lakhs+" },
  { label: "Colleges", value: 150, suffix: "+" },
];

export const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center gap-8 py-12 md:py-20 lg:py-0">
      
      {/* Headlines */}
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <RevealText text="Exchange Books." delay={0} />
          <div className="flex flex-wrap items-center">
            <span className="mr-[0.25em]">Share</span>
            <span className="text-gradient">Knowledge.</span>
          </div>
          <RevealText text="Build Community." delay={0.4} />
        </h1>
        <FadeIn delay={0.6}>
          <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl leading-relaxed">
            Help students buy, sell, donate, and exchange textbooks while saving money and building a stronger learning community.
          </p>
        </FadeIn>
      </div>

      {/* CTAs */}
      <SlideUp delay={0.8} className="flex flex-wrap items-center gap-4">
        <MagneticButton className="bg-transparent border-none p-0 focus:outline-none">
          <Button size="lg" variant="primary" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
            Explore Books
          </Button>
        </MagneticButton>
        <MagneticButton className="bg-transparent border-none p-0 focus:outline-none">
          <Button size="lg" variant="glass" className="h-12 px-8 text-base">
            List Your Book
          </Button>
        </MagneticButton>
      </SlideUp>

      {/* Live Stats */}
      <StaggerContainer className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 pt-8 border-t border-border/50">
        {stats.map((stat, i) => (
          <StaggerItem key={i} className="flex flex-col gap-1">
            <span className="text-3xl font-bold tracking-tight text-foreground">
              {stat.prefix}
              <AnimatedCounter end={stat.value} duration={2.5} />
              {stat.suffix && (
                <span className="text-primary">{stat.suffix.replace("+", "")}</span>
              )}
              {stat.suffix && stat.suffix.includes("+") && <span className="text-primary">+</span>}
            </span>
            <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
          </StaggerItem>
        ))}
      </StaggerContainer>
      
    </div>
  );
};
