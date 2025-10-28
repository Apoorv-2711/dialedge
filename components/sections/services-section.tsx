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

export function ServicesSection() {
  return (
    <section id="services" className="py-20 gradient-bg-primary">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Comprehensive AI Communication Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Intelligent conversational AI solutions that streamline operations
            and enhance customer experiences across all touchpoints
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
              title: "Intelligent Call Routing",
              description:
                "Advanced AI-powered phone systems that intelligently route calls, handle inquiries, and provide 24/7 customer support with natural conversations.",
              icon: Phone,
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              title: "Smart Chat Support",
              description:
                "Multi-channel conversational AI that provides instant customer assistance across web, mobile, and social platforms with contextual understanding.",
              icon: MessageSquare,
              gradient: "from-green-500 to-emerald-500",
            },
            {
              title: "Voice Analytics & Insights",
              description:
                "Real-time conversation analytics that extract valuable insights from customer interactions to improve service quality and business intelligence.",
              icon: BarChart3,
              gradient: "from-purple-500 to-pink-500",
            },
            {
              title: "Automated Workflows",
              description:
                "Seamless integration with existing business systems to automate repetitive tasks and streamline operations across departments.",
              icon: Zap,
              gradient: "from-orange-500 to-red-500",
            },
            {
              title: "Smart Scheduling System",
              description:
                "Intelligent appointment management with automated booking, rescheduling, reminders, and seamless calendar synchronization across platforms.",
              icon: Clock,
              gradient: "from-indigo-500 to-purple-500",
            },
            {
              title: "Customer Journey Mapping",
              description:
                "Advanced analytics that track and optimize customer interactions across all touchpoints to improve satisfaction and retention rates.",
              icon: Users,
              gradient: "from-teal-500 to-blue-500",
            },
            {
              title: "Lead Intelligence Platform",
              description:
                "Automated lead qualification and nurturing system with intelligent scoring, personalized outreach, and CRM integration for higher conversions.",
              icon: TrendingUp,
              gradient: "from-yellow-500 to-orange-500",
            },
            {
              title: "Enterprise Security Suite",
              description:
                "Bank-grade security infrastructure with end-to-end encryption, compliance monitoring, and data protection for sensitive communications.",
              icon: Shield,
              gradient: "from-pink-500 to-rose-500",
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
