import Link from "next/link";

import { StoreBadges } from "@/components/StoreBadges";
import { Wordmark } from "@/components/Wordmark";

const FOOTER_LINKS = [
  { href: "/product", label: "Product" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/faq", label: "FAQ" },
  { href: "/download", label: "Download" },
  { href: "/support", label: "Support" },
  { href: "/brand", label: "Brand" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border-dark bg-espresso text-parchment">
      <div className="mx-auto max-w-[1120px] px-6 py-12 sm:px-8 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <Wordmark href="/" tone="paper" size="md" />
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#D0CAC2]">
              A private payday planner. Your numbers never leave your phone.
            </p>
            <StoreBadges tone="dark" className="mt-8" />
          </div>
          <div>
            <p className="overline text-[#9A9188]">On this site</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] font-medium text-parchment transition-colors duration-300 hover:text-mint"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[14px] leading-relaxed text-[#9A9188]">
              Questions: use the support email on the App Store or Google Play
              listing.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-border-dark pt-5">
          <p className="text-[12px] leading-relaxed text-[#9A9188]">
            Flux is a calculator. Not a bank. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
