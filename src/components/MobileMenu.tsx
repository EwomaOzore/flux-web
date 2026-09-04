"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/Button";
import { IconClose, IconMenu } from "@/components/Icons";
import { NAV } from "@/lib/site";

export function MobileMenu() {
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
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-md"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setMenuForPath(open ? null : pathname)}
      >
        {open ? <IconClose /> : <IconMenu />}
      </button>
      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-t border-border bg-parchment px-6 pb-8 pt-4"
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
    </div>
  );
}
