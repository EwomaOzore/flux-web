import type { Metadata } from "next";

import { SITE } from "@/lib/site";

export type PageId =
  | "home"
  | "product"
  | "how-it-works"
  | "privacy"
  | "terms"
  | "faq"
  | "download"
  | "support"
  | "brand"
  | "sources";

export type PageRecord = {
  id: PageId;
  path: string;
  title: string;
  description: string;
  heading: string;
  index: boolean;
  crumb: string;
};

export const PAGES: Record<PageId, PageRecord> = {
  home: {
    id: "home",
    path: "/",
    title: "See what’s left after the bills",
    description: SITE.description,
    heading: "See exactly what’s left after every bill is paid.",
    index: true,
    crumb: "Home",
  },
  product: {
    id: "product",
    path: "/product",
    title: "Payday planner features",
    description:
      "Income streams, bills, timeline, on-device receipts, reminders, Face ID lock, currencies, and export — the Flux payday planner, plainly.",
    heading: "The tools, no extra story.",
    index: true,
    crumb: "Product",
  },
  "how-it-works": {
    id: "how-it-works",
    path: "/how-it-works",
    title: "How Flux works",
    description:
      "Pick a currency. Add income and bills on Plan. Log payday line items. Read the cushion. Four steps, then you stop.",
    heading: "Four steps. Then you stop.",
    index: true,
    crumb: "How it works",
  },
  privacy: {
    id: "privacy",
    path: "/privacy",
    title: "Privacy Policy",
    description:
      "Flux does not collect your budget. No accounts. No bank connection. Income, bills, and receipts stay on your device.",
    heading: "Your budget stays on your device.",
    index: true,
    crumb: "Privacy",
  },
  terms: {
    id: "terms",
    path: "/terms",
    title: "Terms & Conditions",
    description:
      "Flux is a personal calculator and payday planner. Not a bank. Not financial advice. Budget data stays on your device.",
    heading: "The agreement, in Flux’s voice first.",
    index: true,
    crumb: "Terms",
  },
  faq: {
    id: "faq",
    path: "/faq",
    title: "Frequently asked questions",
    description:
      "Is Flux a bank? Do you see my budget? What is cushion? Honest answers about the on-device payday planner.",
    heading: "Short answers.",
    index: true,
    crumb: "FAQ",
  },
  download: {
    id: "download",
    path: "/download",
    title: "Download for iOS and Android",
    description:
      "Get Flux on iPhone, iPad, and Android. A private payday planner. Your numbers never leave your phone.",
    heading: "Get Flux on your phone.",
    index: true,
    crumb: "Download",
  },
  support: {
    id: "support",
    path: "/support",
    title: "Support",
    description:
      "Questions about Flux: use the support email on the App Store or Google Play listing. We cannot restore a deleted on-device budget.",
    heading: "Write to the listing.",
    index: true,
    crumb: "Support",
  },
  brand: {
    id: "brand",
    path: "/brand",
    title: "Brand sheet",
    description:
      "Flux brand sheet: parchment, forest, Fraunces, and the voice we use in public.",
    heading: "Paper, forest, one number.",
    index: false,
    crumb: "Brand",
  },
  sources: {
    id: "sources",
    path: "/sources",
    title: "Page sources",
    description:
      "Canonical sources for the Flux site: product facts, privacy, terms, and how the payday planner works.",
    heading: "Where these pages come from.",
    index: true,
    crumb: "Sources",
  },
};

export function pageMetadata(id: PageId): Metadata {
  const page = PAGES[id];
  const url = new URL(page.path, SITE.url).toString();
  const title =
    id === "home"
      ? { absolute: `Flux — ${page.title}` }
      : page.title;

  return {
    title,
    description: page.description,
    robots: page.index
      ? { index: true, follow: true }
      : { index: false, follow: true },
    alternates: { canonical: page.path },
    openGraph: {
      title: id === "home" ? `Flux — ${page.title}` : `${page.title} — Flux`,
      description: page.description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: id === "home" ? `Flux — ${page.title}` : `${page.title} — Flux`,
      description: page.description,
    },
  };
}

export const INDEXED_ROUTES = (
  Object.values(PAGES) as PageRecord[]
).filter((page) => page.index);
