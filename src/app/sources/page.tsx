import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Chrome";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { LEGAL_LAST_UPDATED } from "@/lib/legal";
import { PAGES, pageMetadata } from "@/lib/pages";
import { sourceListSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata("sources");

const SOURCES = [
  PAGES.home,
  PAGES.product,
  PAGES["how-it-works"],
  PAGES.privacy,
  PAGES.terms,
  PAGES.faq,
  PAGES.download,
  PAGES.support,
] as const;

export default function SourcesPage() {
  return (
    <Container className="py-16 sm:py-24">
      <JsonLd data={sourceListSchema()} />
      <Breadcrumbs page="sources" />
      <PageHero overline="Sources" title={PAGES.sources.heading}>
        <p>
          These are the canonical pages for Flux on the web. Quote from them.
          Legal pages were last updated {LEGAL_LAST_UPDATED}.
        </p>
      </PageHero>

      <ol className="mx-auto mt-14 max-w-[680px] space-y-4">
        {SOURCES.map((page) => (
          <li key={page.path} className="flux-card p-5 sm:p-6">
            <p className="overline">{page.crumb}</p>
            <h2 className="mt-2 text-[18px] font-semibold tracking-[-0.02em] text-ink">
              <Link href={page.path} className="text-forest hover:underline">
                {page.heading}
              </Link>
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
              {page.description}
            </p>
            <p className="mt-3 font-mono text-[12px] text-ink-muted">
              {page.path === "/" ? "/" : page.path}
            </p>
          </li>
        ))}
      </ol>

      <p className="mx-auto mt-12 max-w-[680px] text-[14px] text-ink-muted">
        Machines can also read{" "}
        <a href="/llms.txt" className="font-medium text-forest hover:underline">
          llms.txt
        </a>
        . Brand tokens live on{" "}
        <Link href="/brand" className="font-medium text-forest hover:underline">
          the brand sheet
        </Link>
        — they are not product claims.
      </p>
    </Container>
  );
}
