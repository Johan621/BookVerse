"use client";

import * as React from "react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/Heading";
import { FadeIn } from "@/components/animations/FadeIn";
import { FloatingAvatars } from "./FloatingAvatars";
import { CommunityHighlights } from "./CommunityHighlights";
import { Sparkles } from "lucide-react";

export const CommunityEcosystem = () => {
  return (
    <Section id="community" className="py-24 relative z-10 overflow-hidden bg-background">
      
      {/* Background Interactive Map / Floating Avatars */}
      <FloatingAvatars />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6 border border-blue-500/20">
              <Sparkles className="w-4 h-4" />
              Growing Ecosystem
            </div>
            <SectionHeading className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Join the Movement
            </SectionHeading>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              BookVerse AI isn't just an exchange platform. It's a rapidly expanding network of students dedicated to sharing knowledge and making education more affordable.
            </p>
          </FadeIn>
        </div>

        {/* Bento Grid Highlights */}
        <CommunityHighlights />

      </Container>
    </Section>
  );
};
