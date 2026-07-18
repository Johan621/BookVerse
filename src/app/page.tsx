import { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { SmartSearchSection } from "@/components/search/SmartSearchSection";
import { CategoryGrid } from "@/components/books/categories/CategoryGrid";
import { FeaturedBooks } from "@/components/books/FeaturedBooks";
import { ExchangeWorkflow } from "@/components/books/exchange/ExchangeWorkflow";
import { AIRecommendation } from "@/components/ai/AIRecommendation";
import { TrustSection } from "@/components/community/TrustSection";
import { CommunityEcosystem } from "@/components/community/CommunityEcosystem";
import { DashboardPreview } from "@/components/dashboard/DashboardPreview";
import { StatisticsSection } from "@/components/stats/StatisticsSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { CtaSection } from "@/components/cta/CtaSection";
import { AboutSection } from "@/components/about/AboutSection";

export const metadata: Metadata = {
  title: "Havnark | Discover. Exchange. Grow.",
  description: "Havnark is an AI-powered knowledge platform where readers discover books, exchange them, organize personal libraries, receive intelligent recommendations, and connect through a collaborative reading community.",
  alternates: {
    canonical: "/",
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <SmartSearchSection />
      <CategoryGrid />
      <FeaturedBooks />
      <ExchangeWorkflow />
      <AIRecommendation />
      <TrustSection />
      <CommunityEcosystem />
        <AboutSection />
      <DashboardPreview />
      <StatisticsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
