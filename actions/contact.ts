"use server";
import { headers, cookies } from "next/headers";
import nodemailer from "nodemailer";
import {
  renderThankYouEmail,
  renderContactNotificationEmail,
} from "@/lib/utils";
import {
  checkRateLimit,
  getClientIP,
  extractRequestMetadata,
} from "@/lib/rate-limiter";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  recaptchaToken: string;
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY not configured");
    return false;
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
        }),
      }
    );

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error("reCAPTCHA verification failed:", error);
    return false;
  }
}

export async function submitContact(payload: ContactPayload) {
  // Get request headers and extract client information
  const headersList = await headers();
  const cookieStore = await cookies();
  const clientIP = getClientIP(headersList);
  const requestMetadata = extractRequestMetadata(headersList);

  // Apply rate limiting based on IP address
  const rateLimitResult = checkRateLimit(clientIP);

  if (!rateLimitResult.isAllowed) {
    return {
      ok: false,
      error: rateLimitResult.message,
      rateLimited: true,
      resetTime: rateLimitResult.resetTime,
    };
  }

  console.log(
    `[Contact] Rate limit check passed for IP ${clientIP}. Remaining: ${rateLimitResult.remaining}`
  );

  // Verify reCAPTCHA
  const isRecaptchaValid = await verifyRecaptcha(payload.recaptchaToken);
  if (!isRecaptchaValid) {
    return {
      ok: false,
      error: "reCAPTCHA verification failed. Please try again.",
      recaptchaFailed: true,
    };
  }

  console.log(`[Contact] reCAPTCHA verification passed for IP ${clientIP}`);

  // Business email validation
  function isBusinessEmail(email: string) {
    const atIndex = email.lastIndexOf("@");
    if (atIndex <= 0) return false;
    const domain = email
      .slice(atIndex + 1)
      .toLowerCase()
      .trim();
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
    if (!domain.includes(".")) return false;
    if (/^\d+\.\d+\.\d+\.\d+$/.test(domain)) return false;
    return true;
  }

  if (!isBusinessEmail(payload.email)) {
    return { ok: false, error: "Please use a business email address." };
  }

  // Prepare enhanced payload with metadata
  const enhancedPayload = {
    ...payload,
    metadata: {
      clientIP,
      ...requestMetadata,
      rateLimitInfo: {
        remaining: rateLimitResult.remaining,
        resetTime: rateLimitResult.resetTime,
      },
    },
    cookies: Object.fromEntries(
      Array.from(cookieStore.getAll()).map((cookie: any) => [
        cookie.name,
        cookie.value,
      ])
    ),
    submissionTime: new Date().toISOString(),
  };

  console.log("Contact submission received:", JSON.stringify(enhancedPayload));

  // Send emails (best-effort)
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Boolean(process.env.SMTP_SECURE === "true"),
      auth: process.env.SMTP_USER
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }
        : undefined,
    });

    const fromAddress =
      process.env.MAIL_FROM || "DialEdge AI <no-reply@aiplacers.com>";

    // Customer thank-you
    await transporter.sendMail({
      from: fromAddress,
      to: payload.email,
      subject: "Thanks for contacting DialEdge AI",
      html: renderThankYouEmail({ name: payload.name }),
    });

    // Internal notification
    const internalTo = process.env.CONTACT_TO || process.env.SMTP_USER;
    if (internalTo) {
      await transporter.sendMail({
        from: fromAddress,
        to: internalTo,
        subject: `New contact from ${payload.name}`,
        html: renderContactNotificationEmail({
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          company: payload.company,
        }),
      });
    }
  } catch (err) {
    console.error("[v0] Failed to send email", err);
  }

  // Post to external webhook (best-effort) with enhanced metadata
  try {
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-make-apikey": process.env.WEBHOOK_API_KEY || "",
          "x-client-ip": clientIP,
          "x-user-agent": requestMetadata.userAgent,
        },
        body: JSON.stringify(enhancedPayload),
      });

      if (!response.ok) {
        console.error(`Webhook responded with status ${response.status}`);
      } else {
        console.log("Successfully posted to webhook with enhanced metadata");
      }
    }
  } catch (err) {
    console.error("Failed to POST to webhook", err);
  }

  // Post to Google Form (best-effort)

  return { ok: true };
}
