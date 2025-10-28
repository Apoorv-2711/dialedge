"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { industries, slugify } from "@/lib/industries";
import { Building2, ArrowRight } from "lucide-react";
import { CheckCircle } from "lucide-react";

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

// industries data is now imported from lib/industries

export default function IndustrySection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6">
            <Building2 className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              INDUSTRY SOLUTIONS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-work-sans)] bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            Industries We Empower
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored AI voice solutions for every industry's unique challenges
            and opportunities
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Link
                href={`/use-cases/${slugify(industry.name)}`}
                className="block h-full"
              >
                <motion.div
                  className="glass rounded-3xl p-8 h-full group hover:scale-105 transition-all duration-300 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <industry.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                      {industry.name}
                    </h3>
                    <div className="space-y-3">
                      {industry.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <span className="inline-flex items-center justify-center gap-1 text-sm font-medium text-primary group-hover:underline">
                        Read more
                        <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
