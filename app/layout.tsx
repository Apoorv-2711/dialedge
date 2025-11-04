import type React from "react";
import type { Metadata } from "next";
import { Geist, Open_Sans, Work_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
});

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title:
    "DialEdge AI - Never miss a Call Again. Let our AI Voice Agent answer for you.",
  description:
    "DialEdge AI is a voice agent that can answer your calls for you. It can handle your calls 24/7 and can answer your calls in multiple languages.",
  keywords:
    "conversational AI, business communication, intelligent phone systems, chat support, automated workflows, enterprise AI, customer engagement, voice analytics, AI solutions",
  authors: [{ name: "DialEdge AI" }],
  creator: "DialEdge AI",
  publisher: "DialEdge AI",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dialedge.ai",
    title:
      "DialEdge AI - Never miss a Call Again. Let our AI Voice Agent answer for you.",
    description:
      "DialEdge AI is a voice agent that can answer your calls for you. It can handle your calls 24/7 and can answer your calls in multiple languages.",
    siteName: "DialEdge AI",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "DialEdge AI - Never miss a Call Again. Let our AI Voice Agent answer for you.",
    description:
      "DialEdge AI is a voice agent that can answer your calls for you. It can handle your calls 24/7 and can answer your calls in multiple languages.",
    creator: "@dialedgeai",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "6JXuO9H0wQq3bi6TnBX5iIVbtnK4loPLHL4YshT4y_0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${workSans.variable} ${openSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="font-sans" suppressHydrationWarning>
        {/* Google Analytics */}
        <ThemeProvider defaultTheme="dark" storageKey="dialedge-theme">
          <main>{children}</main>
          <SonnerToaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
