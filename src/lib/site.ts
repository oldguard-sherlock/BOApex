/**
 * Verified business details. Leave a field empty until BOapex confirms it.
 * Do not invent an email, telephone, WhatsApp number or street address.
 */
export const site = {
  name: "BOapex Property Solutions",
  parent: "BOapex LTD",
  email: "",
  /** International digits only, no plus sign. Example shape: 2348012345678 */
  phone: "",
  /** Same format as phone. Used only for a customer-initiated WhatsApp link. */
  whatsapp: "",
  address: "",
  hours: "",
} as const;

export function hasContactValue(value: string) {
  return value.trim().length > 0;
}

export function telHref(digits: string) {
  const clean = digits.replace(/[^\d+]/g, "");
  return clean ? `tel:+${clean.replace(/^\+/, "")}` : "";
}

export function mailHref(email: string, subject: string, body: string) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function whatsappHref(digits: string, message: string) {
  const clean = digits.replace(/\D/g, "");
  if (!clean) return "";
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}
