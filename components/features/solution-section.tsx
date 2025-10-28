"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Building2,
  Rocket,
  Star,
  Heart,
  ShoppingCart,
  GraduationCap,
  Home,
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
export default function SolutionSection() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-14">
            Solutions Tailored for Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From startups to enterprises, we have the perfect AI solution for
            your needs
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              icon: Building2,
              title: "Enterprise Solutions",
              description:
                "For global corporations handling millions of customer interactions monthly, our AI agents streamline operations while reducing overheads.",
              badge: "Enterprise",
            },
            {
              icon: Rocket,
              title: "SME & Startup Solutions",
              description:
                "Affordable and easy-to-deploy AI agents that grow with your business—perfect for lean teams and scaling ventures.",
              badge: "Growth",
            },
            {
              icon: Star,
              title: "Industry-Specific Solutions",
              description:
                "Specialized AI agents tailored for healthcare, hospitality, e-commerce, education, and real estate industries.",
              badge: "Specialized",
            },
          ].map((solution, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Badge
                    variant="outline"
                    className="w-fit mx-auto mb-4 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30"
                  >
                    {solution.badge}
                  </Badge>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-[family-name:var(--font-work-sans)]">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Industry-Specific Details */}
        <motion.div
          className="backdrop-blur-xl bg-white/5 dark:bg-black/20 border border-white/20 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center font-[family-name:var(--font-work-sans)]">
            Industry-Specific Solutions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Heart,
                title: "Healthcare",
                description:
                  "Patient appointment scheduling & reminders with compliance",
              },
              {
                icon: Building2,
                title: "Hospitality",
                description:
                  "Reservation handling, check-in support, and concierge-style service",
              },
              {
                icon: ShoppingCart,
                title: "E-commerce",
                description:
                  "Order tracking, product queries, and return assistance",
              },
              {
                icon: GraduationCap,
                title: "Education",
                description:
                  "Admission inquiries, course information, and student support",
              },
              {
                icon: Home,
                title: "Real Estate",
                description:
                  "Lead qualification, property tour scheduling, and follow-ups",
              },
            ].map((industry, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-xl hover:bg-white/5 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <industry.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{industry.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
