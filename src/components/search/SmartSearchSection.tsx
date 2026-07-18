"use client";

import * as React from "react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/Heading";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";
import { SmartSearchBar } from "./SmartSearchBar";
import { SearchSuggestions } from "./SearchSuggestions";
import { SearchFilters } from "./SearchFilters";

export const SmartSearchSection = () => {
  return (
    <Section className="-mt-12 lg:-mt-24 pb-24">
      <Container>
        <div className="flex flex-col items-center w-full">
          <FadeIn className="text-center mb-8">
            <SectionHeading>Discover Books Instantly</SectionHeading>
            <p className="mt-4 text-muted-foreground text-lg">Use AI to search by syllabus, topic, or specific course requirements.</p>
          </FadeIn>
          
          <SlideUp delay={0.2} className="w-full">
            <SmartSearchBar />
          </SlideUp>
          
          <FadeIn delay={0.4} className="w-full">
            <SearchSuggestions />
          </FadeIn>

          <SlideUp delay={0.6} className="w-full">
            <SearchFilters />
          </SlideUp>
        </div>
      </Container>
    </Section>
  );
};
