import { Link } from "@tanstack/react-router";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { categories, projectStatuses, projectTypes, propertyCounts } from "@/lib/content";
import {
  checkAttachment,
  formatContactSummary,
  formatProjectSummary,
  makeReference,
  saveEnquiry,
  validEmail,
  validPhone,
  whatsappDraft,
  type ContactEnquiry,
  type PreferredContact,
  type ProjectEnquiry,
} from "@/lib/enquiry";
import { hasContactValue, mailHref, site, whatsappHref } from "@/lib/site";
import { btnPrimary, btnSecondary, fieldClass, labelClass } from "@/components/ui";

type Variant = "project" | "contact";

const preferred: { value: PreferredContact; label: string }[] = [
  { value: "telephone", label: "Telephone" },
  { value: "email", label: "Email" },
  { value: "whatsapp", label: "WhatsApp" },
];

export function QuoteForm({
  variant,
  initialCategory,
}: {
  variant: Variant;
  initialCategory?: string;
}) {
  const started = useRef(0);
  if (started.current === 0) started.current = Date.now();

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  
  const [submitting, setSubmitting] = useState(false);

  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [preferredContact, setPreferredContact] = useState<PreferredContact>("email");
  const [projectType, setProjectType] = useState("");
  const [location, setLocation] = useState("");
  const [projectStatus, setProjectStatus] = useState("");
  const [selected, setSelected] = useState<string[]>(
    initialCategory && categories.some((item) => item.slug === initialCategory) ? [initialCategory] : [],
  );
  const [details, setDetails] = useState("");
  const [quantity, setQuantity] = useState("");
  const [budget, setBudget] = useState("");
  const [budgetUndetermined, setBudgetUndetermined] = useState(false);
  const [timeline, setTimeline] = useState("");
  const [propertyCount, setPropertyCount] = useState("");
  const [additional, setAdditional] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState("");
  const [projectResult, setProjectResult] = useState<ProjectEnquiry | null>(null);
  const [contactResult, setContactResult] = useState<ContactEnquiry | null>(null);

  function toggleCategory(slug: string) {
    setSelected((current) =>
      current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug],
    );
  }

  function onFile(file: File | null) {
    setFileError("");
    setFileName("");
    if (!file) return;
    const problem = checkAttachment(file);
    if (problem) {
      setFileError(problem);
      return;
    }
    setFileName(file.name);
  }

  async function copyText(text: string, label: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
    } catch {
      setCopied("");
      window.prompt("Copy this text:", text);
    }
  }

  function validate() {
    const next: Record<string, string> = {};
    if (fullName.trim().length < 2) next.fullName = "Enter your full name.";
    if (!validEmail(email)) next.email = "Enter a valid business email.";
    if (!validPhone(telephone)) next.telephone = "Enter a telephone number we can call or message.";
    if (!consent) next.consent = "Please confirm we may use these details to respond.";
    if (variant === "project") {
      if (!projectType) next.projectType = "Select a project type.";
      if (location.trim().length < 2) next.location = "Enter the city or area.";
      if (details.trim().length < 12) {
        next.details = "Describe the products, quantities or specifications you need.";
      }
      if (fileError) next.attachment = fileError;
    } else if (message.trim().length < 12) {
      next.message = "Tell us briefly why you are getting in touch.";
    }
    return next;
  }

  
  
