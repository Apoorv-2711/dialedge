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
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Bot,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "AI-Powered Call System",
      description:
        "Handle every call with natural, human-like conversations, powered by advanced speech recognition and real-time intelligence.",
      icon: Phone,
      features: [
        "Smart Call Handling",
        "Voice Recognition",
        "24/7 Availability",
      ],
      category: "Voice Solutions",
    },
    {
      title: "Conversational Chat AI",
      description:
        "Offer instant, personalized support across web, mobile, and social platforms. Engage customers contextually, anytime, anywhere.",
      icon: MessageSquare,
      features: [
        "Multi-Channel Support",
        "Context Awareness",
        "Real-Time Responses",
      ],
      category: "Chat Solutions",
    },
    // {
    //   title: "Intelligent Analytics",
    //   description:
    //     "Real-time conversation analytics and insights to optimize customer interactions and improve business intelligence.",
    //   icon: BarChart3,
    //   features: [
    //     "Real-time Analytics",
    //     "Performance Insights",
    //     "Custom Reports",
    //   ],
    //   category: "Analytics",
    // },
    {
      title: "Workflow Automation",
      description:
        "Integrate seamlessly with your existing tools to automate repetitive tasks, eliminate manual effort, and streamline business operations.",
      icon: Zap,
      features: [
        "System Integration",
        "Task Automation",
        "Workflow Optimization",
      ],
      category: "Automation",
    },
    {
      title: "Smart Scheduling",
      description:
        "Simplify appointment management with intelligent booking, reminders, and calendar synchronisation, so you never miss a meeting again.",
      icon: Clock,
      features: ["Auto Booking", "Smart Reminders", "Calendar Sync"],
      category: "Scheduling",
    },
    // {
    //   title: "Customer Journey Tracking",
    //   description:
    //     "Advanced analytics that track customer interactions across touchpoints to improve satisfaction and retention.",
    //   icon: Users,
    //   features: [
    //     "Journey Mapping",
    //     "Touchpoint Analysis",
    //     "Retention Insights",
    //   ],
    //   category: "Analytics",
    // },
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)",
            opacity: 0.06,
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-20 w-60 h-60 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 60%)",
            opacity: 0.04,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -20, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />

        {/* Floating Geometric Elements */}
        <motion.div
          className="absolute top-1/3 left-10 w-16 h-16 border-2 border-primary/10 rounded-2xl"
          animate={{
            rotate: [0, 180, 0],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
            <span className="text-foreground">Comprehensive </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Communication
            </span>
            <span className="text-foreground"> Platform</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Transform your customer interactions with intelligent AI solutions
            designed to streamline operations, enhance experiences, and drive
            business growth across all touchpoints.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 h-full hover:border-primary/30 transition-all duration-300 dark:bg-secondary/10 cursor-default">
                {/* Category Badge */}
                <div className="absolute top-6 right-6">
                  <Badge
                    variant="outline"
                    className="text-xs bg-primary/10 border-primary/20 text-primary dark:bg-secondary/10 dark:border-secondary/20 dark:text-secondary"
                  >
                    {service.category}
                  </Badge>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 pt-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  {/* <div className="pt-4">
                    <button className="group/btn inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-200">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div> */}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
