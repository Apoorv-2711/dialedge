import { Metadata } from "next";
import { TermsContent } from "@/components/terms/terms-content";

export const metadata: Metadata = {
  title: "Terms and Conditions - AI Placers",
  description:
    "Terms and conditions for AI Placers services and platform usage.",
};

export default function TermsPage() {
  return <TermsContent />;
}
