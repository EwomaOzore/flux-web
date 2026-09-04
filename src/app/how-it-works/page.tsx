import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/Button";
import { Container, Overline } from "@/components/Chrome";
import { PageHero } from "@/components/PageHero";
import { CurrencyPhone, WelcomePhone } from "@/components/PhoneMocks";
import { cn } from "@/lib/cn";

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

        <div className="mt-14 flex justify-center gap-3 overflow-x-auto pb-2">
          <WelcomePhone
            priority
            className="mx-0 w-[260px] shrink-0 sm:w-[300px]"
          />
          <CurrencyPhone
            priority
            className="mx-0 w-[260px] shrink-0 sm:w-[300px]"
          />
        </div>

        <ol className="mt-16 grid gap-4 sm:mt-20 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step.n}
              className={cn(
                "reveal flux-card flex h-full flex-col p-6 sm:p-8",
                index === 1 && "lg:col-span-2",
                index === 2 && "!bg-forest-muted lg:col-span-2",
              )}
            >
              <span className="font-display text-[28px] font-normal tracking-[-0.04em] text-forest">
                {step.n}
              </span>
              <h2
                className={cn(
                  "mt-4 tracking-[-0.02em] text-ink",
                  index === 2
                    ? "font-display text-[24px] font-medium sm:text-[28px]"
                    : "text-[20px] font-semibold",
                )}
              >
                {step.title}
              </h2>
              <p className="mt-auto pt-3 text-[16px] leading-relaxed text-ink-secondary">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="reveal mt-20 grid gap-4 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <article className="rounded-xl border border-border-soft bg-paper p-7 sm:p-8">
            <Overline>Who it’s for</Overline>
            <h2 className="mt-3 font-display text-[28px] font-medium tracking-[-0.03em] text-ink">
              People with a payday.
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-secondary">
              One job or several. Gigs. Side work. Anyone who wants leftover
              clarity after bills — without handing a bank the keys.
            </p>
          </article>
          <article className="rounded-xl border border-border-soft bg-amber-muted p-7 sm:p-8">
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
