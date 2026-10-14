import { defineEventHandler, readBody, createError, setResponseStatus } from "h3";



type EnquiryPayload = {
  kind: "project" | "contact";
  reference: string;
  createdAt: string;
  fullName: string;
  company?: string;
  email: string;
  telephone: string;
  preferredContact: "telephone" | "email" | "whatsapp";
  projectType?: string;
  location?: string;
  projectStatus?: string;
  categories?: string[];
  details?: string;
  quantity?: string;
  budget?: string;
  budgetUndetermined?: boolean;
  timeline?: string;
  propertyCount?: string;
  additional?: string;
  attachmentName?: string;
  message?: string;
  website?: string;
};

function text(value: unknown, maxLength = 5000): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildEmail(entry: EnquiryPayload) {
  const lines = [
    "BOapex Property Solutions enquiry",
    `Reference: ${entry.reference}`,
    `Type: ${entry.kind}`,
    `Submitted: ${entry.createdAt}`,
    "",
    `Name: ${entry.fullName}`,
    ...(entry.kind === "project" ? [`Company: ${text(entry.company) || "—"}`] : []),
    `Email: ${entry.email}`,
    `Telephone: ${entry.telephone}`,
    `Preferred contact: ${entry.preferredContact}`,
    "",
    ...(entry.kind === "project"
      ? [
          `Project type: ${text(entry.projectType) || "—"}`,
          `Location: ${text(entry.location) || "—"}`,
          `Project status: ${text(entry.projectStatus) || "—"}`,
          `Properties: ${text(entry.propertyCount) || "—"}`,
          `Categories: ${entry.categories?.join(", ") || "—"}`,
          `Quantity: ${text(entry.quantity) || "—"}`,
          `Budget (NGN): ${entry.budgetUndetermined ? "Yet to be determined" : text(entry.budget) || "—"}`,
          `Timeline: ${text(entry.timeline) || "—"}`,
          `Attachment: ${text(entry.attachmentName) ? `${text(entry.attachmentName)} (filename noted only; file not uploaded)` : "None"}`,
          "",
          "Requirements:",
          text(entry.details),
          ...(text(entry.additional) ? ["", "Additional information:", text(entry.additional)] : []),
        ]
      : [text(entry.message)]),
  ];

  return {
    subject: `BOapex ${entry.kind} enquiry - ${entry.reference}`,
    text: lines.join("\n"),
    html: `<pre style="font-family:Arial,sans-serif;white-space:pre-wrap;overflow-wrap:anywhere">${escapeHtml(lines.join("\n"))}</pre>`,
  };
}

export default defineEventHandler(async (event) => {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.ENQUIRY_TO_EMAIL;
  const sender = process.env.ENQUIRY_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    console.error("Enquiry email environment variables are not configured.");
    throw createError({
      statusCode: 500,
      statusMessage: "The enquiry service is not configured yet. Please try again later.",
    });
  }

  // Explicitly type the body
  const body = (await readBody(event)) as Record<string, any>;

  // Honeypot
  if (text(body?.website, 200)) {
    return { ok: true };
  }

  const kind = body?.kind;
  const fullName = text(body?.fullName, 150);
  const email = text(body?.email, 254);
  const telephone = text(body?.telephone, 40);
  const preferredContact = body?.preferredContact;
  const reference = text(body?.reference, 40);

  // ... rest of the code stays the same

  if (kind !== "project" && kind !== "contact") {
    throw createError({ statusCode: 400, statusMessage: "Invalid enquiry type." });
  }

  if (!fullName || !validEmail(email) || !telephone || !reference) {
    throw createError({
      statusCode: 400,
      statusMessage: "Please check your name, email address and telephone number.",
    });
  }

  if (!["telephone", "email", "whatsapp"].includes(String(preferredContact))) {
    throw createError({ statusCode: 400, statusMessage: "Invalid contact preference." });
  }

  const digits = telephone.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) {
    throw createError({ statusCode: 400, statusMessage: "Please enter a valid telephone number." });
  }

  const entry: EnquiryPayload = {
    kind,
    reference,
    createdAt: new Date().toISOString(),
    fullName,
    email,
    telephone,
    preferredContact: preferredContact as EnquiryPayload["preferredContact"],
  };

  if (kind === "project") {
    const categories = Array.isArray(body.categories)
      ? body.categories
          .filter((item: unknown): item is string => typeof item === "string")
          .slice(0, 50)
          .map((item: string) => item.slice(0, 150))
      : [];

    entry.company = text(body.company, 200);
    entry.projectType = text(body.projectType, 200);
    entry.location = text(body.location, 300);
    entry.projectStatus = text(body.projectStatus, 200);
    entry.categories = categories;
    entry.details = text(body.details, 5000);
    entry.quantity = text(body.quantity, 200);
    entry.budget = text(body.budget, 200);
    entry.budgetUndetermined = body.budgetUndetermined === true;
    entry.timeline = text(body.timeline, 200);
    entry.propertyCount = text(body.propertyCount, 200);
    entry.additional = text(body.additional, 5000);
    entry.attachmentName = text(body.attachmentName, 255);

    if (!entry.projectType || !entry.location || !entry.details || entry.details.length < 12) {
      throw createError({
        statusCode: 400,
        statusMessage: "Please provide the project type, location and full requirements.",
      });
    }
  } else {
    entry.message = text(body.message, 5000);

    if (!entry.message || entry.message.length < 12) {
      throw createError({
        statusCode: 400,
        statusMessage: "Please enter a message of at least 12 characters.",
      });
    }
  }

  const emailContent = buildEmail(entry);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: emailContent.subject,
        text: emailContent.text,
        html: emailContent.html,
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("Resend rejected an enquiry email:", response.status, details);
      throw createError({
        statusCode: 502,
        statusMessage: "We couldn't send your enquiry just now. Please try again later.",
      });
    }

    return { ok: true };
  } catch (error: any) {
    if (error.statusCode) throw error; // rethrow createError
    console.error("Enquiry email request failed:", error);
    throw createError({
      statusCode: 502,
      statusMessage: "We couldn't send your enquiry just now. Please try again later.",
    });
  }
});