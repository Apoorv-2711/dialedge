"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

export default function FeatureHero() {
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
      <section className="relative py-20 overflow-hidden">
        <div className="container">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge
                variant="outline"
                className="mb-6 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30"
              >
                Features & Solutions
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-work-sans)] text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Smarter Conversations,
              </span>
              <br />
              <span className="text-foreground">Real Results</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              At AI Placers, our AI voice agents don't just answer calls—they
              think, adapt, and engage like real professionals. Built with
              next-generation speech intelligence, multilingual fluency, and
              deep system integrations.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link href="/#book-demo">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 cursor-pointer"
                >
                  Book a Demo
                </Button>
              </Link>
              <Link href="/#book-demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 bg-transparent dark:border-primary/70 dark:hover:border-primary dark:hover:bg-primary/20 dark:text-white cursor-pointer"
                >
                  Start Free Trial
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
