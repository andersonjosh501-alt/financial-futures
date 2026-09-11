"use client";

import PageShell from "@/components/PageShell";

const SEGMENTS = [
  { num: "1", title: "Misconceptions Around Investing", desc: "Correcting commonly believed barriers to entry that are simply not true" },
  { num: "2", title: "The Power of Compounding", desc: "How the math can be either against you or for you" },
  { num: "3", title: "Accounts & Tools", desc: "Everything you need to start tomorrow" },
];

const AGENDA = [
  { time: "6:00 PM", title: "Warm-Up", desc: "Your questions from the sign-up form, answered live." },
  { time: "6:15 PM", title: "Draw Wealth", desc: "Five minutes to draw what wealth looks like to you." },
  { time: "6:30 PM", title: "Panel Discussion", desc: "Dozens of questions answered by professionals with real experience.", featured: true },
  { time: "7:00 PM", title: "Live Demo", desc: "An investment account opened and a trade placed in real time, start to finish." },
];

export default function WhatYoullLearn() {
  return (
    <PageShell>
      <section className="relative bg-dg-deep overflow-hidden py-[74px] md:py-[86px]">
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(76,175,80,.22) 1.6px, transparent 1.6px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="relative max-w-[1100px] mx-auto px-6 lg:px-[34px]">
          {/* RUN OF SHOW */}
          <div>
            <div className="text-center mb-9">
              <div className="font-heading font-bold text-[13px] md:text-[15px] tracking-[.16em] uppercase text-gold-lt">Run Of Show</div>
              <h2 className="mt-3 font-heading font-bold text-[28px] md:text-[34px] tracking-[-0.02em] text-white">
                How The Night Goes
              </h2>
              <div className="mx-auto mt-4 h-[3px] w-[80px] rounded-full bg-gradient-to-r from-gold to-gold-lt shadow-[0_2px_10px_rgba(184,134,11,.35)]" />
            </div>
            <div className="max-w-[560px] mx-auto flex flex-col items-stretch">
              {AGENDA.map((item, i) => (
                <div key={item.title}>
                  <div
                    className={
                      item.featured
                        ? "rounded-[14px] p-[22px_24px] border bg-[rgba(217,168,31,.12)] border-[rgba(217,168,31,.35)] hover:bg-[rgba(217,168,31,.16)] transition-colors duration-300 text-center"
                        : "rounded-[14px] p-[22px_24px] border bg-white/5 border-white/10 hover:bg-white/[.08] transition-colors duration-300 text-center"
                    }
                  >
                    <div className="font-heading font-bold text-[15px] text-gold-lt tabular-nums">{item.time}</div>
                    <div className="font-heading font-bold text-[19px] text-white mt-2">{item.title}</div>
                    <div className={item.featured ? "text-sm mt-1.5 text-[#D8C58A]" : "text-sm mt-1.5 text-[#A9BBA8]"}>{item.desc}</div>
                  </div>
                  {i < AGENDA.length - 1 && (
                    <div className="flex flex-col items-center py-1" aria-hidden="true">
                      <div className="w-[2px] h-4 bg-gold-lt/50" />
                      <div className="w-[9px] h-[9px] rounded-full bg-gold-lt my-1 shadow-[0_0_10px_rgba(217,168,31,.6)]" />
                      <div className="w-[2px] h-4 bg-gold-lt/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* PANEL BREAKDOWN */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <div className="font-heading font-bold text-[13px] md:text-[15px] tracking-[.16em] uppercase text-gold-lt">The Panel</div>
              <h2 className="mt-3 font-heading font-bold text-[28px] md:text-[34px] tracking-[-0.02em] text-white">
                Three Segments. Dozens Of Questions.
              </h2>
              <div className="mx-auto mt-4 h-[3px] w-[80px] rounded-full bg-gradient-to-r from-gold to-gold-lt shadow-[0_2px_10px_rgba(184,134,11,.35)]" />
              <p className="mt-5 mx-auto max-w-[600px] text-[17px] leading-relaxed text-[#C9D6C7]">
                Answered by professionals who have or are on the path to building real wealth. Presented as equals rather than a lecture.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {SEGMENTS.map((seg) => (
                <div
                  key={seg.num}
                  className="group rounded-md border border-white/10 bg-white/5 p-7 md:p-8 hover:bg-white/[.08] hover:border-gold-lt/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-6 md:gap-8">
                    <div className="flex-none font-heading font-bold text-[58px] md:text-[70px] text-gold-lt tabular-nums leading-none tracking-[-0.04em]">
                      {seg.num}
                    </div>
                    <div className="flex-1 border-l border-white/15 pl-6 md:pl-8">
                      <h3 className="font-body font-bold text-[20px] md:text-[24px] text-white leading-[1.2] tracking-[-0.015em]">{seg.title}</h3>
                      {seg.desc && (
                        <p className="mt-2 text-[14.5px] leading-relaxed text-[#B9C9B8]">{seg.desc}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
