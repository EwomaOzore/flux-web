import type { Metadata } from "next";

import { Container, Overline } from "@/components/Chrome";
import { IconCamera } from "@/components/Icons";
import { Money } from "@/components/Money";
import { PageHero } from "@/components/PageHero";
import {
  CurrencyPhone,
  FaceIdPhone,
  HomeEspressoPhone,
  HomePhone,
  PlanPhone,
  SettingsPhone,
  TimelinePhone,
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
    id: "timeline",
    overline: "Timeline",
    title: "Months, with line items.",
    body: "Payday outflows you log as the month happens sit on the timeline. Open a month. See what you entered. Nothing syncs to a cloud ledger.",
    visual: "timeline",
  },
  {
    id: "bills",
    overline: "Plan",
    title: "Bills live on Plan.",
    body: "Rent, power, data — whatever you list. Amber is for bills. They subtract from take-home every month until you change them.",
    visual: "bills",
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
              className="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
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
  );
}

function FeatureVisual({ id }: { id: string }) {
  if (id === "income") {
    return <HomePhone />;
  }
  if (id === "bills") {
    return <PlanPhone />;
  }
  if (id === "timeline") {
    return <TimelinePhone />;
  }
  if (id === "receipts") {
    return (
      <div className="overflow-hidden rounded-xl border border-border-soft bg-parchment p-4 shadow-card">
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
      </div>
    );
  }
  if (id === "reminders") {
    return <SettingsPhone />;
  }
  if (id === "lock") {
    return <FaceIdPhone />;
  }
  if (id === "currency") {
    return <CurrencyPhone />;
  }
  if (id === "appearance") {
    return (
      <div className="flex justify-center gap-3 overflow-x-auto pb-2">
        <HomePhone className="mx-0 w-[220px] shrink-0 sm:w-[260px]" />
        <HomeEspressoPhone className="mx-0 w-[220px] shrink-0 sm:w-[260px]" />
      </div>
    );
  }
  return <SettingsPhone />;
}
