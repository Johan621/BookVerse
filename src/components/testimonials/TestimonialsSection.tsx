"use client";

import * as React from "react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/Heading";
import { FadeIn } from "@/components/animations/FadeIn";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { Heart } from "lucide-react";

export const TestimonialsSection = () => {
  return (
    <Section id="testimonials" className="">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-sm font-bold mb-6 border border-rose-500/20">
              <Heart className="w-4 h-4" />
              Loved by Students
            </div>
            <SectionHeading className="mb-6">
              Don&apos;t Just Take Our Word For It
            </SectionHeading>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Thousands of students are already using BookVerse AI to save money, share knowledge, and build stronger campus communities.
            </p>
          </FadeIn>
        </div>
      </Container>
      
      {/* Full width carousel */}
      <FadeIn delay={0.2} className="w-full">
        <TestimonialsCarousel />
      </FadeIn>
    </Section>
  );
};
