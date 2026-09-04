import type { MetadataRoute } from "next";

import { ROUTES, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-04");
  return ROUTES.filter((path) => path !== "/brand").map((path) => ({
    url: new URL(path, SITE.url).toString(),
    lastModified,
    changeFrequency: path === "/privacy" || path === "/terms" ? "yearly" : "monthly",
    priority: path === "/" ? 1 : path === "/privacy" || path === "/terms" ? 0.9 : 0.7,
  }));
}
