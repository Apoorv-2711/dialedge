"use client";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Shield } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { Zap } from "lucide-react";
import { Database } from "lucide-react";
import { Lock } from "lucide-react";
import { Eye } from "lucide-react";
import { OrbitAnimation } from "../orbit-animation";
import { Button } from "../ui/button";
import Link from "next/link";

export function SecuritySection() {
  return (
    <section className="relative sm:py-12 py-12 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(244,106,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(78,46,235,0.1),transparent_50%)]" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Orbit Animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="backdrop-blur-xl bg-white/5 dark:bg-black/10 sm:border border-white/10 rounded-3xl sm:p-8 ">
              <OrbitAnimation />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm font-semibold mb-6">
                  SECURITY
                </Badge>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-work-sans)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Enterprise-Grade Security
              </motion.h2>

              <motion.p
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                We combine strong compliance, strict data control, and 99.99%
                uptime to meet the demands of enterprise-grade voice operations
                — without compromising speed or flexibility.
              </motion.p>
            </div>

            {/* Security features grid */}
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">
                    Strict Guardrails, No Hallucinations
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  AI pulls from approved knowledge sources to ensure accurate,
                  brand-safe replies. No guesswork or off-script responses, just
                  clear boundaries.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">SOC2, HIPAA, GDPR-Compliant</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Fully compliant with US & EU data regulations. Your sensitive
                  data is handled securely, with built-in privacy protections
                  across every interaction.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">200+ Integrations Supported</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Connect phone systems, CRMs, and calendars using SIP or API.
                  Data flows in real time for fast setup and deep sync with your
                  tools.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Data Managed In-House</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  All customer data and call logs are encrypted and stored
                  internally. Nothing goes to third parties, ensuring total
                  control and compliance.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">End-to-End Encryption</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Protect payment and cardholder data with built-in encryption.
                  Ideal for secure workflows like payments or account
                  verification.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Continuous Security Testing</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  We run ongoing security testing to identify and fix
                  vulnerabilities early. Every system is monitored and validated
                  for safe, stable performance.
                </p>
              </div>
            </motion.div>
            {/* Add CTA Button here */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-start items-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link href="https://calendly.com/bg-aiplacers/new-meeting" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r cursor-pointer from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 py-3 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book a Demo
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      →
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>

              {/* <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/50 cursor-pointer hover:border-primary bg-transparent hover:bg-primary/10 text-foreground px-6 py-3 text-base font-semibold rounded-full backdrop-blur-sm"
                >
                  Start Free Trial
                </Button>
              </motion.div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
