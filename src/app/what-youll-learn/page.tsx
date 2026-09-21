"use client";

import PageShell from "@/components/PageShell";
import HeroBackground from "@/components/HeroBackground";

const AGENDA = [
  { time: "6:00", title: "Warm-Up", desc: "Your questions from the sign-up form, answered live by the panel." },
  { time: "6:15", title: "Draw Wealth", desc: "Five minutes to draw what wealth looks like to you. Most people get it wrong." },
  { time: "6:30", title: "Panel Discussion", desc: "Dozens of questions answered by professionals with real experience.", featured: true },
  { time: "7:00", title: "Live Demo", desc: "An investment account opened and a trade placed in real time, start to finish." },
];

const SEGMENTS = [
  {
    num: "01",
    title: "Misconceptions Around Investing",
    desc: "Correcting the barriers to entry that people believe but simply aren't true.",
    points: [
      "Why investing is not gambling",
      "Invest or save as a high schooler?",
      "How much you actually need to start",
    ],
    icon: (
      <svg width="30" height="30" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="17" fill="none" stroke="#0E3B14" strokeWidth="3.2" />
        <path d="M15 33 L33 15" stroke="#0E3B14" strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="18" cy="18" r="3.2" fill="#0E3B14" />
        <circle cx="30" cy="30" r="3.2" fill="#0E3B14" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "The Power of Compounding",
    desc: "How the math is either working against you or working for you. There is no in-between.",
    points: [
      "The real cost of waiting until after college",
      "What $100 a month becomes over 40 years",
      "Why time beats timing, every time",
    ],
    icon: (
      <svg width="30" height="30" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 38 C16 36 20 30 24 24 C28 18 32 12 40 8" fill="none" stroke="#0E3B14" strokeWidth="3.4" strokeLinecap="round" />
        <path d="M32 8 H40 V16" fill="none" stroke="#0E3B14" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 40 H40" stroke="#0E3B14" strokeWidth="2.4" strokeLinecap="round" opacity=".5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Accounts & Tools",
    desc: "Everything you need to open an account and invest your next dollar tomorrow.",
    points: [
      "Brokerage vs. Roth IRA, in plain English",
      "Which companies to use and what they cost",
      "The exact steps, start to finish",
    ],
    icon: (
      <svg width="30" height="30" viewBox="0 0 48 48" aria-hidden="true">
        <rect x="8" y="12" width="32" height="24" rx="4" fill="none" stroke="#0E3B14" strokeWidth="3.2" />
        <path d="M8 20 H40" stroke="#0E3B14" strokeWidth="3.2" />
        <rect x="14" y="26" width="9" height="4" rx="1.5" fill="#0E3B14" />
      </svg>
    ),
  },
];

const STATS = [
  { value: "38%", label: "of Americans own no investments at all" },
  { value: "99%", label: "of Warren Buffett’s wealth came after age 50" },
  { value: "$100", label: "a month, started now, can become six figures" },
];

export default function WhatYoullLearn() {
  return (
    <PageShell>
      {({ openRegister }) => (
        <>
          {/* HERO */}
          <section className="relative overflow-hidden bg-dg-deep py-[64px] md:py-[80px]">
            <HeroBackground tall={false} />
            <div className="relative max-w-[1200px] mx-auto px-6 lg:px-[34px] text-center">
              <h1 className="font-heading font-bold text-[42px] md:text-[60px] leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,.4)]">
                What You&apos;ll Learn
              </h1>
              <p className="mt-4 mx-auto max-w-[560px] text-[17px] md:text-[19px] leading-relaxed text-[#C9D6C7]">
                One night. Three segments. You leave knowing exactly what to do next.
              </p>
            </div>
          </section>

          {/* RUN OF SHOW — horizontal timeline on cream */}
          <section className="relative overflow-hidden bg-cream py-[70px] md:py-[84px]">
            <div
              className="absolute inset-0 opacity-[.55] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(27,94,32,.16) 1px, transparent 1.6px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative max-w-[1200px] mx-auto px-6 lg:px-[34px]">
              <div className="text-center mb-12">
                <div className="font-heading font-bold text-[14px] md:text-[16px] tracking-[.16em] uppercase text-gold">Run Of Show</div>
                <h2 className="mt-3 font-heading font-bold text-[32px] md:text-[42px] leading-[1.08] tracking-[-0.02em] text-dg">
                  How The Night Goes
                </h2>
              </div>

              <div className="relative">
                {/* connecting line (desktop) */}
                <div className="hidden lg:block absolute left-[12%] right-[12%] top-[26px] h-[3px] rounded-full bg-gradient-to-r from-gold/30 via-gold-lt to-gold/30" aria-hidden="true" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {AGENDA.map((item, i) => (
                    <div
                      key={item.title}
                      className="group relative"
                      style={{ animation: `float-card 4.5s ease-in-out ${i * 0.4}s infinite`, willChange: "transform" }}
                    >
                      {/* time badge sits on the line */}
                      <div className="relative z-10 mx-auto w-fit">
                        <div
                          className={
                            item.featured
                              ? "font-heading font-bold text-[15px] tabular-nums text-dg-deep bg-gold-lt px-4 py-2.5 rounded-full shadow-[0_8px_18px_-8px_rgba(217,168,31,.8)] ring-4 ring-cream"
                              : "font-heading font-bold text-[15px] tabular-nums text-dg bg-paper border-2 border-gold-lt px-4 py-2 rounded-full ring-4 ring-cream"
                          }
                        >
                          {item.time} PM
                        </div>
                      </div>
                      <div
                        className={
                          item.featured
                            ? "mt-4 h-full rounded-2xl p-6 bg-dg-deep border border-gold-lt/40 shadow-[0_18px_40px_-20px_rgba(8,43,14,.7)] group-hover:scale-[1.03] group-hover:shadow-[0_26px_50px_-20px_rgba(8,43,14,.8)] transition-all duration-300"
                            : "mt-4 h-full rounded-2xl p-6 bg-paper border border-line shadow-[0_10px_28px_-18px_rgba(8,43,14,.35)] group-hover:scale-[1.03] group-hover:border-gold/40 group-hover:shadow-[0_22px_40px_-18px_rgba(8,43,14,.5)] transition-all duration-300"
                        }
                      >
                        <div className={item.featured ? "font-heading font-bold text-[20px] text-white" : "font-heading font-bold text-[20px] text-dg group-hover:text-bg-green transition-colors duration-300"}>
                          {item.title}
                        </div>
                        <p className={item.featured ? "mt-2 text-[14.5px] leading-relaxed text-[#D8C58A]" : "mt-2 text-[14.5px] leading-relaxed text-muted"}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* WAVE DIVIDER */}
          <div className="relative leading-[0]">
            <svg viewBox="0 0 1200 90" preserveAspectRatio="none" className="block w-full h-[70px]" aria-hidden="true">
              <rect width="1200" height="90" fill="#F6F4EC" />
              <path d="M0 90 C300 30 520 30 640 52 C820 86 980 40 1200 20 L1200 90 Z" fill="#0E3B14" />
              <path d="M0 90 C300 30 520 30 640 52 C820 86 980 40 1200 20" fill="none" stroke="#B8860B" strokeWidth="2.5" />
            </svg>
          </div>

          {/* THE PANEL — three segment cards */}
          <section className="relative bg-dg-deep overflow-hidden pt-8 pb-[84px] md:pb-[96px]">
            <div
              className="absolute inset-0 opacity-50 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(76,175,80,.22) 1.6px, transparent 1.6px)",
                backgroundSize: "26px 26px",
              }}
            />
            <div className="relative max-w-[1200px] mx-auto px-6 lg:px-[34px]">
              <div className="text-center mb-12">
                <div className="font-heading font-bold text-[14px] md:text-[16px] tracking-[.16em] uppercase text-gold-lt">The Panel</div>
                <h2 className="mt-3 font-heading font-bold text-[32px] md:text-[42px] leading-[1.08] tracking-[-0.02em] text-white">
                  Three Segments. Dozens Of Questions.
                </h2>
                <p className="mt-4 mx-auto max-w-[600px] text-[17px] leading-relaxed text-[#C9D6C7]">
                  Answered by professionals who have built real wealth. A conversation among equals, not a lecture.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {SEGMENTS.map((seg) => (
                  <div
                    key={seg.num}
                    className="group relative rounded-[20px] border border-white/10 bg-white/5 p-7 md:p-8 hover:bg-white/[.09] hover:border-gold-lt/50 hover:-translate-y-1.5 hover:shadow-[0_28px_50px_-24px_rgba(0,0,0,.6)] transition-all duration-300"
                  >
                    <div className="absolute top-6 right-7 font-heading font-bold text-[54px] leading-none text-white/[.07] tabular-nums tracking-[-0.04em] select-none" aria-hidden="true">
                      {seg.num}
                    </div>
                    <div className="w-[62px] h-[62px] rounded-2xl bg-gradient-to-br from-gold-lt to-gold flex items-center justify-center shadow-[0_8px_18px_-8px_rgba(217,168,31,.7)] group-hover:scale-105 transition-transform duration-300">
                      {seg.icon}
                    </div>
                    <h3 className="mt-6 font-heading font-bold text-[22px] md:text-[24px] text-white leading-[1.15] tracking-[-0.015em]">{seg.title}</h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-[#B9C9B8]">{seg.desc}</p>
                    <div className="mt-6 pt-5 border-t border-white/10">
                      <div className="font-heading font-bold text-[11px] tracking-[.16em] uppercase text-gold-lt">You&apos;ll leave knowing</div>
                      <ul className="mt-3 flex flex-col gap-2.5">
                        {seg.points.map((p) => (
                          <li key={p} className="flex gap-3 items-start">
                            <span className="flex-none mt-[8px] w-[6px] h-[6px] rounded-full bg-bg-green" />
                            <span className="text-[14.5px] leading-relaxed text-[#D6E2D4]">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WHY IT MATTERS — stat strip */}
          <section className="bg-bg-green py-14 md:py-16">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-[34px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 md:divide-x md:divide-dg-deep/20">
                {STATS.map((s) => (
                  <div key={s.value} className="text-center md:px-6">
                    <div className="font-heading font-bold text-[48px] md:text-[56px] leading-none tracking-[-0.03em] text-dg-deep">{s.value}</div>
                    <div className="mt-3 mx-auto max-w-[260px] text-[15px] leading-snug text-dg-deep/85">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-paper py-16 text-center">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-[34px]">
              <h2 className="font-heading font-bold text-[34px] md:text-[42px] tracking-[-0.02em] text-dg mb-2.5">
                Your Future Self Says Thanks
              </h2>
              <p className="mx-auto max-w-[440px] text-[17px] text-muted mb-[26px]">
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
