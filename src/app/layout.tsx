import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, softwareSchema, websiteSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-instrument",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Flux — See what’s left after the bills",
    template: "%s — Flux",
  },
  description: SITE.description,
  applicationName: "Flux",
  category: "finance",
  keywords: [
    "payday planner",
    "budget calculator",
    "on-device budget",
    "private budget app",
    "Flux",
  ],
  authors: [{ name: "Flux" }],
  creator: "Flux",
  icons: {
    icon: [{ url: "/brand/icon.png", type: "image/png", sizes: "1024x1024" }],
    apple: [{ url: "/brand/icon.png", type: "image/png", sizes: "1024x1024" }],
  },
  openGraph: {
    title: "Flux — See what’s left after the bills",
    description: SITE.tagline,
    siteName: "Flux",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flux — See what’s left after the bills",
    description: SITE.tagline,
  },
  robots: {
    index: true,
    follow: true,
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
      data-scroll-behavior="smooth"
      className={`${instrumentSans.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full bg-parchment font-sans text-ink antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-forest focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <JsonLd data={softwareSchema()} />
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
