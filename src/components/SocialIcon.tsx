import type { SocialKey } from "@/lib/socials";

const PATHS: Record<SocialKey, React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </>
  ),
  tiktok: (
    <path
      fill="currentColor"
      d="M13.5 3h2.6c.2 1.9 1.5 3.4 3.4 3.6v2.6a6.3 6.3 0 0 1-3.4-1v6.3a5.2 5.2 0 1 1-5.2-5.2c.3 0 .6 0 .9.1v2.7a2.6 2.6 0 1 0 1.7 2.4V3Z"
    />
  ),
  youtube: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 9.3v5.4l4.6-2.7L10 9.3Z" fill="currentColor" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7.5 10.5V17M7.5 7.6v.1M11.5 17v-4a2 2 0 0 1 4 0v4M11.5 10.5V17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 7.5 8 5.5 8-5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export default function SocialIcon({ name, className = "w-5 h-5" }: { name: SocialKey; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}
