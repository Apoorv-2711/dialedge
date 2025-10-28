"use client";

import { motion } from "framer-motion";
import { Marquee } from "../marquee";

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

export function CompanyLogosSection() {
  return (
    <section className="py-16">
      <div className="">
        <motion.div
          className="text-center mb-12 container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-work-sans)]">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground">
            Join 500+ businesses that have transformed their customer experience
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 opacity-60 relative"
          // variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Marquee pauseOnHover className="[--duration:20s]">
            {[
              "TechCorp",
              "RestaurantCo",
              "HealthPlus",
              "EduTech",
              "FinanceHub",
              "RetailMax",
            ].map((company, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-lg font-semibold px-4 bg-primary/10 rounded-xl backdrop-blur-sm py-2 mr-4 dark:bg-primary/20"
              >
                {company}
              </motion.div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </motion.div>
      </div>
    </section>
  );
}
