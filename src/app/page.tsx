import { Container, DisclaimerChip, Overline } from "@/components/Chrome";
import { IconExport, IconLock } from "@/components/Icons";
import { Money } from "@/components/Money";
import { HeroLoop } from "@/components/HeroLoop";
import { NextPhone, PlanPhone, TimelinePhone } from "@/components/PhoneMocks";
import { StoreBadges } from "@/components/StoreBadges";
import Link from "next/link";

const LAYOUT = [
  {
    name: "Home",
    copy: "This month’s run: income, bills, payday line items, and the cushion left.",
  },
  {
    name: "Timeline",
    copy: "Months listed with their line items. A ledger of what you logged.",
  },
  {
    name: "Plan",
    copy: "Add and tune income streams and bills. This is where the arithmetic starts.",
  },
  {
    name: "Next",
    copy: "Look ahead to upcoming months, using the numbers already on Plan.",
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
      <section>
        <Container className="grid items-center gap-16 overflow-x-visible py-16 sm:py-24 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.25fr)] lg:gap-6 lg:py-20">
          <div className="reveal">
            <Overline>Personal payday planner</Overline>
            <h1 className="mt-4 max-w-[16ch] font-display text-[40px] font-normal leading-[1.08] tracking-[-0.045em] text-ink sm:text-[56px] lg:text-[64px] lg:leading-[1.05]">
              See exactly what’s left after every bill is paid.
            </h1>
            <p className="mt-6 max-w-[38ch] text-[17px] leading-[1.65] text-ink-secondary sm:text-[18px]">
              Combine jobs and gigs. Track bills in your currency. Your budget
              stays on this device — Flux never collects it.
            </p>
            <StoreBadges className="mt-8" />
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-medium text-ink-secondary">
              <span>No account</span>
              <span className="text-border" aria-hidden>
                ·
              </span>
              <span>No bank login</span>
              <span className="text-border" aria-hidden>
                ·
              </span>
              <span>No ads</span>
            </div>
            <DisclaimerChip className="mt-5" />
          </div>
          <div className="reveal flex justify-center overflow-visible lg:justify-end">
            <HeroLoop />
          </div>
        </Container>
      </section>

      <section className="reveal border-t border-border-soft bg-parchment-deep/50">
        <Container className="py-20 sm:py-24">
          <Overline>The number</Overline>
          <h2 className="mt-3 max-w-[18ch] font-display text-[32px] font-medium leading-tight tracking-[-0.03em] text-ink sm:text-[40px]">
            Cushion, in plain language.
          </h2>
          <p className="mt-4 max-w-[46ch] text-[17px] leading-relaxed text-ink-secondary">
            That remainder is day-to-day spending and anything not listed yet.
            Not a score. Not advice. Calm arithmetic — nothing more.
          </p>
          <div className="mt-10 max-w-[34rem] overflow-hidden rounded-xl border border-border-soft bg-paper shadow-card">
            <MathRow label="Take-home (all income streams)" amount={1250000} />
            <MathRow label="Monthly bills" amount={-214500} />
            <MathRow label="This month’s payday line items" amount={-63000} />
            <div className="flex items-center justify-between gap-4 border-t border-ink/10 bg-forest-muted px-5 py-5 sm:px-6">
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
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {LAYOUT.map((item) => (
              <article
                key={item.name}
                className="flux-card flux-card-hover p-6 sm:p-7"
              >
                <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-ink">
                  {item.name}
                </h3>
                <p className="mt-2 text-[16px] leading-relaxed text-ink-secondary">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-start gap-6 overflow-x-auto pb-4 sm:justify-center">
            <PlanPhone className="w-[250px] shrink-0 sm:w-[260px]" />
            <TimelinePhone className="w-[250px] shrink-0 sm:w-[260px]" />
            <NextPhone className="w-[250px] shrink-0 sm:w-[260px]" />
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
          <ul className="grid gap-3">
            <PrivacyNote
              icon={<IconLock className="text-forest" />}
              title="Stays on this device"
              body="No accounts. No cloud budget sync. Uninstalling deletes your entries."
            />
            <PrivacyNote
              icon={<IconExport className="text-forest" />}
              title="A file you hold"
              body="Export and import a backup you save, share, or delete. Flux does not keep a copy."
            />
            <PrivacyNote
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
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {LIMITS.map((item) => (
              <article key={item.title} className="flux-card p-6">
                <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function MathRow({ label, amount }: { label: string; amount: number }) {
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
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <li className="flux-card flex gap-4 p-5">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-forest-muted">
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
