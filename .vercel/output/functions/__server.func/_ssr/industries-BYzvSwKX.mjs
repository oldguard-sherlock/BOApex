import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as btnPrimary, h as industries, i as SiteShell, n as PHOTO_NOTE } from "./site-shell-A9BSGcu_.mjs";
import { t as CtaBand } from "./cta-band-DoqqWziC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-BYzvSwKX.js
var import_jsx_runtime = require_jsx_runtime();
function IndustriesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-line bg-sheet",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-widest text-stone",
						children: "Industries"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl font-display text-4xl uppercase leading-tight tracking-tight md:text-5xl",
						children: "Supporting the people who build, equip and manage properties."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted",
						children: "The notes below describe typical sourcing needs. They are not claims that BOapex has already completed work for a named client."
					})
				]
			})
		}),
		industries.map((industry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
			className: "border-b border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 md:px-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: industry.image,
					alt: industry.alt,
					width: 1400,
					height: 825,
					loading: "lazy",
					className: `aspect-[4/3] w-full object-cover ${index % 2 === 1 ? "lg:order-2" : ""}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl uppercase tracking-tight",
						children: industry.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 text-sm font-medium uppercase tracking-wide",
						children: "Typical sourcing needs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 leading-relaxed text-muted",
						children: industry.needs
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 text-sm font-medium uppercase tracking-wide",
						children: "How BOapex may help"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 leading-relaxed text-muted",
						children: industry.help
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 text-sm font-medium uppercase tracking-wide",
						children: "Relevant categories"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 list-disc space-y-1 pl-5 text-muted",
						children: industry.categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: category }, category))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 text-sm font-medium uppercase tracking-wide",
						children: "Helpful in a quotation request"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 list-disc space-y-1 pl-5 text-muted",
						children: industry.quoteInfo.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/request-a-quote",
						className: `${btnPrimary} mt-8`,
						children: "Discuss your requirements"
					})
				] })]
			})
		}, industry.title)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mx-auto max-w-7xl px-5 py-8 text-xs text-faint md:px-8",
			children: PHOTO_NOTE
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Discuss your project.",
			primaryLabel: "Request a project quote"
		})
	] });
}
//#endregion
export { IndustriesPage as component };
