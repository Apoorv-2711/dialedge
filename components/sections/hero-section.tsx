"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Users, Sparkles, Cpu } from "lucide-react";
import Link from "next/link";

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    rotate: [-1, 1, -1],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut" as const,
    },
  },
};

export function HeroSection() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-secondary/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.4, 0.1],
            x: [0, 60, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 6,
          }}
        />
      </div>

      <section className="relative sm:py-10 md:py-20 md:pb-10 overflow-hidden gradient-bg-hero">
        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mb-8">
              <motion.div
                className="absolute -top-10 left-1/4 w-16 h-16 glass rounded-2xl sm:flex items-center justify-center hidden "
                variants={floatingAnimation}
                animate="animate"
              >
                <Sparkles className="h-8 w-8 text-primary" />
              </motion.div>
              <motion.div
                className="absolute -top-5 right-1/4 w-12 h-12 glass rounded-xl sm:flex items-center justify-center hidden"
                variants={floatingAnimation}
                animate="animate"
                transition={{ delay: 2 }}
              >
                <Cpu className="h-6 w-6 text-secondary" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge
                variant="outline"
                className="mb-8 border-primary/30 text-primary bg-primary/10 backdrop-blur-sm px-6 py-2 sm:text-lg rounded-full"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Powering enterprise communication solutions
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="gradient-text">Next-Gen</span>
              <br />
              <span className="text-foreground">Conversational</span>{" "}
              <span className="relative">
                <span className="gradient-text">AI</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Revolutionize customer engagement with advanced conversational AI.
              Smart phone systems, intelligent chat support, and automated
              workflows that scale your business operations effortlessly.
            </motion.p>

            <motion.div
              className="flex flex-col gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link href="#book-demo" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r cursor-pointer from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-12 py-6 text-2xl rounded-full shadow-2xl h-16 w-60"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Book a Demo
                  </Button>
                </motion.div>
              </Link>

              <div className="glass rounded-2xl px-8 py-4">
                <div className="flex items-center gap-6 text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Enterprise-grade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <span>Multi-channel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* <motion.div
              className="glass rounded-3xl p-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                  Live Demo
                </Badge>
              </div>
              <div className="text-left space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div className="glass rounded-2xl px-4 py-3 max-w-md">
                    <p className="text-sm">
                      "Hi! I'm your AI receptionist. How can I help you today?"
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-primary/10 rounded-2xl px-4 py-3 max-w-md">
                    <p className="text-sm">
                      "I'd like to schedule an appointment for next week."
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-secondary" />
                  </div>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </section>
    </>
  );
}
