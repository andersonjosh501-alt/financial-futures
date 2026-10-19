"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function CalculatorIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] flex-none" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="8" y="6" width="8" height="3.5" rx="1" fill="currentColor" />
      <circle cx="9" cy="13.5" r="1.1" fill="currentColor" />
      <circle cx="12" cy="13.5" r="1.1" fill="currentColor" />
      <circle cx="15" cy="13.5" r="1.1" fill="currentColor" />
      <circle cx="9" cy="17" r="1.1" fill="currentColor" />
      <circle cx="12" cy="17" r="1.1" fill="currentColor" />
      <circle cx="15" cy="17" r="1.1" fill="currentColor" />
    </svg>
  );
}

export default function Navbar({
  onRegisterClick,
}: {
  onRegisterClick: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  function tabClass(href: string) {
    const active = pathname === href || pathname?.startsWith(href + "/");
    return `relative font-heading font-bold text-[15px] tracking-wide uppercase transition-colors ${
      active
        ? "text-dg after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-[3px] after:rounded-full after:bg-gold-lt"
        : "text-ink hover:text-bg-green"
    }`;
  }

  return (
    <nav className="bg-paper border-b border-line sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-[34px] py-4 gap-6">
        {/* LEFT NAV — calculator box pinned to the far left, tabs beside the pill */}
        <div className="hidden md:flex items-center justify-between gap-6">
          <a
            href="/simulator"
            title="Open the growth calculator"
            className="group inline-flex items-center gap-2.5 rounded-xl border border-dg/20 bg-mist px-4 py-2.5 text-dg shadow-[0_6px_16px_-10px_rgba(8,43,14,.5)] hover:bg-dg hover:text-white hover:border-dg hover:-translate-y-0.5 hover:shadow-[0_10px_22px_-10px_rgba(8,43,14,.7)] transition-all duration-200"
          >
            <CalculatorIcon />
            <span className="font-heading font-bold text-[13.5px] tracking-wide whitespace-nowrap">Try Our Calculator</span>
          </a>
          <div className="flex items-center gap-[30px]">
          <Link href="/event-details" className={tabClass("/event-details")}>
            The Event
          </Link>
          <Link href="/speakers-partners" className={tabClass("/speakers-partners")}>
            Speakers
          </Link>
          </div>
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
          <Link href="/what-youll-learn" className={tabClass("/what-youll-learn")}>
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
          <a
            href="/simulator"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex items-center gap-2.5 rounded-xl border border-dg/20 bg-mist px-4 py-3 text-dg font-heading font-bold text-sm tracking-wide"
          >
            <CalculatorIcon />
            Try Our Calculator
          </a>
          <Link href="/event-details" className="block py-2 font-heading font-bold text-sm uppercase tracking-wide text-ink" onClick={() => setMobileOpen(false)}>
            The Event
          </Link>
          <Link href="/speakers-partners" className="block py-2 font-heading font-bold text-sm uppercase tracking-wide text-ink" onClick={() => setMobileOpen(false)}>
            Speakers
          </Link>
          <Link href="/what-youll-learn" className="block py-2 font-heading font-bold text-sm uppercase tracking-wide text-ink" onClick={() => setMobileOpen(false)}>
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
