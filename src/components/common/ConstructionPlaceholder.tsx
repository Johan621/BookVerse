import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { ChevronRight, Wrench } from "lucide-react";

interface Breadcrumb {
  label: string;
  href: string;
}

interface ConstructionPlaceholderProps {
  title: string;
  icon?: React.ReactNode;
  breadcrumbs: Breadcrumb[];
  description?: string;
}

export const ConstructionPlaceholder = ({
  title,
  icon,
  breadcrumbs,
  description = "This page is currently under construction. We're building something amazing here.",
}: ConstructionPlaceholderProps) => {
  return (
    <Section className="md:py-24 flex flex-1 flex-col min-h-[calc(100vh-80px)]">
      <Container>
        {/* Breadcrumb Navigation */}
        <FadeIn className="mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.href}>
                <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground/50" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-foreground font-medium">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        </FadeIn>

        {/* Placeholder Content */}
        <FadeIn delay={0.1} className="glass-heavy rounded-3xl p-8 md:p-16 border border-white/5 relative overflow-hidden">
          {/* Animated gradient background subtle effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 shadow-lg shadow-primary/5">
              {icon || <Wrench className="w-12 h-12 text-primary" />}
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6 border border-orange-500/20">
              <Wrench className="w-3 h-3" />
              UI Under Construction
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
              {title}
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
};
