import AdvantageSection from "@/components/features/advantage-section";
import FeatureHero from "@/components/features/feature-hero";
import FeatureWhyChooseUs from "@/components/features/feature-why-choose-us";
import KeyFeature from "@/components/features/key-feature";
import SolutionSection from "@/components/features/solution-section";
import { CTASection } from "@/components/sections";

export default function page() {
  return (
    <>
      <FeatureHero />
      <KeyFeature />
      <SolutionSection />
      <AdvantageSection />
      <FeatureWhyChooseUs />
      <CTASection />
    </>
  );
}
