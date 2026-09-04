import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Chrome";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PAGES, pageMetadata } from "@/lib/pages";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata("faq");

const ITEMS = [
  {
    q: "Is Flux a bank?",
    a: "No. It does not move or hold money.",
  },
  {
    q: "Do you see my budget?",
    a: "No. It stays on your device. Uninstalling deletes it. Export if you want a copy.",
  },
  {
    q: "Is this financial advice?",
    a: "No. Totals are arithmetic from numbers you enter.",
  },
  {
    q: "Can I connect my bank?",
    a: "No. You enter amounts yourself.",
  },
  {
    q: "What is cushion?",
    a: "What’s left after monthly bills and this month’s planned payday outflows.",
  },
  {
    q: "Does Flux work offline?",
    a: "Yes for your budget data; it lives on the device.",
  },
  {
    q: "iPad / tablet?",
    a: "Yes, the app supports tablet.",
  },
  {
    q: "How do I back up?",
    a: "Export a file you control. Flux does not cloud-backup your entries.",
  },
  {
    q: "Receipts?",
    a: "Optional camera/photos. Text is extracted on device. Images are not uploaded to Flux servers.",
  },
] as const;

export default function FaqPage() {
  return (
    <Container className="py-16 sm:py-24">
      <JsonLd data={faqSchema(ITEMS)} />
      <Breadcrumbs page="faq" />
      <PageHero overline="FAQ" title={PAGES.faq.heading}>
        <p>
          If a question is missing, use the support email on the{" "}
          <Link href="/download" className="font-medium text-forest hover:underline">
            store listing
          </Link>
          .
        </p>
      </PageHero>
      <div className="mx-auto mt-14 max-w-[680px]">
        <FaqAccordion items={ITEMS} />
      </div>
      <p className="mx-auto mt-10 max-w-[680px] text-[14px] text-ink-muted">
        Longer reading:{" "}
        <Link href="/privacy" className="font-medium text-forest hover:underline">
          Privacy Policy
        </Link>
        {" · "}
        <Link href="/terms" className="font-medium text-forest hover:underline">
          Terms
        </Link>
        {" · "}
        <Link href="/support" className="font-medium text-forest hover:underline">
          Support
        </Link>
        .
      </p>
    </Container>
  );
}
