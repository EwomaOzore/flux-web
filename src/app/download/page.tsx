import type { Metadata } from "next";

import { Container, DisclaimerChip, Overline } from "@/components/Chrome";
import { PageHero } from "@/components/PageHero";
import { HomePhone } from "@/components/PhoneMocks";
import { StoreBadges } from "@/components/StoreBadges";
import {
  APP_STORE_PLACEHOLDER,
  APP_STORE_URL,
  PLAY_STORE_PLACEHOLDER,
  PLAY_STORE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download Flux for iOS and Android. A private payday planner. Your numbers never leave your phone.",
};

export default function DownloadPage() {
  const listingsLive = Boolean(APP_STORE_URL && PLAY_STORE_URL);

  return (
    <Container className="py-16 sm:py-24">
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_auto]">
        <div>
          <PageHero overline="Download" title="Get Flux on your phone.">
            <p>
              iOS and Android, built with Expo. Your budget stays on the
              device. No account to create first.
            </p>
          </PageHero>
          <StoreBadges className="mt-8" />
          <DisclaimerChip className="mt-6" />
          {!listingsLive ? (
            <p className="mt-6 max-w-[42ch] rounded-lg border border-dashed border-border bg-paper px-4 py-3 text-[13px] leading-relaxed text-ink-muted">
              Store listings are being prepared. Placeholders:{" "}
              <span className="font-mono">{APP_STORE_PLACEHOLDER}</span>
              {" · "}
              <span className="font-mono">{PLAY_STORE_PLACEHOLDER}</span>
            </p>
          ) : null}
        </div>
        <HomePhone className="lg:mr-4" />
      </div>

      <div className="mt-20 grid gap-4 md:grid-cols-2">
        <article className="flux-card flex flex-col !bg-forest-muted p-6 md:col-span-2 md:flex-row md:items-end md:justify-between md:gap-10 md:p-8">
          <div>
            <Overline>Recap</Overline>
            <h2 className="mt-3 font-display text-[24px] font-medium tracking-[-0.03em] text-ink sm:text-[28px]">
              Income in. Bills out. Cushion left.
            </h2>
          </div>
          <p className="mt-4 max-w-[36ch] text-[15px] leading-relaxed text-ink-secondary md:mt-0">
            A calculator. Not a bank. Not financial advice.
          </p>
        </article>
        <article className="flux-card flex h-full flex-col p-6">
          <Overline>iOS</Overline>
          <h2 className="mt-3 text-[18px] font-semibold tracking-[-0.02em] text-ink">
            iPhone and iPad
          </h2>
          <p className="mt-auto pt-3 text-[15px] leading-relaxed text-ink-secondary">
            Requires a recent iOS version as listed on the App Store. Tablet
            layouts are supported.
          </p>
        </article>
        <article className="flux-card flex h-full flex-col p-6">
          <Overline>Android</Overline>
          <h2 className="mt-3 text-[18px] font-semibold tracking-[-0.02em] text-ink">
            Phones and tablets
          </h2>
          <p className="mt-auto pt-3 text-[15px] leading-relaxed text-ink-secondary">
            Requires a recent Android version as listed on Google Play. Bundle
            ID: com.fluxbudget.app.
          </p>
        </article>
      </div>
    </Container>
  );
}