async function onSubmit(event: FormEvent) {

  console.log("[QuoteForm] Submit handler fired");
  event.preventDefault();

  if (submitting) return;

  const nextErrors: Record<string, string> = {};

  if (!fullName.trim()) {
    nextErrors.fullName = "Please enter your full name.";
  }

  if (!validEmail(email)) {
    nextErrors.email = "Please enter a valid email address.";
  }

  if (!validPhone(telephone)) {
    nextErrors.telephone = "Please enter a valid telephone number.";
  }

  if (!consent) {
    nextErrors.consent = "Please confirm that we may use your information to respond.";
  }

  if (variant === "project") {
    if (!projectType) {
      nextErrors.projectType = "Please select a project type.";
    }

    if (!location.trim()) {
      nextErrors.location = "Please enter the project location.";
    }

    if (details.trim().length < 12) {
      nextErrors.details = "Please provide at least 12 characters of project requirements.";
    }

    if (fileError) {
      nextErrors.attachment = fileError;
    }
  } else if (message.trim().length < 12) {
    nextErrors.message = "Please enter a message of at least 12 characters.";
  }

  setErrors(nextErrors);

  if (Object.keys(nextErrors).length > 0) {
    const firstError = Object.keys(nextErrors)[0];
    document
      .getElementById(firstError)
      ?.focus();
    return;
  }

  // Keep the existing minimum completion time.
  if (Date.now() - started.current < 1500) {
    setErrors({
      form: "Please wait a moment before submitting your enquiry.",
    });
    return;
  }

  // Keep the existing honeypot behavior for automated submissions.
  if (honeypot.trim()) {
    const fakeResult = {
      kind: "contact" as const,
      reference: "BO-HELD",
      createdAt: new Date().toISOString(),
      fullName: "",
      email: "",
      telephone: "",
      preferredContact: "email" as PreferredContact,
      message: "",
    };

    setContactResult(fakeResult);
    return;
  }

  const createdAt = new Date().toISOString();
  const reference = makeReference();

  const entry: ProjectEnquiry | ContactEnquiry =
    variant === "project"
      ? {
          kind: "project",
          reference,
          createdAt,
          fullName: fullName.trim(),
          company: company.trim(),
          email: email.trim(),
          telephone: telephone.trim(),
          preferredContact,
          projectType,
          location: location.trim(),
          projectStatus,
          categories: categories
            .filter((item) => selected.includes(item.slug))
            .map((item) => item.name),
          details: details.trim(),
          quantity: quantity.trim(),
          budget: budget.trim(),
          budgetUndetermined,
          timeline: timeline.trim(),
          propertyCount,
          additional: additional.trim(),
          attachmentName: fileName,
        }
      : {
          kind: "contact",
          reference,
          createdAt,
          fullName: fullName.trim(),
          email: email.trim(),
          telephone: telephone.trim(),
          preferredContact,
          message: message.trim(),
        };

  setSubmitting(true);
  setErrors({});

  try {
    const response = await fetch("/api/enquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...entry,
        website: honeypot,
      }),
    });
    
    const result = await response.json().catch(() => ({}));
    console.log (result)
    if (!response.ok || result.ok !== true) {
      throw new Error(
        typeof result.error === "string"
          ? result.error
          : "We couldn't submit your enquiry. Please try again.",
      );
    }

    // Save locally only after the API accepts the email request.
    saveEnquiry(entry);

    if (entry.kind === "project") {
      setProjectResult(entry);
    } else {
      setContactResult(entry);
    }
  } catch (error) {
    setErrors({
      form:
        error instanceof Error
          ? error.message
          : "We couldn't submit your enquiry. Please try again.",
    });
  } finally {
    setSubmitting(false);
  }
}


  if (projectResult) {
    const summary = formatProjectSummary(projectResult);
    return (
      <Confirmation
        reference={projectResult.reference}
        summary={summary}
        copied={copied}
        onCopy={() => void copyText(summary, "summary")}
        attachmentNoted={Boolean(projectResult.attachmentName)}
      />
    );
  }

  if (contactResult) {
    const summary = formatContactSummary(contactResult);
    return (
      <Confirmation
        reference={contactResult.reference}
        summary={summary}
        copied={copied}
        onCopy={() => void copyText(summary, "summary")}
        attachmentNoted={false}
        contact
      />
    );
  }

  const categoryNames = categories.filter((item) => selected.includes(item.slug)).map((item) => item.name);
  const draft = whatsappDraft({
    fullName,
    projectType,
    location,
    categories: categoryNames,
    details: variant === "project" ? details : message,
    quantity,
    timeline,
  });
  const waLink = hasContactValue(site.whatsapp) ? whatsappHref(site.whatsapp, draft) : "";

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
      <form className="border border-line bg-card p-5 md:p-8" onSubmit={onSubmit} noValidate>
        <p className="text-sm text-muted">Required fields are marked. Do not send card numbers or banking passwords.</p>
        {errors.form ? (
          <p role="alert" className="mt-4 border border-line bg-sheet px-3 py-2 text-sm text-ink">
            {errors.form}
          </p>
        ) : null}

        <fieldset className="mt-8">
          <legend className="font-display text-xl uppercase tracking-tight">Contact information</legend>
          <div className="mt-4 grid gap-5">
            <Field id="fullName" label="Full name" required error={errors.fullName}>
              <input
                id="fullName"
                className={fieldClass}
                autoComplete="name"
                value={fullName}
                aria-invalid={Boolean(errors.fullName)}
                onChange={(event) => setFullName(event.target.value)}
              />
            </Field>
            {variant === "project" ? (
              <Field id="company" label="Company or organisation" error={errors.company}>
                <input
                  id="company"
                  className={fieldClass}
                  autoComplete="organization"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                />
              </Field>
            ) : null}
            <Field id="email" label="Business email" required error={errors.email}>
              <input
                id="email"
                type="email"
                className={fieldClass}
                autoComplete="email"
                value={email}
                aria-invalid={Boolean(errors.email)}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Field>
            <Field id="telephone" label="Telephone number" required error={errors.telephone}>
              <input
                id="telephone"
                type="tel"
                className={fieldClass}
                autoComplete="tel"
                value={telephone}
                aria-invalid={Boolean(errors.telephone)}
                onChange={(event) => setTelephone(event.target.value)}
              />
            </Field>
            <fieldset>
              <legend className={labelClass}>Preferred contact method</legend>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                {preferred.map((option) => (
                  <label key={option.value} className="inline-flex min-h-11 items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={option.value}
                      checked={preferredContact === option.value}
                      onChange={() => setPreferredContact(option.value)}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </fieldset>

        {variant === "project" ? (
          <>
            <fieldset className="mt-10">
              <legend className="font-display text-xl uppercase tracking-tight">Project information</legend>
              <div className="mt-4 grid gap-5">
                <Field id="projectType" label="Project type" required error={errors.projectType}>
                  <select
                    id="projectType"
                    className={fieldClass}
                    value={projectType}
                    aria-invalid={Boolean(errors.projectType)}
                    onChange={(event) => setProjectType(event.target.value)}
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="location" label="Project location" required error={errors.location}>
                  <input
                    id="location"
                    className={fieldClass}
                    placeholder="City or area"
                    value={location}
                    aria-invalid={Boolean(errors.location)}
                    onChange={(event) => setLocation(event.target.value)}
                  />
                </Field>
                <Field id="projectStatus" label="Project status">
                  <select
                    id="projectStatus"
                    className={fieldClass}
                    value={projectStatus}
                    onChange={(event) => setProjectStatus(event.target.value)}
                  >
                    <option value="">Optional</option>
                    {projectStatuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
            </fieldset>

            <fieldset className="mt-10">
              <legend className="font-display text-xl uppercase tracking-tight">Product requirements</legend>
              <div className="mt-4 grid gap-5">
                <fieldset>
                  <legend className={labelClass}>Product categories required</legend>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {categories.map((category) => (
                      <label key={category.slug} className="flex min-h-11 items-start gap-2 text-sm leading-snug">
                        <input
                          type="checkbox"
                          className="mt-1"
                          checked={selected.includes(category.slug)}
                          onChange={() => toggleCategory(category.slug)}
                        />
                        {category.name}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <Field id="details" label="Product details and specifications" required error={errors.details}>
                  <textarea
                    id="details"
                    className={`${fieldClass} min-h-36 py-3`}
                    value={details}
                    aria-invalid={Boolean(errors.details)}
                    onChange={(event) => setDetails(event.target.value)}
                  />
                </Field>
                <Field id="quantity" label="Estimated quantity or number of units">
                  <input
                    id="quantity"
                    className={fieldClass}
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                  />
                </Field>
                <Field id="budget" label="Indicative budget in Nigerian naira">
                  <input
                    id="budget"
                    className={fieldClass}
                    inputMode="decimal"
                    disabled={budgetUndetermined}
                    value={budgetUndetermined ? "" : budget}
                    onChange={(event) => setBudget(event.target.value)}
                  />
                  <label className="mt-2 flex min-h-11 items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={budgetUndetermined}
                      onChange={(event) => setBudgetUndetermined(event.target.checked)}
                    />
                    Budget yet to be determined
                  </label>
                </Field>
                <Field id="timeline" label="Required delivery date or project timeline">
                  <input
                    id="timeline"
                    className={fieldClass}
                    value={timeline}
                    onChange={(event) => setTimeline(event.target.value)}
                  />
                </Field>
                <fieldset>
                  <legend className={labelClass}>One property or multiple properties?</legend>
                  <div className="flex flex-col gap-2">
                    {propertyCounts.map((option) => (
                      <label key={option} className="inline-flex min-h-11 items-center gap-2 text-sm">
                        <input
                          type="radio"
                          name="propertyCount"
                          value={option}
                          checked={propertyCount === option}
                          onChange={() => setPropertyCount(option)}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <Field id="additional" label="Additional information">
                  <textarea
                    id="additional"
                    className={`${fieldClass} min-h-24 py-3`}
                    value={additional}
                    onChange={(event) => setAdditional(event.target.value)}
                  />
                </Field>
                <Field id="attachment" label="File attachment" error={errors.attachment || fileError}>
                  <input
                    id="attachment"
                    type="file"
                    className="block w-full text-sm file:mr-3 file:min-h-11 file:border file:border-line file:bg-sheet file:px-3 file:text-sm file:text-ink"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.jpg,.jpeg,.png,.webp"
                    onChange={(event) => onFile(event.target.files?.[0] ?? null)}
                  />
                  <p className="mt-2 text-sm text-muted">
                    Optional. PDF, Word, Excel, CSV, text or image, up to 8 MB. A bill of quantities or
                    specification sheet is useful. The file is checked here and is not uploaded, because a
                    secure inbox is not connected yet.
                    {fileName ? ` Noted: ${fileName}.` : ""}
                  </p>
                </Field>
              </div>
            </fieldset>
          </>
        ) : (
          <Field id="message" label="Message" required error={errors.message}>
            <textarea
              id="message"
              className={`${fieldClass} mt-4 min-h-36 py-3`}
              value={message}
              aria-invalid={Boolean(errors.message)}
              onChange={(event) => setMessage(event.target.value)}
            />
          </Field>
        )}

        <div className="hp-field" aria-hidden="true">
          <label>
            Website
            <input
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(event) => setHoneypot(event.target.value)}
            />
          </label>
        </div>

        <div className="mt-8">
          <label className="flex items-start gap-3 text-sm leading-relaxed">
            <input
              id="consent"
              type="checkbox"
              className="mt-1"
              checked={consent}
              aria-invalid={Boolean(errors.consent)}
              onChange={(event) => setConsent(event.target.checked)}
            />
            <span>
              I agree that BOapex Property Solutions may use this information to respond to my enquiry,
              as described in the <Link to="/privacy" className="underline">Privacy Policy</Link>.
            </span>
          </label>
          {errors.consent ? (
            <p id="consent-error" role="alert" className="mt-2 text-sm text-ink">
              {errors.consent}
            </p>
          ) : null}
        </div>

      
          <button
          type="submit"
          className={`${btnPrimary} mt-8 w-full sm:w-auto`}
          disabled={submitting}
          >
        {submitting
        ? "Submitting..."
        : variant === "project"
        ? "Submit project enquiry"
        : "Submit enquiry"}
        </button>

      </form>

      <aside className="border border-line bg-sheet p-5">
        <h2 className="font-display text-lg uppercase tracking-tight">WhatsApp</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Optional. The formal form is enough on its own. If you prefer WhatsApp, use a draft based on
          what you have typed. You start the conversation yourself.
        </p>
        {waLink ? (
          <a className={`${btnSecondary} mt-5 w-full`} href={waLink} target="_blank" rel="noreferrer">
            Continue on WhatsApp
          </a>
        ) : (
          <>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The business WhatsApp number has not been published yet, so this does not open a chat.
            </p>
            <button type="button" className={`${btnSecondary} mt-5 w-full`} onClick={() => void copyText(draft, "whatsapp")}>
              {copied === "whatsapp" ? "Draft copied" : "Copy WhatsApp draft"}
            </button>
          </>
        )}
      </aside>
    </div>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? <span className="text-stone"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-2 text-sm text-ink">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Confirmation({
  reference,
  summary,
  copied,
  onCopy,
  attachmentNoted,
  contact = false,
}: {
  reference: string;
  summary: string;
  copied: string;
  onCopy: () => void;
  attachmentNoted: boolean;
  contact?: boolean;
}) {
  const subject = `Enquiry ${reference}`;
  return (
    <div className="border border-line bg-card p-5 md:p-8" role="status">
      <p className="text-xs font-medium uppercase tracking-widest text-stone">Enquiry submitted</p>
      <h2 className="mt-3 font-display text-3xl uppercase tracking-tight">We have your reference.</h2>
      <p className="mt-4 font-display text-2xl tracking-wide">{reference}</p>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        {contact
          ? "Your message has been submitted and saved on this device. This is not a quotation."
          : "Your project enquiry has been submitted and saved on this device. A quotation has not been prepared. BOapex still needs to review the requirements before proposing products, pricing or delivery."}
      </p>
      {hasContactValue(site.email) ? (
        <p className="mt-4 text-sm leading-relaxed text-muted">
          You can also email the summary to the business inbox.
        </p>
      ) : (
        <p className="mt-4 text-sm leading-relaxed text-muted">
          An official business email has not been connected yet, so this enquiry was not emailed
          automatically. Copy the summary and keep the reference.
        </p>
      )}
      {attachmentNoted ? (
        <p className="mt-3 text-sm leading-relaxed text-muted">
            The file is checked here but is not uploaded with your enquiry.
            Please contact BOapex separately to arrange secure transfer of the document.
        </p>
      ) : null}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" className={btnPrimary} onClick={onCopy}>
          {copied === "summary" ? "Summary copied" : "Copy enquiry summary"}
        </button>
        {hasContactValue(site.email) ? (
          <a className={btnSecondary} href={mailHref(site.email, subject, summary)}>
            Email this enquiry
          </a>
        ) : null}
        <Link to="/" className={btnSecondary}>
          Back to home
        </Link>
      </div>
      <pre className="mt-8 overflow-x-auto border border-line bg-sheet p-4 text-sm leading-relaxed whitespace-pre-wrap text-ink">
        {summary}
      </pre>
    </div>
  );
}
