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
          <div className="relative max-w-[1200px] mx-auto px-6 lg:px-[34px] text-center">
            <h1 className="font-heading font-bold text-[42px] md:text-[60px] leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,.4)]">
              Everything You Need To Know
            </h1>
          </div>
        </section>

        {/* TWO COLUMN: DETAILS + REGISTER */}
        <section className="relative overflow-hidden py-11 md:py-[44px]">
          {/* faint dot grid across the whole cream section */}
          <div
            className="absolute inset-0 opacity-[.55] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(27,94,32,.16) 1px, transparent 1.6px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* GOLD CHART LINE — arcs behind the cards */}
          <svg
            viewBox="0 0 1200 700"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="cardsChartLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#D9A81F" stopOpacity="0" />
                <stop offset=".15" stopColor="#D9A81F" stopOpacity=".55" />
                <stop offset=".85" stopColor="#B8860B" stopOpacity=".55" />
                <stop offset="1" stopColor="#B8860B" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 460 C220 380 380 540 620 420 C820 320 950 500 1200 360"
              fill="none"
              stroke="url(#cardsChartLine)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="380" cy="510" r="5" fill="#D9A81F" opacity=".55" />
            <circle cx="620" cy="420" r="6" fill="#D9A81F" opacity=".7" />
            <circle cx="950" cy="465" r="5" fill="#B8860B" opacity=".55" />
          </svg>

          {/* LEFT SIDE FLOATING ORBS */}
          <div
            className="absolute top-16 left-[2%] w-14 h-14 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle at 30% 30%, #F0DFA6, #D9A81F 65%, transparent 100%)",
              boxShadow: "0 6px 20px -4px rgba(217,168,31,.35)",
              animation: "float-orb 7s ease-in-out infinite",
            }}
          />
          <div
            className="absolute top-[38%] left-[4%] w-8 h-8 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle at 30% 30%, #6FCF73, #4CAF50 60%, transparent 100%)",
              boxShadow: "0 4px 14px -3px rgba(76,175,80,.35)",
              animation: "float-orb 5.5s ease-in-out 1.2s infinite",
            }}
          />
          <div
            className="absolute bottom-24 left-[3%] w-10 h-10 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle at 30% 30%, #F0DFA6, #B8860B 65%, transparent 100%)",
              boxShadow: "0 5px 16px -3px rgba(184,134,11,.35)",
              animation: "float-orb 8s ease-in-out 2s infinite",
            }}
          />

          {/* RIGHT SIDE FLOATING ORBS */}
          <div
            className="absolute top-24 right-[2%] w-12 h-12 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle at 30% 30%, #A8DFAA, #4CAF50 65%, transparent 100%)",
              boxShadow: "0 5px 18px -4px rgba(76,175,80,.3)",
              animation: "float-orb 6.5s ease-in-out .5s infinite",
            }}
          />
          <div
            className="absolute top-[42%] right-[4%] w-6 h-6 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle at 30% 30%, #F0DFA6, #D9A81F 60%, transparent 100%)",
              boxShadow: "0 3px 12px -2px rgba(217,168,31,.4)",
              animation: "float-orb 5s ease-in-out 1.6s infinite",
            }}
          />
          <div
            className="absolute bottom-32 right-[3%] w-11 h-11 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle at 30% 30%, #F0DFA6, #B8860B 65%, transparent 100%)",
              boxShadow: "0 5px 16px -3px rgba(184,134,11,.35)",
              animation: "float-orb 7.5s ease-in-out .8s infinite",
            }}
          />

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
            <div className="group bg-paper border border-line rounded-[20px] p-[30px] shadow-[0_24px_46px_-26px_rgba(8,43,14,.5)] hover:scale-[1.02] hover:shadow-[0_32px_60px_-24px_rgba(8,43,14,.55)] hover:border-gold/40 transition-all duration-300 lg:sticky lg:top-[84px]">
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
                  <h3 className="mt-4 mb-1 font-heading font-bold text-[26px] tracking-tight text-dg group-hover:text-bg-green transition-colors duration-300">Save your seat</h3>
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
