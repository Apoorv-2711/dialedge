"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-16 overflow-hidden dark:bg-secondary/10">
      {/* Floating orbs */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-secondary/40 to-primary/40 rounded-full blur-xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 max-w-5xl mx-auto">
        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 rounded-3xl p-8 lg:p-12 text-center dark:bg-secondary/10 dark:border dark:border-secondary/20"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                Ready to Transform Your Business?
              </h3>
              <Sparkles className="w-6 h-6 text-secondary" />
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using DialEdge AI to
              revolutionize their customer interactions and drive unprecedented
              growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </motion.button>

              <button className="text-primary font-medium px-6 py-4 rounded-2xl border border-primary/30 hover:bg-primary/10 transition-all duration-300">
                View All Features
              </button>
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 rounded-3xl opacity-30">
            <div className="absolute top-4 left-4 w-8 h-8 border border-primary/20 rounded-lg" />
            <div className="absolute top-8 right-8 w-6 h-6 bg-secondary/20 rounded-full" />
            <div className="absolute bottom-6 left-8 w-4 h-4 bg-primary/20 rounded-full" />
            <div className="absolute bottom-4 right-6 w-10 h-10 border border-secondary/20 rounded-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
