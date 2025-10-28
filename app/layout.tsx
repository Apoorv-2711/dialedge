import type React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Open_Sans, Work_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import "./globals.css";
import ScrollToTop from "@/components/scroll-to-top";

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
  title: "DialEdge AI - Next-Gen Conversational AI Solutions",
  description:
    "Transform your business communication with advanced conversational AI. Enterprise-grade phone systems, intelligent chat support, and automated workflows that scale your operations effortlessly.",
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
    title: "DialEdge AI - Next-Gen Conversational AI Solutions",
    description:
      "Transform your business communication with advanced conversational AI. Enterprise-grade solutions for modern businesses.",
    siteName: "DialEdge AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "DialEdge AI - Next-Gen Conversational AI Solutions",
    description:
      "Transform your business communication with advanced conversational AI. Enterprise-grade solutions for modern businesses.",
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
      <body className="font-sans">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NGCHRK3T8T"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', 'G-NGCHRK3T8T');
          `}
        </Script>
        <ThemeProvider defaultTheme="dark" storageKey="dialedge-theme">
          <main>{children}</main>
          <SonnerToaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
