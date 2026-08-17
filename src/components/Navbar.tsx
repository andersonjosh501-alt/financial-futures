"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar({
  onRegisterClick,
}: {
  onRegisterClick: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-paper border-b border-line sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 lg:px-[34px] py-4">
        <Link href="/" className="shrink-0 font-heading font-bold text-[22px] tracking-tight text-dg hover:text-bg-green transition-colors" title="Back to home">
          Financial <span className="text-bg-green">Futures</span>
        </Link>

        <div className="hidden md:flex items-center gap-[26px]">
          <Link
            href="/event-details"
            className="font-heading font-semibold text-sm text-ink hover:text-bg-green transition-colors"
          >
            The Event
          </Link>
          <Link
            href="/speakers-partners"
            className="font-heading font-semibold text-sm text-ink hover:text-bg-green transition-colors"
          >
            Speakers
          </Link>
          <Link
            href="/event-details#learn"
            className="font-heading font-semibold text-sm text-ink hover:text-bg-green transition-colors"
          >
            What You&apos;ll Learn
          </Link>
          <button
            onClick={onRegisterClick}
            className="font-heading font-bold text-sm text-white bg-gold px-5 py-2.5 rounded-full hover:bg-gold-lt transition-colors"
          >
            Register free
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-line px-6 pb-4 space-y-3 bg-paper">
          <Link href="/event-details" className="block py-2 font-heading font-semibold text-sm text-ink" onClick={() => setMobileOpen(false)}>
            The Event
          </Link>
          <Link href="/speakers-partners" className="block py-2 font-heading font-semibold text-sm text-ink" onClick={() => setMobileOpen(false)}>
            Speakers
          </Link>
          <Link href="/event-details#learn" className="block py-2 font-heading font-semibold text-sm text-ink" onClick={() => setMobileOpen(false)}>
            What You&apos;ll Learn
          </Link>
          <button
            onClick={() => { setMobileOpen(false); onRegisterClick(); }}
            className="w-full font-heading font-bold text-sm text-white bg-gold px-5 py-2.5 rounded-full"
          >
            Register free
          </button>
        </div>
      )}
    </nav>
  );
}
