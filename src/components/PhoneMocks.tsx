import Image from "next/image";

import {
  IconBars,
  IconHome,
  IconNext,
  IconPlan,
} from "@/components/Icons";
import { Money } from "@/components/Money";
import { PhoneFrame } from "@/components/PhoneFrame";
import { cn } from "@/lib/cn";

const FEED = [
  { label: "Salary", amount: 420000, kind: "income" as const },
  { label: "Weekend gigs", amount: 85000, kind: "income" as const },
  { label: "Rent", amount: -180000, kind: "bill" as const },
  { label: "Power", amount: -28000, kind: "bill" as const },
  { label: "Data", amount: -15000, kind: "bill" as const },
  { label: "Market run", amount: -42000, kind: "outflow" as const },
];

function BrandRow({
  title,
  subtitle,
  dark = false,
}: {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center justify-between px-[18px] pt-8">
      <div className="flex items-center gap-2">
        <Image
          src="/brand/logo.png"
          alt=""
          width={22}
          height={22}
          className="rounded-[6px]"
        />
        {title ? (
          <div>
            <p
              className={cn(
                "font-display text-[16px] tracking-[-0.03em]",
                dark ? "text-parchment" : "text-ink",
              )}
            >
              {title}
            </p>
            {subtitle ? (
              <p className="text-[11px] text-ink-muted">{subtitle}</p>
            ) : null}
          </div>
        ) : (
          <span
            className={cn(
              "font-display text-[16px] tracking-[-0.04em]",
              dark ? "text-parchment" : "text-ink",
            )}
          >
            flux
          </span>
        )}
      </div>
      {!title ? (
        <span className="text-[11px] font-medium text-ink-muted">September</span>
      ) : null}
    </div>
  );
}

function TabBar({
  active,
  dark = false,
}: {
  active: "home" | "timeline" | "plan" | "next";
  dark?: boolean;
}) {
  const items = [
    { id: "home", icon: IconHome },
    { id: "timeline", icon: IconBars },
    { id: "plan", icon: IconPlan },
    { id: "next", icon: IconNext },
  ] as const;

  return (
    <div
      className={cn(
        "absolute inset-x-3 bottom-3 flex items-center justify-around rounded-xl px-2 py-2.5",
        dark
          ? "bg-espresso-elevated/95 border border-border-dark"
          : "bg-paper/90 border border-border-soft shadow-card",
      )}
    >
      {items.map((item) => {
        const Icon = item.icon;
        const on = item.id === active;
        return (
          <span
            key={item.id}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-sm",
              on
                ? dark
                  ? "text-mint"
                  : "text-forest"
                : "text-ink-muted",
            )}
          >
            <Icon />
          </span>
        );
      })}
    </div>
  );
}

function Dot({ kind }: { kind: "income" | "bill" | "outflow" }) {
  return (
    <span
      className={cn(
        "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
        kind === "income"
          ? "bg-forest"
          : kind === "bill"
            ? "bg-amber"
            : "bg-ink-secondary",
      )}
    />
  );
}

export function HomePhone({ className }: { className?: string }) {
  return (
    <PhoneFrame className={className} label="Home — this month’s run">
      <div className="relative min-h-[560px] pb-16">
        <BrandRow />
        <div className="mx-[18px] mt-4 rounded-[22px] border border-border-soft bg-paper px-[18px] py-5 shadow-card">
          <p className="text-[10px] font-bold tracking-[0.12em] text-ink-muted">
            CUSHION AFTER BILLS
          </p>
          <p className="mt-1 text-forest">
            <Money amount={240000} size="hero" />
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-pill bg-forest-muted px-2.5 py-1 text-[11px] font-medium text-forest">
              <span className="h-1.5 w-1.5 rounded-full bg-forest" />
              Healthy cushion
            </span>
            <span className="text-[11px] text-ink-muted">
              <Money amount={12000} signed size="sm" /> vs last
            </span>
          </div>
        </div>
        <div className="mx-[18px] mt-3 grid grid-cols-3 gap-1.5">
          <MiniStat label="INCOME" amount={505000} tone="income" />
          <MiniStat label="BILLS" amount={223000} tone="bills" />
          <MiniStat label="OUTFLOWS" amount={42000} tone="out" />
        </div>
        <p className="mt-4 text-center text-[10px] font-bold tracking-[0.12em] text-ink-muted">
          THIS MONTH
        </p>
        <div className="mx-[18px] mt-2 overflow-hidden rounded-[18px] border border-border-soft bg-paper">
          {FEED.map((row, i) => (
            <div
              key={row.label}
              className={cn(
                "flex items-center gap-2 px-3 py-2.5",
                i < FEED.length - 1 && "border-b border-border-soft",
              )}
            >
              <Dot kind={row.kind} />
              <span className="flex-1 truncate text-[12px] text-ink-secondary">
                {row.label}
              </span>
              <span
                className={
                  row.amount >= 0 ? "text-forest" : "text-ink"
                }
              >
                <Money amount={row.amount} signed size="sm" />
              </span>
            </div>
          ))}
        </div>
        <TabBar active="home" />
      </div>
    </PhoneFrame>
  );
}

