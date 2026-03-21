import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "CoachFaris — Strategic clarity for leaders at a crossroads",
  description:
    "Executive coaching for high-performing leaders navigating pivotal career and identity moments.",
  metadataBase: new URL("https://www.coachfaris.com"),
  openGraph: {
    title: "CoachFaris — Strategic clarity for leaders at a crossroads",
    description:
      "Executive coaching for high-performing leaders navigating pivotal career and identity moments.",
    url: "https://www.coachfaris.com",
    siteName: "CoachFaris",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoachFaris — Strategic clarity for leaders at a crossroads",
    description:
      "Executive coaching for high-performing leaders navigating pivotal career and identity moments.",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f7f8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}