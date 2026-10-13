import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as btnPrimary, i as SiteShell, l as btnSecondary, t as AVAILABILITY_NOTE, u as categories } from "./site-shell-A9BSGcu_.mjs";
import { n as Route } from "./router-DLf0u4dx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products_._slug-BXves1oj.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryPage() {
	const category = Route.useLoaderData();
	const others = categories.filter((item) => item.slug !== category.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-8 px-5 py-16 md:px-8 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-widest text-stone",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							className: "hover:text-ink",
							children: "Products"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl uppercase leading-tight tracking-tight md:text-5xl",
						children: category.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg leading-relaxed text-muted",
						children: category.explanation
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: category.image,
					alt: category.alt,
					width: 1100,
					height: 825,
					className: "aspect-[4/3] w-full object-cover"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl uppercase tracking-tight",
					children: "Examples of what may be sourced"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Illustrative only. No model numbers, prices, stock figures or warranties are stated here."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 divide-y divide-line border-y border-line",
					children: category.examples.map((example) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "py-3 text-ink",
						children: example
					}, example))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl uppercase tracking-tight",
					children: "Useful in a quotation request"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 list-disc space-y-2 pl-5 text-muted",
					children: category.quoteNotes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: note }, note))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm leading-relaxed text-muted",
					children: AVAILABILITY_NOTE
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/request-a-quote",
						search: { category: category.slug },
						className: btnPrimary,
						children: "Request a quote"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						className: btnSecondary,
						children: "All categories"
					})]
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-sheet",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-14 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium uppercase tracking-widest text-stone",
					children: "Other categories"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: others.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products/$slug",
						params: { slug: item.slug },
						className: "text-ink underline",
						children: item.name
					}) }, item.slug))
				})]
			})
		})
	] });
}
//#endregion
export { CategoryPage as component };
