import { cn } from "@/lib/cn";

export function PhoneFrame({
  children,
  className,
  dark = false,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  label?: string;
}) {
  return (
    <figure className={cn("mx-auto w-[280px] sm:w-[300px]", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border-[10px] shadow-card",
          dark ? "border-[#111] bg-[#111]" : "border-[#1a1612] bg-[#1a1612]",
        )}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-2 z-10 h-[18px] w-[92px] -translate-x-1/2 rounded-pill bg-black"
          aria-hidden
        />
        <div
          className={cn(
            "min-h-[560px] overflow-hidden rounded-[18px]",
            dark ? "bg-espresso" : "bg-parchment",
          )}
        >
          {children}
        </div>
      </div>
      {label ? (
        <figcaption className="mt-3 text-center text-[13px] text-ink-muted">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}
