import type { Metadata } from "next";

import { Button } from "@/components/Button";
import { Container, DisclaimerChip, Overline } from "@/components/Chrome";
import { Money } from "@/components/Money";

export const metadata: Metadata = {
  title: "Brand",
  description: "Flux brand sheet — colors, type, buttons, and voice.",
  robots: { index: false, follow: true },
};

const COLORS = [
  { name: "Ink", hex: "#1C1814", className: "bg-ink" },
  { name: "Ink secondary", hex: "#5A5349", className: "bg-ink-secondary" },
  { name: "Ink muted", hex: "#9A9188", className: "bg-ink-muted" },
  { name: "Parchment", hex: "#EDE9E3", className: "bg-parchment border border-border" },
  { name: "Parchment deep", hex: "#E0DAD3", className: "bg-parchment-deep" },
  { name: "Paper", hex: "#FFFFFF", className: "bg-paper border border-border-soft" },
  { name: "Forest", hex: "#2B7A50", className: "bg-forest" },
  { name: "Forest muted", hex: "#EBF5EE", className: "bg-forest-muted" },
  { name: "Amber", hex: "#B36B0F", className: "bg-amber" },
  { name: "Amber muted", hex: "#FBF0E2", className: "bg-amber-muted" },
  { name: "Danger", hex: "#B54A3C", className: "bg-danger" },
  { name: "Espresso", hex: "#1C1814", className: "bg-espresso" },
] as const;

const DO = [
  "Your budget stays on your device.",
  "Income in. Bills out. Cushion left.",
  "See exactly what’s left after every bill is paid.",
  "Calm arithmetic — nothing more.",
];

const DONT = [
  "Take control of your financial future.",
  "AI-powered wealth insights.",
  "Unlock your savings potential.",
  "Revolutionize how you bank.",
];

export default function BrandPage() {
  return (
    <Container className="py-16 sm:py-24">
      <Overline>Brand sheet</Overline>
      <h1 className="mt-3 font-display text-[40px] font-medium tracking-[-0.04em] text-ink sm:text-[48px]">
        Paper, forest, one number.
      </h1>
      <p className="mt-4 max-w-[44ch] text-[17px] text-ink-secondary">
        Calm. Private. Grounded. Precise. Header and footer on this page are
        the live chrome.
      </p>
      <DisclaimerChip className="mt-6" />

      <section className="mt-16">
        <h2 className="font-display text-[28px] font-medium tracking-[-0.03em]">
          Color
        </h2>
        <p className="mt-2 text-[15px] text-ink-secondary">
          Light parchment is the public site. Amber is for bills only. Never
          Apple blue, electric lime, or purple gradients.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {COLORS.map((c) => (
            <li key={c.name} className="flux-card overflow-hidden">
              <div className={`h-16 ${c.className}`} />
              <div className="px-3 py-3">
                <p className="text-[13px] font-semibold text-ink">{c.name}</p>
                <p className="font-mono text-[12px] text-ink-muted">{c.hex}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-[28px] font-medium tracking-[-0.03em]">
          Type
        </h2>
        <div className="mt-6 space-y-8">
          <div>
            <p className="overline">Fraunces — display</p>
            <p className="mt-2 font-display text-[48px] font-normal leading-none tracking-[-0.04em] text-ink sm:text-[64px]">
              Flux
            </p>
            <p className="mt-3 font-display text-[28px] font-medium tracking-[-0.03em] text-ink">
              See exactly what’s left after every bill is paid.
            </p>
          </div>
          <div>
            <p className="overline">Instrument Sans — UI</p>
            <p className="mt-2 max-w-[46ch] text-[17px] leading-[1.65] text-ink-secondary">
              Combine jobs and gigs. Track bills in your currency. Your budget
              stays on this device — Flux never collects it.
            </p>
          </div>
          <div>
            <p className="overline">JetBrains Mono — amounts only</p>
            <p className="mt-2 text-forest">
              <Money amount={972500} size="hero" />
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-[28px] font-medium tracking-[-0.03em]">
          Buttons
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/download">Download for iOS</Button>
          <Button href="/download" variant="secondary">
            Download for Android
          </Button>
        </div>
        <div className="mt-4 rounded-lg bg-espresso p-6">
          <Button href="/download" variant="on-dark">
            Get Flux
          </Button>
        </div>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-2">
        <article className="rounded-xl bg-forest-muted p-7">
          <Overline>Do</Overline>
          <ul className="mt-4 space-y-3">
            {DO.map((line) => (
              <li key={line} className="text-[16px] leading-relaxed text-ink">
                “{line}”
              </li>
            ))}
          </ul>
        </article>
        <article className="flux-card p-7">
          <Overline>Don’t</Overline>
          <ul className="mt-4 space-y-3">
            {DONT.map((line) => (
              <li
                key={line}
                className="text-[16px] leading-relaxed text-ink-secondary line-through decoration-danger/40"
              >
                “{line}”
              </li>
            ))}
          </ul>
        </article>
      </section>
    </Container>
  );
}
