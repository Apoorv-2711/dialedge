"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

type Props = {
  additionalInfoSection?: React.ReactNode;
};

export function FaqSection({ additionalInfoSection }: Props) {
  const faq = [
    {
      question: "What is an AI Voice Agent?",
      answer:
        "An AI Voice Agent is an intelligent virtual employee that communicates naturally with your customers over calls. It can handle tasks like call routing, scheduling, customer support, and sales conversations-24/7. Unlike chatbots, it uses human-like voice interactions, ensuring customers feel they are speaking with a real representative.",
    },
    {
      question: "How secure is my data?",
      answer:
        "DialEdge AI uses enterprise-grade security with SOC 2, GDPR, and HIPAA compliance. All data is end-to-end encrypted, stored internally, and never shared with third parties. Strict guardrails and continuous monitoring ensure safe, brand-compliant, and reliable interactions at every step.",
    },
    {
      question: "Can I integrate my existing CRM/Calendar?",
      answer:
        "Yes. DialEdge AI connects with 200+ tools including Salesforce, HubSpot, Google Calendar, and Outlook. It syncs contacts, updates records, schedules appointments, and logs interactions in real-time - ensuring seamless integration into your existing workflows without disruption.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes. DialEdge AI offers a 7-day free trial. You can set up your AI employee in under 15 minutes, test voice interactions, integrate it with your systems, and explore its capabilities. This allows you to experience the value firsthand before making any commitment.",
    },
    {
      question: "How does it save me time?",
      answer:
        "DialEdge AI automates tasks like scheduling, call handling, and lead qualification. It works 24/7, handles multiple customers at once, and responds instantly - freeing your team to focus on high-value tasks while improving efficiency and reducing costs.",
    },
  ];
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-background">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Answers to common questions about DialEdge AI and its features. If
            you have any other questions, please don't hesitate to contact us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border border-border/50 rounded-2xl bg-card/30 backdrop-blur-sm px-6 hover:bg-card/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        {additionalInfoSection}
      </div>
    </section>
  );
}
