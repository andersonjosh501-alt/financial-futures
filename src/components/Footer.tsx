import { SOCIALS, CONTACT_EMAIL } from "@/lib/socials";
import SocialIcon from "./SocialIcon";
import CopyEmail from "./CopyEmail";

export default function Footer({ onRegisterClick }: { onRegisterClick: () => void }) {
  const live = SOCIALS.filter((s) => s.url && s.key !== "email");

  return (
    <footer className="bg-dg-deeper mt-auto">
      {/* CTA + STAY CONNECTED */}
      <div className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-[34px] py-14 md:py-16 grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="font-heading font-bold text-[34px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-white">
              Your Future Self Says Thanks
            </h2>
            <p className="mt-3 text-[17px] text-[#A9BBA8]">Grab your seat before it&apos;s gone</p>
            <button
              type="button"
              onClick={onRegisterClick}
              className="mt-7 font-heading font-bold text-[17px] text-white bg-gold px-10 py-4 rounded-full shadow-[0_12px_26px_-12px_rgba(184,134,11,.5)] hover:bg-gold-lt hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-10px_rgba(184,134,11,.6)] transition-all duration-200"
            >
              Register Here
            </button>
          </div>
          <div className="lg:border-l lg:border-white/10 lg:pl-16">
            <div className="font-heading font-bold text-[13px] tracking-[.16em] uppercase text-gold-lt">Stay Connected</div>
            <p className="mt-2 max-w-[400px] text-[15px] leading-relaxed text-[#A9BBA8]">
              Speaker announcements, event updates, and the occasional reminder that your future self is counting on you.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
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
