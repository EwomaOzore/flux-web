import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Chrome";
import { PageHero } from "@/components/PageHero";
import { LEGAL_LAST_UPDATED, TERMS_SECTIONS } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Flux is a personal calculator. Not a bank. Not financial advice. Budget data stays on your device.",
  robots: { index: true, follow: true },
};

const SUMMARY = [
  "Flux is a personal calculator and payday planner for amounts you enter yourself.",
  "It is not a bank, and it is not financial, investment, tax, or legal advice.",
  "Budget data stays on your device. We cannot restore a deleted budget.",
] as const;

export default function TermsPage() {
  return (
    <Container className="py-16 sm:py-24">
      <PageHero overline="Terms" title="The agreement, in Flux’s voice first.">
        <p>
          Three lines, then the full Terms &amp; Conditions. Last updated{" "}
          {LEGAL_LAST_UPDATED}. Meaning unchanged.
        </p>
      </PageHero>

      <ol className="mt-12 grid gap-3">
        {SUMMARY.map((line, i) => (
          <li key={line} className="flux-card flex gap-4 p-5 sm:p-6">
            <span className="font-display text-[22px] text-forest">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-[16px] leading-relaxed text-ink-secondary">
              {line}
            </p>
          </li>
        ))}
      </ol>

      <article className="mx-auto mt-20 max-w-[680px]">
        <h2 className="font-display text-[32px] font-medium tracking-[-0.03em] text-ink">
          Terms &amp; Conditions
        </h2>
        <p className="mt-2 text-[14px] text-ink-muted">
          Last updated: {LEGAL_LAST_UPDATED}
        </p>
        <div className="mt-12 space-y-12">
          {TERMS_SECTIONS.map((section) => (
            <section key={section.title}>
              <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-ink">
                {section.title}
              </h3>
              <p className="mt-3 text-[17px] leading-[1.7] text-ink-secondary">
                {section.body}
              </p>
            </section>
          ))}
        </div>
        <p className="mt-16 text-[14px] text-ink-muted">
          Also see the{" "}
          <Link href="/privacy" className="text-forest hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </article>
    </Container>
  );
}
