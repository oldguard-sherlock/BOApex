import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as btnPrimary, i as SiteShell, t as AVAILABILITY_NOTE, u as categories } from "./site-shell-A9BSGcu_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-BQyBIsab.js
var import_jsx_runtime = require_jsx_runtime();
function ProductsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-line bg-sheet",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-widest text-stone",
						children: "Products"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl font-display text-4xl uppercase leading-tight tracking-tight md:text-5xl",
						children: "Categories we can source for a project."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted",
						children: "This page shows the range. It is not an inventory, a live stock feed or an online checkout. Sample items are examples only, with no prices, model numbers or warranty claims."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted",
						children: "BOapex sources products according to customer specifications and project requirements. Product availability, specifications, pricing, warranties and delivery lead times are confirmed during the quotation process."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 flex flex-wrap gap-2",
						children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${category.slug}`,
							className: "inline-flex min-h-11 items-center border border-line bg-card px-3 text-sm text-ink",
							children: category.name
						}) }, category.slug))
					})
				]
			})
		}),
		categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: category.slug,
			className: "border-b border-line scroll-mt-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 md:px-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: category.image,
					alt: category.alt,
					width: 1100,
					height: 825,
					loading: "lazy",
					className: "aspect-[4/3] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl uppercase tracking-tight",
						children: category.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-muted",
						children: category.explanation
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 text-sm font-medium uppercase tracking-wide",
						children: "Examples, not stock"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 list-disc space-y-1 pl-5 text-muted",
						children: category.examples.map((example) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: example }, example))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/request-a-quote",
							search: { category: category.slug },
							className: btnPrimary,
							children: "Request a quote"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products/$slug",
							params: { slug: category.slug },
							className: "inline-flex min-h-11 items-center text-sm font-medium uppercase tracking-wide underline",
							children: "Category details"
						})]
					})
				] })]
			})
		}, category.slug)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-5 py-12 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: AVAILABILITY_NOTE
			})
		})
	] });
}
//#endregion
export { ProductsPage as component };
