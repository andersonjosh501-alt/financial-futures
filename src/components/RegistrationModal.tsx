"use client";

import { useState, useEffect, useRef } from "react";

interface RegistrationModalProps {
  open: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ open, onClose }: RegistrationModalProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", age: "", school: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);

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
      setForm({ name: "", email: "", phone: "", age: "", school: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  function handleClose() {
    setStatus("idle");
    setErrorMsg("");
    onClose();
  }

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      className="backdrop:bg-black/60 bg-transparent p-0 m-auto max-w-md w-full"
    >
      <div className="bg-paper rounded-[20px] shadow-2xl overflow-hidden border border-line">
        <div className="px-[30px] pt-[30px] pb-0">
          <span className="inline-flex items-center gap-2 bg-mist text-dg font-heading font-semibold text-xs px-3 py-1.5 rounded-full">
            Free registration
          </span>
          <h3 className="mt-4 mb-1 font-heading font-bold text-[26px] tracking-tight text-dg">
            Save your seat
          </h3>
          <p className="text-sm text-muted mb-5">Takes under a minute.</p>
        </div>

        <div className="px-[30px] pb-[30px]">
          {status === "success" ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-mist rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-bg-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-heading font-bold text-xl text-dg mb-2">You&apos;re in!</h4>
              <p className="text-muted text-sm mb-5">We&apos;ll only email or text you about this event.</p>
              <button onClick={handleClose} className="font-heading font-bold text-sm text-white bg-dg-deep px-8 py-3 rounded-full">
                Done
              </button>
            </div>
          ) : (
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
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-heading font-semibold text-xs text-ink">Age</label>
                  <input name="age" type="number" required min="5" max="25" value={form.age} onChange={handleChange}
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
              <p className="text-center text-xs text-muted mt-1">We&apos;ll only email or text you about this event.</p>
            </form>
          )}
        </div>

        <button onClick={handleClose} className="absolute top-4 right-4 text-muted hover:text-ink text-xl" aria-label="Close">
          &times;
        </button>
      </div>
    </dialog>
  );
}
