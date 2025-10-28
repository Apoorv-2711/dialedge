import { Metadata } from "next";
import { TermsContent } from "@/components/terms/terms-content";

export const metadata: Metadata = {
  title: "Terms and Conditions - DialEdge AI",
  description:
    "Terms and conditions for DialEdge AI conversational AI services and platform usage.",
};

export default function TermsPage() {
  return <TermsContent />;
}
