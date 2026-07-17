"use client";

import * as React from "react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/Heading";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { CategoryCard } from "./CategoryCard";
import { 
  Laptop, 
  BrainCircuit, 
  Cpu, 
  Wrench, 
  Building2, 
  LineChart, 
  Stethoscope, 
  GraduationCap, 
  Trophy 
} from "lucide-react";

const CATEGORIES = [
  { title: "Computer Science", icon: Laptop, count: 4500, colorClass: "bg-blue-500/30 text-blue-400" },
  { title: "AI & ML", icon: BrainCircuit, count: 1200, colorClass: "bg-purple-500/30 text-purple-400" },
  { title: "Electronics", icon: Cpu, count: 2300, colorClass: "bg-emerald-500/30 text-emerald-400" },
  { title: "Mechanical", icon: Wrench, count: 1800, colorClass: "bg-orange-500/30 text-orange-400" },
  { title: "Civil", icon: Building2, count: 1500, colorClass: "bg-amber-500/30 text-amber-400" },
  { title: "MBA", icon: LineChart, count: 3200, colorClass: "bg-indigo-500/30 text-indigo-400" },
  { title: "Medical", icon: Stethoscope, count: 2100, colorClass: "bg-rose-500/30 text-rose-400" },
  { title: "School Books", icon: GraduationCap, count: 5400, colorClass: "bg-sky-500/30 text-sky-400" },
  { title: "Competitive Exams", icon: Trophy, count: 4800, colorClass: "bg-yellow-500/30 text-yellow-400" },
];

export const CategoryGrid = () => {
  return (
    <Section className="py-24 relative z-10">
      <Container>
        <FadeIn className="text-center mb-16">
          <SectionHeading>Explore by Discipline</SectionHeading>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Find textbooks, notes, and study materials organized by your field of study.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <StaggerItem key={category.title}>
              <CategoryCard
                title={category.title}
                icon={category.icon}
                count={category.count}
                colorClass={category.colorClass}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
};
