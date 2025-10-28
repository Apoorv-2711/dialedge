"use client";

import { motion } from "framer-motion";
import { Users, Phone, TrendingUp, Clock } from "lucide-react";

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

export function StatsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            { number: "100+", label: "Active Businesses", icon: Users },
            { number: "1M+", label: "Calls Handled", icon: Phone },
            { number: "70%", label: "Cost Reduction", icon: TrendingUp },
            { number: "24/7", label: "Availability", icon: Clock },
          ].map((stat, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <motion.div
                className="glass rounded-3xl p-6 text-center group hover:scale-105 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
