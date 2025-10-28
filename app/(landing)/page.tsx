import {
  HeroSection,
  StatsSection,
  CompanyLogosSection,
  KeyMetricsSection,
  ServicesSection,
  ComparisonTableSection,
  BenefitsSection,
  HowItWorksSection,
  TestimonialsSection,
  PricingSection,
  CTASection,
  SecuritySection,
  FaqSection,
  ContactFormSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <HeroSection />
      <ContactFormSection />
      <StatsSection />
      <CompanyLogosSection />
      <KeyMetricsSection />
      <ServicesSection />
      <ComparisonTableSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <SecuritySection />
      <FaqSection />
      <CTASection />
    </div>
  );
}
