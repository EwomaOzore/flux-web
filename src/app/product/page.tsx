import type { Metadata } from "next";

import { Container, Overline } from "@/components/Chrome";
import { DownloadBand } from "@/components/DownloadBand";
import {
  IconBell,
  IconCamera,
  IconExport,
  IconLock,
} from "@/components/Icons";
import { Money } from "@/components/Money";
import { PageHero } from "@/components/PageHero";
import {
  DarkPhone,
  PlanPhone,
  TimelinePhone,
  UiCrop,
} from "@/components/PhoneMocks";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Income streams, bills, timeline, receipts, reminders, lock, currencies, and backup — the Flux payday planner, plainly.",
};

const FEATURES = [
  {
    id: "income",
    overline: "Plan",
    title: "More than one payday.",
    body: "Salary, gigs, side work, or a one-time amount. Each stream is a line you type. Flux totals them for the month — it does not fetch pay from anywhere.",
    visual: "income",
  },
  {
    id: "bills",
    overline: "Plan",
    title: "Bills live on Plan.",
    body: "Rent, power, data — whatever you list. Amber is for bills. They subtract from take-home every month until you change them.",
    visual: "bills",
  },
  {
    id: "timeline",
    overline: "Timeline",
    title: "Months, with line items.",
    body: "Payday outflows you log as the month happens sit on the timeline. Open a month. See what you entered. Nothing syncs to a cloud ledger.",
    visual: "timeline",
  },
  {
    id: "receipts",
    overline: "Optional",
    title: "Scan a receipt on the device.",
    body: "Camera or photos, if you want them. Text is extracted on the phone. Images are not uploaded to Flux servers.",
    visual: "receipts",
  },
  {
    id: "reminders",
    overline: "Optional",
    title: "A payday reminder.",
    body: "Local notifications on this device. Reminder content is not sent to us. Turn it off in Settings.",
    visual: "reminders",
  },
  {
    id: "lock",
    overline: "Optional",
    title: "Face ID, if you want a lock.",
    body: "Flux asks the operating system. We never receive biometric templates — only a local preference that lock is on.",
    visual: "lock",
  },
  {
    id: "currency",
    overline: "Settings",
    title: "Your currency.",
    body: "Pick one at the start, change it later. Amounts are what you type. Flux does not convert markets or pull rates.",
    visual: "currency",
  },
  {
    id: "appearance",
    overline: "Settings",
    title: "Parchment or espresso.",
    body: "Light is warm paper. Dark is espresso. Same arithmetic. Same quiet layout.",
    visual: "appearance",
  },
  {
    id: "backup",
    overline: "Settings",
    title: "Export you control.",
    body: "A file you save, share, or delete. Import reads a file you choose. Flux does not cloud-backup your entries.",
    visual: "backup",
  },
] as const;

export default function ProductPage() {
  return (
    <>
      <Container className="py-16 sm:py-24">
        <PageHero overline="Product" title="The tools, no extra story.">
          <p>
            Everything Flux does. Nothing it pretends to do. Income in. Bills
            out. Cushion left.
          </p>
        </PageHero>

        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
          {FEATURES.map((feature, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={feature.id}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={reverse ? "lg:order-2" : undefined}>
                  <Overline>{feature.overline}</Overline>
                  <h2 className="mt-3 font-display text-[28px] font-medium tracking-[-0.03em] text-ink sm:text-[32px]">
                    {feature.title}
                  </h2>
                  <p className="mt-4 max-w-[42ch] text-[17px] leading-relaxed text-ink-secondary">
                    {feature.body}
                  </p>
                </div>
                <div className={reverse ? "lg:order-1" : undefined}>
                  <FeatureVisual id={feature.visual} />
                </div>
              </article>
            );
          })}
        </div>
      </Container>
      <DownloadBand />
    </>
  );
}

