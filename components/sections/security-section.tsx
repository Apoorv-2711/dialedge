"use client";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Shield,
  CheckCircle,
  Database,
  Lock,
  Eye,
  Server,
  FileCheck,
  KeyRound,
  Radar,
  ArrowRight,
  Award,
  Sparkles,
  Building2,
  Globe,
} from "lucide-react";
import Link from "next/link";

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Advanced AI Guardrails",
      description:
        "AI pulls from approved knowledge sources to ensure accurate, brand-safe replies. No guesswork or off-script responses.",
      highlight: "Zero Hallucinations",
    },
    {
      icon: FileCheck,
      title: "Multi-Standard Compliance",
      description:
        "Fully compliant with SOC2, HIPAA, and GDPR regulations. Your sensitive data is handled securely across every interaction.",
      highlight: "Enterprise Ready",
    },
    {
      icon: Database,
      title: "In-House Data Management",
      description:
        "All customer data and call logs are encrypted and stored internally. Nothing goes to third parties for total control.",
      highlight: "Complete Privacy",
    },
    {
      icon: KeyRound,
      title: "End-to-End Encryption",
      description:
        "Military-grade encryption protects payment and cardholder data. Ideal for secure workflows like payments or verification.",
      highlight: "Bank-Level Security",
    },
    {
      icon: Radar,
      title: "Continuous Monitoring",
      description:
        "24/7 security testing and vulnerability management. Every system is monitored and validated for safe, stable performance.",
      highlight: "Always Protected",
    },
    {
      icon: Server,
      title: "Seamless Integrations",
      description:
        "Connect 200+ phone systems, CRMs, and calendars using SIP or API. Data flows in real time with enterprise-grade security.",
      highlight: "Universal Compatibility",
    },
  ];

  const complianceCertifications = [
    { name: "SOC 2 Type II", icon: Award, status: "Certified" },
    { name: "HIPAA", icon: Building2, status: "Compliant" },
    { name: "GDPR", icon: Globe, status: "Compliant" },
    { name: "ISO 27001", icon: Shield, status: "Certified" },
  ];

  const securityStats = [
    { value: "99.99%", label: "Uptime Guarantee", icon: Server },
    { value: "256-bit", label: "AES Encryption", icon: Lock },
    { value: "24/7", label: "Security Monitoring", icon: Eye },
    { value: "Zero", label: "Data Breaches", icon: Shield },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)",
            opacity: 0.05,
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 60%)",
            opacity: 0.04,
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7,
          }}
        />

        {/* Floating Security Icons */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-16 h-16 border border-primary/10 rounded-2xl flex items-center justify-center"
          animate={{
            rotate: [0, 10, -10, 0],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Shield className="w-8 h-8 text-primary/20" />
        </motion.div>
      </div>

      <div className="container relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">Compliance & Data Security </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              You Can Trust
            </span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Advanced encryption, automatic redaction, and strict adherence to
            compliance standards. Built for enterprises that demand the highest
            levels of security and privacy protection.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 h-full hover:border-primary/30 transition-all duration-500 dark:bg-secondary/10">
                {/* Feature Highlight Badge */}
                <div className="absolute -top-3 right-6">
                  <Badge
                    variant="outline"
                    className="bg-primary border-primary/20 text-white text-xs dark:bg-secondary dark:border-secondary/20"
                  >
                    {feature.highlight}
                  </Badge>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 dark:bg-secondary/10">
                  <feature.icon className="w-8 h-8 text-primary dark:text-secondary" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className=""
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Industry-Leading Certifications
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Certified and compliant with the world's most stringent security
              and privacy standards
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 dark:bg-secondary/10">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 dark:bg-secondary/10">
                    <cert.icon className="w-6 h-6 text-primary dark:text-secondary" />
                  </div>
                  <h4 className="font-bold text-card-foreground mb-2">
                    {cert.name}
                  </h4>
                  <Badge
                    variant="outline"
                    className="bg-primary border-primary/20 text-white text-xs dark:bg-secondary dark:border-secondary/20"
                  >
                    {cert.status}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
