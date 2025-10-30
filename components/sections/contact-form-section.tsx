"use client";

import { useMemo } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import {
  Phone,
  ClipboardList,
  Calendar,
  MessageSquare,
  Headset,
  Banknote,
  ArrowRight,
  CheckCircle2,
  Users,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { useToast } from "@/hooks/use-toast";
import ContactForm from "../contact-form";
import BlurImage from "../blur-image";

const formSchema = z.object({
  phone: z
    .string()
    .min(7, "Phone number is too short")
    .regex(/^[+\d\s().-]+$/, "Enter a valid phone number"),
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactFormSection() {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { phone: "", name: "", email: "" },
    mode: "onBlur",
  });

  const useCases = useMemo(
    () => [
      {
        icon: Phone,
        title: "AI Receptionist",
        description: "24/7 call handling and routing",
      },
      {
        icon: Calendar,
        title: "Appointment Booking",
        description: "Automated scheduling system",
      },
      {
        icon: ClipboardList,
        title: "Lead Qualification",
        description: "Smart prospect screening",
      },
      {
        icon: MessageSquare,
        title: "Customer Support",
        description: "Instant chat assistance",
      },
      {
        icon: Headset,
        title: "Help Desk",
        description: "Technical support automation",
      },
      {
        icon: Banknote,
        title: "Sales Assistant",
        description: "Revenue generation calls",
      },
    ],
    []
  );

  const stats = useMemo(
    () => [
      { icon: Users, value: "10K+", label: "Active Users" },
      { icon: Globe, value: "50+", label: "Countries" },
      { icon: CheckCircle2, value: "99.9%", label: "Uptime" },
      { icon: Shield, value: "SOC2", label: "Certified" },
    ],
    []
  );

  function onSubmit(values: FormValues) {
    // Simulate API call
    toast({
      title: "Request received",
      description: `We will call ${values.phone} shortly.`,
    });
    form.reset();
  }

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)",
            opacity: 0.1,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
            opacity: 0.08,
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
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
          {/* <Badge
            variant="secondary"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border-primary/20 text-primary font-medium mb-6"
          >
            <Zap className="w-4 h-4" />
            Ready to Transform Your Business?
          </Badge> */}

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">Get a </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Live Demo
            </span>
            <span className="text-foreground"> Today</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            See DialEdge AI in action. Our team will show you how to automate
            your customer interactions and scale your business operations
            effortlessly.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl dark:bg-secondary/10"
            >
              <stat.icon className="w-8 h-8  mx-auto mb-3" />
              <div className="text-3xl font-bold  mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Use Cases */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Powerful AI Solutions for Every Industry
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                From healthcare to finance, our AI assistants adapt to your
                specific needs and deliver exceptional customer experiences
                across all touchpoints.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group p-6 bg-card/10 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300 dark:bg-secondary/15 "
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <useCase.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors dark:group-hover:text-secondary">
                        {useCase.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA for Left Side */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-4 pt-6"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Cancel anytime</span>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/20 rounded-2xl hidden sm:block"
              />

              <Card className="relative bg-card/10 backdrop-blur-xl border border-border/50 shadow-2xl dark:bg-secondary/15">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-card-foreground">
                        Book Your Demo
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        Typically responds within 1 hour
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-muted-foreground">
                      Our team is online now
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ContactForm />
                </CardContent>
              </Card>

              {/* Floating Badge */}
            
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