function MiniStat({
  label,
  amount,
  tone,
}: {
  label: string;
  amount: number;
  tone: "income" | "bills" | "out";
}) {
  const bg =
    tone === "income"
      ? "bg-forest-muted"
      : tone === "bills"
        ? "bg-amber-muted"
        : "bg-parchment-deep";
  const color =
    tone === "income"
      ? "text-forest"
      : tone === "bills"
        ? "text-amber"
        : "text-ink-secondary";
  return (
    <div className={cn("rounded-md border border-border-soft px-1.5 py-2", bg)}>
      <p className="text-[9px] font-bold tracking-[0.1em] text-ink-muted">
        {label}
      </p>
      <p className={cn("mt-0.5 leading-none", color)}>
        <Money amount={amount} size="sm" />
      </p>
    </div>
  );
}

export function PlanPhone({ className }: { className?: string }) {
  return (
    <PhoneFrame className={className} label="Plan — income and bills">
      <div className="relative min-h-[560px] pb-16">
        <BrandRow title="Plan" subtitle="Tune the numbers you type" />
        <section className="mx-[18px] mt-4">
          <p className="text-[10px] font-bold tracking-[0.12em] text-ink-muted">
            INCOME STREAMS
          </p>
          <div className="mt-2 overflow-hidden rounded-[18px] border border-border-soft bg-paper">
            <PlanRow label="Salary" amount={420000} note="Recurring" />
            <PlanRow label="Weekend gigs" amount={85000} note="Recurring" last />
          </div>
        </section>
        <section className="mx-[18px] mt-4">
          <p className="text-[10px] font-bold tracking-[0.12em] text-ink-muted">
            BILLS
          </p>
          <div className="mt-2 overflow-hidden rounded-[18px] border border-border-soft bg-paper">
            <PlanRow label="Rent" amount={180000} bill />
            <PlanRow label="Power" amount={28000} bill />
            <PlanRow label="Data" amount={15000} bill last />
          </div>
        </section>
        <div className="mx-[18px] mt-4 rounded-md border border-dashed border-border bg-paper px-3 py-3 text-center text-[12px] font-medium text-forest">
          Add a bill
        </div>
        <TabBar active="plan" />
      </div>
    </PhoneFrame>
  );
}

function PlanRow({
  label,
  amount,
  note,
  bill,
  last,
}: {
  label: string;
  amount: number;
  note?: string;
  bill?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-3 py-3",
        !last && "border-b border-border-soft",
      )}
    >
      <div>
        <p className="text-[13px] font-medium text-ink">{label}</p>
        {note ? <p className="text-[11px] text-ink-muted">{note}</p> : null}
      </div>
      <span className={bill ? "text-amber" : "text-forest"}>
        <Money amount={amount} size="sm" />
      </span>
    </div>
  );
}

