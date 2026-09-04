import { Overline } from "@/components/Chrome";
import { cn } from "@/lib/cn";

export function PageHero({
  overline,
  title,
  children,
  className,
}: {
  overline: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("max-w-[40rem]", className)}>
      <Overline>{overline}</Overline>
      <h1 className="mt-3 font-display text-[36px] font-medium leading-[1.15] tracking-[-0.04em] text-ink sm:text-[48px] sm:leading-[1.12]">
        {title}
      </h1>
      {children ? (
        <div className="mt-5 text-[17px] leading-[1.65] text-ink-secondary">
          {children}
        </div>
      ) : null}
    </header>
  );
}
