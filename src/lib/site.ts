export const SITE = {
  name: "Flux",
  tagline: "See exactly what’s left after every bill is paid.",
  category: "Personal payday planner",
  description:
    "See exactly what’s left after every bill is paid. Combine jobs and gigs. Track bills in your currency. Your budget stays on this device — Flux never collects it.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fluxbudget.app",
  bundle: "com.fluxbudget.app",
  slug: "flux-budget",
} as const;

/** Set NEXT_PUBLIC_APP_STORE_URL when the listing is live. */
export const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL ?? "";

/** Set NEXT_PUBLIC_PLAY_STORE_URL when the listing is live. */
export const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? "";

export const APP_STORE_PLACEHOLDER = "[App Store URL]";
export const PLAY_STORE_PLACEHOLDER = "[Play Store URL]";

export const SUPPORT_EMAIL_NOTE =
  "Use the support email on the App Store or Google Play listing for Flux.";

export const NAV = [
  { href: "/product", label: "Product" },
  { href: "/privacy", label: "Privacy" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
] as const;

export const ROUTES = [
  "/",
  "/product",
  "/how-it-works",
  "/privacy",
  "/terms",
  "/faq",
  "/download",
  "/support",
  "/brand",
] as const;
