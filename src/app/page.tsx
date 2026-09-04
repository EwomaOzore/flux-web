import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass text-xs font-medium mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Now available on iOS & Android</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-tight">
            Master your money <br />
            <span className="text-gradient">without the noise.</span>
          </h1>

          <p className="text-lg md:text-xl opacity-70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Flux is a local-first budget calculator designed for absolute privacy.
            No accounts, no cloud syncing, no tracking. Just you and your numbers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/25 active:scale-95"
            >
              Download Flux
            </Link>
            <Link
              href="#features"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass font-semibold text-lg hover:bg-white/10 transition-all active:scale-95"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-white/5 bg-black/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-50 text-sm font-medium tracking-widest uppercase">
          <div className="flex items-center space-x-2">
            <span>🔒 100% Local Storage</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>🚫 Zero Tracking</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>☁️ No Cloud Required</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>🛡️ Biometric Protected</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Designed for Peace of Mind</h2>
          <p className="opacity-60 max-w-xl mx-auto">
            We believe your financial data is your business. Flux gives you powerful tools without the surveillance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Local-First Architecture"
            description="Your data never leaves your device. No servers, no databases, no breaches. Your financial life stays in your pocket."
            icon="🏠"
          />
          <FeatureCard
            title="Receipt OCR"
            description="Snap a photo of your receipt and let Flux extract the totals. All processing happens on-device—no images are uploaded."
            icon="📸"
          />
          <FeatureCard
            title="Biometric Security"
            description="Lock your budget behind Face ID or Touch ID. Only you can see your numbers, and Flux never sees your biometric data."
            icon="🛡️"
          />
          <FeatureCard
            title="Payday Projection"
            description="Accurately project your cushion and available funds based on income streams and upcoming bills."
            icon="📅"
          />
          <FeatureCard
            title="Currency Flexibility"
            description="Manage your finances across different currencies with a simple, intuitive interface."
            icon="🌍"
          />
          <FeatureCard
            title="Instant Export"
            description="Need a backup? Export your data to a file you control. Total portability, zero lock-in."
            icon="📤"
          />
        </div>
      </section>

      {/* Privacy-First Section */}
      <section id="privacy" className="py-24 px-6 bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Your data is your business.</h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              Most budget apps sell your spending habits to advertisers. Flux does the opposite. By removing the cloud entirely, we make it mathematically impossible for us to leak or sell your data.
            </p>
            <Link
              href="/privacy"
              className="inline-block px-6 py-3 rounded-full bg-white text-blue-600 font-bold hover:bg-opacity-90 transition-all active:scale-95"
            >
              Read Full Privacy Policy
            </Link>
          </div>
          <div className="flex-1 relative">
            <div className="glass p-8 rounded-3xl border-white/20 rotate-3 shadow-2xl">
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="opacity-70">Cloud Sync</span>
                  <span className="font-bold text-red-400">DISABLED</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="opacity-70">Account Tracking</span>
                  <span className="font-bold text-red-400">DISABLED</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="opacity-70">Data Collection</span>
                  <span className="font-bold text-red-400">DISABLED</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="opacity-70">User Privacy</span>
                  <span className="font-bold text-green-400">MAXIMUM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
            Ready to take control of <br />
            <span className="text-gradient">your financial future?</span>
          </h2>
          <Link
            href="#"
            className="inline-block px-10 py-5 rounded-full bg-blue-600 text-white font-bold text-xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-500/40 active:scale-95"
          >
            Download Flux Now
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="p-8 rounded-3xl glass hover:border-blue-500/50 transition-all group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="opacity-60 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
