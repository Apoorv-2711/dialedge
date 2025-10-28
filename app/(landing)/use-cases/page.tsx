import { Metadata } from "next";
import CaseHero from "@/components/use-case/case-hero";
import IndustrySection from "@/components/use-case/industry-section";
import TailoredSection from "@/components/use-case/tailored-section";
import UseCasesSection from "@/components/use-case/use-cases-section";

export const metadata: Metadata = {
  title: "Industry Solutions - Conversational AI Use Cases | DialEdge AI",
  description:
    "Discover how DialEdge AI transforms businesses across industries with tailored conversational AI solutions. Explore use cases for healthcare, finance, retail, hospitality, and more.",
};

export default function page() {
  return (
    <>
      <CaseHero />
      <UseCasesSection />
      <IndustrySection />
      <TailoredSection />
    </>
  );
}
