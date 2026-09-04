import { PAGES } from "@/lib/pages";
import { SITE } from "@/lib/site";

const logo = new URL("/brand/icon.png", SITE.url).toString();

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "en",
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "OnlineBusiness"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.name,
    url: SITE.url,
    logo,
    image: logo,
    description: SITE.description,
    slogan: SITE.tagline,
    areaServed: "Worldwide",
    knowsAbout: [
      "payday planner",
      "on-device budget calculator",
      "personal finance arithmetic",
    ],
  };
}

export function softwareSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    applicationCategory: "FinanceApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: SITE.description,
    url: SITE.url,
    downloadUrl: new URL("/download", SITE.url).toString(),
    featureList: [
      "Multiple income streams",
      "Recurring bills on Plan",
      "Timeline of payday line items",
      "On-device receipt text extraction",
      "Optional Face ID lock",
      "Export you control",
    ],
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function breadcrumbSchema(
  crumbs: readonly { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: new URL(crumb.path, SITE.url).toString(),
    })),
  };
}

export function faqSchema(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function sourceListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Flux page sources",
    itemListElement: Object.values(PAGES)
      .filter((page) => page.index)
      .map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: page.crumb,
        url: new URL(page.path, SITE.url).toString(),
        description: page.description,
      })),
  };
}
