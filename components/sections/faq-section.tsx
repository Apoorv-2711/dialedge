"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Shield,
  Zap,
  Clock,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Phone,
  Calendar,
  Users,
  Award,
} from "lucide-react";
import Link from "next/link";

type Props = {
  additionalInfoSection?: React.ReactNode;
};

export function FaqSection({ additionalInfoSection }: Props) {
  const faqData = [
    {
      question: "What is an AI Voice Agent?",
      answer:
        "An AI Voice Agent is an intelligent virtual employee that communicates naturally with your customers over calls. It can handle tasks like call routing, scheduling, customer support, and sales conversations-24/7. Unlike chatbots, it uses human-like voice interactions, ensuring customers feel they are speaking with a real representative.",
      icon: MessageCircle,
      category: "General",
    },
    {
      question: "How secure is my data?",
      answer:
        "DialEdge AI uses enterprise-grade security with SOC 2, GDPR, and HIPAA compliance. All data is end-to-end encrypted, stored internally, and never shared with third parties. Strict guardrails and continuous monitoring ensure safe, brand-compliant, and reliable interactions at every step.",
      icon: Shield,
      category: "Security",
    },
    {
      question: "Can I integrate my existing CRM/Calendar?",
      answer:
        "Yes. DialEdge AI connects with 200+ tools including Salesforce, HubSpot, Google Calendar, and Outlook. It syncs contacts, updates records, schedules appointments, and logs interactions in real-time - ensuring seamless integration into your existing workflows without disruption.",
      icon: Calendar,
      category: "Integration",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes. DialEdge AI offers a 7-day free trial. You can set up your AI employee in under 15 minutes, test voice interactions, integrate it with your systems, and explore its capabilities. This allows you to experience the value firsthand before making any commitment.",
      icon: Award,
      category: "Pricing",
    },
    {
      question: "How does it save me time?",
      answer:
        "DialEdge AI automates tasks like scheduling, call handling, and lead qualification. It works 24/7, handles multiple customers at once, and responds instantly - freeing your team to focus on high-value tasks while improving efficiency and reducing costs.",
      icon: Clock,
      category: "Benefits",
    },
    {
      question: "How quickly can I get started?",
      answer:
        "You can be up and running in under 15 minutes. Our simple setup process guides you through connecting your phone system, importing contacts, and configuring your AI assistant. No technical expertise required - just follow our step-by-step wizard.",
      icon: Zap,
      category: "Setup",
    },
  ];

  const supportStats = [
    { icon: Clock, value: "<5min", label: "Avg Response Time" },
    { icon: Users, value: "24/7", label: "Support Available" },
    { icon: CheckCircle2, value: "99%", label: "Issue Resolution" },
    { icon: Phone, value: "Live", label: "Expert Help" },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-secondary/2" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)",
            opacity: 0.04,
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 60%)",
            opacity: 0.03,
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
            delay: 8,
          }}
        />

        {/* Floating Question Mark */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-primary/10 rounded-full flex items-center justify-center"
          animate={{
            rotate: [0, 15, -15, 0],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <HelpCircle className="w-8 h-8 text-primary/20" />
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
            <span className="text-foreground">Frequently Asked </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about DialEdge AI. Can't find the answer
            you're looking for? Our support team is here to help you get
            started.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto "
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index + 1}`}
                  className="border-none"
                >
                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300 dark:bg-secondary/10 group">
                    <AccordionTrigger className="text-left px-8 py-6 hover:no-underline group-hover:text-primary transition-colors">
                      <div className="flex items-center gap-4 w-full">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 dark:bg-secondary/10">
                          <item.icon className="w-6 h-6 text-primary dark:text-secondary" />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-lg font-semibold text-foreground dark:text-white">
                              {item.question}
                            </span>
                          </div>
                          <Badge
                            variant="outline"
                            className="bg-primary border-primary/20 text-white text-xs dark:bg-secondary dark:border-secondary/20"
                          >
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6">
                      <div className="ml-16 text-muted-foreground leading-relaxed">
                        {item.answer}
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {additionalInfoSection}
      </div>
    </section>
  );
}
