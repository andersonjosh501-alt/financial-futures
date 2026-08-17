"use client";

import PageShell from "@/components/PageShell";
import HeroBackground from "@/components/HeroBackground";

const VALUE_PROPS = [
  {
    title: "Credible Resources",
    desc: "Get top-tier recommendations of resources letting you go further.",
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
    title: "Actionable Directions",
    desc: "Know how to start your account tomorrow.",
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
    title: "A Strong Base",
    desc: "Real base-level investing knowledge that will compound.",
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
];

export default function Home() {
  return (
    <PageShell>
      {({ openRegister }) => (
        <>
          {/* HERO */}
          <section className="relative overflow-hidden bg-dg-deep">
            <HeroBackground tall />
            <div className="relative max-w-[1200px] mx-auto px-6 lg:px-[34px] pt-[40px] pb-[130px] md:pt-[46px] md:pb-[140px]">
              <div className="max-w-[720px]">
                <h1 className="font-heading font-bold text-[42px] md:text-[62px] leading-[1.02] tracking-[-0.025em] text-white">
                  Start building wealth<br />
                  <span className="text-bg-green">before you graduate.</span>
                </h1>
                <p className="mt-[22px] max-w-[560px] text-[19px] leading-relaxed text-[#C9D6C7]">
                  A free community-driven event where high schoolers learn the fundamentals of investing, understand their advantages, and leave knowing precisely what to do next.
                </p>
                <div className="flex flex-wrap gap-3.5 mt-8">
                  <button
                    onClick={openRegister}
                    className="font-heading font-bold text-base text-ink bg-gold-lt px-[30px] py-[15px] rounded-full shadow-[0_10px_24px_-8px_rgba(217,168,31,.6)] hover:bg-gold-pale hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-8px_rgba(217,168,31,.7)] transition-all duration-200"
                  >
                    Free Registration
                  </button>
                  <a
                    href="/event-details"
                    className="font-heading font-bold text-base text-white border-[1.5px] border-white/45 px-7 py-[15px] rounded-full hover:border-white hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(255,255,255,.15)] transition-all duration-200"
                  >
                    See the agenda
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* STATS + PARTNERS BAR */}
          <section className="bg-cream border-b border-line">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-[34px] py-6">
              <div className="flex items-center justify-center flex-wrap gap-x-[40px] gap-y-3 mb-4">
                <div className="font-heading font-bold text-[22px] md:text-[26px] text-dg">100 Spots</div>
                <div className="w-px h-6 bg-line" />
                <div className="font-heading font-bold text-[22px] md:text-[26px] text-dg">Professional Speakers</div>
                <div className="w-px h-6 bg-line" />
                <div className="font-heading font-bold text-[22px] md:text-[26px] text-dg">Free Entry</div>
              </div>
              <div className="flex items-center justify-center flex-wrap gap-x-[26px] gap-y-2">
                <span className="font-heading font-semibold text-xs tracking-[.1em] uppercase text-muted">Our Partners</span>
                <span className="font-heading font-bold text-[15px] text-dg">Parkland Chamber of Commerce</span>
                <span className="w-[5px] h-[5px] rounded-full bg-gold" />
                <span className="font-heading font-bold text-[15px] text-dg">MSD Investment Club</span>
              </div>
            </div>
          </section>

          {/* VALUE PROPS */}
          <section className="bg-paper">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-[34px] pt-[74px] pb-[30px] text-center">
              <div className="font-heading font-semibold text-xs tracking-[.14em] uppercase text-gold">What you leave with</div>
              <h2 className="mt-3 font-heading font-bold text-[32px] md:text-[40px] leading-[1.08] tracking-[-0.02em] text-dg">
                Three takeaways, no prior knowledge needed
              </h2>
            </div>
            <div className="max-w-[960px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-[22px] px-6 lg:px-[34px] pb-[78px] pt-[22px]">
              {VALUE_PROPS.map((item) => (
                <div key={item.title} className="bg-paper border border-line rounded-[18px] p-[30px_24px] shadow-[0_12px_30px_-22px_rgba(8,43,14,.5)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(8,43,14,.6)] transition-all duration-200">
                  <div className="w-[66px] h-[66px] rounded-[18px] bg-gradient-to-br from-dg to-dg-deep flex items-center justify-center shadow-[0_8px_18px_-8px_rgba(27,94,32,.7)]">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 mb-2 font-heading font-bold text-[19px] text-ink">{item.title}</h3>
                  <p className="text-[14.5px] leading-[1.55] text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA BAND */}
          <section className="bg-bg-green py-16 text-center">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-[34px]">
              <h2 className="font-heading font-bold text-[34px] md:text-[42px] tracking-[-0.02em] text-dg-deep mb-2.5">
                Your future self says thanks
              </h2>
              <p className="mx-auto max-w-[440px] text-[17px] text-dg-deep/85 mb-[26px]">
                Grab your seat before it&apos;s gone.
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
