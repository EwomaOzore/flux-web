import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";

type Props = Readonly<{
  href?: string;
  size?: "sm" | "md";
  tone?: "ink" | "forest" | "paper";
}>;

const sizes = {
  sm: { mark: "h-6 w-6", text: "text-[18px] leading-none tracking-[-0.04em]" },
  md: { mark: "h-7 w-7", text: "text-[22px] leading-none tracking-[-0.04em]" },
};

export function Wordmark({ href = "/", size = "sm", tone = "forest" }: Props) {
  const s = sizes[size];
  const color =
    tone === "paper"
      ? "text-parchment"
      : tone === "ink"
        ? "text-ink"
        : "text-forest";

  const inner = (
    <>
      <Image
        src="/brand/icon.png"
        alt=""
        width={1024}
        height={1024}
        className={cn("rounded-[7px]", s.mark)}
        priority={size === "sm"}
      />
      <span className={cn("mt-[3px] font-display font-normal", s.text, color)}>
        Flux
      </span>
    </>
  );

  const cls = "inline-flex items-center gap-2.5";

  if (href) {
    return (
      <Link href={href} className={cls} aria-label="Flux home">
        {inner}
      </Link>
    );
  }

  return <span className={cls}>{inner}</span>;
}
