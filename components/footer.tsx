"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";
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
        "py-12 pb-6 bg-gray-50 dark:bg-background border-t border-border/10",
        className
      )}
    >
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-12 mb-8">
          {/* Company Info - Left Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-4"
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
              className="text-muted-foreground leading-relaxed text-sm max-w-sm"
            >
              Advanced conversational AI solutions that transform customer
              communication and automate business processes with
              enterprise-grade reliability and intelligence.
            </motion.p>
          </div>

          {/* Quick Links - Middle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4 text-base text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Home",
                  href: "/",
                },
                {
                  name: "About",
                  href: "/#about",
                },
                {
                  name: "Contact",
                  href: "/#contact",
                },
                {
                  name: "Pricing",
                  href: "/#pricing",
                },
                {
                  name: "Terms & Conditions",
                  href: "/terms",
                },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Get Started - Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4 text-base text-foreground">
              Get Started
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="/#book-demo"
                className="w-full bg-[#001f3f] hover:bg-[#003366] text-white hover:text-white px-6 py-3 rounded-full text-center font-medium transition-colors duration-300 text-sm"
              >
                Book a Demo
              </a>
              <a
                href="/#pricing"
                className="w-full border border-border hover:border-foreground/50 bg-background hover:bg-muted text-foreground hover:text-foreground px-6 py-3 rounded-full text-center font-medium transition-colors duration-300 text-sm"
              >
                View Pricing
              </a>
              <a
                href="#services"
                className="w-full border border-border hover:border-foreground/50 bg-background hover:bg-muted text-foreground hover:text-foreground px-6 py-3 rounded-full text-center font-medium transition-colors duration-300 text-sm"
              >
                Explore Features
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center border-t border-border/20 pt-6"
        >
          <p className="text-sm text-muted-foreground">
            © 2024 DialEdge AI. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
