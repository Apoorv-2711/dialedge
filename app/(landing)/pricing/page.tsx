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
  title: "Pricing - AI Voice Agents | AIPlacers",
  description:
    "Simple, transparent pricing for AI voice agents. Choose from Starter, Professional, or Enterprise plans. Start your 7-day free trial today.",
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
