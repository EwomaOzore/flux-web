import { StoreBadges } from "@/components/StoreBadges";
import { Container } from "@/components/Chrome";

export function DownloadBand() {
  return (
    <section className="bg-espresso">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 sm:py-20 md:flex-row md:items-center">
        <div>
          <p className="overline text-[#9A9188]">iOS and Android</p>
          <h2 className="mt-3 font-display text-[32px] font-medium leading-tight tracking-[-0.03em] text-parchment sm:text-[40px]">
            Get Flux.
          </h2>
          <p className="mt-3 max-w-md text-[16px] leading-relaxed text-[#D0CAC2]">
            A private payday planner. Your numbers never leave your phone.
          </p>
        </div>
        <StoreBadges tone="dark" />
      </Container>
    </section>
  );
}
