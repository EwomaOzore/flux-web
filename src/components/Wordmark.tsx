import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";

type Props = {
  href?: string;
  size?: "sm" | "md";
  tone?: "ink" | "forest" | "paper";
};

const sizes = {
  sm: { img: 24, text: "text-[18px] leading-none tracking-[-0.04em]" },
  md: { img: 28, text: "text-[22px] leading-none tracking-[-0.04em]" },
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
        src="/brand/logo.png"
        alt=""
        width={s.img}
        height={s.img}
        className="rounded-[7px]"
        priority={size === "sm"}
      />
      <span className={cn("font-display font-normal mt-[3px]", s.text, color)}>
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
