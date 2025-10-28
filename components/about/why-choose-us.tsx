"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MessageSquare,
  Clock,
  Users,
  TrendingUp,
  Zap,
  Shield,
  BarChart3,
  Brain,
} from "lucide-react";

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

export function WhyChooseUs() {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-14">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Four key advantages that set DialEdge AI apart from the competition
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              icon: Zap,
              title: "Instant Deployment",
              description:
                "Deploy your AI voice agent in minutes, not months, with tailored training based on your business preferences. Start engaging customers immediately without long onboarding delays.",
              gradient: "from-yellow-500 to-orange-500",
            },
            {
              icon: Clock,
              title: "24/7 Consistent Service",
              description:
                "Our AI agents work nonstop with perfect consistency and zero fatigue, ensuring your customers receive professional support anytime, anywhere.",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: TrendingUp,
              title: "Cost-Effective & Scalable",
              description:
                "Reduce costs by up to 70% compared to traditional staffing while scaling effortlessly as your business grows without the overhead of full-time employees.",
              gradient: "from-green-500 to-emerald-500",
            },
            {
              icon: Users,
              title: "Specialized Industry Expertise",
              description:
                "Choose from AI voice agents trained for specific roles and industries, giving your business the nuanced and professional service your customers expect.",
              gradient: "from-purple-500 to-pink-500",
            },
          ].map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <motion.div
                className="glass rounded-3xl p-6 h-full group hover:scale-105 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 gradient-text">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
