import Link from "next/link";

import { IconApple, IconPlay } from "@/components/Icons";
import { cn } from "@/lib/cn";
import {
  APP_STORE_PLACEHOLDER,
  APP_STORE_URL,
  PLAY_STORE_PLACEHOLDER,
  PLAY_STORE_URL,
} from "@/lib/site";

type Tone = "light" | "dark";

function storeHref(url: string, fallback: string) {
  return url || fallback;
}

export function StoreBadges({
  tone = "light",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  const iosHref = storeHref(APP_STORE_URL, "/download");
  const playHref = storeHref(PLAY_STORE_URL, "/download");
  const iosExternal = Boolean(APP_STORE_URL);
  const playExternal = Boolean(PLAY_STORE_URL);

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <StoreBadge
        href={iosHref}
        external={iosExternal}
        tone={tone}
        icon={<IconApple />}
        kicker="Download for"
        label="iOS"
        title={APP_STORE_URL ? "Download for iOS" : APP_STORE_PLACEHOLDER}
      />
      <StoreBadge
        href={playHref}
        external={playExternal}
        tone={tone}
        icon={<IconPlay />}
        kicker="Download for"
        label="Android"
        outline
        title={PLAY_STORE_URL ? "Download for Android" : PLAY_STORE_PLACEHOLDER}
      />
    </div>
  );
}

const badgeClass: Record<Tone, { fill: string; outline: string }> = {
  light: {
    fill: "bg-forest text-white hover:bg-[#246844]",
    outline: "border border-forest bg-paper text-forest hover:bg-forest-muted",
  },
  dark: {
    fill: "bg-mint text-espresso hover:bg-mint-strong",
    outline: "border border-mint text-parchment hover:bg-mint-muted",
  },
};

function StoreBadge({
  href,
  external,
  tone,
  icon,
  kicker,
  label,
  outline,
  title,
}: {
  href: string;
  external: boolean;
  tone: Tone;
  icon: React.ReactNode;
  kicker: string;
  label: string;
  outline?: boolean;
  title: string;
}) {
  const cls = cn(
    "inline-flex items-center gap-3 h-12 px-4 rounded-md text-left transition-colors duration-300",
    outline ? badgeClass[tone].outline : badgeClass[tone].fill,
  );

  const inner = (
    <>
      <span className="shrink-0">{icon}</span>
      <span className="leading-tight">
        <span className="block text-[10px] font-medium uppercase tracking-[0.08em] opacity-80">
          {kicker}
        </span>
        <span className="block text-[15px] font-semibold">{label}</span>
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} className={cls} title={title}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} title={title}>
      {inner}
    </Link>
  );
}
