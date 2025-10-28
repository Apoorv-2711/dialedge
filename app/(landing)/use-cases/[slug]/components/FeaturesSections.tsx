"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Clock,
  Shield,
  Eye,
  Users,
  Calendar,
} from "lucide-react";
import BlurImage from "@/components/blur-image";

const iconMap: Record<string, any> = {
  MessageSquare,
  Clock,
  Shield,
  Eye,
  Users,
  Calendar,
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function FeaturesSections({
  features,
}: {
  features: Array<{
    title: string;
    description: string;
    icon: string;
    gradient: string;
    image: string;
    reverse?: boolean;
  }>;
}) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          className="space-y-32"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] ?? MessageSquare;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`grid lg:grid-cols-2 gap-16 items-center  ${
                  feature.reverse ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={feature.reverse ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shrink-0`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  {/* <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-6 py-3 rounded-full">
                    Learn More
                  </Button> */}
                </div>
                <div className={feature.reverse ? "lg:col-start-1" : ""}>
                  <motion.div
                    //
                    className="relative rounded-3xl overflow-hidden shadow-md flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BlurImage
                      width={450}
                      height={450}
                      src={feature.image}
                      alt={feature.title}
                      className="rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
