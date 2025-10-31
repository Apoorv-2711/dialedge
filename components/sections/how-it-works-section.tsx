"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Check,
  ArrowRight,
  Settings,
  Rocket,
  TrendingUp,
  Zap,
  Target,
  Shield,
  Users,
  BarChart3,
  CheckCircle2,
  Sparkles,
  Phone,
} from "lucide-react";
import Link from "next/link";

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "We start with a quick consultation to understand your business goals, call workflows, and tone of voice. Then we tailor your Al calling agent to match your brand perfectly - whether for inbound support or outbound sales.",
      icon: Phone,
      features: [
        // "Business process analysis",
        // "Custom solution architecture",
        // "Integration planning",
      ],
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-500/10",
    },
    {
      step: "02",
      title: "Integration & Testing",
      description:
        "Our team connects your Al agent to your phone systems or CRM, tests every scenario, and ensures calls sound human, responsive, and accurate. You get zero-hassle setup and a fully tested, ready-to-launch solution.",
      icon: Settings,
      features: [
        // "Multi-channel deployment",
        // "Enterprise security protocols",
        // "Staff training & support",
      ],
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-500/10",
    },
    {
      step: "03",
      title: "Go Live",
      description:
        "In just 24 hours, your Al agent starts answering or making calls for your business, instantly reducing missed calls and boosting conversions. Your business is now available 24/7 - powered by Al.",
      icon: Rocket,
      features: [
        // "Advanced analytics dashboard",
        // "Performance optimization",
        // "Ongoing strategic support",
      ],
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-10 right-20 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)",
            opacity: 0.04,
          }}
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 60%)",
            opacity: 0.06,
          }}
          animate={{
            x: [0, 70, 0],
            y: [0, -30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-20 h-20 border border-secondary/10 rounded-3xl"
          animate={{
            rotate: [0, 180, 360],
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 10,
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
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">Transform Your Business in </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            From assessment to optimization, our proven methodology ensures
            seamless AI integration that delivers measurable results for your
            business communications.
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className="relative">
          {/* Steps Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group cursor-default"
              >
                {/* Step Card */}
                <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 h-full hover:border-primary/30 transition-all duration-500 dark:bg-secondary/10">
                  {/* Step Number Badge */}
                  <motion.div
                    className={`absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-white font-bold text-lg">
                      {step.step}
                    </span>
                  </motion.div>

                  {/* Main Icon */}
                  <div className="flex items-center justify-center mb-6 mt-4">
                    <div
                      className={`w-20 h-20 ${step.bgColor} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="w-10 h-10 text-primary dark:text-secondary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Feature List */}
                    <div className="space-y-3 pt-4">
                      {step.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.2 + featureIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-sm"
                        >
                          <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="lg:hidden flex justify-center mt-8 mb-4"
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary rotate-90" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
