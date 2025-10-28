import { Metadata } from "next";
import PricingHero from "@/components/pricing/pricing-hero";
import PricingDisclaimers from "@/components/pricing/pricing-disclaimers";
import {
  PricingSection,
  TestimonialsSection,
  FaqSection,
  CTASection,
} from "@/components/sections";
import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Pricing - Conversational AI Solutions | DialEdge AI",
  description:
    "Transparent pricing for enterprise-grade conversational AI solutions. Flexible plans designed to scale with your business. Contact us for custom enterprise solutions.",
});

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingSection isShowHeader={false} />
      <TestimonialsSection />
      <FaqSection additionalInfoSection={<PricingDisclaimers />} />
      {/* <PricingDisclaimers /> */}
      <CTASection />
    </>
  );
}
