"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Check } from "lucide-react";
import {
  MessageSquare,
  Brain,
  BarChart3,
  Globe,
  Clock,
  Shield,
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

export default function KeyFeature() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          className="text-start mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-14">
            Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed text-start">
            Discover the advanced capabilities that make our AI voice agents
            truly exceptional
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              icon: MessageSquare,
              title: "Natural Human-Like Interaction",
              description:
                "Conversational AI trained for natural pauses, tone, and empathy.",
              features: [
                "Adapts to customer sentiment (calm voice for complaints, cheerful tone for bookings)",
                "Supports 50+ languages and dialects for global reach",
                "Natural conversation flow with contextual understanding",
              ],
            },
            {
              icon: Brain,
              title: "Smart Personalization",
              description:
                "Recognizes repeat callers and tailors interactions using past data.",
              features: [
                "Dynamic responses based on customer profile and preferences",
                "Customizable voice, personality, and script alignment",
                "Learning from previous interactions for better service",
              ],
            },
            {
              icon: BarChart3,
              title: "Real-Time Intelligence & Analytics",
              description:
                "Live monitoring of agent performance and call outcomes.",
              features: [
                "AI-driven insights into customer behavior and FAQs",
                "Detailed dashboards for tracking conversions and CSAT",
                "Real-time performance optimization",
              ],
            },
            {
              icon: Globe,
              title: "Omnichannel Integration",
              description:
                "Seamless deployment across phone, website, WhatsApp, SMS, and CRM systems.",
              features: [
                "Works with Google Calendar, HubSpot, Salesforce, and more",
                "Unified system ensures smooth customer journeys",
                "Cross-platform data synchronization",
              ],
            },
            {
              icon: Clock,
              title: "Scalable & Always-On",
              description:
                "Handle unlimited concurrent calls without wait times.",
              features: [
                "24/7 availability to cover different time zones",
                "Easily scale from small business to enterprise operations",
                "No capacity limitations or downtime",
              ],
            },
            {
              icon: Shield,
              title: "Compliance & Security First",
              description:
                "Built with GDPR, HIPAA, and SOC-2 compliance standards.",
              features: [
                "End-to-end encryption for sensitive data",
                "Audit-ready logs and transparent reporting",
                "Enterprise-grade security protocols",
              ],
            },
          ].map((feature, index) => (
            <motion.div key={index} variants={fadeInUp} className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 backdrop-blur-sm bg-card/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-[family-name:var(--font-work-sans)]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
