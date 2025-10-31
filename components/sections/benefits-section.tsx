"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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

export function BenefitsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-work-sans)]">
            Why AI Employees Outperform Human Staff?
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our customers say about their AI employees
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              metric: "24/7",
              label: "Always Available",
              description: "Never miss a customer.",
            },
            {
              metric: "70%",
              label: "Cost Savings",
              description: "Reduce operational costs.",
            },
            {
              metric: "3x",
              label: "Faster Response",
              description: "Handle calls instantly.",
            },
            {
              metric: "100%",
              label: "Consistency",
              description: "No errors, no fatigue.",
            },
          ].map((benefit, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="text-center p-6 dark:bg-secondary/10 dark:border-secondary/20 h-full">
                <CardContent className="flex flex-col justify-between h-full">
                  <div className="text-3xl font-bold text-secondary mb-2 font-[family-name:var(--font-work-sans)]">
                    {benefit.metric}
                  </div>
                  <div className="text-lg font-semibold">{benefit.label}</div>
                  <div className="text-sm text-muted-foreground">
                    {benefit.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
