import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flux | Private Payday & Budget Calculator",
  description: "Take control of your finances with Flux. A local-first, private budget calculator designed for peace of mind.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 glass backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-extrabold tracking-tighter hover:opacity-80 transition-opacity">
                  FLUX
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8 text-sm font-medium opacity-70">
                <Link href="#features" className="hover:text-blue-500 transition-colors">Features</Link>
                <Link href="#privacy" className="hover:text-blue-500 transition-colors">Privacy</Link>
                <Link href="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-blue-500 transition-colors">Terms</Link>
                <Link href="#" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">
                  Download Now
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="flex-grow pt-16">
          {children}
        </main>
        <footer className="border-t border-white/10 py-12 bg-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-50">
              © {new Date().getFullYear()} Flux. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm opacity-50">
              <Link href="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <Link href="/terms" className="hover:opacity-100 transition-opacity">Terms & Conditions</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
