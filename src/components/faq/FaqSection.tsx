"use client";

import * as React from "react";
import { useState } from "react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/Heading";
import { FadeIn } from "@/components/animations/FadeIn";
import { FaqAccordion } from "./FaqAccordion";
import { HelpCircle } from "lucide-react";

const FAQ_DATA = [
  {
    question: "How does exchanging work?",
    answer: "You simply list the books you have and the books you need. Our AI matches you with other students on your campus. Once a match is found, you can chat securely and arrange a meetup to swap books.",
  },
  {
    question: "Is the platform free?",
    answer: "Yes! Havnark is completely free for students to use for direct exchanges. We don't charge subscription fees or transaction fees for swapping books.",
  },
  {
    question: "Can I donate books?",
    answer: "Absolutely. When uploading a book, you can mark it as 'For Donation'. This is a great way to help junior students and earn special community badges on your profile.",
  },
  {
    question: "How are users verified?",
    answer: "Every user must verify their account using a valid university .edu email address or by uploading a valid student ID card. This ensures our community remains secure and exclusive to real students.",
  },
  {
    question: "How do I contact sellers?",
    answer: "Once you find a book you want, click 'Request Exchange'. If accepted, a secure, built-in chat channel opens up where you can coordinate the meetup without sharing your personal phone number.",
  },
  {
    question: "Can I report fake listings?",
    answer: "Yes, our community relies on trust. You can report any suspicious user or listing directly from the book's page. Our moderation team reviews reports within 24 hours.",
  },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-background/50">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20">
              <HelpCircle className="w-4 h-4" />
              Got Questions?
            </div>
            <SectionHeading className="mb-6">
              Frequently Asked Questions
            </SectionHeading>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about Havnark and how it works.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-3xl mx-auto">
          {FAQ_DATA.map((faq, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <FaqAccordion
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
};
