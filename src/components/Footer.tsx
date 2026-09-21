import { SOCIALS, CONTACT_EMAIL } from "@/lib/socials";
import SocialIcon from "./SocialIcon";
import CopyEmail from "./CopyEmail";

export default function Footer() {
  const live = SOCIALS.filter((s) => s.url && s.key !== "email");

  return (
    <footer className="bg-dg-deeper mt-auto">
      {/* STAY CONNECTED */}
      <div className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-[34px] py-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="font-heading font-bold text-[13px] tracking-[.16em] uppercase text-gold-lt">Stay Connected</div>
            <h2 className="mt-2 font-heading font-bold text-[26px] md:text-[30px] tracking-[-0.02em] text-white">
              Follow Financial Futures
            </h2>
            <p className="mt-2 max-w-[460px] text-[15px] leading-relaxed text-[#A9BBA8]">
              Speaker announcements, event updates, and the occasional reminder that your future self is counting on you.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <CopyEmail email={CONTACT_EMAIL} variant="button" />
            {live.map((s) => (
              <a
                key={s.key}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-white hover:bg-gold-lt hover:border-gold-lt hover:text-dg-deep hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(217,168,31,.6)] transition-all duration-200"
              >
                <SocialIcon name={s.key} className="w-5 h-5" />
                <span className="font-heading font-bold text-[14px] tracking-wide">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[34px] py-8 flex flex-wrap justify-between items-center gap-4">
        <div className="font-heading font-bold text-xl tracking-wide text-white">
          Financial <span className="ml-1">Futures</span>
        </div>
        <div className="text-[13px] text-[#7E947D] text-right">
          Youth Financial Literacy Event &middot; Parkland, FL &middot; In partnership with the Parkland Chamber of Commerce &amp; MSD Investment Club
          <span className="block mt-1">
            Questions? <CopyEmail email={CONTACT_EMAIL} variant="inline" />
          </span>
        </div>
      </div>
    </footer>
  );
}
