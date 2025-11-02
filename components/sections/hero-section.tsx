"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Bot,
  Phone,
  MessageCircle,
  Zap,
  Shield,
  ArrowRight,
  Play,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary Gradient Orb */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
            opacity: 0.15,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary Gradient Orb */}
        <motion.div
          className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)",
            opacity: 0.1,
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />

        {/* Floating Geometric Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-20 h-20 border border-primary/20 rounded-2xl backdrop-blur-sm"
          animate={{
            rotate: [0, 360],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-secondary/10 rounded-full backdrop-blur-sm"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border-primary/20 text-primary font-medium"
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                AI-Powered • Enterprise Ready
              </Badge>
            </motion.div> */}

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <span className="block text-gray-900 dark:text-white">
                  Transform The Way
                </span>
                <span className="block">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    You Talk to Your Costumers
                  </span>
                </span>
                <span className="block text-gray-900 dark:text-white">
                  With DialEdge AI
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              Deliver seamless customer experiences 24/7 through smart, multilingual voice automation..
            </motion.p>

            {/* Feature Highlights */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: Phone, label: "Smart Phone Systems" },
                { icon: MessageCircle, label: "Multi-Channel Chat" },
                { icon: Shield, label: "Enterprise Security" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary/80">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div> */}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#contact">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold px-8 py-6 rounded-2xl shadow-lg transition-all duration-300 w-full sm:w-auto"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Book Demo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </motion.div>
              </Link>

              <Link href="#contact">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-semibold px-8 py-6 rounded-2xl border-2 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>GDPR Compliant</span>
              </div>
            </motion.div> */}
          </div>

          {/* Right Column - CTA Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative lg:block hidden"
          >
            <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl dark:bg-secondary/10">
              <div className="text-center space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-card-foreground">
                  Don't believe us?
                  <br />
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Have our AI give you a call.
                  </span>
                </h3>

                <div className="space-y-4">
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />

                  <Link href="#contact">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-6 rounded-xl shadow-lg"
                    >
                      Let's Talk
                    </Button>
                  </Link>
                </div>

                <div className="pt-4 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Instant AI-powered call</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>No commitment required</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Experience it yourself</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
