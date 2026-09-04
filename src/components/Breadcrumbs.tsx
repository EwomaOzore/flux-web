import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { PAGES, type PageId } from "@/lib/pages";
import { breadcrumbSchema } from "@/lib/schema";

export function Breadcrumbs({ page }: Readonly<{ page: PageId }>) {
  if (page === "home") return null;

  const current = PAGES[page];
  const crumbs = [
    { name: PAGES.home.crumb, path: PAGES.home.path },
    { name: current.crumb, path: current.path },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-[13px] text-ink-muted">
          <li>
            <Link href="/" className="text-forest hover:underline">
              {PAGES.home.crumb}
            </Link>
          </li>
          <li aria-hidden className="text-ink-muted">
            /
          </li>
          <li>
            <span aria-current="page" className="text-ink-secondary">
              {current.crumb}
            </span>
          </li>
        </ol>
      </nav>
    </>
  );
}
