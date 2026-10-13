const STORAGE_KEY = "boapex.enquiries.v1";

export type PreferredContact = "telephone" | "email" | "whatsapp";

export type ProjectEnquiry = {
  kind: "project";
  reference: string;
  createdAt: string;
  fullName: string;
  company: string;
  email: string;
  telephone: string;
  preferredContact: PreferredContact;
  projectType: string;
  location: string;
  projectStatus: string;
  categories: string[];
  details: string;
  quantity: string;
  budget: string;
  budgetUndetermined: boolean;
  timeline: string;
  propertyCount: string;
  additional: string;
  attachmentName: string;
};

export type ContactEnquiry = {
  kind: "contact";
  reference: string;
  createdAt: string;
  fullName: string;
  email: string;
  telephone: string;
  preferredContact: PreferredContact;
  message: string;
};

export type StoredEnquiry = ProjectEnquiry | ContactEnquiry;

const BLOCKED_EXT = new Set([
  "exe",
  "bat",
  "cmd",
  "com",
  "msi",
  "dll",
  "scr",
  "ps1",
  "sh",
  "js",
  "mjs",
  "jar",
  "html",
  "htm",
  "svg",
  "apk",
  "dmg",
  "app",
]);

const ALLOWED_EXT = new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "csv",
  "txt",
  "jpg",
  "jpeg",
  "png",
  "webp",
]);

export const MAX_ATTACHMENT_BYTES = 8 * 1024 * 1024;

export function makeReference() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = crypto.getRandomValues(new Uint8Array(4));
  let code = "";
  for (const byte of bytes) code += alphabet[byte % alphabet.length];
  return `BO-${code}`;
}

export function checkAttachment(file: File): string | null {
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!ext || BLOCKED_EXT.has(ext) || !ALLOWED_EXT.has(ext)) {
    return "Attach a PDF, Word, Excel, CSV, text or image file. Programmes and scripts are not accepted.";
  }
  if (file.size === 0) return "That file is empty.";
  if (file.size > MAX_ATTACHMENT_BYTES) {
    return "Please keep attachments under 8 MB.";
  }
  return null;
}

function readAll(): StoredEnquiry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as StoredEnquiry[]) : [];
  } catch {
    return [];
  }
}

/** Saves on this device only. Nothing is emailed until an official inbox is configured. */
export function saveEnquiry(entry: StoredEnquiry) {
  try {
    const next = [entry, ...readAll()].slice(0, 20);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* Private mode or a full store should not block the confirmation. */
  }
}

export function formatProjectSummary(entry: ProjectEnquiry) {
  return [
    `BOapex Property Solutions — project enquiry ${entry.reference}`,
    `Submitted: ${entry.createdAt}`,
    "",
    `Name: ${entry.fullName}`,
    `Company: ${entry.company || "—"}`,
    `Email: ${entry.email}`,
    `Telephone: ${entry.telephone}`,
    `Preferred contact: ${entry.preferredContact}`,
    "",
    `Project type: ${entry.projectType}`,
    `Location: ${entry.location}`,
    `Project status: ${entry.projectStatus || "—"}`,
    `Properties: ${entry.propertyCount || "—"}`,
    `Categories: ${entry.categories.length ? entry.categories.join(", ") : "—"}`,
    `Quantity: ${entry.quantity || "—"}`,
    `Budget (NGN): ${entry.budgetUndetermined ? "Yet to be determined" : entry.budget || "—"}`,
    `Timeline: ${entry.timeline || "—"}`,
    entry.attachmentName ? `Attachment noted (not uploaded): ${entry.attachmentName}` : "Attachment: none",
    "",
    "Requirements:",
    entry.details,
    "",
    entry.additional ? `Additional information:\n${entry.additional}` : "",
  ]
    .filter((line) => line !== "")
    .join("\n");
}

export function formatContactSummary(entry: ContactEnquiry) {
  return [
    `BOapex Property Solutions — message ${entry.reference}`,
    `Submitted: ${entry.createdAt}`,
    "",
    `Name: ${entry.fullName}`,
    `Email: ${entry.email}`,
    `Telephone: ${entry.telephone}`,
    `Preferred contact: ${entry.preferredContact}`,
    "",
    entry.message,
  ].join("\n");
}

export function whatsappDraft(input: {
  fullName: string;
  projectType: string;
  location: string;
  categories: string[];
  details: string;
  quantity: string;
  timeline: string;
}) {
  const lines = [
    "Hello BOapex Property Solutions. I would like to enquire about a property equipment requirement.",
    "",
    input.fullName ? `Name: ${input.fullName}` : "",
    input.projectType ? `Project type: ${input.projectType}` : "",
    input.location ? `Location: ${input.location}` : "",
    input.categories.length ? `Categories: ${input.categories.join(", ")}` : "",
    input.quantity ? `Quantity: ${input.quantity}` : "",
    input.timeline ? `Timeline: ${input.timeline}` : "",
    "",
    input.details ? `Requirements:\n${input.details}` : "I will share the product requirements in this chat.",
  ];
  return lines.filter((line) => line !== "").join("\n");
}

export function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function validPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}
