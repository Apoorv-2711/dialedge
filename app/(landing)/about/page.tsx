import AboutHero from "@/components/about/about-hero";
import WhoWeAre from "@/components/about/who-we-are";
import { WhyChooseUs } from "@/components/about/why-choose-us";
import {
  ComparisonTableSection,
  CTASection,
  HowItWorksSection,
} from "@/components/sections";

export default function page() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <WhyChooseUs />
      <ComparisonTableSection />
      <HowItWorksSection />
      <CTASection />
    </>
  );
}
