import { cn } from "@/lib/cn";

type Size = "sm" | "md" | "lg" | "hero" | "stat";

const sizes: Record<Size, { symbol: string; value: string }> = {
  sm: { symbol: "text-[12px]", value: "text-[12px]" },
  md: { symbol: "text-[14px]", value: "text-[14px]" },
  lg: { symbol: "text-[18px]", value: "text-[18px]" },
  stat: { symbol: "text-[13px]", value: "text-[13px] font-medium" },
  hero: { symbol: "text-[36px] tracking-[-0.04em]", value: "text-[36px] tracking-[-0.04em]" },
};

type Props = {
  amount: number;
  signed?: boolean;
  size?: Size;
  className?: string;
  currency?: "NGN" | "USD";
};

function formatValue(amount: number): string {
  return Math.abs(Math.round(amount)).toLocaleString("en-NG");
}

export function Money({
  amount,
  signed = false,
  size = "md",
  className,
  currency = "NGN",
}: Props) {
  const symbol = currency === "NGN" ? "₦" : "$";
  const negative = amount < 0;
  const positive = amount > 0;
  const sign = signed
    ? positive
      ? "+"
      : negative
        ? "−"
        : ""
    : negative
      ? "−"
      : "";
  const face = sizes[size];
  const symbolFace = size === "hero" ? "font-display font-normal" : "font-display font-semibold";
  const valueFace = size === "hero" ? "font-display font-normal" : "font-mono font-medium";

  return (
    <span className={cn("inline-flex items-baseline whitespace-nowrap", className)}>
      {sign ? (
        <span className={cn(valueFace, face.value)}>{sign}</span>
      ) : null}
      <span className={cn(symbolFace, face.symbol)}>{symbol}</span>
      <span className={cn(valueFace, face.value)}>{formatValue(amount)}</span>
    </span>
  );
}
