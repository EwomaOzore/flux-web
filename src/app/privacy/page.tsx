import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Chrome";
import { PageHero } from "@/components/PageHero";
import { LEGAL_LAST_UPDATED, PRIVACY_SECTIONS } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Flux does not collect your budget. No accounts. No bank connection. Budget data stays on your device.",
  robots: { index: true, follow: true },
};

const SUMMARY = [
  {
    title: "We don’t collect your budget",
    body: "Income, bills, receipts, and cushion stay on your device. Flux never collects those numbers.",
  },
  {
    title: "No accounts",
    body: "There is nothing to sign up for. No email. No cloud budget sync.",
  },
  {
    title: "No bank connection",
    body: "No Plaid. No Open Banking. You type amounts yourself.",
  },
  {
    title: "Diagnostics, if any, are technical",
    body: "Anonymous signals via Expo may include app version and platform — not your numbers, names, or receipt images.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <Container className="py-16 sm:py-24">
      <PageHero overline="Privacy" title="Your budget stays on your device.">
        <p>
          A short reading first. The full policy follows, last updated{" "}
          {LEGAL_LAST_UPDATED}.
        </p>
      </PageHero>

      <div className="mt-12 grid gap-3 sm:grid-cols-2">
        {SUMMARY.map((card) => (
          <article key={card.title} className="flux-card p-6">
            <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-ink">
              {card.title}
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
              {card.body}
            </p>
          </article>
        ))}
      </div>

      <article className="mx-auto mt-20 max-w-[680px]">
        <h2 className="font-display text-[32px] font-medium tracking-[-0.03em] text-ink">
          Privacy Policy
        </h2>
        <p className="mt-2 text-[14px] text-ink-muted">
          Last updated: {LEGAL_LAST_UPDATED}
        </p>
        <div className="mt-12 space-y-12">
          {PRIVACY_SECTIONS.map((section) => (
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
          Also see{" "}
          <Link href="/terms" className="text-forest hover:underline">
            Terms &amp; Conditions
          </Link>
          .
        </p>
      </article>
    </Container>
  );
}
