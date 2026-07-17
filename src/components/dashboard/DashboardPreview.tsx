"use client";

import * as React from "react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/Heading";
import { FadeIn } from "@/components/animations/FadeIn";
import { DashboardMockup } from "./DashboardMockup";
import { LayoutDashboard } from "lucide-react";

export const DashboardPreview = () => {
  return (
    <Section className="">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20">
              <LayoutDashboard className="w-4 h-4" />
              Student Dashboard
            </div>
            <SectionHeading className="mb-6">
              Your Personal Knowledge Hub
            </SectionHeading>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Track your exchanges, monitor your savings, and get AI-powered recommendations—all from a beautifully designed, intuitive dashboard.
            </p>
          </FadeIn>
        </div>

        {/* Dashboard Mockup Component */}
        <DashboardMockup />

      </Container>
    </Section>
  );
};
