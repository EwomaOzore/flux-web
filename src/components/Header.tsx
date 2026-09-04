"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/Button";
import { IconClose, IconMenu } from "@/components/Icons";
import { Wordmark } from "@/components/Wordmark";
import { cn } from "@/lib/cn";
import { NAV } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [menuForPath, setMenuForPath] = useState<string | null>(null);
  const open = menuForPath === pathname;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-parchment/95 backdrop-blur-[8px] border-b border-border">
      <div className="h-1.5 bg-forest-muted" />
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6 sm:px-8">
        <Wordmark />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[14px] font-medium transition-colors duration-300",
                  active
                    ? "text-forest"
                    : "text-ink-secondary hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Button href="/download" className="h-11 px-4 text-[14px]">
            Download
          </Button>
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setMenuForPath(open ? null : pathname)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-parchment px-6 pb-8 pt-4 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-3 text-[16px] font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/download" className="mt-3 w-full">
              Download
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
