import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as processStages, c as btnPrimary, i as SiteShell, l as btnSecondary, r as PROCESS_NOTE } from "./site-shell-A9BSGcu_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/how-it-works-Dd8Htr-P.js
var import_jsx_runtime = require_jsx_runtime();
function HowPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-line bg-sheet",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-widest text-stone",
					children: "How it works"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl font-display text-4xl uppercase leading-tight tracking-tight md:text-5xl",
					children: "A clearer way to source property equipment."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted",
					children: "BOapex works on a customer-funded procurement model. You describe the requirement, we quote, and procurement starts after acceptance and payment on the agreed terms, unless different terms are expressly agreed."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-5 py-16 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: processStages.map((stage, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid grid-cols-[2.75rem_minmax(0,1fr)] gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 place-items-center bg-ink font-display text-sm text-paper",
						children: index + 1
					}), index < processStages.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 w-px flex-1 bg-line" }) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: index < processStages.length - 1 ? "pb-10" : "",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl uppercase tracking-tight",
						children: stage.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 leading-relaxed text-muted",
						children: stage.body
					})]
				})]
			}, stage.title)) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "mt-12 border border-line bg-sheet p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg uppercase tracking-tight",
					children: "Timing is confirmed per project"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: ["Actual timing depends on product availability, supplier lead times, payment confirmation, delivery arrangements and other relevant factors. This website does not promise a fixed turnaround. ", PROCESS_NOTE]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/request-a-quote",
					className: btnPrimary,
					children: "Start your enquiry"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/solutions",
					className: btnSecondary,
					children: "Explore our solutions"
				})]
			})
		]
	})] });
}
//#endregion
export { HowPage as component };
