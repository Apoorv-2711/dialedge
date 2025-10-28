import CaseHero from "@/components/use-case/case-hero";
import IndustrySection from "@/components/use-case/industry-section";
import TailoredSection from "@/components/use-case/tailored-section";
import UseCasesSection from "@/components/use-case/use-cases-section";

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
