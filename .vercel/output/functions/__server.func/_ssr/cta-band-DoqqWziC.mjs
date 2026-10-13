import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as btnInverse, s as btnInverseSecondary } from "./site-shell-A9BSGcu_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cta-band-DoqqWziC.js
var import_jsx_runtime = require_jsx_runtime();
function CtaBand({ title = "Planning a property project?", body = "Share your equipment requirements with BOapex Property Solutions. We will review your enquiry and determine the appropriate next steps towards a tailored quotation.", primaryLabel = "Request a project quote", primaryTo = "/request-a-quote", secondaryLabel = "Contact BOapex", secondaryTo = "/contact" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 md:px-8 md:py-20 lg:flex-row lg:items-end lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl uppercase leading-tight tracking-tight text-paper md:text-4xl",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg leading-relaxed text-paper/80",
					children: body
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: primaryTo,
					className: btnInverse,
					children: primaryLabel
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: secondaryTo,
					className: btnInverseSecondary,
					children: secondaryLabel
				})]
			})]
		})
	});
}
//#endregion
export { CtaBand as t };
