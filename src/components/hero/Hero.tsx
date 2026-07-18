"use client";

import * as React from "react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { HeroContent } from "./HeroContent";
import { HeroVisuals } from "./HeroVisuals";

// Backgrounds
import { AnimatedAurora } from "@/components/background/AnimatedAurora";
import { GradientMesh } from "@/components/background/GradientMesh";
import { NoiseLayer } from "@/components/background/NoiseLayer";
import { FloatingParticles } from "@/components/background/FloatingParticles";
import { MouseReactiveLight } from "@/components/background/MouseReactiveLight";

export const Hero = () => {
  return (
    <Section className="relative overflow-hidden min-min-h-screen w-full flex items-center pt-24">
      {/* Background Layers */}
      <AnimatedAurora />
      <GradientMesh />
      <FloatingParticles />
      <MouseReactiveLight />
      <NoiseLayer />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
        {/* Left Side: Content */}
        <HeroContent />

        {/* Right Side: Visuals */}
        <HeroVisuals />
      </Container>
    </Section>
  );
};
