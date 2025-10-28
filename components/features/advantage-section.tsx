"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Building2, Phone, Globe, Shield } from "lucide-react";
import { TrendingUp, Zap, Users, Sparkles } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

export default function AdvantageSection() {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl"
          variants={floatingAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full blur-xl"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-14">
            The AI Placers Advantage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover why businesses choose AI Placers for their voice automation
            needs
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              icon: TrendingUp,
              title: "Boost Efficiency",
              description:
                "Free your human workforce for high-value tasks while AI handles routine interactions",
              metric: "3x",
              metricLabel: "Productivity Increase",
              color: "from-blue-500/20 to-cyan-500/20",
              iconColor: "text-blue-500",
            },
            {
              icon: Zap,
              title: "Cut Costs by up to 70%",
              description:
                "No training, breaks, or turnover issues - just consistent, reliable performance",
              metric: "70%",
              metricLabel: "Cost Reduction",
              color: "from-green-500/20 to-emerald-500/20",
              iconColor: "text-green-500",
            },
            {
              icon: Users,
              title: "Delight Customers",
              description:
                "Fast, friendly, and accurate responses every time with personalized interactions",
              metric: "94%",
              metricLabel: "Customer Satisfaction",
              color: "from-purple-500/20 to-pink-500/20",
              iconColor: "text-purple-500",
            },
            {
              icon: Sparkles,
              title: "Future-Proof Technology",
              description:
                "Regular updates and continuous AI learning keep your agents ahead of the curve",
              metric: "24/7",
              metricLabel: "Always Learning",
              color: "from-orange-500/20 to-red-500/20",
              iconColor: "text-orange-500",
            },
          ].map((advantage, index) => (
            <motion.div key={index} variants={fadeInUp} className="group">
              <Card className="h-full hover:shadow-2xl transition-all duration-500 backdrop-blur-xl bg-white/5 dark:bg-black/20 border border-white/20 overflow-hidden relative">
                {/* Background gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <CardContent className="p-8 relative">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <advantage.icon
                        className={`h-8 w-8 ${advantage.iconColor}`}
                      />
                    </div>

                    <div className="text-right">
                      <div
                        className={`text-4xl font-bold ${advantage.iconColor} mb-1`}
                      >
                        {advantage.metric}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {advantage.metricLabel}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-[family-name:var(--font-work-sans)] text-foreground  transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed  transition-colors duration-300">
                      {advantage.description}
                    </p>
                  </div>

                  {/* Floating accent elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-br from-secondary to-primary rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div
          className="backdrop-blur-xl bg-white/5 dark:bg-black/20 border border-white/20 rounded-2xl p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

          <div className="relative">
            <h3 className="text-2xl font-bold mb-8 text-center font-[family-name:var(--font-work-sans)]">
              Proven Results Across Industries
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  number: "100+",
                  label: "Businesses Trust Us",
                  icon: Building2,
                },
                { number: "1M+", label: "Calls Handled", icon: Phone },
                { number: "50+", label: "Languages Supported", icon: Globe },
                { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
