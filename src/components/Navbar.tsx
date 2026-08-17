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
      <div className="max-w-[1200px] mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-[34px] py-4 gap-6">
        {/* LEFT NAV */}
        <div className="hidden md:flex items-center justify-end gap-[30px]">
          <Link
            href="/event-details"
            className="font-heading font-bold text-[15px] tracking-wide uppercase text-ink hover:text-bg-green transition-colors"
          >
            The Event
          </Link>
          <Link
            href="/speakers-partners"
            className="font-heading font-bold text-[15px] tracking-wide uppercase text-ink hover:text-bg-green transition-colors"
          >
            Speakers
          </Link>
        </div>

        {/* CENTER — FINANCIAL FUTURES PILL */}
        <Link
          href="/"
          title="Back to home"
          className="group inline-flex items-center justify-center px-7 py-2.5 rounded-full border-[2.5px] border-ink text-dg hover:border-bg-green hover:text-bg-green transition-colors font-heading font-bold text-[20px] tracking-tight whitespace-nowrap"
        >
          Financial Futures
        </Link>

        {/* RIGHT NAV */}
        <div className="hidden md:flex items-center gap-[30px]">
          <Link
            href="/event-details#learn"
            className="font-heading font-bold text-[15px] tracking-wide uppercase text-ink hover:text-bg-green transition-colors"
          >
            What You&apos;ll Learn
          </Link>
          <button
            onClick={onRegisterClick}
            className="font-heading font-bold text-[14px] tracking-wide uppercase text-white bg-gold px-5 py-2.5 rounded-full hover:bg-gold-lt hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(184,134,11,.5)] transition-all duration-200"
          >
            Register Free
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden justify-self-end p-2 col-start-3"
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
          <Link href="/event-details" className="block py-2 font-heading font-bold text-sm uppercase tracking-wide text-ink" onClick={() => setMobileOpen(false)}>
            The Event
          </Link>
          <Link href="/speakers-partners" className="block py-2 font-heading font-bold text-sm uppercase tracking-wide text-ink" onClick={() => setMobileOpen(false)}>
            Speakers
          </Link>
          <Link href="/event-details#learn" className="block py-2 font-heading font-bold text-sm uppercase tracking-wide text-ink" onClick={() => setMobileOpen(false)}>
            What You&apos;ll Learn
          </Link>
          <button
            onClick={() => { setMobileOpen(false); onRegisterClick(); }}
            className="w-full font-heading font-bold text-sm uppercase tracking-wide text-white bg-gold px-5 py-2.5 rounded-full"
          >
            Register Free
          </button>
        </div>
      )}
    </nav>
  );
}
