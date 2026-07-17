"use client";

import * as React from "react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/Heading";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { BookCard, BookProps } from "./BookCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const MOCK_BOOKS: BookProps[] = [
  {
    id: "1",
    title: "Introduction to Algorithms, 3rd Edition",
    author: "Thomas H. Cormen",
    department: "Computer Science",
    semester: "Sem 3",
    condition: "Good",
    price: 850,
    rating: 4.8,
    isVerified: true,
  },
  {
    id: "2",
    title: "Engineering Mechanics: Dynamics",
    author: "J.L. Meriam, L.G. Kraige",
    department: "Mechanical",
    semester: "Sem 2",
    condition: "Like New",
    price: 600,
    rating: 4.5,
    isVerified: true,
  },
  {
    id: "3",
    title: "Database System Concepts",
    author: "Abraham Silberschatz",
    department: "Computer Science",
    semester: "Sem 5",
    condition: "Fair",
    price: 450,
    rating: 4.2,
    isVerified: false,
  },
  {
    id: "4",
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell, Peter Norvig",
    department: "AI & ML",
    semester: "Sem 6",
    condition: "Like New",
    price: 1200,
    rating: 4.9,
    isVerified: true,
  },
  {
    id: "5",
    title: "Microelectronic Circuits",
    author: "Adel S. Sedra",
    department: "Electronics",
    semester: "Sem 4",
    condition: "Heavily Used",
    price: 300,
    rating: 3.8,
    isVerified: false,
  },
  {
    id: "6",
    title: "Design of Concrete Structures",
    author: "Arthur H. Nilson",
    department: "Civil",
    semester: "Sem 5",
    condition: "Good",
    price: 750,
    rating: 4.6,
    isVerified: true,
  },
  {
    id: "7",
    title: "Marketing Management",
    author: "Philip Kotler",
    department: "MBA",
    semester: "Sem 1",
    condition: "Good",
    price: 900,
    rating: 4.7,
    isVerified: true,
  },
  {
    id: "8",
    title: "Gray's Anatomy for Students",
    author: "Richard Drake",
    department: "Medical",
    semester: "Sem 1",
    condition: "Like New",
    price: 2500,
    rating: 5.0,
    isVerified: true,
  },
];

export const FeaturedBooks = () => {
  return (
    <Section className="bg-background/50">
      <Container>
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <FadeIn>
            <SectionHeading>Featured Exchanges</SectionHeading>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
              Discover top-rated books available for immediate exchange or purchase from verified peers.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Button onClick={() => toast.info("Coming soon!")} variant="outline" className="gap-2 glass">
              View All Books <ArrowRight className="h-4 w-4" />
            </Button>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MOCK_BOOKS.map((book) => (
            <StaggerItem key={book.id}>
              <BookCard book={book} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
};
