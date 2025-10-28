"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Button } from "../ui/button";
import { TrendingUp, Clock, Star } from "lucide-react";
import Link from "next/link";

export default function TailoredSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-8">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CUSTOM SOLUTIONS
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-[family-name:var(--font-work-sans)] bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            Tailored for Your Industry
          </h2>

          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Whether you're a clinic booking hundreds of appointments, a
            restaurant managing peak hours, or a retail brand scaling globally,
            AI Placers adapts to your workflows.
          </p>

          <motion.div
            className="glass rounded-3xl p-8 mb-12"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Scalable Solutions",
                  description:
                    "Grow from startup to enterprise with AI that scales with your business needs",
                },
                {
                  icon: Clock,
                  title: "24/7 Availability",
                  description:
                    "Never miss a customer interaction with round-the-clock AI voice agents",
                },
                {
                  icon: Star,
                  title: "Industry Expertise",
                  description:
                    "Pre-trained models for your specific industry requirements and compliance",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <Link
            href="https://calendly.com/bg-aiplacers/new-meeting"
            target="_blank"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r cursor-pointer from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4 rounded-full shadow-lg text-lg"
              >
                Book a Demo Today
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
