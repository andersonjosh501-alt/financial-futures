"use client";

import PageShell from "@/components/PageShell";

const AGENDA = [
  { time: "6:00", title: "Warm-Up", desc: "Your questions from the sign-up form, answered live by the panel." },
  { time: "6:15", title: "Draw Wealth", desc: "Five minutes to draw what wealth looks like to you." },
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
  },
  {
    num: "03",
    title: "Accounts & Tools",
    desc: "Everything you need to open an account and invest your next dollar tomorrow.",
    points: [
      "Brokerage vs. Roth IRA",
      "Which companies to use and what they cost",
      "The exact steps",
    ],
  },
];

const STATS = [
  { value: "38%", label: "of Americans own no investments at all" },
  { value: "99%", label: "of Warren Buffett’s wealth came after age 50" },
  { value: "$100 / Mo", label: "started now, can become 6 figures" },
];

export default function WhatYoullLearn() {
  return (
    <PageShell>
      <>
          {/* HERO */}
          <section className="relative overflow-hidden bg-dg-deep py-[64px] md:py-[80px]">
            <div
              className="absolute inset-0 opacity-50 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(76,175,80,.22) 1.6px, transparent 1.6px)",
                backgroundSize: "26px 26px",
              }}
            />
            <div className="relative max-w-[1200px] mx-auto px-6 lg:px-[34px] text-center">
              <h1 className="font-heading font-bold text-[42px] md:text-[60px] leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,.4)]">
                What You&apos;ll Learn
              </h1>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-9 lg:gap-y-5">
                  {AGENDA.map((item, i) => (
                    <div
                      key={item.title}
                      className="group relative flex flex-col"
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
                            ? "mt-4 flex-1 rounded-2xl p-6 bg-dg-deep border border-gold-lt/40 shadow-[0_18px_40px_-20px_rgba(8,43,14,.7)] group-hover:scale-[1.03] group-hover:shadow-[0_26px_50px_-20px_rgba(8,43,14,.8)] transition-all duration-300"
                            : "mt-4 flex-1 rounded-2xl p-6 bg-paper border border-line shadow-[0_10px_28px_-18px_rgba(8,43,14,.35)] group-hover:scale-[1.03] group-hover:border-gold/40 group-hover:shadow-[0_22px_40px_-18px_rgba(8,43,14,.5)] transition-all duration-300"
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
          <section className="relative bg-dg-deep overflow-hidden pt-8 pb-[72px] md:pb-[84px] border-b-2 border-white">
            <div
              className="absolute inset-0 opacity-50 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(76,175,80,.22) 1.6px, transparent 1.6px)",
                backgroundSize: "26px 26px",
              }}
            />
            <div className="relative max-w-[1200px] mx-auto px-6 lg:px-[34px]">
              <div className="text-center mb-12">
                <h2 className="font-heading font-bold text-[40px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-white">
                  The Panel
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
                    <div className="font-heading font-bold text-[44px] leading-none text-gold-lt tabular-nums tracking-[-0.04em]">
                      {seg.num}
                    </div>
                    <h3 className="mt-5 font-heading font-bold text-[22px] md:text-[24px] text-white leading-[1.15] tracking-[-0.015em]">{seg.title}</h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-[#B9C9B8]">{seg.desc}</p>
                    <div className="mt-6 pt-5 border-t border-white/10">
                      <ul className="flex flex-col gap-2.5">
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

              {/* WHY IT MATTERS — stats */}
              <div className="mt-16 md:mt-20 pt-12 md:pt-14 border-t border-white/15">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 md:divide-x md:divide-white/20">
                  {STATS.map((st) => (
                    <div key={st.value} className="text-center md:px-6">
                      <div className="font-heading font-bold text-[48px] md:text-[58px] leading-none tracking-[-0.03em] text-gold-lt">{st.value}</div>
                      <div className="mt-3 mx-auto max-w-[260px] text-[15.5px] leading-snug text-white">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

      </>
    </PageShell>
  );
}