function FeatureVisual({ id }: { id: string }) {
  if (id === "income") {
    return (
      <UiCrop>
        <p className="text-[10px] font-bold tracking-[0.12em] text-ink-muted">
          INCOME STREAMS
        </p>
        <div className="mt-3 space-y-2">
          <Stream label="Salary" amount={420000} note="Recurring" />
          <Stream label="Weekend gigs" amount={85000} note="Recurring" />
          <Stream label="One-time invoice" amount={60000} note="This month" />
        </div>
      </UiCrop>
    );
  }
  if (id === "bills") {
    return <PlanPhone className="sm:w-[280px]" />;
  }
  if (id === "timeline") {
    return <TimelinePhone className="sm:w-[280px]" />;
  }
  if (id === "receipts") {
    return (
      <UiCrop>
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest-muted text-forest">
            <IconCamera />
          </span>
          <div>
            <p className="text-[15px] font-semibold text-ink">Receipt scan</p>
            <p className="text-[13px] text-ink-muted">On-device OCR</p>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-border-soft bg-paper px-4 py-3">
          <p className="text-[12px] text-ink-muted">Extracted on this phone</p>
          <p className="mt-1 text-[15px] font-medium text-ink">Market run</p>
          <p className="mt-1 text-amber">
            <Money amount={18500} size="md" />
          </p>
        </div>
        <p className="mt-3 text-[13px] text-ink-secondary">
          Images stay on the device. Flux servers never see them.
        </p>
      </UiCrop>
    );
  }
  if (id === "reminders") {
    return (
      <UiCrop>
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-muted text-amber">
            <IconBell />
          </span>
          <div>
            <p className="text-[15px] font-semibold text-ink">Payday reminder</p>
            <p className="text-[13px] text-ink-muted">Local notification</p>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-border-soft bg-paper px-4 py-4">
          <p className="font-display text-[20px] tracking-[-0.03em] text-ink">
            Payday is today
          </p>
          <p className="mt-1 text-[14px] text-ink-secondary">
            Check Plan, then log line items as they happen.
          </p>
        </div>
      </UiCrop>
    );
  }
  if (id === "lock") {
    return (
      <UiCrop>
        <div className="flex flex-col items-center py-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest-muted text-forest">
            <IconLock className="h-6 w-6" />
          </span>
          <p className="mt-4 font-display text-[24px] tracking-[-0.03em] text-ink">
            Unlock Flux
          </p>
          <p className="mt-2 max-w-[24ch] text-[14px] text-ink-secondary">
            Face ID, Touch ID, fingerprint, or your device PIN.
          </p>
        </div>
      </UiCrop>
    );
  }
  if (id === "currency") {
    return (
      <UiCrop>
        <p className="text-[10px] font-bold tracking-[0.12em] text-ink-muted">
          CURRENCY
        </p>
        <div className="mt-3 divide-y divide-border-soft overflow-hidden rounded-lg border border-border-soft bg-paper">
          <CurrencyRow code="NGN" name="Naira" selected />
          <CurrencyRow code="USD" name="US Dollar" />
          <CurrencyRow code="GBP" name="Pound Sterling" />
          <CurrencyRow code="EUR" name="Euro" />
        </div>
      </UiCrop>
    );
  }
  if (id === "appearance") {
    return (
      <div className="grid items-start gap-4 sm:grid-cols-2">
        <div className="flux-card p-4">
          <p className="text-[12px] font-semibold text-ink-muted">Light</p>
          <p className="mt-2 font-display text-[22px] text-ink">Parchment</p>
          <div className="mt-3 h-20 rounded-md bg-parchment" />
          <div className="mt-2 h-8 rounded-sm bg-paper border border-border-soft" />
        </div>
        <div className="overflow-hidden rounded-xl">
          <DarkPhone className="w-full sm:w-[240px]" />
        </div>
      </div>
    );
  }
  return (
    <UiCrop>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest-muted text-forest">
          <IconExport />
        </span>
        <div>
          <p className="text-[15px] font-semibold text-ink">Export backup</p>
          <p className="text-[13px] text-ink-muted">A file on this device</p>
        </div>
      </div>
      <p className="mt-4 rounded-lg border border-dashed border-border bg-paper px-4 py-6 text-center text-[14px] text-ink-secondary">
        flux-backup.json
      </p>
    </UiCrop>
  );
}

function Stream({
  label,
  amount,
  note,
}: {
  label: string;
  amount: number;
  note: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border-soft bg-paper px-4 py-3">
      <div>
        <p className="text-[14px] font-medium text-ink">{label}</p>
        <p className="text-[12px] text-ink-muted">{note}</p>
      </div>
      <span className="text-forest">
        <Money amount={amount} size="sm" />
      </span>
    </div>
  );
}

function CurrencyRow({
  code,
  name,
  selected,
}: {
  code: string;
  name: string;
  selected?: boolean;
}) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <span>
        <span className="font-mono text-[13px] font-medium text-ink">{code}</span>
        <span className="ml-2 text-[13px] text-ink-secondary">{name}</span>
      </span>
      {selected ? (
        <span className="text-[12px] font-semibold text-forest">Selected</span>
      ) : null}
    </div>
  );
}
