"use client";

import * as React from "react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/Heading";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { Card } from "@/components/ui/Card";
import { AIVisualization } from "./AIVisualization";
import { Sparkles, BrainCircuit, Tag, CopyMinus, PenTool } from "lucide-react";

const FEATURES = [
  {
    title: "Smart Recommendations",
    description: "Suggest books based on branch and semester.",
    icon: BrainCircuit,
    color: "text-purple-400",
  },
  {
    title: "Price Prediction",
    description: "Estimate fair market price.",
    icon: Tag,
    color: "text-emerald-400",
  },
  {
    title: "Duplicate Detection",
    description: "Warn users if similar books already exist.",
    icon: CopyMinus,
    color: "text-rose-400",
  },
  {
    title: "AI Description Generator",
    description: "Automatically generate professional book descriptions.",
    icon: PenTool,
    color: "text-blue-400",
  },
];

export const AIRecommendation = () => {
  return (
    <Section className="py-24 relative z-10 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content & Features */}
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20">
                <Sparkles className="w-4 h-4" />
                AI Powered
              </div>
              <SectionHeading className="mb-6">
                AI Powered Book Discovery
              </SectionHeading>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Our recommendation engine helps students find books based on semester, branch, interests, previous searches and community trends.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map((feature) => (
                <StaggerItem key={feature.title}>
                  <Card variant="glass" className="p-6 h-full border-white/5 bg-white/5 hover:bg-white/10 transition-colors group cursor-default">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-background border border-white/10 shadow-inner group-hover:scale-110 transition-transform ${feature.color}`}>
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-foreground text-sm leading-tight">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right Side: Visualization */}
          <FadeIn delay={0.4} className="h-full flex items-center justify-center">
            <AIVisualization />
          </FadeIn>

        </div>
      </Container>
    </Section>
  );
};
