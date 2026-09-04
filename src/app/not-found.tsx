import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This Flux page is not on the timeline.",
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
  { href: "/download", label: "Download" },
] as const;

export default function NotFound() {
  return (
    <div className="reveal flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="overline">404</p>
      <h1 className="mt-4 max-w-[16ch] font-display text-[40px] font-normal leading-[1.12] tracking-[-0.04em] text-ink sm:text-[56px]">
        This page isn’t on the timeline.
      </h1>
      <p className="mt-4 max-w-[36ch] text-[17px] text-ink-secondary">
        It isn’t here. The cushion still is — on your phone.
      </p>
      <Button href="/" className="mt-8">
        Back to Flux
      </Button>
      <nav aria-label="Helpful pages" className="mt-10">
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[14px]">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-medium text-forest hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
