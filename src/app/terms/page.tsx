import React from 'react';

const TERMS_SECTIONS = [
  {
    title: "Agreement",
    body: "By downloading, installing, or using Flux (“the App”), you agree to these Terms & Conditions and our Privacy Policy. If you do not agree, do not use the App.",
  },
  {
    title: "What Flux is",
    body: "Flux is a personal calculator and planner for amounts you enter yourself — such as income streams, bills, and payday cushion estimates. It is a productivity tool, not a bank, broker, lender, payment service, tax service, or investment platform.",
  },
  {
    title: "What Flux is not",
    body: "Flux does not move money, hold funds, open financial accounts, connect to your bank, execute trades, offer loans, sell insurance, or provide regulated financial, investment, tax, or legal advice. Any totals, cushions, or projections are arithmetic based on numbers you typed — not recommendations.",
  },
  {
    title: "Not financial advice",
    body: "Nothing in Flux is personalized financial advice or a substitute for advice from a qualified professional licensed in your jurisdiction. You alone are responsible for financial decisions you make. Do not rely on Flux as the sole basis for borrowing, investing, budgeting commitments, or other money decisions.",
  },
  {
    title: "Accuracy",
    body: "You are responsible for the accuracy of amounts and dates you enter. Currency conversion, if you perform it mentally or elsewhere before entering figures, is your responsibility. Flux may contain bugs or display errors; verify important numbers independently.",
  },
  {
    title: "Your data and backups",
    body: "Budget data is stored on your device. We do not provide cloud backup of your entries. Export regularly if you need a copy. We are not liable for data loss from device failure, uninstall, OS updates, or forgotten backups.",
  },
  {
    title: "Acceptable use",
    body: "Use Flux only for lawful personal budgeting and planning. Do not misuse the App, attempt to disrupt it, or use it to facilitate fraud or illegal activity.",
  },
  {
    title: "Intellectual property",
    body: "Flux’s name, design, and software are owned by the developer. You receive a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes in accordance with these Terms and the store’s rules.",
  },
  {
    title: "Disclaimer of warranties",
    body: "THE APP IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not warrant that the App will be uninterrupted, error-free, or that results will meet your expectations.",
  },
  {
    title: "Limitation of liability",
    body: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE DEVELOPER IS NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, DATA, OR OPPORTUNITY, ARISING FROM YOUR USE OF OR INABILITY TO USE THE APP — INCLUDING FINANCIAL DECISIONS YOU MAKE AFTER USING THE APP. OUR TOTAL LIABILITY FOR ANY CLAIM RELATED TO THE APP WILL NOT EXCEED THE AMOUNT YOU PAID TO DOWNLOAD THE APP (IF ANY) IN THE TWELVE MONTHS BEFORE THE CLAIM.",
  },
  {
    title: "Indemnity",
    body: "You agree to indemnify and hold harmless the developer from claims arising out of your misuse of the App or your breach of these Terms, to the extent permitted by law.",
  },
  {
    title: "Third-party services",
    body: "The App may rely on platform services (Apple, Google, Expo) for distribution, updates, and diagnostics. Their terms and privacy policies also apply to those services.",
  },
  {
    title: "Changes and termination",
    body: "We may update these Terms or discontinue the App. Continued use after changes means you accept the new Terms. You may stop using the App at any time by uninstalling it.",
  },
  {
    title: "Governing law",
    body: "These Terms are governed by the laws applicable in the developer’s place of establishment, without regard to conflict-of-law rules, except where mandatory consumer protections in your country require otherwise.",
  },
  {
    title: "Contact",
    body: "Questions about these Terms: use the support email on the App Store or Google Play listing for Flux.",
  },
];

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold tracking-tight mb-2">Terms & Conditions</h1>
      <p className="text-sm opacity-50 mb-12">Last updated: September 4, 2026</p>

      <div className="space-y-12">
        {TERMS_SECTIONS.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
            <p className="text-base opacity-80 leading-relaxed">
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
