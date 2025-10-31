import {
  HeroSection,
  StatsSection,
  CompanyLogosSection,
  KeyMetricsSection,
  ServicesSection,
  ClientsWeServeSection,
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
    <div
      className="min-h-screen relative overflow-hidden 
   
      bg-gradient-to-br from-background to-primary/5 dark:from-background dark:to-secondary/5
      "
    >
      <HeroSection />
      <ContactFormSection />
      {/* <StatsSection /> */}
      <CompanyLogosSection />
      {/* <KeyMetricsSection /> */}
      <ServicesSection />
      <ClientsWeServeSection />
      <ComparisonTableSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      {/* <SecuritySection /> */}
      <FaqSection />
      <CTASection />
    </div>
  );
}
