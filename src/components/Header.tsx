import Link from "next/link";

import { Button } from "@/components/Button";
import { MobileMenu } from "@/components/MobileMenu";
import { Wordmark } from "@/components/Wordmark";
import { NAV } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-parchment/95 backdrop-blur-[8px]">
      <div className="h-1.5 bg-forest-muted" />
      <div className="relative mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6 sm:px-8">
        <Wordmark />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-ink-secondary transition-colors duration-300 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/download" className="h-11 px-4 text-[14px]">
            Download
          </Button>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
