import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "on-dark";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
};

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-white hover:bg-[#246844] active:bg-[#1f5c3c]",
  secondary:
    "bg-paper text-forest border border-forest hover:bg-forest-muted",
  "on-dark":
    "bg-mint text-espresso hover:bg-mint-strong",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  external,
  type = "button",
}: Props) {
  const cls = cn(
    "inline-flex items-center justify-center h-12 px-[18px] rounded-md text-[15px] font-semibold tracking-[-0.01em] transition-[background-color,border-color,transform,color] duration-300 ease-out",
    variants[variant],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls}>
      {children}
    </button>
  );
}
