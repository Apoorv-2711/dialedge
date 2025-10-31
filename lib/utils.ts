import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { Metadata } from "next";
import ms from "ms";

// import { siteConfig } from "@/config/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function renderThankYouEmail(params: { name: string }): string {
  const { name } = params;
  // Simple responsive HTML email template
  return `
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Thank you</title>
    <style>
      body { background-color: #f6f9fc; margin: 0; padding: 0; }
      .container { width: 100%; padding: 24px 0; }
      .card { max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #eee; }
      .header { padding: 24px; border-bottom: 1px solid #f0f0f0; }
      .brand { font-size: 18px; font-weight: 700; color: #111827; }
      .content { padding: 24px; color: #374151; line-height: 1.6; }
      .cta { display: inline-block; padding: 10px 16px; background: #111827; color: #fff; border-radius: 8px; text-decoration: none; font-weight: 600; }
      .footer { padding: 16px 24px; color: #6b7280; font-size: 12px; border-top: 1px solid #f0f0f0; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="card">
        <div class="header">
          <div class="brand">DialEdge AI</div>
        </div>
        <div class="content">
          <p>Hi ${name || "there"},</p>
          <p>Thanks for reaching out to DialEdge AI. We’ve received your message and a member of our team will get back to you shortly.</p>
          <p>In the meantime, you can reply to this email with any additional details you’d like to share.</p>
          <p style="margin: 24px 0 0 0;">
            <a href="https://dialedge.ai" class="cta">Learn More</a>
          </p>
        </div>
        <div class="footer">
          © ${new Date().getFullYear()} DialEdge AI. All rights reserved.
        </div>
      </div>
    </div>
  </body>
 </html>`;
}

export function renderContactNotificationEmail(params: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
}): string {
  const { name, email, phone, company } = params;
  return `
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>New Contact Submission</title>
    <style>
      body { background-color: #f6f9fc; margin: 0; padding: 0; }
      .container { width: 100%; padding: 24px 0; }
      .card { max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #eee; }
      .header { padding: 20px 24px; border-bottom: 1px solid #f0f0f0; }
      .title { font-size: 18px; font-weight: 700; color: #111827; }
      .content { padding: 20px 24px; color: #111827; line-height: 1.6; }
      .row { margin-bottom: 8px; }
      .label { display: inline-block; width: 100px; color: #6b7280; }
      .value { color: #111827; font-weight: 600; }
      .footer { padding: 14px 24px; color: #6b7280; font-size: 12px; border-top: 1px solid #f0f0f0; }
      pre { white-space: pre-wrap; word-break: break-word; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #eef2f7; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="card">
        <div class="header">
          <div class="title">New Contact Submission</div>
        </div>
        <div class="content">
          <div class="row"><span class="label">Name:</span> <span class="value">${
            name || ""
          }</span></div>
          <div class="row"><span class="label">Email:</span> <span class="value">${
            email || ""
          }</span></div>
          <div class="row"><span class="label">Phone:</span> <span class="value">${
            phone || ""
          }</span></div>
          <div class="row"><span class="label">Company:</span> <span class="value">${
            company || ""
          }</span></div>
        </div>
        <div class="footer">
          Sent automatically by DialEdge AI website
        </div>
      </div>
    </div>
  </body>
 </html>`;
}

export function constructMetadata({
  title = "DialEdge AI - Next-Gen Conversational AI Solutions",
  description = "Transform your business communication with advanced conversational AI. Enterprise-grade phone systems, intelligent chat support, and automated workflows.",
  image = "https://dialedge.ai/og-image.jpg",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  keywords?: string[];
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      "DialEdge AI",
      "conversational AI",
      "business communication",
      "intelligent phone systems",
      "chat support",
      "automated workflows",
      "enterprise AI",
      "customer engagement",
      "voice analytics",
      "AI solutions",
      "communication automation",
      "smart scheduling",
      "lead intelligence",
      "enterprise security",
    ],
    authors: [
      {
        name: "DialEdge AI",
      },
    ],
    creator: "DialEdge AI",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://dialedge.ai",
      title,
      description,
      siteName: "DialEdge AI",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@dialedgeai",
    },
    icons,
    metadataBase: new URL("https://dialedge.ai"),
    manifest: `${"https://dialedge.ai"}/site.webmanifest`,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(path: string) {
  return `https://www.dialedge.ai${path}`;
}

// Utils from precedent.dev
export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return "never";
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? "" : " ago"
  }`;
};

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const json = await res.json();
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number;
      };
      error.status = res.status;
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }

  return res.json();
}

export function nFormatter(num: number, digits?: number) {
  if (!num) return "0";
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits || 1).replace(rx, "$1") + item.symbol
    : "0";
}

export function capitalize(str: string) {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length)}...`;
};

export const getBlurDataURL = async (url: string | null) => {
  if (!url) {
    return "data:image/webp;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
  }

  if (url.startsWith("/_static/")) {
    url = `${"https://www.dialedge.ai"}${url}`;
  }

  try {
    const response = await fetch(
      `https://wsrv.nl/?url=${url}&w=50&h=50&blur=5`
    );
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");

    return `data:image/png;base64,${base64}`;
  } catch (error) {
    return "data:image/webp;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
  }
};

export const placeholderBlurhash =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAoJJREFUWEfFl4lu4zAMRO3cx/9/au6reMaOdkxTTl0grQFCRoqaT+SQotq2bV9N8rRt28xms87m83l553eZ/9vr9Wpkz+ezkT0ej+6dv1X81AFw7M4FBACPVn2c1Z3zLgDeJwHgeLFYdAARYioAEAKJEG2WAjl3gCwNYymQQ9b7/V4spmIAwO6Wy2VnAMikBWlDURBELf8CuN1uHQSrPwMAHK5WqwFELQ01AIXdAa7XawfAb3p6AOwK5+v1ugAoEq4FRSFLgavfQ49jAGQpAE5wjgGCeRrGdBArwHOPcwFcLpcGU1X0IsBuN5tNgYhaiFFwHTiAwq8I+O5xfj6fOz38K+X/fYAdb7fbAgFAjIJ6Aav3AYlQ6nfnDoDz0+lUxNiLALvf7XaDNGQ6GANQBKR85V27B4D3QQRw7hGIYlQKWGM79hSweyCUe1blXhEAogfABwHAXAcqSYkxCtHLUK3XBajSc4Dj8dilAeiSAgD2+30BAEKV4GKcAuDqB4TdYwBgPQByCgApUBoE4EJUGvxUjF3Q69/zLw3g/HA45ABKgdIQu+JPIyDnisCfAxAFNFM0EFNQ64gfS0EUoQP8ighrZSjn3oziZEQpauyKbfjbZchHUL/3AS/Dd30gAkxuRACgfO+EWQW8qwI1o+wseNuKcQiESjALvwNoMI0TcRzD4lFcPYwIM+JTF5x6HOs8yI7jeB5oKhpMRFH9UwaSCDB2Jmg4rc6E2TT0biIaG0rQhNqyhpHBcayTTSXH6vcDL7/sdqRK8LkwTsU499E8vRcAojHcZ4AxABdilgrp4lsXk8oVqgwh7+6H3phqd8J0Kk4vbx/+sZqCD/vNLya/5dT9fAH8g1WdNGgwbQAAAABJRU5ErkJggg==";
