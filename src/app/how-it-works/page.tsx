import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/Button";
import { Container, Overline } from "@/components/Chrome";
import { PageHero } from "@/components/PageHero";
import { CurrencyPhone, WelcomePhone } from "@/components/PhoneMocks";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Pick a currency. Add income and bills. Log payday line items. Read the cushion.",
};

const STEPS = [
  {
    n: "01",
    title: "Pick your currency.",
    body: "Naira, dollars, or another currency Flux lists. Amounts stay as you type them. No market rates, no conversion tricks.",
  },
  {
    n: "02",
    title: "Add income streams and bills.",
    body: "On Plan: salary, gigs, one-time pay. Then the monthly bills. Flux totals them. It does not connect to a bank.",
  },
  {
    n: "03",
    title: "Log payday line items as the month happens.",
    body: "Outflows you planned for this payday sit on Home and Timeline. Optional: scan a receipt on the device and attach the amount.",
  },
  {
    n: "04",
    title: "Read the cushion. Adjust next month on Plan.",
    body: "Take-home minus bills minus this month’s payday line items. That remainder is the cushion. Change Plan when pay or bills change.",
  },
] as const;

export default function HowItWorksPage() {
  return (
    <Container className="py-16 sm:py-24">
        <PageHero overline="How it works" title="Four steps. Then you stop.">
          <p>
            Flux is a payday planner you fill in. Income in. Bills out. Cushion
            left.
          </p>
        </PageHero>

        <div className="mt-14 flex justify-start gap-6 overflow-x-auto pb-4 sm:justify-center">
          <WelcomePhone className="w-[250px] shrink-0 sm:w-[260px]" />
          <CurrencyPhone className="w-[250px] shrink-0 sm:w-[260px]" />
        </div>

        <ol className="mt-16 grid gap-4 sm:mt-20">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="reveal flux-card grid gap-4 p-6 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-8"
            >
              <span className="font-display text-[28px] font-normal tracking-[-0.04em] text-forest">
                {step.n}
              </span>
              <div>
                <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-ink">
                  {step.title}
                </h2>
                <p className="mt-2 max-w-[52ch] text-[16px] leading-relaxed text-ink-secondary">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="reveal mt-20 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-border-soft bg-forest-muted p-7 sm:p-8">
            <Overline>Who it’s for</Overline>
            <h2 className="mt-3 font-display text-[28px] font-medium tracking-[-0.03em] text-ink">
              People with a payday.
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-secondary">
              One job or several. Gigs. Side work. Anyone who wants leftover
              clarity after bills — without handing a bank the keys.
            </p>
          </article>
          <article className="rounded-xl border border-border-soft bg-paper p-7 sm:p-8">
            <Overline>Who it’s not for</Overline>
            <h2 className="mt-3 font-display text-[28px] font-medium tracking-[-0.03em] text-ink">
              If you need a bank.
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-secondary">
              Flux is not for bank sync, investments, or a shared household
              cloud budget. It does not move money. It will not restore a
              deleted budget.
            </p>
          </article>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button href="/download">Download Flux</Button>
          <Button href="/faq" variant="secondary">
            Read the FAQ
          </Button>
        </div>
        <p className="mt-6 text-[14px] text-ink-muted">
          Still unsure?{" "}
          <Link href="/product" className="font-medium text-forest hover:underline">
            See every feature
          </Link>
          .
        </p>
      </Container>
  );
}
