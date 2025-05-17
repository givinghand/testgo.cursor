
import React from "react";
import { HeroSection } from "@/components/landing/HeroSection";
import { CubeAnimationSection } from "@/components/landing/CubeAnimationSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { StudentTestimonialsSection } from "@/components/landing/StudentTestimonialsSection";
import { TeacherTestimonialsSection } from "@/components/landing/TeacherTestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { CtaSection } from "@/components/landing/CtaSection";

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <HeroSection />
      <CubeAnimationSection />
      <StatsSection />
      <ComparisonSection />
      <BenefitsSection />
      <HowItWorksSection />
      <StudentTestimonialsSection />
      <TeacherTestimonialsSection />
      <PricingSection />
      <CtaSection />
    </div>
  );
}
