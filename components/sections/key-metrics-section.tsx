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

export function KeyMetricsSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              metric: "85%",
              label: "Average Conversion Uplift",
              subtitle: "Compared to human agents",
            },
            {
              metric: "2.3x",
              label: "Faster Response Time",
              subtitle: "Average call handling speed",
            },
            {
              metric: "94%",
              label: "Customer Satisfaction",
              subtitle: "Based on post-call surveys",
            },
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2 font-[family-name:var(--font-work-sans)]">
                    {item.metric}
                  </div>
                  <div className="text-lg font-semibold mb-1">{item.label}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.subtitle}
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
