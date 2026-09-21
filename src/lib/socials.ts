// Financial Futures social links. Fill in a url to make that icon appear in
// the footer's Stay Connected section; leave it "" to keep it hidden.
export type SocialKey = "instagram" | "tiktok" | "youtube" | "linkedin" | "email";

export const SOCIALS: { key: SocialKey; label: string; url: string }[] = [
  { key: "instagram", label: "Instagram", url: "" },
  { key: "tiktok", label: "TikTok", url: "" },
  { key: "youtube", label: "YouTube", url: "" },
  { key: "linkedin", label: "LinkedIn", url: "" },
  { key: "email", label: "Email", url: "mailto:financialfutures01@gmail.com" },
];

export const CONTACT_EMAIL = "financialfutures01@gmail.com";
