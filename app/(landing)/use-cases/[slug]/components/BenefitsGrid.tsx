"use client";
import { motion } from "framer-motion";

type Benefit = {
  title: string;
  description: string;
  icon: string; // lucide icon name
  gradient: string;
};

import { Zap, BarChart3, TrendingUp, Heart } from "lucide-react";

const iconMap: Record<string, any> = {
  Zap,
  BarChart3,
  TrendingUp,
  Heart,
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

export function BenefitsGrid({
  benefits,
  name,
}: {
  benefits: Benefit[];
  name: string;
}) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent pb-2">
            {name}
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon] ?? Heart;
            return (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div
                  className="glass rounded-3xl p-6 h-full group hover:scale-105 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 gradient-text">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