export function TimelinePhone({ className }: { className?: string }) {
  const months = [
    { name: "September", cushion: 240000, lines: 1 },
    { name: "August", cushion: 228000, lines: 3 },
    { name: "July", cushion: 191000, lines: 2 },
  ];
  return (
    <PhoneFrame className={className} label="Timeline — months with line items">
      <div className="relative min-h-[560px] pb-16">
        <BrandRow title="Timeline" subtitle="Every month you logged" />
        <div className="mx-[18px] mt-4 space-y-2.5">
          {months.map((m) => (
            <div
              key={m.name}
              className="rounded-[18px] border border-border-soft bg-paper px-3.5 py-3.5 shadow-card"
            >
              <div className="flex items-baseline justify-between">
                <p className="font-display text-[18px] tracking-[-0.03em] text-ink">
                  {m.name}
                </p>
                <span className="text-forest">
                  <Money amount={m.cushion} size="md" />
                </span>
              </div>
              <p className="mt-1 text-[11px] text-ink-muted">
                {m.lines} payday line {m.lines === 1 ? "item" : "items"} · cushion
              </p>
            </div>
          ))}
        </div>
        <TabBar active="timeline" />
      </div>
    </PhoneFrame>
  );
}

export function NextPhone({ className }: { className?: string }) {
  const months = [
    { name: "September", cushion: 240000, featured: true },
    { name: "October", cushion: 255000, featured: false },
    { name: "November", cushion: 255000, featured: false },
  ];
  return (
    <PhoneFrame className={className} label="Next — look ahead">
      <div className="relative min-h-[560px] pb-16">
        <BrandRow title="Upcoming" subtitle="Next 3 payday runs" />
        <div className="mx-[18px] mt-4 space-y-2.5">
          {months.map((m) => (
            <div
              key={m.name}
              className={cn(
                "rounded-[18px] border px-3.5 py-3.5",
                m.featured
                  ? "border-forest bg-forest-muted"
                  : "border-border-soft bg-paper",
              )}
            >
              <p className="text-[12px] font-medium text-ink-secondary">
                {m.name}
              </p>
              <p className="mt-1 text-forest">
                <Money amount={m.cushion} size="lg" />
              </p>
              <p className="mt-1 text-[11px] text-ink-muted">cushion after bills</p>
            </div>
          ))}
        </div>
        <TabBar active="next" />
      </div>
    </PhoneFrame>
  );
}

export function DarkPhone({ className }: { className?: string }) {
  return (
    <PhoneFrame className={className} dark label="Dark — espresso appearance">
      <div className="relative min-h-[560px] bg-espresso pb-16">
        <BrandRow dark />
        <div className="mx-[18px] mt-4 rounded-[22px] border border-border-dark bg-espresso-elevated px-[18px] py-5">
          <p className="text-[10px] font-bold tracking-[0.12em] text-ink-muted">
            CUSHION AFTER BILLS
          </p>
          <p className="mt-1 text-mint">
            <Money amount={240000} size="hero" />
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-pill bg-mint-muted px-2.5 py-1 text-[11px] font-medium text-mint">
            Healthy cushion
          </span>
        </div>
        <div className="mx-[18px] mt-3 grid grid-cols-3 gap-1.5">
          <div className="rounded-md border border-border-dark bg-mint-muted px-1.5 py-2">
            <p className="text-[9px] font-bold tracking-[0.1em] text-ink-muted">
              INCOME
            </p>
            <p className="mt-0.5 text-mint">
              <Money amount={505000} size="sm" />
            </p>
          </div>
          <div className="rounded-md border border-border-dark bg-[#2E2418] px-1.5 py-2">
            <p className="text-[9px] font-bold tracking-[0.1em] text-ink-muted">
              BILLS
            </p>
            <p className="mt-0.5 text-amber-dark">
              <Money amount={223000} size="sm" />
            </p>
          </div>
          <div className="rounded-md border border-border-dark bg-espresso-elevated px-1.5 py-2">
            <p className="text-[9px] font-bold tracking-[0.1em] text-ink-muted">
              OUT
            </p>
            <p className="mt-0.5 text-parchment">
              <Money amount={42000} size="sm" />
            </p>
          </div>
        </div>
        <TabBar active="home" dark />
      </div>
    </PhoneFrame>
  );
}

export function UiCrop({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border-soft bg-parchment p-4 shadow-card",
        className,
      )}
    >
      {children}
    </div>
  );
}
