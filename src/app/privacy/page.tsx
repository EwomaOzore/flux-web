import React from 'react';

const PRIVACY_SECTIONS = [
  {
    title: "Do we collect your data?",
    body: "Short answer: Flux does not collect your budget, income, bills, receipts, or other financial details. Those stay on your device. We do not create accounts, and we do not sell or share your personal information. Limited anonymous technical diagnostics may be sent to Expo (our app platform) so we can keep the app working — details below. That technical data does not include your budget numbers or receipt images.",
  },
  {
    title: "Overview",
    body: "Flux is a personal payday and budget calculator. You enter amounts yourself. Flux does not connect to banks, move money, open accounts, or sync your financial entries to Flux-operated servers.",
  },
  {
    title: "Data stored only on your device",
    body: "The following stays on your phone or tablet unless you export or share it yourself: income streams, bills, timeline/line items, currency preference, appearance settings, biometric lock preference, payday reminder settings, and any receipt text you extract for expense entry. Uninstalling the app or clearing app data permanently deletes this on-device information. Because it never leaves your device through Flux, we cannot recover it for you.",
  },
  {
    title: "Camera and photos",
    body: "If you scan or attach a receipt, Flux asks for camera or photo library access. Images are processed on your device for text extraction. Receipt images and OCR results are not uploaded to Flux servers.",
  },
  {
    title: "Biometric lock",
    body: "If you enable biometric lock, Flux uses Face ID, Touch ID, fingerprint, or your device PIN through the operating system. Flux never receives or stores your biometric templates — only a local preference that lock is on.",
  },
  {
    title: "Notifications",
    body: "If you enable payday reminders, Flux schedules local notifications on your device. Reminder content is not sent to us.",
  },
  {
    title: "Export and import",
    body: "Export creates a file you control (share, save, or delete). Import reads a file you choose. Flux does not transmit export files to us.",
  },
  {
    title: "Technical diagnostics (Expo)",
    body: "Flux uses Expo Application Services for optional over-the-air updates and the expo-insights library. When enabled by the platform, this may send anonymous technical signals such as app version, platform (iOS/Android), OS version, project/app identifier, and an anonymous client identifier used for update and usage trends. This is not your budget data, and it is not used to identify you personally for marketing or advertising.",
  },
  {
    title: "What we do not collect",
    body: "Flux does not collect names, emails, phone numbers, location, contacts, payment card details, bank credentials, advertising IDs for ads, or browsing history. Flux does not include advertising SDKs.",
  },
  {
    title: "Sharing and selling",
    body: "We do not sell your personal information. We do not share your budget data with third parties because we do not receive it. Technical diagnostics described above are processed by Expo as our service provider for app reliability and updates, under Expo’s privacy practices.",
  },
  {
    title: "Children",
    body: "Flux is not directed at children under 13 (or the equivalent minimum age in your region). We do not knowingly collect personal information from children.",
  },
  {
    title: "Your choices",
    body: "You can turn off biometric lock and reminders in Settings, deny camera/photo permissions in system settings, clear or uninstall the app to delete on-device data, and avoid exporting if you do not want a portable copy of your data.",
  },
  {
    title: "Changes",
    body: "We may update this policy. The “Last updated” date at the top will change when we do. Continued use after an update means you accept the revised policy.",
  },
  {
    title: "Contact",
    body: "Privacy questions: use the support email on the App Store or Google Play listing for Flux.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-sm opacity-50 mb-12">Last updated: September 4, 2026</p>

      <div className="space-y-12">
        {PRIVACY_SECTIONS.map((section, idx) => (
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
