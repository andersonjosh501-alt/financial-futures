"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";
import HeroBackground from "@/components/HeroBackground";

export default function EventDetails() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", age: "", school: "" });
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
      setForm({ name: "", email: "", age: "", school: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <>
      <Navbar onRegisterClick={() => setModalOpen(true)} />
      <main className="flex-1 bg-cream">
        {/* COMPACT HERO */}
        <section className="relative overflow-hidden bg-dg-deep py-[52px]">
          <HeroBackground tall={false} />
          <div className="relative max-w-[1200px] mx-auto px-6 lg:px-[34px]">
            <div className="font-heading font-semibold text-xs tracking-[.12em] uppercase text-gold-lt">Event details</div>
            <h1 className="mt-2.5 font-heading font-bold text-[36px] md:text-[44px] tracking-[-0.02em] text-white">
              Everything you need to know
            </h1>
          </div>
        </section>

        {/* TWO COLUMN: DETAILS + REGISTER */}
        <section className="max-w-[1200px] mx-auto px-6 lg:px-[34px] py-11 md:py-[44px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-[26px] items-start">
            {/* LEFT: detail cards */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "When", value: "Early–Mid October", sub: "Thursday evening, 5:00–6:15 PM" },
                  { label: "Where", value: "Parkland, FL", sub: "Venue TBD — Chamber or MSD Library" },
                  { label: "Who", value: "Grades 9–12", sub: "Ages 14–18 · Parents welcome" },
                  { label: "Cost", value: "Free", sub: "Gift bag included" },
                ].map((card) => (
                  <div key={card.label} className="bg-paper border border-line rounded-2xl p-6">
                    <div className="font-heading font-semibold text-[11px] tracking-[.1em] uppercase text-gold">{card.label}</div>
                    <div className="font-heading font-bold text-[22px] text-dg mt-2">{card.value}</div>
                    <div className="text-sm text-muted mt-0.5">{card.sub}</div>
                  </div>
                ))}
              </div>

              <div className="bg-paper border border-line rounded-2xl p-[26px]">
                <h3 className="font-heading font-bold text-lg text-ink mb-3.5">Good to know</h3>
                <div className="flex flex-col gap-3">
                  {[
                    "No experience or money required — come because you want to learn.",
                    "Parents and guardians are welcome to attend.",
                    "Every attendee leaves with a gift bag and a take-home resource packet.",
                    "Direct access to Chamber of Commerce professionals — connections you can keep.",
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
                  <p className="text-muted text-sm">We&apos;ll only email you about this event.</p>
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
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-heading font-semibold text-xs text-ink">Grade</label>
                        <input name="age" type="text" required value={form.age} onChange={handleChange}
                          className="mt-1.5 w-full h-11 border border-line rounded-[10px] bg-[#FBFBF9] px-4 text-sm focus:outline-none focus:ring-2 focus:ring-bg-green focus:border-transparent" />
                      </div>
                      <div>
                        <label className="font-heading font-semibold text-xs text-ink">School</label>
                        <input name="school" type="text" required value={form.school} onChange={handleChange}
                          className="mt-1.5 w-full h-11 border border-line rounded-[10px] bg-[#FBFBF9] px-4 text-sm focus:outline-none focus:ring-2 focus:ring-bg-green focus:border-transparent" />
                      </div>
                    </div>

                    {status === "error" && (
                      <p className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">{errorMsg}</p>
                    )}

                    <button type="submit" disabled={status === "submitting"}
                      className="mt-1.5 w-full font-heading font-bold text-base text-white bg-gold-lt py-[15px] rounded-xl shadow-[0_12px_24px_-10px_rgba(217,168,31,.6)] disabled:opacity-50 hover:bg-gold transition-colors">
                      {status === "submitting" ? "Confirming..." : "Confirm my spot"}
                    </button>
                    <p className="text-center text-xs text-muted mt-1">We&apos;ll only email you about this event.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <RegistrationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
