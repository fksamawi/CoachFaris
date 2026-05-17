import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

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
    images: [{ url: "/CoachFaris.jpg", width: 800, height: 800, alt: "Faris Samawi — Executive Coach" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoachFaris — Strategic clarity for leaders at a crossroads",
    description:
      "Executive coaching for high-performing leaders navigating pivotal career and identity moments.",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f7f8",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
