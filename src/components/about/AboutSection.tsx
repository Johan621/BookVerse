import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/Heading";
import { FadeIn } from "@/components/animations/FadeIn";

export const AboutSection = () => {
  return (
    <Section id="about" className="">
      <Container>
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <SectionHeading className="text-4xl md:text-5xl lg:text-6xl mb-6">
              About BookVerse AI
            </SectionHeading>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              BookVerse AI connects students across campuses, letting them exchange books effortlessly using AI‑matched trades. Our mission is to make education more affordable and collaborative.
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
};
