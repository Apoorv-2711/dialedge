"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Quote,
  Users,
  Phone,
  Award,
  Building2,
  MessageSquare,
} from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
      "We used to book appointments manually, and most patients couldn't get an appointment since so many people were calling in a go.DialEdge solved this problem for us. Now appointments are automated and synced to my google suit.",
      author: "Dr Neha Sharma",
      role: "CEO",
      company: "Private Clinic",
      metric: "200+ calls/day",
      improvement: "+95% accuracy",
      icon: Phone,
      industry: "Healthcare & Clinics",
    },
    {
      quote:
        "We get hundreds of calls every week from students and parents asking about batches, fees, and demo classes. DialEdge has taken that entire workload off our front desk. Things have become a lot less chaotic",
      author: "Ankit Sen",
      role: "Owner",
      company: "Big Path Coaching Center",
      metric: "+40% reservations",
      improvement: "0% booking errors",
      icon: Building2,
      industry: "Coaching & Education",
    },
    {
      quote:
        "Before we purchased this AI solution, we used to have a person who was not able to handle call volumes during peak hours. Conversion rate was also not satisfactory. But DialEdge had been a game changer. We are now  being able to clear all the queries and have seen a significant spike in our site visit bookings as well. ",
      author: "Oavish Kalim",
      role: "Managing Partner",
      company: "Kalim Group of Companies.",
      metric: "3x more meetings",
      improvement: "Incredible ROI",
      icon: MessageSquare,
      industry: "Real Estate",
    },
  ];

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/3 via-transparent to-primary/3" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)",
            opacity: 0.06,
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 60%)",
            opacity: 0.04,
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />

        {/* Floating Quote Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-20 h-20 border border-primary/10 rounded-full flex items-center justify-center"
          animate={{
            rotate: [0, 360],
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Quote className="w-8 h-8 text-primary/20" />
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
            <span className="text-foreground">Real Stories from </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Real Businesses
            </span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Discover how businesses across different industries are transforming
            their customer experiences and achieving remarkable results with
            DialEdge AI.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 h-full hover:border-primary/30 transition-all duration-500 dark:bg-secondary/10">
                {/* Industry Badge */}
                <div className="absolute -top-3 left-8">
                  <Badge
                    variant="outline"
                    className="bg-primary border-primary/20 text-white text-xs dark:bg-secondary dark:border-secondary/20 "
                  >
                    {testimonial.industry}
                  </Badge>
                </div>

                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 dark:bg-secondary/10">
                    <Quote className="w-6 h-6 text-primary dark:text-secondary" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="space-y-6">
                  <blockquote className="text-lg text-card-foreground leading-relaxed font-medium">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex-1">
                      <div className="font-bold text-card-foreground text-lg">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-sm font-medium text-primary dark:text-secondary">
                        {testimonial.company}
                      </div>
                    </div>

                    <testimonial.icon className="w-8 h-8 text-primary/60 dark:text-secondary" />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
