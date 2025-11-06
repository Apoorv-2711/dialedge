import { Metadata } from "next";
import { PrivacyContent } from "@/components/privacy/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy - DialEdge AI",
  description:
    "Privacy policy for DialEdge AI conversational AI services and platform usage.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
