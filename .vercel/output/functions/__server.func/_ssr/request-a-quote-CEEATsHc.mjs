import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteShell } from "./site-shell-A9BSGcu_.mjs";
import { t as QuoteForm } from "./quote-form-CG6pNTC0.mjs";
import { r as Route$3 } from "./router-DLf0u4dx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/request-a-quote-CEEATsHc.js
var import_jsx_runtime = require_jsx_runtime();
function QuotePage() {
	const { category } = Route$3.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-line bg-sheet",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-widest text-stone",
					children: "Request a quote"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl font-display text-4xl uppercase leading-tight tracking-tight md:text-5xl",
					children: "Tell us what your project needs."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted",
					children: "Share your equipment requirements and project details with BOapex Property Solutions. We will review your enquiry and follow up regarding sourcing options and a quotation."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {
			variant: "project",
			initialCategory: category
		})
	})] });
}
//#endregion
export { QuotePage as component };
