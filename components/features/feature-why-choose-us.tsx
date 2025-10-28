"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Building2, Phone, Globe, Shield, Star } from "lucide-react";
import { TrendingUp, Zap, Users } from "lucide-react";

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

export default function FeatureWhyChooseUs() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"
          variants={floatingAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full blur-2xl"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Badge
              variant="outline"
              className="mb-6 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30 px-4 py-2"
            >
              Competitive Advantage
            </Badge>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-14">
            Why Choose AI Placers Solutions?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how AI Placers compares and delivers exceptional value for your
            business
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              advantage: "70% Lower Operational Cost",
              benefit:
                "Replace repetitive human tasks with efficient AI voice agents",
              icon: TrendingUp,
              color: "from-green-500/20 to-emerald-500/20",
              iconColor: "text-green-500",
              metric: "70%",
            },
            {
              advantage: "3x Faster Response Times",
              benefit: "Improve customer satisfaction with instant responses",
              icon: Zap,
              color: "from-blue-500/20 to-cyan-500/20",
              iconColor: "text-blue-500",
              metric: "3x",
            },
            {
              advantage: "Scalable Workforce",
              benefit: "Add or reduce AI agents based on your business needs",
              icon: Users,
              color: "from-purple-500/20 to-pink-500/20",
              iconColor: "text-purple-500",
              metric: "∞",
            },
            {
              advantage: "Consistent Quality",
              benefit: "No fatigue, mood swings, or human errors",
              icon: Shield,
              color: "from-orange-500/20 to-red-500/20",
              iconColor: "text-orange-500",
              metric: "100%",
            },
            {
              advantage: "Proven Results",
              benefit:
                "Trusted by 100+ businesses, managing over 1M customer interactions successfully",
              icon: Star,
              color: "from-yellow-500/20 to-amber-500/20",
              iconColor: "text-yellow-500",
              metric: "1M+",
            },
          ].map((row, index) => (
            <motion.div key={index} variants={fadeInUp} className="group">
              <Card className="backdrop-blur-xl bg-white/5 dark:bg-black/20 border border-white/20 hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                {/* Background gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${row.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <CardContent className="p-6 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${row.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <row.icon className={`h-6 w-6 ${row.iconColor}`} />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-bold font-[family-name:var(--font-work-sans)] text-foreground  transition-colors duration-300 mb-1">
                          {row.advantage}
                        </h3>
                        <p className="text-muted-foreground transition-colors duration-300 text-sm leading-relaxed">
                          {row.benefit}
                        </p>
                      </div>
                    </div>

                    <div className="text-right ml-4">
                      <div
                        className={`text-3xl font-bold ${row.iconColor} mb-1 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {row.metric}
                      </div>
                      <div className="text-xs text-muted-foreground  transition-colors duration-300 font-medium">
                        Improvement
                      </div>
                    </div>
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
          className="mt-16 backdrop-blur-xl bg-white/5 dark:bg-black/20 border border-white/20 rounded-2xl p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

          <div className="relative text-center">
            <h3 className="text-2xl font-bold mb-8 font-[family-name:var(--font-work-sans)]">
              Join Industry Leaders Who Trust AI Placers
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  number: "100+",
                  label: "Enterprise Clients",
                  icon: Building2,
                  color: "text-blue-500",
                },
                {
                  number: "1M+",
                  label: "Calls Processed",
                  icon: Phone,
                  color: "text-green-500",
                },
                {
                  number: "50+",
                  label: "Languages",
                  icon: Globe,
                  color: "text-purple-500",
                },
                {
                  number: "99.9%",
                  label: "Uptime SLA",
                  icon: Shield,
                  color: "text-orange-500",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>
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
