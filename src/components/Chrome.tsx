import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1120px] px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Overline({ children }: { children: React.ReactNode }) {
  return <p className="overline">{children}</p>;
}

export function DisclaimerChip({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center rounded-pill border border-border-soft bg-paper px-3 py-1.5 text-[12px] font-medium text-ink-secondary",
        className,
      )}
    >
      Not a bank
    </p>
  );
}
