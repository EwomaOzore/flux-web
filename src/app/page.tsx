import { Container, DisclaimerChip, Overline } from "@/components/Chrome";
import {
  IconBars,
  IconExport,
  IconHome,
  IconLock,
  IconNext,
  IconPlan,
} from "@/components/Icons";
import { Money } from "@/components/Money";
import { HeroLoop } from "@/components/HeroLoop";
import { NextPhone, PlanPhone, TimelinePhone } from "@/components/PhoneMocks";
import { StoreBadges } from "@/components/StoreBadges";
import { cn } from "@/lib/cn";
import Link from "next/link";

const LAYOUT = [
  {
    name: "Home",
    copy: "This month’s run: income, bills, payday line items, and the cushion left.",
    icon: IconHome,
  },
  {
    name: "Timeline",
    copy: "Months listed with their line items. A ledger of what you logged.",
    icon: IconBars,
  },
  {
    name: "Plan",
    copy: "Add and tune income streams and bills. This is where the arithmetic starts.",
    icon: IconPlan,
  },
  {
    name: "Next",
    copy: "Look ahead to upcoming months, using the numbers already on Plan.",
    icon: IconNext,
  },
] as const;

const LIMITS = [
  {
    title: "Calculator only",
    body: "Flux adds and subtracts the amounts you type. It is not a bank, not advice, and not a forecast of wealth.",
  },
  {
    title: "You type the numbers",
    body: "There is no bank login. No Plaid. No Open Banking. Income and bills come from you.",
  },
  {
    title: "We can’t restore a deleted budget",
    body: "Entries live on this device. Uninstalling deletes them. Export a file if you want a copy you control.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="overflow-x-clip">
        <Container className="grid items-center gap-10 py-12 sm:gap-14 sm:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8 lg:py-20 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.25fr)] xl:gap-6">
          <div className="reveal min-w-0">
            <Overline>Personal payday planner</Overline>
            <h1 className="mt-4 max-w-[16ch] font-display text-[40px] font-normal leading-[1.08] tracking-[-0.045em] text-ink sm:text-[56px] lg:text-[64px] lg:leading-[1.05]">
              See exactly what’s left after every bill is paid.
            </h1>
            <p className="mt-6 max-w-[38ch] text-[17px] leading-[1.65] text-ink-secondary sm:text-[18px]">
              Combine jobs and gigs. Track bills in your currency. Your budget
              stays on this device — Flux never collects it.
            </p>
            <StoreBadges className="mt-8" />
          </div>
          <div className="reveal flex min-w-0 justify-center lg:justify-end">
            <HeroLoop />
          </div>
        </Container>
      </section>

      <section className="reveal border-t border-border-soft bg-parchment-deep/50">
        <Container className="grid items-start gap-12 py-20 sm:py-24 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.2fr)] lg:gap-16 lg:py-28">
          <div>
            <Overline>The number</Overline>
            <h2 className="mt-3 max-w-[16ch] font-display text-[32px] font-medium leading-tight tracking-[-0.03em] text-ink sm:text-[40px]">
              Cushion, in plain language.
            </h2>
            <p className="mt-4 max-w-[42ch] text-[17px] leading-relaxed text-ink-secondary">
              That remainder is day-to-day spending and anything not listed yet.
              Calm arithmetic — nothing more.
            </p>
            <p className="mt-6 font-mono text-[12px] leading-relaxed text-ink-muted">
              take-home − bills − payday items = cushion
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <li className="flux-card p-5">
                <p className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
                  Not a score
                </p>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-secondary">
                  It is leftover after bills and this month’s payday line items.
                </p>
              </li>
              <li className="flux-card p-5">
                <p className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
                  Not advice
                </p>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-secondary">
                  Totals are arithmetic from amounts you type. Flux does not
                  forecast wealth.
                </p>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-xl border border-border-soft bg-paper shadow-card">
            <div className="border-b border-border-soft px-5 py-4 sm:px-6">
              <Overline>Example month</Overline>
            </div>
            <MathRow label="Take-home (all income streams)" amount={1250000} />
            <MathRow label="Monthly bills" amount={-214500} />
            <MathRow label="This month’s payday line items" amount={-63000} />
            <div className="flex items-center justify-between gap-4 border-t border-ink/10 bg-forest-muted px-5 py-6 sm:px-6">
              <span className="text-[16px] font-semibold tracking-[-0.02em] text-ink">
                Cushion after bills
              </span>
              <span className="text-forest">
                <Money amount={972500} size="lg" />
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="reveal">
        <Container className="py-20 sm:py-24">
          <Overline>The layout</Overline>
          <h2 className="mt-3 font-display text-[32px] font-medium tracking-[-0.03em] text-ink sm:text-[40px]">
            How Flux is laid out
          </h2>
          <p className="mt-4 max-w-[42ch] text-[17px] text-ink-secondary">
            Four places. No feeds. No dashboards pretending to be a bank.
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {LAYOUT.map((item) => {
              const Icon = item.icon;
              const isHome = item.name === "Home";
              return (
                <article
                  key={item.name}
                  className={cn(
                    "flux-card flux-card-hover flex h-full flex-col p-6 sm:p-7",
                    isHome &&
                      "!bg-forest-muted lg:col-span-3 lg:flex-row lg:items-center lg:gap-10 lg:p-10",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-paper text-forest shadow-card",
                      isHome && "lg:h-14 lg:w-14",
                    )}
                  >
                    <Icon />
                  </span>
                  <div className={isHome ? "mt-5 lg:mt-0" : "mt-5"}>
                    <h3
                      className={cn(
                        "tracking-[-0.02em] text-ink",
                        isHome
                          ? "font-display text-[28px] font-medium sm:text-[32px]"
                          : "text-[20px] font-semibold",
                      )}
                    >
                      {item.name}
                    </h3>
                    <p className="mt-3 text-[16px] leading-relaxed text-ink-secondary">
                      {item.copy}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-10 flex justify-center gap-3 overflow-x-auto pb-2">
            <TimelinePhone className="mx-0 w-[260px] shrink-0 sm:w-[300px]" />
            <PlanPhone className="mx-0 w-[260px] shrink-0 sm:w-[300px]" />
            <NextPhone className="mx-0 w-[260px] shrink-0 sm:w-[300px]" />
          </div>
          <p className="mt-8">
            <Link
              href="/how-it-works"
              className="text-[15px] font-semibold text-forest hover:underline"
            >
              See how it works
            </Link>
          </p>
        </Container>
      </section>

      <section className="reveal border-y border-border-soft">
        <Container className="grid items-start gap-12 py-20 sm:py-24 lg:grid-cols-[1fr_1fr]">
          <div>
            <Overline>On the device</Overline>
            <h2 className="mt-3 font-display text-[32px] font-medium tracking-[-0.03em] text-ink sm:text-[40px]">
              Private by design.
            </h2>
            <p className="mt-4 max-w-[42ch] text-[17px] leading-relaxed text-ink-secondary">
              On-device storage. Optional Face ID lock. Receipts processed on
              the device. Export you control. Flux does not collect names,
              emails, budget numbers, or receipt images.
            </p>
            <p className="mt-6">
              <Link
                href="/privacy"
                className="text-[15px] font-semibold text-forest hover:underline"
              >
                Read the Privacy Policy
              </Link>
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            <PrivacyNote
              className="sm:col-span-2"
              icon={<IconLock className="text-forest" />}
              title="Stays on this device"
              body="No accounts. No cloud budget sync. Uninstalling deletes your entries."
            />
            <PrivacyNote
              className="flex-col !bg-forest-muted"
              icon={<IconExport className="text-forest" />}
              title="A file you hold"
              body="Export and import a backup you save, share, or delete. Flux does not keep a copy."
            />
            <PrivacyNote
              className="flex-col"
              icon={<IconLock className="text-forest" />}
              title="Optional lock"
              body="Face ID, Touch ID, fingerprint, or device PIN — through the operating system, not us."
            />
          </ul>
        </Container>
      </section>

      <section className="reveal">
        <Container className="py-20 sm:py-24">
          <Overline>Honest limits</Overline>
          <h2 className="mt-3 font-display text-[32px] font-medium tracking-[-0.03em] text-ink sm:text-[40px]">
            What Flux will not do
          </h2>
          <p className="mt-4 max-w-[44ch] text-[17px] text-ink-secondary">
            Said plainly, so nothing here contradicts the app.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {LIMITS.map((item, index) => {
              const last = index === 2;
              return (
                <article
                  key={item.title}
                  className={cn(
                    "flux-card flex h-full flex-col p-6 sm:p-7",
                    last &&
                      "!bg-amber-muted md:col-span-2 md:flex-row md:items-baseline md:justify-between md:gap-10 md:p-8",
                  )}
                >
                  <h3
                    className={cn(
                      "tracking-[-0.02em] text-ink",
                      last
                        ? "font-display text-[24px] font-medium sm:text-[28px]"
                        : "text-[18px] font-semibold",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "text-[15px] leading-relaxed text-ink-secondary",
                      last ? "mt-3 max-w-[52ch] md:mt-0" : "mt-auto pt-4",
                    )}
                  >
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

function MathRow({
  label,
  amount,
}: Readonly<{ label: string; amount: number }>) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border-soft px-5 py-4 sm:px-6">
      <span className="text-[15px] text-ink-secondary">{label}</span>
      <span className={amount < 0 ? "text-ink" : "text-forest"}>
        <Money amount={amount} signed={amount < 0} size="md" />
      </span>
    </div>
  );
}

function PrivacyNote({
  icon,
  title,
  body,
  className,
}: Readonly<{
  icon: React.ReactNode;
  title: string;
  body: string;
  className?: string;
}>) {
  return (
    <li className={cn("flux-card flex gap-4 p-5", className)}>
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border-soft bg-paper">
        {icon}
      </span>
      <div>
        <p className="text-[16px] font-semibold tracking-[-0.02em] text-ink">
          {title}
        </p>
        <p className="mt-1 text-[15px] leading-relaxed text-ink-secondary">
          {body}
        </p>
      </div>
    </li>
  );
}
