"use client";

import Image from "next/image";
import PageShell from "@/components/PageShell";
import HeroBackground from "@/components/HeroBackground";

const VALUE_PROPS = [
  {
    title: "Real knowledge, not lectures",
    desc: "Chamber professionals who have actually built wealth break it down — no textbooks, no fluff, just honest answers.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 48 48" aria-hidden="true">
        <polygon points="24,8 46,17 24,26 2,17" fill="#D9A81F" />
        <path d="M13 21 V27 C13 31.5 35 31.5 35 27 V21" fill="none" stroke="#B8860B" strokeWidth="3.4" strokeLinecap="round" />
        <path d="M46 17 V27" stroke="#4CAF50" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="46" cy="29.5" r="2.4" fill="#4CAF50" />
      </svg>
    ),
  },
  {
    title: "Access you can't Google",
    desc: "Face-to-face time with financial professionals from the Parkland Chamber of Commerce — that access doesn't exist in a classroom or a YouTube video.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="19" r="11.5" fill="#D9A81F" />
        <path d="M19.5 18.5 L23 22 L29 14.5" fill="none" stroke="#0E3B14" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="18.5" y="30" width="11" height="5.4" rx="2" fill="#B8860B" />
        <rect x="20" y="37" width="8" height="4" rx="2" fill="#4CAF50" />
      </svg>
    ),
  },
  {
    title: "Leave ready to invest",
    desc: "Every attendee leaves knowing the accounts available to them, what investments to make, and how to open an account tomorrow.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 12 L12 35 M24 12 L36 35 M12 35 L36 35" stroke="#B8860B" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="24" cy="11" r="5.6" fill="#D9A81F" />
        <circle cx="12" cy="35" r="5.6" fill="#D9A81F" />
        <circle cx="36" cy="35" r="5.6" fill="#D9A81F" />
        <circle cx="24" cy="11" r="2" fill="#4CAF50" />
      </svg>
    ),
  },
  {
    title: "Take-home resources",
    desc: "Walk out with a resource packet — book and podcast recs, topic deep-dives, and speaker LinkedIn profiles to keep the connections alive.",
    icon: (
      <svg width="38" height="38" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 4 C31.5 12 31.5 24.5 28 32 H20 C16.5 24.5 16.5 12 24 4 Z" fill="#D9A81F" />
        <circle cx="24" cy="17" r="3.6" fill="#0E3B14" />
        <path d="M20 27 L13.5 34 L20.5 32 Z" fill="#B8860B" />
        <path d="M28 27 L34.5 34 L27.5 32 Z" fill="#B8860B" />
        <path d="M21 33 L24 43 L27 33 Z" fill="#4CAF50" />
      </svg>
    ),
  },
];

const SESSIONS = [
  { num: "01", title: "Audience-driven Q&A", desc: "Pre-screened questions, called on by name — the ice breaks before anyone expects it." },
  { num: "02", title: "Draw Wealth", desc: "Tables draw what wealth looks like. Spoiler: the real answer is time and freedom." },
  { num: "03", title: "Chamber panel discussion", desc: "Three segments, eight questions, direct answers from professionals who've actually built wealth." },
  { num: "04", title: "Live brokerage demo", desc: "Watch an account get opened and a first trade get placed — step by step, in real time." },
  { num: "05", title: "Gift bags & next steps", desc: "Resource packet, book and podcast recs, speaker LinkedIn profiles — everything to keep going.", featured: true },
];

