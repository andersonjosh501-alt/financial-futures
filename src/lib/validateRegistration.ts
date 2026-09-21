export const REGISTRATION_ERRORS = {
  missing: "Invalid request: required field not filled out",
  email: "Invalid email",
  phone: "Invalid phone",
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Returns an error message, or null if the registration is valid.
export function validateRegistration(input: { name?: unknown; email?: unknown; phone?: unknown }): string | null {
  const name = String(input.name ?? "").trim();
  const email = String(input.email ?? "").trim();
  const phone = String(input.phone ?? "").trim();

  if (!name || !email || !phone) return REGISTRATION_ERRORS.missing;
  if (!EMAIL_RE.test(email)) return REGISTRATION_ERRORS.email;

  const digits = phone.replace(/\D/g, "");
  const validPhone = digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
  if (!validPhone) return REGISTRATION_ERRORS.phone;

  return null;
}
