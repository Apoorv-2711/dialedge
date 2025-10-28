"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
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

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 gradient-bg-secondary">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Transform Your Business Communication
          </h2>
          <p className="text-xl text-muted-foreground">
            Enterprise-grade AI deployment in 3 streamlined steps
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              step: "1",
              title: "Strategic Assessment & Design",
              description:
                "Our experts analyze your business needs and design custom AI communication solutions tailored to your industry and workflows.",
              features: [
                "Business process analysis",
                "Custom solution architecture",
                "Integration planning",
              ],
            },
            {
              step: "2",
              title: "Seamless Implementation",
              description:
                "Deploy across all communication channels with enterprise-grade security and minimal disruption to existing operations.",
              features: [
                "Multi-channel deployment",
                "Enterprise security protocols",
                "Staff training & support",
              ],
            },
            {
              step: "3",
              title: "Continuous Optimization",
              description:
                "Monitor performance metrics, gather insights, and continuously optimize AI responses for maximum business impact.",
              features: [
                "Advanced analytics dashboard",
                "Performance optimization",
                "Ongoing strategic support",
              ],
            },
          ].map((step, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary-foreground font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-[family-name:var(--font-work-sans)]">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">
                    {step.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Check className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="/#contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 cursor-pointer"
            >
              See Live Demo
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