export default function Home() {
  return (
    <PageShell>
      {({ openRegister }) => (
        <>
          {/* HERO */}
          <section className="relative overflow-hidden bg-dg-deep">
            <HeroBackground tall />
            <div className="relative max-w-[1200px] mx-auto px-6 lg:px-[34px] py-[78px] md:py-[84px]">
              <div className="max-w-[720px]">
                <div className="inline-flex items-center gap-[9px] bg-[rgba(76,175,80,.16)] border border-[rgba(76,175,80,.4)] text-[#CFEBD0] font-heading font-semibold text-xs tracking-wider uppercase px-3.5 py-[7px] rounded-full">
                  <span className="w-[7px] h-[7px] rounded-full bg-bg-green" />
                  Parkland, FL &middot; High School Students
                </div>
                <h1 className="mt-5 font-heading font-bold text-[42px] md:text-[62px] leading-[1.02] tracking-[-0.025em] text-white">
                  Start building wealth<br />
                  <span className="text-bg-green">before you graduate.</span>
                </h1>
                <p className="mt-[22px] max-w-[560px] text-[19px] leading-relaxed text-[#C9D6C7]">
                  A free community-driven event where high schoolers learn investing, budgeting, and real-world money skills from Chamber of Commerce professionals — and leave knowing exactly what to do next.
                </p>
                <div className="flex flex-wrap gap-3.5 mt-8">
                  <button
                    onClick={openRegister}
                    className="font-heading font-bold text-base text-ink bg-gold-lt px-[30px] py-[15px] rounded-full shadow-[0_10px_24px_-8px_rgba(217,168,31,.6)] hover:bg-gold-pale transition-colors"
                  >
                    Save my spot — free
                  </button>
                  <a
                    href="/event-details#learn"
                    className="font-heading font-bold text-base text-white border-[1.5px] border-white/45 px-7 py-[15px] rounded-full hover:border-white transition-colors"
                  >
                    See the agenda
                  </a>
                </div>
                <div className="flex flex-wrap gap-[30px] mt-10">
                  <div>
                    <div className="font-heading font-bold text-[30px] text-white">75–100</div>
                    <div className="text-[13px] text-[#9DB29C]">Expected attendees</div>
                  </div>
                  <div className="w-px bg-white/15" />
                  <div>
                    <div className="font-heading font-bold text-[30px] text-white">Chamber</div>
                    <div className="text-[13px] text-[#9DB29C]">Pro speakers &amp; panelists</div>
                  </div>
                  <div className="w-px bg-white/15" />
                  <div>
                    <div className="font-heading font-bold text-[30px] text-white">$0</div>
                    <div className="text-[13px] text-[#9DB29C]">Cost to attend</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TRUST BAR */}
          <section className="bg-cream border-b border-line">
            <div className="max-w-[1200px] mx-auto flex items-center justify-center flex-wrap gap-x-[34px] gap-y-2.5 px-6 lg:px-[34px] py-5">
              <span className="font-heading font-semibold text-xs tracking-[.1em] uppercase text-muted">In partnership with</span>
              <span className="font-heading font-bold text-[15px] text-dg">Parkland Chamber of Commerce</span>
              <span className="w-[5px] h-[5px] rounded-full bg-gold" />
              <span className="font-heading font-bold text-[15px] text-dg">MSD Investment Club</span>
              <span className="w-[5px] h-[5px] rounded-full bg-gold" />
              <span className="font-heading font-bold text-[15px] text-dg">Anderson Accounting &amp; Consulting</span>
            </div>
          </section>

          {/* VALUE PROPS */}
          <section className="bg-paper">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-[34px] pt-[74px] pb-[30px] text-center">
              <div className="font-heading font-semibold text-xs tracking-[.14em] uppercase text-gold">Why come</div>
              <h2 className="mt-3 font-heading font-bold text-[32px] md:text-[40px] leading-[1.08] tracking-[-0.02em] text-dg">
                Real skills. Real people. Real head start.
              </h2>
              <p className="mt-2 mx-auto max-w-[520px] text-base text-muted">
                Four things you&apos;ll walk away with — no finance background needed. Every topic is answerable with &ldquo;I can use this next week.&rdquo;
              </p>
            </div>
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px] px-6 lg:px-[34px] pb-[78px] pt-[22px]">
              {VALUE_PROPS.map((item) => (
                <div key={item.title} className="bg-paper border border-line rounded-[18px] p-[30px_24px] shadow-[0_12px_30px_-22px_rgba(8,43,14,.5)]">
                  <div className="w-[66px] h-[66px] rounded-[18px] bg-gradient-to-br from-dg to-dg-deep flex items-center justify-center shadow-[0_8px_18px_-8px_rgba(27,94,32,.7)]">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 mb-2 font-heading font-bold text-[19px] text-ink">{item.title}</h3>
                  <p className="text-[14.5px] leading-[1.55] text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* WAVE DIVIDER */}
          <div className="relative leading-[0]">
            <svg viewBox="0 0 1200 90" preserveAspectRatio="none" className="block w-full h-[90px]" aria-hidden="true">
              <rect width="1200" height="90" fill="#fff" />
              <path d="M0 90 C300 30 520 30 640 52 C820 86 980 40 1200 20 L1200 90 Z" fill="#0E3B14" />
              <path d="M0 90 C300 30 520 30 640 52 C820 86 980 40 1200 20" fill="none" stroke="#B8860B" strokeWidth="2.5" />
            </svg>
          </div>

          {/* WHAT YOU'LL LEARN */}
          <section id="learn" className="relative bg-dg-deep overflow-hidden">
            <svg width="100%" height="100%" className="absolute inset-0 opacity-50" aria-hidden="true">
              <defs>
                <pattern id="dotgrid" width="26" height="26" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.6" fill="#4CAF50" opacity=".22" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dotgrid)" />
            </svg>
            <div className="relative max-w-[1000px] mx-auto px-6 lg:px-[34px] pt-5 pb-[84px]">
              <div className="text-center mb-11">
                <div className="font-heading font-semibold text-xs tracking-[.14em] uppercase text-gold-lt">The day, roughly</div>
                <h2 className="mt-3 font-heading font-bold text-[32px] md:text-[38px] tracking-[-0.02em] text-white">
                  Five sessions, zero fluff
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SESSIONS.map((s) => (
                  <div
                    key={s.num}
                    className={`flex gap-4 rounded-[14px] p-[22px_24px] border ${
                      s.featured
                        ? "bg-[rgba(217,168,31,.12)] border-[rgba(217,168,31,.35)] md:col-span-2"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <span className="font-heading font-bold text-[22px] text-gold-lt">{s.num}</span>
                    <div>
                      <div className="font-heading font-bold text-[17px] text-white">{s.title}</div>
                      <div className={`text-sm mt-1 ${s.featured ? "text-[#D8C58A]" : "text-[#A9BBA8]"}`}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA BAND */}
          <section className="bg-bg-green py-16 text-center">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-[34px]">
              <h2 className="font-heading font-bold text-[34px] md:text-[42px] tracking-[-0.02em] text-dg-deep mb-2.5">
                Your future self says thanks.
              </h2>
              <p className="mx-auto max-w-[440px] text-[17px] text-dg-deep/85 mb-[26px]">
                Seats are limited and it&apos;s completely free. Grab yours before they&apos;re gone.
              </p>
              <button
                onClick={openRegister}
                className="font-heading font-bold text-[17px] text-white bg-dg-deep px-10 py-4 rounded-full shadow-[0_14px_30px_-12px_rgba(8,43,14,.6)] hover:bg-dg-deeper transition-colors"
              >
                Register free
              </button>
            </div>
          </section>
        </>
      )}
    </PageShell>
  );
}
