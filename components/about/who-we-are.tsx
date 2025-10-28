"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Brain } from "lucide-react";
import Image from "next/image";

type Props = {};

export default function WhoWeAre({}: Props) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="absolute top-10 left-1/4 w-20 h-20 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-2xl"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-xl"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Badge
                  variant="outline"
                  className="mb-6 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30 text-sm px-4 py-2"
                >
                  Our Story
                </Badge>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-work-sans)] leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Who We Are
                </span>
              </motion.h2>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  AI Placers is a cutting-edge AI voice technology company
                  headquartered in{" "}
                  <span className="text-primary font-semibold">
                    14 Harrow Place, London, England
                  </span>{" "}
                  and also have a development center in New Delhi, India . Since{" "}
                  <span className="text-secondary font-semibold">2023</span>,
                  we've been on a mission to revolutionize how businesses
                  communicate.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our solutions empower organizations to deploy human-like AI
                  voice agents that handle inbound and outbound calls, schedule
                  appointments, provide support, generate leads, and more—
                  <span className="text-primary font-semibold">24/7</span>, with
                  unmatched consistency.
                </p>
              </motion.div>

              <motion.div
                className="mt-8 p-6 backdrop-blur-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                  Our Mission
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We aim to enhance productivity, drive growth, and redefine
                  customer service using intelligent, always-on voice AI. Our
                  mission? Help businesses save up to{" "}
                  <span className="text-primary font-bold">70%</span> on
                  operational costs while delivering seamless, attentive
                  customer experiences.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative">
                {/* Main visual container */}
                <motion.div
                  className="backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 rounded-3xl p-8 shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <motion.div
                      className="text-center p-4 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="text-2xl font-bold text-primary mb-1">
                        2023
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Founded
                      </div>
                    </motion.div>
                    <motion.div
                      className="text-center p-4 bg-gradient-to-br from-secondary/20 to-transparent rounded-2xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 }}
                    >
                      <div className="text-2xl font-bold text-secondary mb-1">
                        24/7
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Available
                      </div>
                    </motion.div>
                    <motion.div
                      className="text-center p-4 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.0 }}
                    >
                      <div className="text-2xl font-bold text-primary mb-1">
                        70%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Cost Savings
                      </div>
                    </motion.div>
                    <motion.div
                      className="text-center p-4 bg-gradient-to-br from-secondary/20 to-transparent rounded-2xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.1 }}
                    >
                      <div className="text-2xl font-bold text-secondary mb-1">
                        50+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Languages
                      </div>
                    </motion.div>
                  </div>

                  {/* Central AI Icon */}
                  <motion.div
                    className="flex justify-center mb-6"
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full flex items-center justify-center shadow-lg">
                      <Image
                        src="/aiplacers-small-logo.png"
                        alt="AI"
                        width={40}
                        height={40}
                      />
                    </div>
                  </motion.div>

                  {/* Location Badge */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                  >
                    <Badge className="bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground border-primary/30 px-4 py-2">
                      🇮🇳 New Delhi, India
                    </Badge>
                  </motion.div>
                </motion.div>

                {/* Floating accent elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
