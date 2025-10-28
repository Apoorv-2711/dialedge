"use client";

import type * as React from "react";
import { useTransition, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toast as sonner } from "sonner";
import { submitContact } from "@/actions/contact";
import { Loader2, Phone } from "lucide-react";
import Recaptcha, { type RecaptchaRef } from "@/components/recaptcha";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<RecaptchaRef>(null);

  function isBusinessEmail(email: string) {
    const atIndex = email.lastIndexOf("@");
    if (atIndex <= 0) return false;
    const domain = email
      .slice(atIndex + 1)
      .toLowerCase()
      .trim();
    // Common free and disposable providers (non-exhaustive)
    const blockedDomains = new Set([
      "gmail.com",
      "yahoo.com",
      "yahoo.co.uk",
      "hotmail.com",
      "outlook.com",
      "outlook.co.uk",
      "live.com",
      "msn.com",
      "icloud.com",
      "me.com",
      "mac.com",
      "aol.com",
      "proton.me",
      "protonmail.com",
      "pm.me",
      "gmx.com",
      "gmx.de",
      "mail.com",
      "yandex.com",
      "yandex.ru",
      "zoho.com",
      "fastmail.com",
      "hey.com",
      "duck.com",
      "inbox.com",
      "tutanota.com",
      "tutanota.de",
      "tuta.io",
      "yopmail.com",
    ]);
    if (blockedDomains.has(domain)) return false;
    // Simple heuristic: require a dot in the domain and no IP-literals
    if (!domain.includes(".")) return false;
    if (/^\d+\.\d+\.\d+\.\d+$/.test(domain)) return false;
    return true;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Validate native constraints (required, type=email, etc.)
    if (!form.checkValidity()) {
      form.reportValidity();
      sonner.error("Please fix the highlighted fields and try again.");
      return;
    }

    const email = String(fd.get("email") || "");
    if (!isBusinessEmail(email)) {
      sonner.error(
        "Please use a business email address (no personal providers)."
      );
      return;
    }

    // Check reCAPTCHA verification
    // if (!recaptchaToken) {
    //   sonner.error("Please complete the reCAPTCHA verification.");
    //   return;
    // }

    // startTransition(async () => {
    //   await sonner.promise(
    //     (async () => {
    //       const res = await submitContact({
    //         name: String(fd.get("name") || ""),
    //         email,
    //         phone: String(fd.get("phone") || ""),
    //         company: String(fd.get("company") || ""),
    //         recaptchaToken,
    //       });
    //       if (!res.ok) {
    //         if (res.rateLimited && res.resetTime) {
    //           const resetDate = new Date(res.resetTime);
    //           const resetTimeStr = resetDate.toLocaleTimeString();
    //           throw new Error(
    //             `${res.error} You can try again after ${resetTimeStr}.`
    //           );
    //         }
    //         throw new Error(res.error || "Submission failed");
    //       }
    //       return res;
    //     })(),
    //     {
    //       loading: "Sending...",
    //       success: () => {
    //         form.reset();
    //         setPhone(undefined);
    //         setRecaptchaToken(null);
    //         recaptchaRef.current?.reset();
    //         return "Message sent. We'll reach out shortly.";
    //       },
    //       error: (err) => err.message || "Something went wrong",
    //     }
    //   );
    // });
    sonner.success("Message sent. We'll reach out shortly.");
    form.reset();
    setPhone(undefined);
    setRecaptchaToken(null);
    recaptchaRef.current?.reset();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col h-full">
      <div className="space-y-3 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground/80"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className="mt-2 border border-gray-200 dark:border-gray-800 rounded-md h-10"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground/80"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@company.com"
              required
              className="mt-2 border border-gray-200 dark:border-gray-800 rounded-md h-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-foreground/80"
            >
              Phone
            </label>
            <div className="mt-2">
              <PhoneInput
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                defaultCountry="IN"
                international
                countryCallingCodeEditable={false}
                value={phone}
                onChange={setPhone}
                className="phone-input flex items-center gap-2 border border-gray-200 dark:border-gray-800 rounded-md px-3 py-2 h-10"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-foreground/80"
            >
              Company
            </label>
            <Input
              id="company"
              name="company"
              placeholder="Acme Inc."
              className="mt-2 border border-gray-200 dark:border-gray-800 rounded-md h-10"
            />
          </div>
        </div>
      </div>

      {/* reCAPTCHA */}
      {/* <div className="mt-4">
        <Recaptcha
          ref={recaptchaRef}
          onVerify={setRecaptchaToken}
          onExpired={() => setRecaptchaToken(null)}
          onError={() => {
            setRecaptchaToken(null);
            sonner.error("reCAPTCHA verification failed. Please try again.");
          }}
          className="flex justify-center"
        />
      </div> */}

      <Button
        type="submit"
        disabled={isPending}
        className="w-full md:w-auto mt-6 h-10 cursor-pointer hover:bg-primary/90 transition-all duration-300"
      >
        {isPending ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>Get a Call</span>
          </div>
        )}
      </Button>
    </form>
  );
}

export default ContactForm;
