import type { MetadataRoute } from "next";

import { INDEXED_ROUTES } from "@/lib/pages";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-04");
  return INDEXED_ROUTES.map((page) => ({
    url: new URL(page.path, SITE.url).toString(),
    lastModified,
    changeFrequency:
      page.id === "privacy" || page.id === "terms" ? "yearly" : "monthly",
    priority:
      page.id === "home"
        ? 1
        : page.id === "privacy" || page.id === "terms"
          ? 0.9
          : page.id === "sources"
            ? 0.6
            : 0.7,
  }));
}
