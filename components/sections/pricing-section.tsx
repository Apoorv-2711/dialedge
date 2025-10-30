"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

type Props = {
  isShowHeader?: boolean;
};

export function PricingSection({ isShowHeader = true }: Props) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 gradient-bg-accent">
      <div className="container">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {isShowHeader && (
            <>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 font-[family-name:var(--font-work-sans)]">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                Choose the plan that fits your business needs. No hidden fees,
                cancel anytime.
              </p>
            </>
          )}

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <motion.span
              className={cn(
                "text-md transition-all",
                !isYearly && "font-semibold"
              )}
              animate={{
                scale: !isYearly ? 1.05 : 1,
                opacity: !isYearly ? 1 : 0.7,
              }}
              transition={{ duration: 0.2 }}
            >
              Monthly
            </motion.span>
            <motion.button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-0  focus:ring-offset-0 data-[checked]:bg-primary"
              data-checked={isYearly}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.span
                className="inline-block h-6 w-6 rounded-full bg-white shadow-lg"
                animate={{
                  x: isYearly ? 24 : 4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            </motion.button>
            <motion.span
              className={cn(
                "text-md flex items-center gap-1 sm:gap-2 transition-all",
                isYearly && "font-semibold"
              )}
              animate={{
                scale: isYearly ? 1.05 : 1,
                opacity: isYearly ? 1 : 0.7,
              }}
              transition={{ duration: 0.2 }}
            >
              Yearly
              <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                Save 30%
              </Badge>
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              name: "Starter",
              subtitle: "For Small Teams",
              monthlyPrice: 49,
              yearlyPrice: 409,
              originalYearlyPrice: 588,
              description: "Perfect for small businesses getting started",
              features: [
                "1 AI Voice Agent; Fully customizable personality",
                "100 minutes/month; $0.30 per additional minute",
                "Inbound & Outbound Calls; Phone system integration",
                "Basic Integrations; CRM, Calendar, Email",
                "Email Support; 24-hour response time",
              ],
              cta: "Start Free Trial",
              ctaLink: "/#contact",
              ctaDescription: "7-day free trial • 30 min included",
              popular: false,
            },
            {
              name: "Professional",
              subtitle: "For Growing Companies",
              monthlyPrice: 149,
              yearlyPrice: 1249,
              originalYearlyPrice: 1788,
              description: "Ideal for scaling businesses",
              header: "Everything in Starter, plus:",
              features: [
                "3 Phone Numbers; Multiple agent deployment",
                "500 minutes/month; $0.25 per additional minute",
                "Advanced Integrations; Salesforce, HubSpot, Zapier",
                "Priority Support; 4-hour response time",
                "Dedicated Onboarding; Personal setup assistance",
                "24/7 Chat Support; Instant response time",
              ],
              cta: "Start Free Trial",
              ctaLink: "/#contact",
              ctaDescription: "7-day free trial • 30 min included",
              popular: true,
            },
            // {
            //   name: "Business",
            //   subtitle: "For Large Organizations",
            //   monthlyPrice: 299,
            //   yearlyPrice: 2509,
            //   originalYearlyPrice: 3588,
            //   description: "Ideal for larger practices and multiple locations",
            //   header: "Everything in Professional, plus:",
            //   features: [
            //     "Unlimited agent deployment; Scale without limits",
            //     "1500 minutes/month; $0.20 per additional minute",
            //     "1 full AI employee; Advanced AI capabilities",
            //     "Advanced integrations; 1000+ applications",
            //     "VIP Support; 2-hour response time",
            //     "Dedicated CSM; Personal account management",
            //     "24/7 Chat Support; Instant response time",
            //   ],
            //   cta: "Start Free Trial",
            //   ctaLink: "https://app.aiplacers.com/login",
            //   ctaDescription: "7-day free trial • 60 min included",
            //   popular: false,
            // },
            {
              name: "Enterprise",
              subtitle: "For Enterprise",
              monthlyPrice: null,
              yearlyPrice: null,
              originalYearlyPrice: null,
              description: "Tailored solutions for enterprise needs",
              header: "Everything in Business, plus:",
              features: [
                "Unlimited Agents & Minutes; Scale without limits",
                "Enterprise Security; SOC 2, HIPAA, GDPR compliant",
                "Dedicated Support & CSM; 1-hour response time",
                "Custom Integrations; API access & custom development",
                "Dedicated Data Protection Officer (DPO); GDPR compliance & data security",
              ],
              cta: "Contact Sales",
              ctaLink: "/#contact",
              ctaDescription: "Custom pricing • Volume discounts available",
              popular: false,
            },
          ].map((plan, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card
                className={`h-full relative dark:bg-secondary/10 ${
                  plan.popular ? "border-primary shadow-lg " : ""
                }
                `}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="text-xs sm:text-sm text-muted-foreground mb-1">
                    {plan.subtitle}
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-[family-name:var(--font-work-sans)]">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-3">
                    {plan.monthlyPrice ? (
                      <>
                        <div className="flex items-baseline justify-center gap-1">
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={`price-${isYearly ? "yearly" : "monthly"}-${
                                plan.name
                              }`}
                              className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.3 }}
                            >
                              ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                            </motion.span>
                          </AnimatePresence>
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={`period-${isYearly ? "yearly" : "monthly"}`}
                              className="text-sm text-muted-foreground"
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.3 }}
                            >
                              {isYearly ? "/year" : "/month"}
                            </motion.span>
                          </AnimatePresence>
                        </div>
                        <AnimatePresence>
                          {isYearly && (
                            <motion.div
                              className="mt-1"
                              initial={{ opacity: 0, height: 0, y: -10 }}
                              animate={{ opacity: 1, height: "auto", y: 0 }}
                              exit={{ opacity: 0, height: 0, y: -10 }}
                              transition={{ duration: 0.3 }}
                            >
                              <motion.span
                                className="text-xs text-muted-foreground line-through"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                              >
                                ${plan.originalYearlyPrice}/year
                              </motion.span>
                              <motion.div
                                className="inline-block ml-1"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.15 }}
                              >
                                <Badge
                                  variant="secondary"
                                  className="text-xs px-1 py-0"
                                >
                                  Save $
                                  {plan.originalYearlyPrice - plan.yearlyPrice}
                                </Badge>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <>
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                          Custom
                        </span>
                        <span className="text-muted-foreground"></span>
                      </>
                    )}
                  </div>
                  <CardDescription className="mt-2 text-xs sm:text-sm">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 px-4 py-0">
                  {plan.header && (
                    <CardDescription className="text-start pb-0 mb-2 pl-0.5 dark:text-white font-semibold text-xs sm:text-sm">
                      {plan.header}
                    </CardDescription>
                  )}
                  <ul className="space-y-2 mb-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex gap-2 text-xs sm:text-sm text-start justify-start items-start"
                      >
                        <CircleCheckBig className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <div className="flex flex-col leading-tight">
                          <span className="font-medium">
                            {feature.split(";")[0]}
                          </span>
                          {feature.split(";")[1] && (
                            <span className="text-muted-foreground text-xs mt-0.5">
                              {feature.split(";")[1]}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="px-4 pb-4 pt-2">
                  <Link href={plan.ctaLink}>
                    <Button
                      className={`w-full text-sm cursor-pointer ${
                        plan.popular
                          ? "bg-primary hover:bg-primary/90"
                          : "bg-secondary hover:bg-secondary/90"
                      }`}
                      size="default"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                  <p className="text-xs text-muted-foreground text-center mt-2 leading-tight">
                    {plan.ctaDescription}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground max-w-4xl mx-auto">
            All plans include: 50+ languages • No-code setup • 24/7 availability
            • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
