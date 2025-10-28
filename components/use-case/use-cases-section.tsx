"use client";

import { motion } from "framer-motion";
import { Target, Calendar, Package, MessageSquare, Users } from "lucide-react";
import { CheckCircle } from "lucide-react";

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

const useCases = [
  {
    title: "Lead Qualification & Nurturing",
    description:
      "Run outbound campaigns to identify high-quality leads, ask pre-screening questions before transferring to sales reps, and send personalized follow-ups via call, SMS, or WhatsApp.",
    icon: Target,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Outbound campaigns",
      "Pre-screening questions",
      "Personalized follow-ups",
    ],
  },
  {
    title: "Appointment & Reservation Management",
    description:
      "Automate booking confirmations and reschedules, reduce no-shows with reminder calls, and free up staff to focus on in-person service.",
    icon: Calendar,
    gradient: "from-green-500 to-emerald-500",
    features: ["Booking automation", "Reminder calls", "Staff optimization"],
  },
  {
    title: "Order Tracking & Notifications",
    description:
      "Provide real-time delivery updates, proactively call customers with status changes, and reduce inbound call volume to human agents.",
    icon: Package,
    gradient: "from-orange-500 to-red-500",
    features: [
      "Real-time updates",
      "Proactive notifications",
      "Reduced call volume",
    ],
  },
  {
    title: "Feedback & Surveys",
    description:
      "Collect customer opinions post-purchase or service, run voice-based surveys with high response rates, and analyze insights to improve customer experience.",
    icon: MessageSquare,
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Post-purchase feedback",
      "Voice surveys",
      "Experience insights",
    ],
  },
  {
    title: "Employee Assistance",
    description:
      "Answer repetitive HR queries like leave balance, payroll, or policy details. Help IT teams with automated password resets and FAQs.",
    icon: Users,
    gradient: "from-indigo-500 to-blue-500",
    features: ["HR query automation", "IT support", "Internal assistance"],
  },
];

export default function UseCasesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6">
            <Target className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              POWERFUL USE CASES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-work-sans)] bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            Use Cases
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how AI voice agents transform business operations across
            different scenarios
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {useCases.map((useCase, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <motion.div
                className="glass rounded-3xl p-8 h-full group hover:scale-105 transition-all duration-300 relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <useCase.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
