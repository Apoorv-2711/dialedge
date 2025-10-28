import { Metadata } from "next";
import AboutHero from "@/components/about/about-hero";
import WhoWeAre from "@/components/about/who-we-are";
import { WhyChooseUs } from "@/components/about/why-choose-us";
import {
  ComparisonTableSection,
  CTASection,
  HowItWorksSection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "About Us - DialEdge AI",
  description:
    "Learn about DialEdge AI's mission to transform business communication with advanced conversational AI solutions. Discover our team, values, and commitment to enterprise-grade AI technology.",
};

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
