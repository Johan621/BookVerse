"use client";

import * as React from "react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/Heading";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { FloatingParticles } from "@/components/background/FloatingParticles";
import { StatCard } from "./StatCard";
import { BookOpen, IndianRupee, Users, Building2, Repeat, Leaf } from "lucide-react";

const STATS = [
  {
    title: "Books Shared",
    value: 12500,
    suffix: "+",
    icon: BookOpen,
    colorClass: "text-blue-400",
  },
  {
    title: "Money Saved",
    value: 2500000,
    prefix: "₹",
    suffix: "+",
    icon: IndianRupee,
    colorClass: "text-emerald-400",
  },
  {
    title: "Active Students",
    value: 45000,
    suffix: "+",
    icon: Users,
    colorClass: "text-purple-400",
  },
  {
    title: "Universities",
    value: 150,
    suffix: "+",
    icon: Building2,
    colorClass: "text-amber-400",
  },
  {
    title: "Successful Exchanges",
    value: 85000,
    suffix: "+",
    icon: Repeat,
    colorClass: "text-indigo-400",
  },
  {
    title: "CO₂ Saved (kg)",
    value: 12000,
    suffix: "+",
    icon: Leaf,
    colorClass: "text-emerald-500",
  },
];

export const StatisticsSection = () => {
  return (
    <Section className="py-24 relative z-10 overflow-hidden bg-background">
      
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 opacity-40">
        <FloatingParticles particleCount={30} />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <SectionHeading className="mb-6">
              Our Impact in Numbers
            </SectionHeading>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Every book exchanged makes a difference. See how our community is transforming education and the environment.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {STATS.map((stat, i) => (
            <StaggerItem key={i}>
              <StatCard {...stat} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
};
