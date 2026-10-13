import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as telHref, T as site, c as btnPrimary, i as SiteShell, p as hasContactValue } from "./site-shell-A9BSGcu_.mjs";
import { t as QuoteForm } from "./quote-form-CG6pNTC0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-N7oCALYd.js
var import_jsx_runtime = require_jsx_runtime();
var rows = [
	{
		label: "Business email",
		value: site.email,
		href: site.email ? `mailto:${site.email}` : ""
	},
	{
		label: "Telephone",
		value: site.phone,
		href: telHref(site.phone)
	},
	{
		label: "WhatsApp",
		value: site.whatsapp,
		href: ""
	},
	{
		label: "Office address",
		value: site.address,
		href: ""
	},
	{
		label: "Business hours",
		value: site.hours,
		href: ""
	}
];
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-line bg-sheet",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-widest text-stone",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl font-display text-4xl uppercase leading-tight tracking-tight md:text-5xl",
					children: "Contact BOapex."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted",
					children: "For a detailed equipment list, use the project quotation form. For a shorter note, use the message form on this page. No map is shown, because a verified office location has not been supplied."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "lg:col-span-4",
			id: "locations",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl uppercase tracking-tight",
					children: "Details"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-6 divide-y divide-line border-y border-line",
					children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs font-medium uppercase tracking-widest text-stone",
							children: row.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-ink",
							children: hasContactValue(row.value) ? row.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "underline",
								href: row.href,
								children: row.value
							}) : row.value : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "Pending confirmation"
							})
						})]
					}, row.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-10 font-display text-2xl uppercase tracking-tight",
					children: "Service locations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-muted",
					children: "Lagos is the primary market. Enquiries for Abuja, Ibadan, Abeokuta and other locations are considered according to project requirements and delivery feasibility. Nationwide delivery is not promised for every product."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/request-a-quote",
					className: `${btnPrimary} mt-8`,
					children: "Request a project quote"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "lg:col-span-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-6 font-display text-2xl uppercase tracking-tight",
				children: "Send a short message"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, { variant: "contact" })]
		})]
	})] });
}
//#endregion
export { ContactPage as component };
