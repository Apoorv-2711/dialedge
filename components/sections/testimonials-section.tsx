"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

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

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-work-sans)] bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our customers say about their AI employees
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              quote:
                "Our AI receptionist handles 200+ calls daily with perfect accuracy. It's like having a superhuman employee.",
              author: "Sarah Johnson",
              role: "CEO, TechStart Inc.",
              avatar: "/professional-woman-ceo.png",
              metric: "200+ calls/day",
              improvement: "+95% accuracy",
            },
            {
              quote:
                "The AI concierge increased our reservations by 40% and eliminated booking errors completely.",
              author: "Michael Chen",
              role: "Owner, Bella Vista Restaurant",
              avatar: "/restaurant-owner-man.png",
              metric: "+40% reservations",
              improvement: "0% booking errors",
            },
            {
              quote:
                "Our AI appointment setter books 3x more meetings than our previous human team. ROI is incredible.",
              author: "Emily Rodriguez",
              role: "VP Sales, Growth Marketing Co.",
              avatar: "/professional-woman-vp-sales.png",
              metric: "3x more meetings",
              improvement: "Incredible ROI",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="group relative h-full">
                {/* Glassmorphism card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl group-hover:shadow-primary/20 transition-all duration-500" />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Stars and metrics */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-primary">
                        {testimonial.metric}
                      </div>
                      <div className="text-xs text-secondary">
                        {testimonial.improvement}
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg mb-8 leading-relaxed flex-grow font-medium">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative">
                      <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                        <AvatarImage
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.author}
                        />
                        <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20">
                          {testimonial.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {/* Online indicator */}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center hidden sm:block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-full bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                100+ Happy Customers
              </span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500" />
              <span className="text-sm text-muted-foreground">
                1M+ Calls Handled
              </span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-1000" />
              <span className="text-sm text-muted-foreground">
                99.9% Uptime
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
