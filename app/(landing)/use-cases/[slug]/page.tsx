import { notFound } from "next/navigation";
import { Metadata } from "next";
import { industries, slugify } from "@/lib/industries";
import { getUseCaseContent } from "@/lib/useCaseContent";
import { Hero } from "./components/Hero";
import { BenefitsGrid } from "./components/BenefitsGrid";
import { HowSection } from "./components/HowSection";
import { FeaturesSections } from "./components/FeaturesSections";
import { CTASection } from "@/components/sections";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const match = industries.find((i) => slugify(i.name) === slug);
  const name = match?.name;
  return {
    title: name
      ? `${name} | DialEdge AI Solutions`
      : "Industry Solutions | DialEdge AI",
    description: name
      ? `Discover how DialEdge AI transforms ${name} with advanced conversational AI and intelligent communication solutions.`
      : "Explore how DialEdge AI empowers businesses across industries with next-generation conversational AI solutions.",
  };
}

export default async function UseCaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getUseCaseContent(slug);
  if (!content) return notFound();

  return (
    <>
      <Hero
        titleA={content.hero.titleA}
        titleB={content.hero.titleB}
        description={content.hero.description}
      />
      <BenefitsGrid
        benefits={content.benefits.content}
        name={content.benefits.title}
      />
      <HowSection
        title={content.how.title}
        description={content.how.description}
        badges={content.how.badges}
        image={content.how.image}
      />
      <FeaturesSections features={content.features} />
      <CTASection />
    </>
  );
}
