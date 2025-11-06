"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star, Crown, Zap, Shield, Globe } from "lucide-react";

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
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
            opacity: 0.08,
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)",
            opacity: 0.06,
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16 border border-primary/10 rounded-3xl"
          animate={{
            rotate: [0, 180, 360],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">Why Choose </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DialEdge AI
            </span>
            <span className="text-foreground"> Over Competitors?</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            See how we compare to other AI voice solutions and discover why
            hundreds of businesses choose DialEdge AI for their conversational
            AI needs.
          </p>
        </motion.div>

        {/* Competitor Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {competitors.map((competitor, index) => (
            <motion.div
              key={competitor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: competitor.isPrimary ? 0 : -5 }}
              className="relative group"
            >
              <div
                className={`
                relative h-full rounded-3xl p-8 backdrop-blur-sm border transition-all duration-300
                ${
                  competitor.isPrimary
                    ? "bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 shadow-2xl scale-105"
                    : "bg-card/50 border-border/50 hover:border-primary/20 dark:bg-secondary/10 dark:border-secondary/20"
                }
              `}
              >
                {/* Winner Badge */}
                {competitor.isPrimary && (
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 2,
                      // repeat: ,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                  >
                    🏆 #1 Choice
                  </motion.div>
                )}

                {/* Company Header */}
                <div className="text-center mb-8">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      competitor.isPrimary
                        ? "text-primary"
                        : "text-card-foreground"
                    }`}
                  >
                    {competitor.name}
                  </h3>

                  <p className="text-muted-foreground text-sm">
                    {competitor.description}
                  </p>
                </div>

                {/* Feature Preview */}
                <div className="space-y-3">
                  {competitor.features
                    .slice(0, 3)
                    .map((feature, featureIndex) => {
                      const isPositive =
                        typeof feature.value === "boolean"
                          ? feature.value
                          : !feature.label.includes("Limited") &&
                            !feature.label.includes("Not Available") &&
                            !feature.label.includes("Complex") &&
                            !feature.label.includes("Hidden");

                      return (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3 text-sm"
                        >
                          {isPositive ? (
                            <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 bg-destructive/20 rounded-full flex items-center justify-center">
                              <X className="w-3 h-3 text-destructive" />
                            </div>
                          )}
                          <span className="text-muted-foreground flex-1">
                            {typeof feature.value === "boolean"
                              ? features[featureIndex].name
                              : `${features[featureIndex].name}: ${feature.label}`}
                          </span>
                        </div>
                      );
                    })}
                </div>

                {/* Glow Effect for Winner */}
                {competitor.isPrimary && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl -z-10" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Feature Comparison */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Detailed Feature Comparison
            </h3>
            <p className="text-muted-foreground">
              A comprehensive breakdown of features across all platforms
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, featureIndex) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: featureIndex * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 dark:bg-secondary/10 dark:border-secondary/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    {featureIndex === 0 && (
                      <Zap className="w-6 h-6 text-primary" />
                    )}
                    {featureIndex === 1 && (
                      <Globe className="w-6 h-6 text-primary" />
                    )}
                    {featureIndex === 2 && (
                      <Shield className="w-6 h-6 text-primary" />
                    )}
                    {featureIndex === 3 && (
                      <Check className="w-6 h-6 text-primary" />
                    )}
                    {featureIndex === 4 && (
                      <Shield className="w-6 h-6 text-primary" />
                    )}
                    {featureIndex === 5 && (
                      <Star className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-card-foreground">
                      {feature.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Compare how each platform handles this feature
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-4">
                  {competitors.map((competitor, compIndex) => {
                    const featureData = competitor.features[featureIndex];
                    const isPositive =
                      typeof featureData.value === "boolean"
                        ? featureData.value
                        : !featureData.label.includes("Limited") &&
                          !featureData.label.includes("Not Available") &&
                          !featureData.label.includes("Complex") &&
                          !featureData.label.includes("Hidden");

                    return (
                      <div
                        key={competitor.name}
                        className={`
                          p-6 rounded-xl border transition-all duration-300
                          ${
                            competitor.isPrimary
                              ? "bg-primary/5 border-primary/20 shadow-lg dark:bg-secondary/10 dark:border-secondary/20"
                              : "bg-muted/30 border-border hover:bg-muted/50 dark:bg-secondary/5 dark:border-secondary/10"
                          }
                        `}
                      >
                        <div className="flex items-center gap-2 mb-4">
                          {competitor.isPrimary && (
                            <Crown className="w-4 h-4 text-primary dark:text-primary-foreground" />
                          )}
                          <span
                            className={`font-semibold ${
                              competitor.isPrimary
                                ? "text-primary dark:text-primary-foreground"
                                : "text-card-foreground"
                            }`}
                          >
                            {competitor.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          {typeof featureData.value === "boolean" ? (
                            <>
                              {featureData.value ? (
                                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-green-500/20 border-green-500/20">
                                  <Check className="w-4 h-4  text-green-500" />
                                </div>
                              ) : (
                                <div className="w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center">
                                  <X className="w-4 h-4 text-destructive" />
                                </div>
                              )}
                              <span
                                className={`font-medium ${
                                  featureData.value
                                    ? "text-primary dark:text-primary-foreground"
                                    : "text-destructive"
                                }`}
                              >
                                {featureData.value
                                  ? "Available"
                                  : "Not Available"}
                              </span>
                            </>
                          ) : (
                            <>
                              {isPositive ? (
                                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-green-500/20 border-green-500/20">
                                  <Check className="w-4 h-4 text-green-500" />
                                </div>
                              ) : (
                                <div className="w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center">
                                  <X className="w-4 h-4 text-destructive" />
                                </div>
                              )}
                              <span
                                className={`font-medium ${
                                  isPositive
                                    ? "text-primary dark:text-primary-foreground"
                                    : "text-destructive"
                                }`}
                              >
                                {featureData.label}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
