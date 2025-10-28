"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star } from "lucide-react";

export function ComparisonTableSection() {
  const features = [
    {
      name: "No-Code Setup",
      aiplacers: { value: true, label: "Full Support" },
      voiceai: { value: "Limited", label: "Limited" },
      blandai: { value: false, label: "Not Available" },
    },
    {
      name: "Multilingual Agents",
      aiplacers: { value: "50+ Languages", label: "50+ Languages" },
      voiceai: { value: "Limited Languages", label: "Limited" },
      blandai: { value: "Limited Languages", label: "Limited" },
    },
    {
      name: "Integration Depth",
      aiplacers: { value: "Deep Integrations", label: "Deep Integration" },
      voiceai: { value: "Basic", label: "Basic" },
      blandai: { value: "Basic", label: "Basic" },
    },
    {
      name: "24/7 Support",
      aiplacers: { value: true, label: "24/7 Available" },
      voiceai: { value: "Business Hours", label: "Limited Hours" },
      blandai: { value: true, label: "Not Available" },
    },
    {
      name: "Compliance (GDPR, HIPAA)",
      aiplacers: { value: "GDPR + HIPAA", label: "GDPR + HIPAA" },
      voiceai: { value: "Partial", label: "Partial" },
      blandai: { value: true, label: "Not Available" },
    },
    {
      name: "Pricing Transparency",
      aiplacers: { value: "Clear & Simple", label: "Transparent" },
      voiceai: { value: "Complex", label: "Complex" },
      blandai: { value: "Hidden Fees", label: "Hidden Costs" },
    },
  ];

  const competitors = [
    {
      name: "Voice.ai",
      description: "Basic voice AI platform",
      isPrimary: false,
      features: features.map((f) => f.voiceai),
    },
    {
      name: "DialEdge AI",
      description: "The complete AI voice solution",
      isPrimary: true,
      features: features.map((f) => f.aiplacers),
    },
    {
      name: "Bland.ai",
      description: "Simple voice generation",
      isPrimary: false,
      features: features.map((f) => f.blandai),
    },
  ];

  return (
    <section className="py-12 bg-muted/50">
      <div className="container">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-[family-name:var(--font-work-sans)]">
            Why Choose DialEdge AI Over Competitors?
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we compare to other AI voice solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Compact Competitor Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {competitors.map((competitor, index) => (
              <motion.div
                key={competitor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`h-full ${
                    competitor.isPrimary
                      ? "ring-2 ring-primary shadow-lg relative"
                      : ""
                  }`}
                >
                  <CardHeader className="text-center pb-3">
                    <div className="flex items-center justify-center mb-1">
                      {competitor.isPrimary && (
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      )}
                      <CardTitle
                        className={`text-lg ${
                          competitor.isPrimary ? "text-primary" : ""
                        }`}
                      >
                        {competitor.name}
                      </CardTitle>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {competitor.description}
                    </p>
                    {competitor.isPrimary && (
                      <Badge
                        variant="default"
                        className="mt-1 bg-primary text-primary-foreground text-xs absolute -top-4 left-1/2 transition -translate-x-12"
                      >
                        Recommended
                      </Badge>
                    )}
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Compact Feature Comparison */}
          <div className="space-y-4">
            {features.map((feature, featureIndex) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: featureIndex * 0.05 }}
              >
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-semibold text-center">
                      {feature.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {competitors.map((competitor, compIndex) => {
                        const featureData = competitor.features[featureIndex];
                        return (
                          <div
                            key={competitor.name}
                            className={`p-3 rounded-md border ${
                              competitor.isPrimary
                                ? "bg-primary/5 border-primary/20"
                                : "bg-muted/30 border-border"
                            }`}
                          >
                            <div className="flex items-center justify-center mb-1">
                              {competitor.isPrimary && (
                                <Star className="h-3 w-3 text-yellow-500 mr-1" />
                              )}
                              <div className="text-xs font-medium text-muted-foreground">
                                {competitor.name}
                              </div>
                            </div>
                            <div className="flex items-center justify-center">
                              {typeof featureData.value === "boolean" ? (
                                featureData.value ? (
                                  <div className="flex items-center text-green-600">
                                    <Check className="h-4 w-4 mr-1" />
                                    <span className="text-sm font-medium">
                                      Yes
                                    </span>
                                  </div>
                                ) : (
                                  <div className="flex items-center text-red-600">
                                    <X className="h-4 w-4 mr-1" />
                                    <span className="text-sm font-medium">
                                      No
                                    </span>
                                  </div>
                                )
                              ) : (
                                <div className="text-center">
                                  <span
                                    className={`text-sm font-medium ${
                                      competitor.isPrimary
                                        ? "text-primary"
                                        : "text-foreground"
                                    }`}
                                  >
                                    {featureData.label}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
