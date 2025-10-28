"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock } from "lucide-react";
import BlurImage from "@/components/blur-image";

const iconMap: Record<string, any> = { Shield, Lock };

export function HowSection({
  title,
  description,
  badges,
  image,
}: {
  title: string;
  description: string;
  badges: Array<{ icon: string; label: string }>;
  image: string;
}) {
  return (
    <section className="py-10">
      <div className="container">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              {badges.map((b, i) => {
                const Icon = iconMap[b.icon] ?? Shield;
                return (
                  <Badge key={i} variant="secondary" className="px-4 py-2">
                    <Icon className="h-4 w-4 mr-2" />
                    {b.label}
                  </Badge>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <motion.div
              className="rounded-3xl overflow-hidden  "
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <BlurImage
                src={image}
                width={500}
                height={500}
                alt="How visual"
                className="w-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
