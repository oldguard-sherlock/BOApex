import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteShell, y as principles } from "./site-shell-A9BSGcu_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-B7oQUbeC.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-widest text-stone",
						children: "About"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl uppercase leading-tight tracking-tight md:text-5xl",
						children: "A more coordinated approach to property equipment supply."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 text-lg leading-relaxed text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "BOapex Property Solutions was established to help make property-related equipment sourcing and supply more organised." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The company focuses on coordinating customer requirements, sourcing suitable products, preparing quotations and arranging procurement and delivery." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "It operates under BOapex LTD, with attention on projects in Lagos. Enquiries for Abuja, Ibadan, Abeokuta and other locations are considered according to the project and whether delivery is feasible." })
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero.jpg",
					alt: "Residential building of the kind of project BOapex can help equip",
					width: 1400,
					height: 787,
					className: "aspect-[3/2] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-2 text-xs text-faint",
					children: "Illustrative photograph. Not a completed BOapex project."
				})] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-16 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl uppercase tracking-tight",
				children: "How we try to work"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: principles.map((principle) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-t border-line pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg uppercase tracking-tight",
						children: principle.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: principle.body
					})]
				}, principle.title))
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-sheet",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-5 py-16 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl uppercase tracking-tight",
						children: "Official background and registration"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted",
						children: "This section is reserved for verified information. It is intentionally incomplete. Registration numbers, addresses and biographies are not published until BOapex confirms them."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-8 divide-y divide-line border-y border-line",
						children: [
							["Trading name", "BOapex Property Solutions"],
							["Parent company", "BOapex LTD"],
							["Registration number", "To be confirmed"],
							["Registered address", "To be confirmed"],
							["Leadership", "To be confirmed"],
							["Founding narrative", "To be confirmed. Not invented here."]
						].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1 py-4 sm:grid-cols-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm font-medium text-ink",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-sm text-muted sm:col-span-2",
								children: value
							})]
						}, label))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl uppercase tracking-tight md:text-4xl",
					children: "Let’s discuss your next project."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "mt-8 inline-flex min-h-11 items-center bg-paper px-5 text-sm font-medium uppercase tracking-wide text-ink",
					children: "Contact BOapex"
				})]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
