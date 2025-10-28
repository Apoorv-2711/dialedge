"use client";

import { useMemo } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Phone,
  ClipboardList,
  Calendar,
  MessageSquare,
  Headset,
  Banknote,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      { icon: Phone, title: "Receptionist" },
      { icon: Calendar, title: "Appointment Setter" },
      { icon: ClipboardList, title: "Lead\nQualification" },
      { icon: MessageSquare, title: "Survey" },
      { icon: Headset, title: "Customer\nService" },
      { icon: Banknote, title: "Debt\nCollection" },
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
    <section id="contact" className="relative py-20 gradient-bg-primary">
      <div className="container space-y-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center text-xs md:text-sm px-3 py-1 rounded-full glass text-foreground/80">
            Use Cases
          </p>
          <h1 className="text-pretty text-4xl md:text-5xl font-semibold tracking-tight mt-4">
            <span className="gradient-text">Get a Live Demo</span> from our team
          </h1>
          <p className="text-muted-foreground mt-4 leading-relaxed max-w-xl">
            Share a few details and we'll reach out to show how DialEdge AI can
            fit your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Left: Form */}
          <div className="w-full md:h-full">
            <Card className="glass-strong dark:border dark:border-white/10 md:h-full">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">
                  Tell us about your needs
                </CardTitle>
                {/* <CardDescription>
                We typically respond within one business day.
              </CardDescription> */}
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Right: Image */}
          <div className="glass rounded-xl overflow-hidden w-full md:h-full shadow-2xl dark:shadow-white/10">
            <BlurImage
              src="/contact.jpeg"
              alt="Visitors at a reception desk during a live demo"
              className="w-full md:h-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
