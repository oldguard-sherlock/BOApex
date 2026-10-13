import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as propertyCounts, D as whatsappHref, S as projectTypes, T as site, _ as mailHref, c as btnPrimary, d as fieldClass, g as labelClass, l as btnSecondary, p as hasContactValue, u as categories, x as projectStatuses } from "./site-shell-A9BSGcu_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-form-CG6pNTC0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "boapex.enquiries.v1";
var BLOCKED_EXT = /* @__PURE__ */ new Set([
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
	"app"
]);
var ALLOWED_EXT = /* @__PURE__ */ new Set([
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
	"webp"
]);
function makeReference() {
	const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	const bytes = crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(4));
	let code = "";
	for (const byte of bytes) code += alphabet[byte % 32];
	return `BO-${code}`;
}
function checkAttachment(file) {
	const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
	if (!ext || BLOCKED_EXT.has(ext) || !ALLOWED_EXT.has(ext)) return "Attach a PDF, Word, Excel, CSV, text or image file. Programmes and scripts are not accepted.";
	if (file.size === 0) return "That file is empty.";
	if (file.size > 8388608) return "Please keep attachments under 8 MB.";
	return null;
}
function readAll() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
/** Saves on this device only. Nothing is emailed until an official inbox is configured. */
function saveEnquiry(entry) {
	try {
		const next = [entry, ...readAll()].slice(0, 20);
		localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
	} catch {}
}
function formatProjectSummary(entry) {
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
		entry.additional ? `Additional information:\n${entry.additional}` : ""
	].filter((line) => line !== "").join("\n");
}
function formatContactSummary(entry) {
	return [
		`BOapex Property Solutions — message ${entry.reference}`,
		`Submitted: ${entry.createdAt}`,
		"",
		`Name: ${entry.fullName}`,
		`Email: ${entry.email}`,
		`Telephone: ${entry.telephone}`,
		`Preferred contact: ${entry.preferredContact}`,
		"",
		entry.message
	].join("\n");
}
function whatsappDraft(input) {
	return [
		"Hello BOapex Property Solutions. I would like to enquire about a property equipment requirement.",
		"",
		input.fullName ? `Name: ${input.fullName}` : "",
		input.projectType ? `Project type: ${input.projectType}` : "",
		input.location ? `Location: ${input.location}` : "",
		input.categories.length ? `Categories: ${input.categories.join(", ")}` : "",
		input.quantity ? `Quantity: ${input.quantity}` : "",
		input.timeline ? `Timeline: ${input.timeline}` : "",
		"",
		input.details ? `Requirements:\n${input.details}` : "I will share the product requirements in this chat."
	].filter((line) => line !== "").join("\n");
}
function validEmail(value) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
function validPhone(value) {
	const digits = value.replace(/\D/g, "");
	return digits.length >= 7 && digits.length <= 15;
}
var preferred = [
	{
		value: "telephone",
		label: "Telephone"
	},
	{
		value: "email",
		label: "Email"
	},
	{
		value: "whatsapp",
		label: "WhatsApp"
	}
];
function QuoteForm({ variant, initialCategory }) {
	const started = (0, import_react.useRef)(0);
	if (started.current === 0) started.current = Date.now();
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [company, setCompany] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [telephone, setTelephone] = (0, import_react.useState)("");
	const [preferredContact, setPreferredContact] = (0, import_react.useState)("email");
	const [projectType, setProjectType] = (0, import_react.useState)("");
	const [location, setLocation] = (0, import_react.useState)("");
	const [projectStatus, setProjectStatus] = (0, import_react.useState)("");
	const [selected, setSelected] = (0, import_react.useState)(initialCategory && categories.some((item) => item.slug === initialCategory) ? [initialCategory] : []);
	const [details, setDetails] = (0, import_react.useState)("");
	const [quantity, setQuantity] = (0, import_react.useState)("");
	const [budget, setBudget] = (0, import_react.useState)("");
	const [budgetUndetermined, setBudgetUndetermined] = (0, import_react.useState)(false);
	const [timeline, setTimeline] = (0, import_react.useState)("");
	const [propertyCount, setPropertyCount] = (0, import_react.useState)("");
	const [additional, setAdditional] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [consent, setConsent] = (0, import_react.useState)(false);
	const [honeypot, setHoneypot] = (0, import_react.useState)("");
	const [fileName, setFileName] = (0, import_react.useState)("");
	const [fileError, setFileError] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [copied, setCopied] = (0, import_react.useState)("");
	const [projectResult, setProjectResult] = (0, import_react.useState)(null);
	const [contactResult, setContactResult] = (0, import_react.useState)(null);
	function toggleCategory(slug) {
		setSelected((current) => current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug]);
	}
	function onFile(file) {
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
	async function copyText(text, label) {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(label);
		} catch {
			setCopied("");
			window.prompt("Copy this text:", text);
		}
	}
	function validate() {
		const next = {};
		if (fullName.trim().length < 2) next.fullName = "Enter your full name.";
		if (!validEmail(email)) next.email = "Enter a valid business email.";
		if (!validPhone(telephone)) next.telephone = "Enter a telephone number we can call or message.";
		if (!consent) next.consent = "Please confirm we may use these details to respond.";
		if (variant === "project") {
			if (!projectType) next.projectType = "Select a project type.";
			if (location.trim().length < 2) next.location = "Enter the city or area.";
			if (details.trim().length < 12) next.details = "Describe the products, quantities or specifications you need.";
			if (fileError) next.attachment = fileError;
		} else if (message.trim().length < 12) next.message = "Tell us briefly why you are getting in touch.";
		return next;
	}
	function onSubmit(event) {
		event.preventDefault();
		const next = validate();
		setErrors(next);
		if (Object.keys(next).length > 0) {
			const first = Object.keys(next)[0];
			window.setTimeout(() => document.getElementById(first)?.focus(), 0);
			return;
		}
		if (Date.now() - started.current < 1500) {
			setErrors({ form: "Please take a moment to review the form before submitting." });
			return;
		}
		if (honeypot.trim()) {
			const decoyTime = (/* @__PURE__ */ new Date()).toISOString();
			if (variant === "project") setProjectResult({
				kind: "project",
				reference: "BO-HELD",
				createdAt: decoyTime,
				fullName,
				company,
				email,
				telephone,
				preferredContact,
				projectType,
				location,
				projectStatus,
				categories: [],
				details,
				quantity,
				budget,
				budgetUndetermined,
				timeline,
				propertyCount,
				additional,
				attachmentName: ""
			});
			else setContactResult({
				kind: "contact",
				reference: "BO-HELD",
				createdAt: decoyTime,
				fullName,
				email,
				telephone,
				preferredContact,
				message
			});
			return;
		}
		const createdAt = (/* @__PURE__ */ new Date()).toISOString();
		const reference = makeReference();
		if (variant === "project") {
			const names = categories.filter((item) => selected.includes(item.slug)).map((item) => item.name);
			const entry = {
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
				categories: names,
				details: details.trim(),
				quantity: quantity.trim(),
				budget: budget.trim(),
				budgetUndetermined,
				timeline: timeline.trim(),
				propertyCount,
				additional: additional.trim(),
				attachmentName: fileName
			};
			saveEnquiry(entry);
			setProjectResult(entry);
		} else {
			const entry = {
				kind: "contact",
				reference,
				createdAt,
				fullName: fullName.trim(),
				email: email.trim(),
				telephone: telephone.trim(),
				preferredContact,
				message: message.trim()
			};
			saveEnquiry(entry);
			setContactResult(entry);
		}
	}
	if (projectResult) {
		const summary = formatProjectSummary(projectResult);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confirmation, {
			reference: projectResult.reference,
			summary,
			copied,
			onCopy: () => void copyText(summary, "summary"),
			attachmentNoted: Boolean(projectResult.attachmentName)
		});
	}
	if (contactResult) {
		const summary = formatContactSummary(contactResult);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confirmation, {
			reference: contactResult.reference,
			summary,
			copied,
			onCopy: () => void copyText(summary, "summary"),
			attachmentNoted: false,
			contact: true
		});
	}
	const draft = whatsappDraft({
		fullName,
		projectType,
		location,
		categories: categories.filter((item) => selected.includes(item.slug)).map((item) => item.name),
		details: variant === "project" ? details : message,
		quantity,
		timeline
	});
	const waLink = hasContactValue(site.whatsapp) ? whatsappHref(site.whatsapp, draft) : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "border border-line bg-card p-5 md:p-8",
			onSubmit,
			noValidate: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Required fields are marked. Do not send card numbers or banking passwords."
				}),
				errors.form ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "mt-4 border border-line bg-sheet px-3 py-2 text-sm text-ink",
					children: errors.form
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "font-display text-xl uppercase tracking-tight",
						children: "Contact information"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "fullName",
								label: "Full name",
								required: true,
								error: errors.fullName,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "fullName",
									className: fieldClass,
									autoComplete: "name",
									value: fullName,
									"aria-invalid": Boolean(errors.fullName),
									onChange: (event) => setFullName(event.target.value)
								})
							}),
							variant === "project" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "company",
								label: "Company or organisation",
								error: errors.company,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "company",
									className: fieldClass,
									autoComplete: "organization",
									value: company,
									onChange: (event) => setCompany(event.target.value)
								})
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "email",
								label: "Business email",
								required: true,
								error: errors.email,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "email",
									type: "email",
									className: fieldClass,
									autoComplete: "email",
									value: email,
									"aria-invalid": Boolean(errors.email),
									onChange: (event) => setEmail(event.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "telephone",
								label: "Telephone number",
								required: true,
								error: errors.telephone,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "telephone",
									type: "tel",
									className: fieldClass,
									autoComplete: "tel",
									value: telephone,
									"aria-invalid": Boolean(errors.telephone),
									onChange: (event) => setTelephone(event.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: labelClass,
								children: "Preferred contact method"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col gap-2 sm:flex-row sm:gap-6",
								children: preferred.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "inline-flex min-h-11 items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "preferredContact",
										value: option.value,
										checked: preferredContact === option.value,
										onChange: () => setPreferredContact(option.value)
									}), option.label]
								}, option.value))
							})] })
						]
					})]
				}),
				variant === "project" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "font-display text-xl uppercase tracking-tight",
						children: "Project information"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "projectType",
								label: "Project type",
								required: true,
								error: errors.projectType,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "projectType",
									className: fieldClass,
									value: projectType,
									"aria-invalid": Boolean(errors.projectType),
									onChange: (event) => setProjectType(event.target.value),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select a project type"
									}), projectTypes.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: type,
										children: type
									}, type))]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "location",
								label: "Project location",
								required: true,
								error: errors.location,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "location",
									className: fieldClass,
									placeholder: "City or area",
									value: location,
									"aria-invalid": Boolean(errors.location),
									onChange: (event) => setLocation(event.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "projectStatus",
								label: "Project status",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "projectStatus",
									className: fieldClass,
									value: projectStatus,
									onChange: (event) => setProjectStatus(event.target.value),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Optional"
									}), projectStatuses.map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: status,
										children: status
									}, status))]
								})
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "font-display text-xl uppercase tracking-tight",
						children: "Product requirements"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: labelClass,
								children: "Product categories required"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-2 sm:grid-cols-2",
								children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex min-h-11 items-start gap-2 text-sm leading-snug",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										className: "mt-1",
										checked: selected.includes(category.slug),
										onChange: () => toggleCategory(category.slug)
									}), category.name]
								}, category.slug))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "details",
								label: "Product details and specifications",
								required: true,
								error: errors.details,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "details",
									className: `${fieldClass} min-h-36 py-3`,
									value: details,
									"aria-invalid": Boolean(errors.details),
									onChange: (event) => setDetails(event.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "quantity",
								label: "Estimated quantity or number of units",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "quantity",
									className: fieldClass,
									value: quantity,
									onChange: (event) => setQuantity(event.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
								id: "budget",
								label: "Indicative budget in Nigerian naira",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "budget",
									className: fieldClass,
									inputMode: "decimal",
									disabled: budgetUndetermined,
									value: budgetUndetermined ? "" : budget,
									onChange: (event) => setBudget(event.target.value)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mt-2 flex min-h-11 items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: budgetUndetermined,
										onChange: (event) => setBudgetUndetermined(event.target.checked)
									}), "Budget yet to be determined"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "timeline",
								label: "Required delivery date or project timeline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "timeline",
									className: fieldClass,
									value: timeline,
									onChange: (event) => setTimeline(event.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: labelClass,
								children: "One property or multiple properties?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col gap-2",
								children: propertyCounts.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "inline-flex min-h-11 items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "propertyCount",
										value: option,
										checked: propertyCount === option,
										onChange: () => setPropertyCount(option)
									}), option]
								}, option))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "additional",
								label: "Additional information",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "additional",
									className: `${fieldClass} min-h-24 py-3`,
									value: additional,
									onChange: (event) => setAdditional(event.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
								id: "attachment",
								label: "File attachment",
								error: errors.attachment || fileError,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "attachment",
									type: "file",
									className: "block w-full text-sm file:mr-3 file:min-h-11 file:border file:border-line file:bg-sheet file:px-3 file:text-sm file:text-ink",
									accept: ".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.jpg,.jpeg,.png,.webp",
									onChange: (event) => onFile(event.target.files?.[0] ?? null)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm text-muted",
									children: ["Optional. PDF, Word, Excel, CSV, text or image, up to 8 MB. A bill of quantities or specification sheet is useful. The file is checked here and is not uploaded, because a secure inbox is not connected yet.", fileName ? ` Noted: ${fileName}.` : ""]
								})]
							})
						]
					})]
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "message",
					label: "Message",
					required: true,
					error: errors.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "message",
						className: `${fieldClass} mt-4 min-h-36 py-3`,
						value: message,
						"aria-invalid": Boolean(errors.message),
						onChange: (event) => setMessage(event.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hp-field",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Website", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						tabIndex: -1,
						autoComplete: "off",
						value: honeypot,
						onChange: (event) => setHoneypot(event.target.value)
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-start gap-3 text-sm leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "consent",
							type: "checkbox",
							className: "mt-1",
							checked: consent,
							"aria-invalid": Boolean(errors.consent),
							onChange: (event) => setConsent(event.target.checked)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"I agree that BOapex Property Solutions may use this information to respond to my enquiry, as described in the ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "underline",
								children: "Privacy Policy"
							}),
							"."
						] })]
					}), errors.consent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						id: "consent-error",
						role: "alert",
						className: "mt-2 text-sm text-ink",
						children: errors.consent
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: `${btnPrimary} mt-8 w-full sm:w-auto`,
					children: variant === "project" ? "Submit project enquiry" : "Submit enquiry"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "border border-line bg-sheet p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg uppercase tracking-tight",
					children: "WhatsApp"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: "Optional. The formal form is enough on its own. If you prefer WhatsApp, use a draft based on what you have typed. You start the conversation yourself."
				}),
				waLink ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: `${btnSecondary} mt-5 w-full`,
					href: waLink,
					target: "_blank",
					rel: "noreferrer",
					children: "Continue on WhatsApp"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: "The business WhatsApp number has not been published yet, so this does not open a chat."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `${btnSecondary} mt-5 w-full`,
					onClick: () => void copyText(draft, "whatsapp"),
					children: copied === "whatsapp" ? "Draft copied" : "Copy WhatsApp draft"
				})] })
			]
		})]
	});
}
function Field({ id, label, required, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			htmlFor: id,
			className: labelClass,
			children: [label, required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-stone",
				children: " *"
			}) : null]
		}),
		children,
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			role: "alert",
			className: "mt-2 text-sm text-ink",
			children: error
		}) : null
	] });
}
function Confirmation({ reference, summary, copied, onCopy, attachmentNoted, contact = false }) {
	const subject = `Enquiry ${reference}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-line bg-card p-5 md:p-8",
		role: "status",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-widest text-stone",
				children: "Enquiry submitted"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl uppercase tracking-tight",
				children: "We have your reference."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-2xl tracking-wide",
				children: reference
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl leading-relaxed text-muted",
				children: contact ? "Your message has been submitted and saved on this device. This is not a quotation." : "Your project enquiry has been submitted and saved on this device. A quotation has not been prepared. BOapex still needs to review the requirements before proposing products, pricing or delivery."
			}),
			hasContactValue(site.email) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted",
				children: "You can also email the summary to the business inbox."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted",
				children: "An official business email has not been connected yet, so this enquiry was not emailed automatically. Copy the summary and keep the reference."
			}),
			attachmentNoted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: "The attachment name was noted. The file itself was not uploaded. Send the document when you contact BOapex."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-3 sm:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: btnPrimary,
						onClick: onCopy,
						children: copied === "summary" ? "Summary copied" : "Copy enquiry summary"
					}),
					hasContactValue(site.email) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: btnSecondary,
						href: mailHref(site.email, subject, summary),
						children: "Email this enquiry"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: btnSecondary,
						children: "Back to home"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "mt-8 overflow-x-auto border border-line bg-sheet p-4 text-sm leading-relaxed whitespace-pre-wrap text-ink",
				children: summary
			})
		]
	});
}
//#endregion
export { QuoteForm as t };
