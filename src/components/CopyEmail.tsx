"use client";

import { useState } from "react";
import SocialIcon from "./SocialIcon";

// Copies the address, then opens the visitor's mail app in the same tab.
// Same-tab mailto avoids the blank new tab that appears when no mail app is
// configured, and the copy means the address is on the clipboard either way.
export default function CopyEmail({ email, variant }: { email: string; variant: "button" | "inline" }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard blocked; still open the mail app below
    }
    window.location.href = `mailto:${email}`;
  }

  if (variant === "inline") {
    return (
      <button
        type="button"
        onClick={copy}
        title="Copies the address and opens your email app"
        className="text-gold-lt hover:text-gold-pale transition-colors underline-offset-2 hover:underline"
      >
        {copied ? "Copied!" : email}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={copy}
      title="Copies the address and opens your email app"
      aria-label={`Copy email address ${email}`}
      className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-white hover:bg-gold-lt hover:border-gold-lt hover:text-dg-deep hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(217,168,31,.6)] transition-all duration-200"
    >
      <SocialIcon name="email" className="w-5 h-5" />
      <span className="font-heading font-bold text-[14px] tracking-wide">{copied ? "Copied!" : email}</span>
    </button>
  );
}
