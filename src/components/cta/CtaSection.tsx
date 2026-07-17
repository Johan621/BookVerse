"use client";

import * as React from "react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { PageHeading } from "@/components/common/Heading";
import { FadeIn } from "@/components/animations/FadeIn";
import { Floating } from "@/components/animations/Floating";
import { Parallax } from "@/components/animations/Parallax";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { AnimatedAurora } from "@/components/background/AnimatedAurora";
import { BookOpen, ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";

export const CtaSection = () => {
  return (
    <Section className="flex items-center justify-center min-h-[80vh]">
      
      {/* Immersive Animated Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedAurora />
        
        {/* Dark vignette to keep text readable */}
        <div className="absolute inset-0 bg-background/60 [mask-image:radial-gradient(circle_at_center,transparent_0%,black_100%)] z-10 pointer-events-none" />
      </div>

      <Container className="relative z-20">
        
        {/* Decorative Floating Books */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
          <Parallax offset={40}>
            <Floating duration={5} className="absolute top-0 left-[10%]">
              <div className="w-24 h-32 rounded-lg bg-gradient-to-tr from-white/10 to-white/30 backdrop-blur-md border border-white/20 shadow-2xl rotate-[-15deg] flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white/50" />
              </div>
            </Floating>
          </Parallax>
          <Parallax offset={-30}>
            <Floating duration={6} delay={1} className="absolute bottom-20 right-[15%]">
              <div className="w-20 h-28 rounded-lg bg-gradient-to-tr from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 shadow-2xl rotate-[20deg] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white/50" />
              </div>
            </Floating>
          </Parallax>
        </div>

        {/* Core Content Box */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="p-[1px] rounded-3xl bg-gradient-to-b from-white/20 to-white/5 shadow-2xl overflow-hidden">
            <div className="rounded-[23px] bg-background/40 backdrop-blur-2xl p-10 md:p-16 flex flex-col items-center text-center">
              
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-bold mb-8 border border-white/20 shadow-inner">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Your Journey Starts Here
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <PageHeading className="text-white mb-6">
                  Join thousands of students <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-purple-400">
                    exchanging knowledge.
                  </span>
                </PageHeading>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
                  Stop overpaying for textbooks. Start sharing, learning, and saving with the smartest community on campus.
                </p>
              </FadeIn>

              <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <MagneticButton>
                  <Button onClick={() => toast.info("Coming soon!")} size="lg" className="h-14 px-8 text-base font-bold bg-white text-black hover:bg-white/90 gap-2 w-full sm:w-auto shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                    Start Exploring <ArrowRight className="w-5 h-5" />
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button onClick={() => toast.info("Coming soon!")} size="lg" variant="outline" className="h-14 px-8 text-base font-bold text-white border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md w-full sm:w-auto">
                    List Your First Book
                  </Button>
                </MagneticButton>
              </FadeIn>

            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
};
