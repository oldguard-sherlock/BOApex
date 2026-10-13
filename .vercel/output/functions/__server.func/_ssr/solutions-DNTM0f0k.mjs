import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as btnPrimary, i as SiteShell, v as notStandard, w as services } from "./site-shell-A9BSGcu_.mjs";
import { t as CtaBand } from "./cta-band-DoqqWziC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions-DNTM0f0k.js
var import_jsx_runtime = require_jsx_runtime();
function SolutionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-widest text-stone",
					children: "Solutions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl uppercase leading-tight tracking-tight md:text-5xl",
					children: "Property equipment sourcing and supply, simplified."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg leading-relaxed text-muted",
					children: "BOapex Property Solutions supports property-related procurement by coordinating the sourcing and supply of selected appliances and essential equipment around each customer’s requirements."
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-5 py-16 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-12",
				children: services.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-6 border-t border-line pt-10 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-sm text-stone",
								children: ["0", index + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-2xl uppercase tracking-tight",
								children: service.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs font-medium uppercase tracking-widest text-faint",
								children: service.status
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 text-muted lg:col-span-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "leading-relaxed text-ink",
								children: service.meaning
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-medium uppercase tracking-wide text-ink",
								children: "Who it is for"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 leading-relaxed",
								children: service.who
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-medium uppercase tracking-wide text-ink",
								children: "What to provide"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 list-disc space-y-1 pl-5",
								children: service.provide.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-medium uppercase tracking-wide text-ink",
								children: "Where it sits in the process"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 leading-relaxed",
								children: service.fit
							})] })
						]
					})]
				}, service.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-sheet",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl uppercase tracking-tight",
						children: "Not included unless expressly agreed"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6 md:grid-cols-3",
						children: notStandard.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "border border-line bg-card p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg uppercase tracking-tight",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: item.body
							})]
						}, item.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/request-a-quote",
						className: `${btnPrimary} mt-10`,
						children: "Request a quote"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Tell us what the project needs.",
			primaryLabel: "Request a project quote",
			secondaryLabel: "See how it works",
			secondaryTo: "/how-it-works"
		})
	] });
}
//#endregion
export { SolutionsPage as component };
