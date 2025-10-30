"use client";

import { Shield, Lock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";
import { industries, slugify } from "@/lib/industries";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer
      className={cn(
        "py-8 pb-5 bg-background/95 backdrop-blur-sm border-t border-border/10 relative overflow-hidden",
        className
      )}
    >
      {/* Floating background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-5 gap-12 mb-8">
          {/* Company Info - Left Side */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-6"
            >
              {mounted && (
                <Image
                  src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                  alt="DialEdge AI"
                  width={150}
                  height={100}
                />
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-8 leading-relaxed text-lg max-w-md"
            >
              Advanced conversational AI solutions that transform customer
              communication and automate business processes with
              enterprise-grade reliability and intelligence.
            </motion.p>

            {/* Compliance Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-2 px-3 py-2 glass rounded-lg border border-border/20">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium">SOC 2</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 glass rounded-lg border border-border/20">
                <Lock className="h-4 w-4 text-secondary" />
                <span className="text-xs font-medium">GDPR</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 glass rounded-lg border border-border/20">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-xs font-medium">HIPAA</span>
              </div>
            </motion.div>
          </div>

          {/* Navigation Columns - Right Side */}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-8">
            {/* Company Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-6 text-lg text-foreground">
                Company
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    name: "Services",
                    href: "/#services",
                  },
                  {
                    name: "How It Works",
                    href: "/#how-it-works",
                  },
                  {
                    name: "Testimonials",
                    href: "/#testimonials",
                  },
                  {
                    name: "Pricing",
                    href: "/#pricing",
                  },
                  {
                    name: "Terms & Conditions",
                    href: "",
                  },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products Column */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-6 text-lg text-foreground">
                Products
              </h3>
              <ul className="space-y-4">
                {industries.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <a
                      href={`/use-cases/${slugify(item.name)}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/use-cases"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    More
                  </a>
                </li>
              </ul>
            </motion.div> */}

            {/* Resources Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-6 text-lg text-foreground">
                Resources
              </h3>
              <ul className="space-y-4">
                {[
                  "Documentation",
                  "API Reference",
                  "Tutorials",
                  "Support",
                  "Community",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
        className="text-center border-t border-border dark:border-border/20 pt-4"
      >
        <p className="text-sm text-muted-foreground">
          © 2024 DialEdge AI. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
