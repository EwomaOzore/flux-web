import Image from "next/image";

import { cn } from "@/lib/cn";
import { screenSize, screens } from "@/lib/screens";

export function AppScreen({
  src,
  alt,
  label,
  className,
  priority = false,
}: Readonly<{
  src: string;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
}>) {
  const { width, height } = screenSize(src);

  return (
    <figure className={cn("mx-auto w-[260px] sm:w-[300px]", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        unoptimized
        className="h-auto w-full bg-transparent"
      />
      {label ? (
        <figcaption className="mt-3 text-center text-[13px] text-ink-muted">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function HomePhone({
  className,
  priority,
}: Readonly<{
  className?: string;
  priority?: boolean;
}>) {
  return (
    <AppScreen
      src={screens.home}
      alt="Flux Home: cushion after bills, this month’s income, bills, and payday line items."
      label="Home — this month’s run"
      className={className}
      priority={priority}
    />
  );
}

export function HomeEspressoPhone({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <AppScreen
      src={screens.homeEspresso}
      alt="Flux Home in espresso appearance: the same cushion, on a dark screen."
      label="Home — espresso"
      className={className}
    />
  );
}

export function PlanPhone({ className }: Readonly<{ className?: string }>) {
  return (
    <AppScreen
      src={screens.plan}
      alt="Flux Plan: income streams, recurring bills, and payday outflows."
      label="Plan — income and bills"
      className={className}
    />
  );
}

export function TimelinePhone({ className }: Readonly<{ className?: string }>) {
  return (
    <AppScreen
      src={screens.timeline}
      alt="Flux Timeline: months listed with income, outflows, and cushion."
      label="Timeline — months with line items"
      className={className}
    />
  );
}

export function NextPhone({ className }: Readonly<{ className?: string }>) {
  return (
    <AppScreen
      src={screens.next}
      alt="Flux Next: upcoming payday runs with cushion, income, bills, and outflows."
      label="Next — look ahead"
      className={className}
    />
  );
}

export function WelcomePhone({
  className,
  priority,
}: Readonly<{
  className?: string;
  priority?: boolean;
}>) {
  return (
    <AppScreen
      src={screens.welcome}
      alt="Flux welcome: private, multi-income, calculator only."
      label="Welcome"
      className={className}
      priority={priority}
    />
  );
}

export function CurrencyPhone({
  className,
  priority,
}: Readonly<{
  className?: string;
  priority?: boolean;
}>) {
  return (
    <AppScreen
      src={screens.currency}
      alt="Flux currency picker: NGN selected, with other currencies listed."
      label="Pick your currency"
      className={className}
      priority={priority}
    />
  );
}

export function SettingsPhone({ className }: Readonly<{ className?: string }>) {
  return (
    <AppScreen
      src={screens.settings}
      alt="Flux Settings: currency, appearance, biometric lock, reminders, and export."
      label="Settings"
      className={className}
    />
  );
}

export function FaceIdPhone({
  className,
  priority,
}: Readonly<{
  className?: string;
  priority?: boolean;
}>) {
  return (
    <AppScreen
      src={screens.faceId}
      alt="Flux Face ID lock: authenticate to continue."
      label="Face ID lock"
      className={className}
      priority={priority}
    />
  );
}
