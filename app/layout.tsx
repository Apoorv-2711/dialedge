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
  title: "AI Placers - AI Voice Agents That Sound Human",
  description:
    "No-code AI voice agents with multilingual support that integrate seamlessly into your existing workflows. Deploy in minutes, scale instantly.",
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
        <ThemeProvider defaultTheme="dark" storageKey="aiplacers-theme">
          <main>{children}</main>
          <SonnerToaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
