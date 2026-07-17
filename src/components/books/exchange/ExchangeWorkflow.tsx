"use client";

import * as React from "react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/Heading";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Search, MessagesSquare, Handshake, Lightbulb, ArrowRight, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    id: 1,
    title: "Search",
    description: "Find the exact textbook you need using our AI-powered smart search engine.",
    icon: Search,
    color: "text-blue-400",
    bg: "bg-blue-500/20",
  },
  {
    id: 2,
    title: "Connect",
    description: "Chat securely with students from your campus to negotiate and agree on a deal.",
    icon: MessagesSquare,
    color: "text-purple-400",
    bg: "bg-purple-500/20",
  },
  {
    id: 3,
    title: "Exchange",
    description: "Meet up safely on campus to complete the transaction or book swap.",
    icon: Handshake,
    color: "text-emerald-400",
    bg: "bg-emerald-500/20",
  },
  {
    id: 4,
    title: "Learn",
    description: "Dive into your new material, save money, and share your knowledge.",
    icon: Lightbulb,
    color: "text-amber-400",
    bg: "bg-amber-500/20",
  },
];

export const ExchangeWorkflow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section className="">
      <Container>
        <FadeIn className="text-center mb-20">
          <SectionHeading>How It Works</SectionHeading>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            A simple, secure four-step process to get the resources you need.
          </p>
        </FadeIn>

        <div className="relative max-w-5xl mx-auto" ref={containerRef}>
          {/* Animated Background Line for Desktop */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden lg:block rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary to-blue-500"
              style={{ width: lineHeight }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {STEPS.map((step, index) => (
              <React.Fragment key={step.id}>
                <ScrollReveal direction="up" className="relative flex flex-col items-center">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="w-full relative group"
                  >
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 ${step.bg}`} style={{ zIndex: -1 }} />
                    
                    <Card variant="glass-heavy" className="flex flex-col items-center text-center p-8 h-full border-white/10 bg-background/40 backdrop-blur-xl group-hover:bg-white/10 transition-colors">
                      <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center mb-6 shadow-inner border border-white/10`}>
                        <step.icon className={`w-8 h-8 ${step.color}`} />
                      </div>
                      
                      <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full glass flex items-center justify-center font-bold text-lg text-foreground border-white/10">
                        {step.id}
                      </div>

                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </Card>
                  </motion.div>
                </ScrollReveal>

                {/* Arrows */}
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 z-20 items-center justify-center w-8 h-8 glass rounded-full" style={{ left: `calc(${((index + 1) * 25)}% - 1rem)` }}>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </motion.div>
                  </div>
                )}
                
                {/* Mobile Arrow */}
                {index < STEPS.length - 1 && (
                  <div className="flex lg:hidden justify-center my-2">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-8 h-8 glass rounded-full flex items-center justify-center border-white/10"
                    >
                      <ArrowDown className="w-4 h-4 text-primary" />
                    </motion.div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
