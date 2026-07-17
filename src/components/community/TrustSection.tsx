"use client";

import * as React from "react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/Heading";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { TrustCard } from "./TrustCard";
import { ShieldCheck, Users, MailCheck, Star, BadgeCheck, FileText } from "lucide-react";

const TRUST_METRICS = [
  {
    title: "Verified Students",
    description: "Every user must verify their identity to join our community.",
    icon: Users,
    value: 5000,
    suffix: "+",
    colorClass: "bg-blue-500/30 text-blue-400",
  },
  {
    title: "College Email Verification",
    description: "Exclusive to authentic students via mandatory .edu email checks.",
    icon: MailCheck,
    stringValue: "100%",
    colorClass: "bg-purple-500/30 text-purple-400",
  },
  {
    title: "Verified Listings",
    description: "All uploaded books and notes are scanned for quality and authenticity.",
    icon: FileText,
    value: 12000,
    suffix: "+",
    colorClass: "bg-emerald-500/30 text-emerald-400",
  },
  {
    title: "Safe Exchanges",
    description: "Secure, on-campus meetups heavily recommended by the platform.",
    icon: ShieldCheck,
    stringValue: "Secure",
    colorClass: "bg-rose-500/30 text-rose-400",
  },
  {
    title: "Ratings & Reviews",
    description: "Transparent feedback system ensures reliable trading partners.",
    icon: Star,
    value: 4.8,
    suffix: "/5",
    colorClass: "bg-amber-500/30 text-amber-400",
  },
  {
    title: "Successful Transactions",
    description: "Thousands of books successfully exchanged across 150+ colleges.",
    icon: BadgeCheck,
    value: 45000,
    suffix: "+",
    colorClass: "bg-indigo-500/30 text-indigo-400",
  },
];

export const TrustSection = () => {
  return (
    <Section id="trust" className="bg-background/30">
      <Container>
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-bold mb-6 border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4" />
            Trust & Safety
          </div>
          <SectionHeading>A Community You Can Trust</SectionHeading>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            We prioritize safety, transparency, and authenticity so you can focus on learning.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_METRICS.map((metric) => (
            <StaggerItem key={metric.title}>
              <TrustCard {...metric} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
};
