"use client";

import { motion } from "framer-motion";

export default function PricingDisclaimers() {
  return (
    <div className="container px-4 sm:px-6 pt-8">
      <motion.div
        className="mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="bg-muted/20 border border-muted rounded-md p-4 dark:bg-gray-500/10">
          <p className="text-xs font-medium mb-2 text-muted-foreground">
            Additional costs may apply:
          </p>
          <ul className="space-y-1.5 text-xs text-muted-foreground/80">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5 text-xs">•</span>
              <span>
                Knowledge base and phone number costs, as well as telephony
                charges, are additional and subject to Twilio and Telnyx
                pricing.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5 text-xs">•</span>
              <span>
                Costs for any custom ElevenLabs voice, as well as for
                integrating additional LLM models for the voice agent, will be
                charged separately.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5 text-xs">•</span>
              <span>
                AI Employees is an advanced offering that incurs a setup cost
                and requires an iPaaS platform, both of which will be borne by
                the customer.
              </span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
