"use client";

import PageShell from "@/components/PageShell";
import NetworkHero from "@/components/NetworkHero";

const SPEAKERS = [
  { name: "Speaker TBD", role: "To be announced", org: "Coming soon", bio: "We're finalizing our lineup of speakers. Check back soon to meet the professionals sharing their financial insights at Financial Futures." },
  { name: "Speaker TBD", role: "To be announced", org: "Coming soon", bio: "We're finalizing our lineup of speakers. Check back soon to meet the professionals sharing their financial insights at Financial Futures." },
  { name: "Speaker TBD", role: "To be announced", org: "Coming soon", bio: "We're finalizing our lineup of speakers. Check back soon to meet the professionals sharing their financial insights at Financial Futures." },
  { name: "Speaker TBD", role: "To be announced", org: "Coming soon", bio: "We're finalizing our lineup of speakers. Check back soon to meet the professionals sharing their financial insights at Financial Futures." },
];

const PARTNERS = [
  { name: "Parkland Chamber of Commerce", type: "Partner" },
  { name: "MSD Investment Club", type: "Partner" },
  { name: "Anderson Accounting & Consulting", type: "Partner" },
];

export default function SpeakersPartners() {
  return (
    <PageShell>
      {({ openRegister }) => (
        <>
          {/* NETWORK HERO + SPEAKERS (shared network background) */}
          <div className="relative overflow-hidden bg-paper">
            <NetworkHero />

            <section className="relative pt-[64px] pb-[36px]">
              <div className="max-w-[1200px] mx-auto px-6 lg:px-[34px] pointer-events-none">
                <div className="font-heading font-semibold text-xs tracking-[.14em] uppercase text-gold [text-shadow:0_0_16px_rgba(255,255,255,.9)]">Learn from the best</div>
                <h1 className="mt-2.5 font-heading font-bold text-[40px] md:text-[52px] tracking-[-0.02em] text-dg-deep [text-shadow:0_0_20px_rgba(255,255,255,.95)]">
                  Speakers &amp; Partners
                </h1>
                <div className="mt-4 h-[3px] w-[110px] rounded-full bg-gradient-to-r from-gold to-gold-lt shadow-[0_2px_10px_rgba(184,134,11,.35)]" />
              </div>
            </section>

            <section className="relative pb-[74px]">
              <div className="max-w-[1200px] mx-auto px-6 lg:px-[34px]">
                <div className="text-center mb-10 pointer-events-none">
                  <div className="font-heading font-semibold text-sm tracking-[.14em] uppercase text-gold [text-shadow:0_0_16px_rgba(255,255,255,.9)]">Featured Speakers</div>
                  <h2 className="mt-3 font-heading font-bold text-[32px] md:text-[40px] leading-[1.08] tracking-[-0.02em] text-dg [text-shadow:0_0_20px_rgba(255,255,255,.95)]">
                    Meet The Mentors
                  </h2>
                  <div className="mx-auto mt-4 h-[3px] w-[90px] rounded-full bg-gradient-to-r from-gold to-gold-lt shadow-[0_2px_10px_rgba(184,134,11,.35)]" />
                  <p className="mt-4 mx-auto max-w-[560px] text-base text-muted">
                    The people behind Financial Futures, professionals who have built wealth and have a passion for sharing with the next generation.
                  </p>
                </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
                {SPEAKERS.map((speaker, i) => (
                  <div
                    key={i}
                    style={{ animationDelay: `${i * 0.6}s` }}
                    className="animate-float-card bg-paper border border-line rounded-[18px] overflow-hidden shadow-[0_12px_30px_-22px_rgba(8,43,14,.5)] transition-[box-shadow,border-color] duration-300 hover:border-gold hover:shadow-[0_18px_36px_-18px_rgba(184,134,11,.5)] hover:[animation-play-state:paused]"
                  >
                    <div className="h-44 bg-gradient-to-br from-dg to-dg-deep flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/15 flex items-center justify-center">
                        <svg className="w-10 h-10 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading font-bold text-[17px] text-ink">{speaker.name}</h3>
                      <p className="font-heading font-semibold text-xs text-gold mt-0.5">{speaker.role}</p>
                      <p className="text-xs text-muted">{speaker.org}</p>
                      <p className="text-[14px] leading-relaxed text-muted mt-3">{speaker.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          </div>

          {/* WAVE DIVIDER */}
          <div className="relative leading-[0]">
            <svg viewBox="0 0 1200 90" preserveAspectRatio="none" className="block w-full h-[60px]" aria-hidden="true">
              <rect width="1200" height="90" fill="#fff" />
              <path d="M0 90 C300 30 520 30 640 52 C820 86 980 40 1200 20 L1200 90 Z" fill="#F6F4EC" />
              <path d="M0 90 C300 30 520 30 640 52 C820 86 980 40 1200 20" fill="none" stroke="#B8860B" strokeWidth="2" />
            </svg>
          </div>

          {/* PARTNERS */}
          <section className="bg-cream py-[74px]">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-[34px]">
              <div className="text-center mb-10">
                <div className="font-heading font-semibold text-sm tracking-[.14em] uppercase text-gold">Our Partners</div>
                <h2 className="mt-3 font-heading font-bold text-[32px] md:text-[40px] leading-[1.08] tracking-[-0.02em] text-dg">
                  Making It Possible
                </h2>
                <div className="mx-auto mt-4 h-[3px] w-[90px] rounded-full bg-gradient-to-r from-gold to-gold-lt shadow-[0_2px_10px_rgba(184,134,11,.35)]" />
                <p className="mt-4 mx-auto max-w-[520px] text-base text-muted">
                  Financial Futures is made possible by the generous support of these organizations.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {PARTNERS.map((partner, i) => (
                  <div key={i} className="bg-paper border border-line rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_12px_30px_-22px_rgba(8,43,14,.3)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_18px_36px_-18px_rgba(184,134,11,.5)]">
                    <div className="w-14 h-14 rounded-[14px] bg-gradient-to-br from-dg to-dg-deep flex items-center justify-center shadow-[0_6px_14px_-6px_rgba(27,94,32,.6)] mb-4">
                      <svg className="w-7 h-7" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M24 12 L12 35 M24 12 L36 35 M12 35 L36 35" stroke="#B8860B" strokeWidth="2.6" strokeLinecap="round" />
                        <circle cx="24" cy="11" r="5.6" fill="#D9A81F" />
                        <circle cx="12" cy="35" r="5.6" fill="#D9A81F" />
                        <circle cx="36" cy="35" r="5.6" fill="#D9A81F" />
                        <circle cx="24" cy="11" r="2" fill="#4CAF50" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-[15px] text-ink">{partner.name}</h3>
                    <p className="text-xs text-gold mt-1">{partner.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA BAND */}
          <section className="bg-bg-green py-16 text-center">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-[34px]">
              <h2 className="font-heading font-bold text-[34px] md:text-[42px] tracking-[-0.02em] text-dg-deep mb-2.5">
                Your Future Self Says Thanks
              </h2>
              <p className="mx-auto max-w-[440px] text-[17px] text-dg-deep/85 mb-[26px]">
                Grab your seat before it&apos;s gone
              </p>
              <button
                onClick={openRegister}
                className="font-heading font-bold text-[17px] text-white bg-dg-deep px-10 py-4 rounded-full shadow-[0_14px_30px_-12px_rgba(8,43,14,.6)] hover:bg-dg-deeper hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-10px_rgba(8,43,14,.7)] transition-all duration-200"
              >
                Register Here
              </button>
            </div>
          </section>
        </>
      )}
    </PageShell>
  );
}
