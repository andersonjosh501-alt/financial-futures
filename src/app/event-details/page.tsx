"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";
import StockTickerHero from "@/components/StockTickerHero";

export default function EventDetails() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", age: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, age: parseInt(form.age, 10) }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Registration failed");
      }
      setStatus("success");
      setForm({ name: "", email: "", phone: "", age: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <>
      <Navbar onRegisterClick={() => setModalOpen(true)} />
      <main className="flex-1 bg-cream">
        {/* HERO — LIVE TICKER BACKDROP */}
        <section className="relative overflow-hidden bg-dg-deep py-[72px] md:py-[92px]">
          <StockTickerHero />
          <div className="relative max-w-[1200px] mx-auto px-6 lg:px-[34px]">
            <div className="font-heading font-bold text-[13px] md:text-[15px] tracking-[.16em] uppercase text-gold-lt">Event Details</div>
            <h1 className="mt-2.5 font-heading font-bold text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,.4)]">
              Everything you need to know
            </h1>
          </div>
        </section>

        {/* TRANSITION BAND — dark green fades to cream with a lingering chart line */}
        <div className="relative h-[120px] md:h-[150px] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #0E3B14 0%, #1E4A26 22%, #4E6B4D 52%, #A8B8A2 78%, #F6F4EC 100%)",
            }}
          />
          {/* dot spillover from ticker area, fading down */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, #4CAF50 1px, transparent 1.6px)",
              backgroundSize: "28px 28px",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 65%)",
              maskImage: "linear-gradient(to bottom, black 0%, transparent 65%)",
            }}
          />
          {/* the ticker's chart line, arcing down into cream */}
          <svg
            viewBox="0 0 1200 150"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="fadeLine" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#D9A81F" stopOpacity=".65" />
                <stop offset="1" stopColor="#D9A81F" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 40 C300 25 550 55 750 45 C920 37 1050 60 1200 48"
              fill="none"
              stroke="url(#fadeLine)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="750" cy="45" r="4" fill="#D9A81F" opacity=".7" />
            <circle cx="1050" cy="60" r="3" fill="#D9A81F" opacity=".5" />
          </svg>
        </div>

        {/* TWO COLUMN: DETAILS + REGISTER */}
        <section className="relative overflow-hidden -mt-[40px] md:-mt-[50px] pt-[40px] md:pt-[50px] pb-11 md:pb-[44px]">
          {/* faint dot grid across the whole cream section */}
          <div
            className="absolute inset-0 opacity-[.55] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(27,94,32,.16) 1px, transparent 1.6px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* corner watermark icons */}
          <div className="absolute top-6 left-4 md:top-8 md:left-8 opacity-[.06] pointer-events-none">
            <svg width="86" height="86" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="30" cy="30" r="10" fill="none" stroke="#1B5E20" strokeWidth="6" />
              <circle cx="70" cy="70" r="10" fill="none" stroke="#1B5E20" strokeWidth="6" />
              <line x1="22" y1="78" x2="78" y2="22" stroke="#1B5E20" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
          <div className="absolute top-6 right-4 md:top-8 md:right-8 opacity-[.07] pointer-events-none">
            <svg width="88" height="88" viewBox="0 0 100 100" aria-hidden="true">
              <path d="M15 78 L38 55 L55 68 L88 22" fill="none" stroke="#B8860B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="66,22 88,22 88,44" fill="none" stroke="#B8860B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="absolute bottom-8 left-4 md:bottom-10 md:left-8 opacity-[.06] pointer-events-none">
            <svg width="82" height="82" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="34" fill="none" stroke="#1B5E20" strokeWidth="6" />
              <text x="50" y="66" textAnchor="middle" fontSize="46" fontWeight="800" fill="#1B5E20" fontFamily="serif">$</text>
            </svg>
          </div>
          <div className="absolute bottom-8 right-4 md:bottom-10 md:right-8 opacity-[.07] pointer-events-none">
            <svg width="90" height="90" viewBox="0 0 100 100" aria-hidden="true">
              <rect x="14" y="60" width="14" height="26" rx="2" fill="#B8860B" />
              <rect x="34" y="46" width="14" height="40" rx="2" fill="#B8860B" />
              <rect x="54" y="32" width="14" height="54" rx="2" fill="#B8860B" />
              <rect x="74" y="18" width="14" height="68" rx="2" fill="#B8860B" />
            </svg>
          </div>

          <div className="relative max-w-[1200px] mx-auto px-6 lg:px-[34px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-[26px] items-start">
            {/* LEFT: detail cards */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "When", value: "October 20", sub: "6:00 – 7:00 PM" },
                  { label: "Where", value: "MSD Library", sub: "" },
                  { label: "Who", value: "MSD Students Only", sub: "Grades 9–12 · Parents welcome" },
                  { label: "Cost", value: "Free", sub: "Gift bag included" },
                ].map((card, i) => (
                  <div
                    key={card.label}
                    className="group"
                    style={{
                      animation: `float-card 4.5s ease-in-out ${i * 0.35}s infinite`,
                      willChange: "transform",
                    }}
                  >
                    <div className="bg-paper border border-line rounded-2xl p-6 shadow-[0_10px_28px_-18px_rgba(8,43,14,.35)] group-hover:scale-[1.03] group-hover:shadow-[0_22px_40px_-18px_rgba(8,43,14,.5)] group-hover:border-gold/40 transition-all duration-300 h-full">
                      <div className="font-heading font-bold text-[11px] tracking-[.14em] uppercase text-gold">{card.label}</div>
                      <div className="font-heading font-bold text-[22px] text-dg mt-2 group-hover:text-bg-green transition-colors duration-300">{card.value}</div>
                      {card.sub && <div className="text-sm text-muted mt-0.5">{card.sub}</div>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-paper border border-line rounded-2xl p-[26px]">
                <h3 className="font-heading font-bold text-lg text-ink mb-3.5">Good to know</h3>
                <div className="flex flex-col gap-3">
                  {[
                    "No experience or money required. Come because you want to learn.",
                    "Parents and guardians are welcome to attend.",
                    "Every attendee leaves with a gift bag and a take-home resource packet.",
                    "Direct access to business professionals. Connections you can keep.",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="flex-none w-[22px] h-[22px] rounded-full bg-mist text-dg flex items-center justify-center font-heading font-bold text-[13px]">✓</span>
                      <span className="text-[14.5px] leading-relaxed text-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: register form */}
            <div className="bg-paper border border-line rounded-[20px] p-[30px] shadow-[0_24px_46px_-26px_rgba(8,43,14,.5)] lg:sticky lg:top-[84px]">
              {status === "success" ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-mist rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-bg-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-heading font-bold text-xl text-dg mb-2">You&apos;re in!</h4>
                  <p className="text-muted text-sm">We&apos;ll only email or text you about this event.</p>
                </div>
              ) : (
                <>
                  <span className="inline-flex items-center gap-2 bg-mist text-dg font-heading font-semibold text-xs px-3 py-1.5 rounded-full">
                    Free registration
                  </span>
                  <h3 className="mt-4 mb-1 font-heading font-bold text-[26px] tracking-tight text-dg">Save your seat</h3>
                  <p className="text-sm text-muted mb-5">Takes under a minute.</p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <div>
                      <label className="font-heading font-semibold text-xs text-ink">Full name</label>
                      <input name="name" type="text" required value={form.name} onChange={handleChange}
                        className="mt-1.5 w-full h-11 border border-line rounded-[10px] bg-[#FBFBF9] px-4 text-sm focus:outline-none focus:ring-2 focus:ring-bg-green focus:border-transparent" />
                    </div>
                    <div>
                      <label className="font-heading font-semibold text-xs text-ink">Email</label>
                      <input name="email" type="email" required value={form.email} onChange={handleChange}
                        className="mt-1.5 w-full h-11 border border-line rounded-[10px] bg-[#FBFBF9] px-4 text-sm focus:outline-none focus:ring-2 focus:ring-bg-green focus:border-transparent" />
                    </div>
                    <div>
                      <label className="font-heading font-semibold text-xs text-ink">Phone number</label>
                      <input name="phone" type="tel" required value={form.phone} onChange={handleChange}
                        className="mt-1.5 w-full h-11 border border-line rounded-[10px] bg-[#FBFBF9] px-4 text-sm focus:outline-none focus:ring-2 focus:ring-bg-green focus:border-transparent" />
                    </div>
                    <div>
                      <label className="font-heading font-semibold text-xs text-ink">Grade</label>
                      <input name="age" type="text" required value={form.age} onChange={handleChange}
                        className="mt-1.5 w-full h-11 border border-line rounded-[10px] bg-[#FBFBF9] px-4 text-sm focus:outline-none focus:ring-2 focus:ring-bg-green focus:border-transparent" />
                    </div>

                    {status === "error" && (
                      <p className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">{errorMsg}</p>
                    )}

                    <button type="submit" disabled={status === "submitting"}
                      className="mt-1.5 w-full font-heading font-bold text-base text-white bg-gold-lt py-[15px] rounded-xl shadow-[0_12px_24px_-10px_rgba(217,168,31,.6)] disabled:opacity-50 hover:bg-gold transition-colors">
                      {status === "submitting" ? "Confirming..." : "Confirm my spot"}
                    </button>
                    <p className="text-center text-xs text-muted mt-1">We&apos;ll only email or text you about this event.</p>
                  </form>
                </>
              )}
            </div>
          </div>
          </div>
        </section>
      </main>
      <Footer />
      <RegistrationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
