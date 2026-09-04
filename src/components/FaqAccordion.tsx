export function FaqAccordion({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  return (
    <div className="divide-y divide-border-soft border-y border-border-soft">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer items-start justify-between gap-6 text-left">
            <span className="text-[17px] font-semibold tracking-[-0.02em] text-ink">
              {item.q}
            </span>
            <span
              aria-hidden
              className="mt-1 text-ink-muted transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-[58ch] text-[16px] leading-relaxed text-ink-secondary">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
