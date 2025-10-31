"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  GraduationCap,
  Stethoscope,
  Scissors,
  UtensilsCrossed,
  Wrench,
  ArrowRight,
  Sparkles,
  Users,
  MapPin,
} from "lucide-react";

export function ClientsWeServeSection() {
  const industries = [
    {
      name: "Real estate firms",
      icon: Building2,
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      name: "Coaching institutes & edtech",
      icon: GraduationCap,
      color: "from-purple-500/20 to-indigo-500/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      name: "Clinics & healthcare",
      icon: Stethoscope,
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      name: "Salons & wellness",
      icon: Scissors,
      color: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-600 dark:text-pink-400",
    },
    {
      name: "Restaurants",
      icon: UtensilsCrossed,
      color: "from-orange-500/20 to-amber-500/20",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      name: "Local service providers",
      icon: Wrench,
      color: "from-teal-500/20 to-cyan-500/20",
      iconColor: "text-teal-600 dark:text-teal-400",
    },
  ];

  return (
    <section className="relative py-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)",
            opacity: 0.04,
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 60%)",
            opacity: 0.03,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -40, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />

        {/* Floating Business Icons */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-16 h-16 border border-primary/10 rounded-full flex items-center justify-center"
          animate={{
            rotate: [0, 10, -10, 0],
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Users className="w-8 h-8 text-primary/20" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-12 h-12 border border-secondary/10 rounded-full flex items-center justify-center"
          animate={{
            rotate: [0, -12, 12, 0],
            y: [10, -10, 10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <MapPin className="w-6 h-6 text-secondary/20" />
        </motion.div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Industries </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                We Serve
              </span>
            </h2>

            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                DialEdge AI supports{" "}
                <span className="text-primary font-semibold">
                  growth-stage small and mid-sized businesses across India
                </span>{" "}
                that rely on high volumes of customer interaction.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl dark:bg-secondary/10">
                  <div className="text-2xl font-bold text-primary mb-1">
                    200+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Happy Clients
                  </div>
                </div>
                <div className="text-center p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl dark:bg-secondary/10">
                  <div className="text-2xl font-bold text-primary mb-1">6</div>
                  <div className="text-sm text-muted-foreground">
                    Key Industries
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Industries Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  Industries:
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-500 dark:bg-secondary/10 relative overflow-hidden">
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 dark:bg-secondary/10">
                        <industry.icon
                          className={`w-7 h-7 ${industry.iconColor}`}
                        />
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {industry.name}
                      </h4>

                      {/* Hover Arrow */}
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-sm text-primary font-medium">
                          Learn more
                        </span>
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 rounded-2xl p-6">
                <p className="text-muted-foreground mb-4">
                  Don't see your industry? We customize our AI solutions for any
                  business with high customer interaction volumes.
                </p>
                <div className="flex items-center justify-center gap-2 text-primary font-medium">
                  <span>Contact us for a custom solution</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
