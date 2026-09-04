import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/Button";
import { Container } from "@/components/Chrome";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Questions about Flux: use the support email on the App Store or Google Play listing.",
};

export default function SupportPage() {
  return (
    <Container className="py-16 sm:py-24">
      <PageHero overline="Support" title="Write to the listing.">
        <p>
          Questions about Flux: use the support email on the App Store or Google
          Play listing.
        </p>
      </PageHero>

      <div className="mt-12 max-w-[680px] space-y-4">
        <article className="flux-card p-6 sm:p-8">
          <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-ink">
            There is no account to recover.
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink-secondary">
            Flux does not hold your budget. We cannot restore a deleted file,
            reset a forgotten biometric lock, or look up your numbers. Export a
            backup before you uninstall if you want a copy.
          </p>
        </article>
        <article className="flux-card p-6 sm:p-8">
          <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-ink">
            Privacy and terms
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink-secondary">
            Read how data stays on the device, and what Flux is not.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="/privacy" variant="secondary">
              Privacy Policy
            </Button>
            <Button href="/terms" variant="secondary">
              Terms &amp; Conditions
            </Button>
          </div>
        </article>
      </div>

      <p className="mt-10 text-[14px] text-ink-muted">
        Prefer the short version?{" "}
        <Link href="/faq" className="font-medium text-forest hover:underline">
          FAQ
        </Link>
        .
      </p>
    </Container>
  );
}
