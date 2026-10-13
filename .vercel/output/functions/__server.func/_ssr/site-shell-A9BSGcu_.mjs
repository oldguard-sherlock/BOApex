import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-A9BSGcu_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	{
		slug: "cooling-and-climate-control",
		name: "Cooling and Climate Control",
		summary: "Air conditioners, fans and selected climate-control equipment.",
		explanation: "Residential units, hospitality rooms and common areas often need cooling specified room by room. BOapex can coordinate sourcing of climate-control equipment against the capacities, quantities and locations you describe. Suitability and availability are confirmed in the quotation, not assumed from this list.",
		examples: [
			"Split air conditioners",
			"Floor-standing air conditioners",
			"Fans",
			"Selected ventilation equipment"
		],
		quoteNotes: [
			"Room sizes or a capacity preference, if you have one",
			"Indoor and outdoor unit quantities",
			"Whether the property is a new fit-out or a replacement"
		],
		image: "/images/cooling.jpg",
		alt: "Modern apartment living room with a wall-mounted air conditioner"
	},
	{
		slug: "kitchen-and-home-appliances",
		name: "Kitchen and Home Appliances",
		summary: "Refrigerators, freezers, cookers, microwaves and other kitchen appliances.",
		explanation: "Kitchens are where a multi-category supply usually starts. We can coordinate refrigerators, cooking appliances and related items for apartments, hotel back-of-house support spaces or staff accommodation, based on the schedule you share.",
		examples: [
			"Refrigerators",
			"Freezers",
			"Cookers",
			"Microwaves",
			"Other selected kitchen appliances"
		],
		quoteNotes: [
			"Number of kitchens or units",
			"Preferred sizes or capacities where known",
			"Any specification sheet or equipment schedule"
		],
		image: "/images/kitchen.jpg",
		alt: "Contemporary apartment kitchen with refrigerator, cooker and microwave"
	},
	{
		slug: "laundry-equipment",
		name: "Laundry Equipment",
		summary: "Washing machines, dryers and selected laundry appliances.",
		explanation: "Serviced apartments, hotels and residential handovers often repeat the same laundry specification across many units. We coordinate those requirements as a single procurement conversation rather than unit by unit with separate sellers.",
		examples: [
			"Washing machines",
			"Dryers",
			"Selected laundry appliances"
		],
		quoteNotes: [
			"Capacity preference, if known",
			"In-unit machines or a shared laundry",
			"How many of each item"
		],
		image: "/images/laundry.jpg",
		alt: "Tidy apartment laundry nook with a washing machine and dryer"
	},
	{
		slug: "water-and-heating",
		name: "Water and Heating",
		summary: "Water heaters, water dispensers and selected water-related equipment.",
		explanation: "Hot water and drinking water equipment varies by building type. Tell us the property layout and the items you need, and we will treat them as part of the wider equipment quotation where that is useful.",
		examples: [
			"Water heaters",
			"Water dispensers",
			"Selected water-related equipment"
		],
		quoteNotes: [
			"Point-of-use or central equipment, if you already know",
			"Quantities by unit or floor",
			"Any site constraints that affect delivery"
		],
		image: "/images/water.jpg",
		alt: "Modern bathroom wall with a water heater and simple tap"
	},
	{
		slug: "entertainment-and-display",
		name: "Entertainment and Display",
		summary: "Televisions and selected display and entertainment equipment.",
		explanation: "Guest rooms, apartments and shared lounges often need a consistent display specification. We source against the sizes and quantities you request and confirm what is available before anything is procured.",
		examples: [
			"Televisions",
			"Selected display equipment",
			"Selected entertainment equipment"
		],
		quoteNotes: [
			"Screen size preference, if any",
			"Number of rooms or units",
			"Whether mounts or related accessories should be quoted"
		],
		image: "/images/entertainment.jpg",
		alt: "Modern living room with a television on a low timber console"
	},
	{
		slug: "power-and-energy",
		name: "Power and Energy",
		summary: "Generators, inverters and selected power-related equipment, subject to specification and availability.",
		explanation: "Backup and conditioning equipment has to match the property’s actual load and site conditions. We can include generators, inverters and related items in a quotation when you share the specification. We do not publish ratings or prices here, and availability is confirmed per enquiry.",
		examples: [
			"Generators",
			"Inverters",
			"Selected power-related equipment"
		],
		quoteNotes: [
			"The specification or load information you already have",
			"Indoor utility space or external siting, if relevant",
			"Whether this is a new install context or a replacement"
		],
		image: "/images/power.jpg",
		alt: "Clean utility room with an inverter and battery cabinet"
	},
	{
		slug: "lighting-and-electrical",
		name: "Lighting and Electrical",
		summary: "Lighting products, selected electrical equipment and related property essentials.",
		explanation: "Fit-outs often pair appliances with lighting and smaller electrical essentials. Where those items belong in the same project, we can coordinate them alongside the appliance categories rather than as a separate shopping exercise.",
		examples: [
			"Lighting products",
			"Selected electrical equipment",
			"Related property essentials"
		],
		quoteNotes: [
			"A schedule or room count",
			"Interior, exterior or both",
			"Any finish or specification notes"
		],
		image: "/images/lighting.jpg",
		alt: "Apartment interior with considered ceiling and table lighting"
	},
	{
		slug: "security-and-smart-property",
		name: "Security and Smart Property",
		summary: "Selected surveillance equipment, access-control products and smart-property devices.",
		explanation: "Some projects include access control, surveillance or a small set of smart-property devices with the rest of the fit-out. We can source selected items of this kind when they are part of your brief. This is not a security-design service, and technical commissioning is not included unless a quotation says so.",
		examples: [
			"Selected surveillance equipment",
			"Access-control products",
			"Selected smart-property devices"
		],
		quoteNotes: [
			"What the property needs to control or monitor",
			"Approximate quantities",
			"Any specification already prepared by your project team"
		],
		image: "/images/security.jpg",
		alt: "Residential entrance with a discreet access reader and small camera"
	}
];
function getCategory(slug) {
	return categories.find((category) => category.slug === slug);
}
var projectTypes = [
	"Residential development",
	"Serviced apartment or shortlet",
	"Hotel or hospitality",
	"Contractor or construction project",
	"Property management",
	"Office or commercial property",
	"School or institution",
	"Other"
];
var projectStatuses = [
	"Planning",
	"Under construction",
	"Fit-out or furnishing",
	"Operational property",
	"Renovation or replacement",
	"Other"
];
var propertyCounts = [
	"One property",
	"Multiple properties",
	"To be confirmed"
];
var homeSteps = [
	{
		title: "Share your requirements",
		body: "Tell us about your property, the products you need, quantities, specifications, location and timeline."
	},
	{
		title: "We assess and source",
		body: "We review your requirements and identify suitable sourcing options."
	},
	{
		title: "Receive your quotation",
		body: "We prepare a quotation based on the selected products, quantities, pricing, applicable charges and delivery arrangements."
	},
	{
		title: "Confirm and fund procurement",
		body: "Once the quotation and terms are accepted, payment is made according to the agreed arrangements before procurement begins, unless otherwise agreed."
	},
	{
		title: "Procurement and delivery",
		body: "We coordinate the agreed procurement and delivery process and keep you informed of relevant arrangements."
	}
];
var processStages = [
	{
		title: "Initial enquiry",
		body: "You share the project type, location, equipment requirements, quantities and expected timeline. A short description is enough to begin. A bill of quantities or equipment schedule is useful when you already have one."
	},
	{
		title: "Requirements review",
		body: "We review what you sent and ask for clarification where the specification, quantities or site details are not yet clear enough to source against."
	},
	{
		title: "Product sourcing",
		body: "Suitable sourcing options are identified from relevant suppliers or distributors, based on specifications, availability, budget and the information those suppliers provide. BOapex does not manufacture the products."
	},
	{
		title: "Quotation",
		body: "A quotation sets out the agreed scope, product details, quantities, pricing and relevant charges, which may include procurement margins and logistics. Website content is not a price list."
	},
	{
		title: "Acceptance and payment",
		body: "You review the quotation. If you accept it, payment is made according to the agreed terms before procurement begins, unless other terms are expressly agreed. BOapex does not offer loans or buy-now-pay-later as a standard service."
	},
	{
		title: "Procurement coordination",
		body: "Procurement proceeds according to the accepted quotation. We coordinate supplier communication for the agreed items. We do not claim to own every supplier relationship."
	},
	{
		title: "Delivery and handover",
		body: "Delivery is coordinated to the agreed location and schedule. You receive the supplied goods and any handover documentation that was included in the quotation. Timing depends on availability, supplier lead times, payment confirmation and delivery arrangements."
	}
];
var benefits = [
	{
		title: "Multi-category sourcing",
		body: "Several equipment categories can be handled in one conversation, instead of a separate supplier for each."
	},
	{
		title: "Project-focused quotations",
		body: "Pricing is prepared for your quantities, location and scope. It is not a public shelf price."
	},
	{
		title: "Requirements-led product selection",
		body: "We start from what the property needs, then look for suitable options. The brief leads, not a catalogue."
	},
	{
		title: "Coordinated procurement",
		body: "After you accept a quotation, supplier follow-up for the agreed items sits with one point of contact."
	},
	{
		title: "Clear quotation and payment terms",
		body: "What is included, how payment works and when procurement starts are set out in the quotation."
	},
	{
		title: "Delivery coordination",
		body: "Delivery is arranged against the agreed site, scope and supplier plan. Dates are confirmed per order."
	},
	{
		title: "Support for different property types",
		body: "Developments, hospitality, managed homes, contractor fit-outs and institutional projects can all start with the same enquiry."
	}
];
var services = [
	{
		title: "Equipment sourcing",
		status: "Core service",
		meaning: "We help identify suitable products and sourcing options from relevant suppliers or distributors, using your specifications, quantities, budget and timeline.",
		who: "Developers, operators, contractors and property managers who would otherwise have to approach several sellers for one project.",
		provide: [
			"Project type and location",
			"Product categories and any specifications you already have",
			"Quantities, a budget range if known, and the timeline"
		],
		fit: "This is the work that follows an enquiry and comes before a quotation. If something is unclear, we ask before proposing options."
	},
	{
		title: "Appliance and equipment supply",
		status: "Core service",
		meaning: "We coordinate the supply of the appliances and equipment you accept on a quotation. Supply means procurement against that agreement. It does not mean we manufacture the goods or keep them in a public shop.",
		who: "Teams that need the selected items procured and brought to the project, not only a list of possibilities.",
		provide: [
			"The accepted product selection",
			"Final quantities",
			"Delivery location and any receiving constraints"
		],
		fit: "Supply coordination starts after the quotation is accepted and payment terms are met, unless different terms are agreed in writing."
	},
	{
		title: "Multi-category procurement coordination",
		status: "Core service",
		meaning: "Requirements that cross cooling, kitchen, laundry, water, entertainment, power, lighting and security can be consolidated with one point of contact.",
		who: "Anyone furnishing or equipping a whole unit, floor or building rather than buying a single appliance.",
		provide: ["A description or schedule that covers each category you need", "Which lines are fixed and which are still approximate"],
		fit: "One enquiry and one quotation can cover more than one category. You do not need a separate process for each."
	},
	{
		title: "Project-based quotations",
		status: "Core service",
		meaning: "We prepare a written quotation for the agreed scope: products, quantities, pricing, applicable service or procurement margins, logistics and other relevant costs.",
		who: "Customers who need a document they can review, question and accept before funds are committed.",
		provide: [
			"Enough detail to price the scope",
			"Answers to clarification questions",
			"Any document such as a bill of quantities, if you have one"
		],
		fit: "The quotation is the commercial basis for the job. Nothing on this website is an offer to sell at a stated price."
	},
	{
		title: "Supplier and procurement coordination",
		status: "Core service",
		meaning: "After acceptance, we coordinate communication with the relevant suppliers and follow the procurement through against the accepted quotation.",
		who: "Project teams that want one party chasing the agreed items instead of managing every seller directly.",
		provide: [
			"Written acceptance of the quotation",
			"Payment according to the agreed terms",
			"A contact for delivery or site questions"
		],
		fit: "We coordinate procurement. We do not claim an exclusive relationship with every manufacturer or distributor, and we do not start procurement before the agreed payment unless that is expressly agreed."
	},
	{
		title: "Delivery coordination",
		status: "Core service",
		meaning: "We coordinate delivery arrangements for the agreed goods, location and supplier plan, and keep you informed of the arrangements that matter.",
		who: "Projects with a site address, a handover window or a replacement date to work around.",
		provide: [
			"Delivery area or address",
			"Access limits, receiving hours and an on-site contact",
			"Any date you are working towards"
		],
		fit: "Delivery scope, cost and timing are confirmed in the quotation. We do not promise nationwide delivery of every product, or a fixed number of days, from the website."
	}
];
var notStandard = [
	{
		title: "Installation, maintenance and commissioning",
		body: "These are not standard services. If a project needs them, they have to be discussed and, if agreed, written into the quotation. They may depend on a third party."
	},
	{
		title: "Finance and deferred payment",
		body: "BOapex does not routinely finance purchases, offer loans or run a buy-now-pay-later service. Payment follows the quotation. Different terms only apply when they are expressly agreed."
	},
	{
		title: "Stock on the shelf",
		body: "The categories on this website are examples of what we may source. They are not a stock list, and a product is not reserved until a quotation says so."
	}
];
var industries = [
	{
		title: "Property developers",
		image: "/images/hero.jpg",
		alt: "Contemporary mid-rise residential building in warm afternoon light",
		needs: "Residential developments, apartment blocks and estate handovers often need the same appliances repeated across many units, timed to practical completion rather than to a retail shopping trip.",
		help: "BOapex can take a unit schedule or a simple quantity list, source options against it, and return one project quotation covering the categories you include.",
		categories: [
			"Kitchen and home appliances",
			"Cooling and climate control",
			"Laundry equipment",
			"Lighting and electrical"
		],
		quoteInfo: [
			"Number of units and the unit types",
			"Which equipment each unit should receive",
			"City or area, and the handover window if you have one"
		]
	},
	{
		title: "Serviced apartments and shortlets",
		image: "/images/entertainment.jpg",
		alt: "Furnished living room of the kind used in serviced apartments",
		needs: "Operators furnishing one apartment or a set of units usually need a consistent kit: cooling, kitchen, laundry, entertainment and sometimes water heating, delivered as a set.",
		help: "We coordinate those categories together so the brief does not have to be split across unrelated sellers. Replacement of a failed item in an operating unit can be quoted the same way.",
		categories: [
			"Kitchen and home appliances",
			"Laundry equipment",
			"Entertainment and display",
			"Cooling and climate control"
		],
		quoteInfo: [
			"How many apartments, and whether they match",
			"The equipment list per apartment",
			"Whether the need is a first furnishing or a replacement"
		]
	},
	{
		title: "Hotels and hospitality",
		image: "/images/hotel.jpg",
		alt: "Calm hotel lobby in stone, linen and warm daylight",
		needs: "New hotels, renovations and operating properties need guest-room equipment, and sometimes back-of-house appliances, specified consistently and supplied to a programme.",
		help: "We coordinate sourcing and a quotation for the equipment scope you define. We do not present ourselves as an interior designer or a facilities contractor.",
		categories: [
			"Cooling and climate control",
			"Entertainment and display",
			"Laundry equipment",
			"Kitchen and home appliances"
		],
		quoteInfo: [
			"Room count and any non-room areas in scope",
			"New property, upgrade or replacement",
			"Specification notes from your project team, if they exist"
		]
	},
	{
		title: "Contractors and project teams",
		image: "/images/lighting.jpg",
		alt: "Interior of a property fit-out with architectural lighting",
		needs: "Contractors are often asked to supply specified appliances and equipment as part of completion, sometimes against a bill of quantities prepared by someone else.",
		help: "Send the specified items, quantities and site, and we will review what can be sourced and quoted. Where a line cannot be matched, we say so rather than quietly substituting.",
		categories: [
			"Kitchen and home appliances",
			"Cooling and climate control",
			"Lighting and electrical",
			"Water and heating"
		],
		quoteInfo: [
			"The equipment schedule or bill of quantities",
			"Site location and any access limits",
			"The date the site expects delivery"
		]
	},
	{
		title: "Property managers",
		image: "/images/laundry.jpg",
		alt: "Laundry appliances in a managed apartment",
		needs: "Managed homes and buildings need replacements, small batches of appliances and occasional re-equipping when a unit turns over.",
		help: "A single enquiry can cover one replacement or a list across several properties. We confirm availability per quotation rather than promising parts on hand.",
		categories: [
			"Kitchen and home appliances",
			"Laundry equipment",
			"Cooling and climate control",
			"Water and heating"
		],
		quoteInfo: [
			"The property or portfolio location",
			"What failed or what must be added",
			"Whether access is occupied or vacant"
		]
	},
	{
		title: "Corporate and institutional clients",
		image: "/images/cooling.jpg",
		alt: "Calm interior with a wall-mounted air conditioner",
		needs: "Offices, schools, staff accommodation and similar organisations sometimes need equipment procured as a project, with a paper trail, rather than bought ad hoc.",
		help: "We treat these as project enquiries: requirements in, quotation out, procurement only after acceptance and the agreed payment. Eligibility of a particular item is confirmed when we quote.",
		categories: [
			"Cooling and climate control",
			"Kitchen and home appliances",
			"Entertainment and display",
			"Power and energy"
		],
		quoteInfo: [
			"The organisation and the site",
			"Who will receive and approve the quotation",
			"The equipment list and required timing"
		]
	}
];
var principles = [
	{
		title: "Clear communication",
		body: "We ask when a requirement is incomplete, and we keep the commercial position in the quotation rather than in vague assurances."
	},
	{
		title: "Practical product sourcing",
		body: "Options are looked at against the specification, quantity, budget and what suppliers can actually offer."
	},
	{
		title: "Transparent quotations",
		body: "Products, quantities, pricing and relevant charges are written down for review before you commit."
	},
	{
		title: "Organised procurement",
		body: "Once terms are accepted, procurement and delivery coordination follow that document."
	},
	{
		title: "Customer-focused coordination",
		body: "The point of the service is to reduce the number of suppliers you have to manage for a property fit-out."
	},
	{
		title: "Professional business relationships",
		body: "We work with developers, operators, contractors and managers on commercial terms confirmed per project."
	}
];
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/solutions",
		label: "Solutions"
	},
	{
		to: "/products",
		label: "Products"
	},
	{
		to: "/industries",
		label: "Industries"
	},
	{
		to: "/how-it-works",
		label: "How it works"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var PHOTO_NOTE = "Photographs show the kinds of properties and equipment contexts we support. They are not records of completed BOapex projects.";
var AVAILABILITY_NOTE = "Product specifications, availability and pricing are confirmed according to each project enquiry and quotation.";
var PROCESS_NOTE = "Availability, lead times, delivery arrangements and payment terms are confirmed in the relevant quotation or agreement.";
/**
* Verified business details. Leave a field empty until BOapex confirms it.
* Do not invent an email, telephone, WhatsApp number or street address.
*/
var site = {
	name: "BOapex Property Solutions",
	parent: "BOapex LTD",
	email: "",
	/** International digits only, no plus sign. Example shape: 2348012345678 */
	phone: "",
	/** Same format as phone. Used only for a customer-initiated WhatsApp link. */
	whatsapp: "",
	address: "",
	hours: ""
};
function hasContactValue(value) {
	return value.trim().length > 0;
}
function telHref(digits) {
	const clean = digits.replace(/[^\d+]/g, "");
	return clean ? `tel:+${clean.replace(/^\+/, "")}` : "";
}
function mailHref(email, subject, body) {
	return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
function whatsappHref(digits, message) {
	const clean = digits.replace(/\D/g, "");
	if (!clean) return "";
	return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "block max-w-52 shrink-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block font-display text-xl leading-none tracking-tight text-ink",
			children: "BOapex"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1 block text-xs uppercase tracking-widest text-faint",
			children: "Logo placeholder"
		})]
	});
}
function SiteFooter() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-sheet",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm leading-relaxed text-muted",
						children: "BOapex Property Solutions, part of BOapex LTD, coordinates sourcing and supply of appliances and essential equipment for property projects."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-faint",
						children: "The wordmark above is a placeholder. Send the original BOapex LTD logo file to replace it without changing its proportions or colours."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium uppercase tracking-widest text-stone",
					children: "Navigate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2",
					children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-sm text-ink hover:text-muted",
						children: item.label
					}) }, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/request-a-quote",
						className: "text-sm text-ink hover:text-muted",
						children: "Request a quote"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium uppercase tracking-widest text-stone",
					children: "Categories"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products/$slug",
						params: { slug: category.slug },
						className: "text-sm text-ink hover:text-muted",
						children: category.name
					}) }, category.slug))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-medium uppercase tracking-widest text-stone",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Email:",
								" ",
								hasContactValue(site.email) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "underline",
									href: `mailto:${site.email}`,
									children: site.email
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "Pending official address"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Telephone:",
								" ",
								hasContactValue(site.phone) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "underline",
									href: telHref(site.phone),
									children: site.phone
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "Pending"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"WhatsApp:",
								" ",
								hasContactValue(site.whatsapp) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.whatsapp }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "Pending"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Office:",
								" ",
								hasContactValue(site.address) ? site.address : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "Pending"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Hours: ", hasContactValue(site.hours) ? site.hours : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "Pending"
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted",
						children: "Lagos is the focus. Abuja, Ibadan, Abeokuta and other locations are considered according to the project and delivery feasibility."
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-line",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					year,
					" BOapex LTD. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "hover:text-ink",
						children: "Privacy Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "hover:text-ink",
						children: "Terms and Conditions"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-7xl px-5 pb-8 text-xs leading-relaxed text-faint md:px-8",
				children: PHOTO_NOTE
			})]
		})]
	});
}
var btn = "inline-flex min-h-11 items-center justify-center gap-2 px-5 text-center text-sm font-medium uppercase tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";
var btnPrimary = `${btn} bg-ink text-paper hover:bg-charcoal`;
var btnSecondary = `${btn} border border-ink bg-transparent text-ink hover:bg-sheet`;
var btnInverse = `${btn} bg-paper text-ink hover:bg-sheet`;
var btnInverseSecondary = `${btn} border border-paper/40 bg-transparent text-paper hover:bg-paper/10`;
var fieldClass = "w-full min-h-11 border border-line bg-card px-3 text-base text-ink placeholder:text-faint";
var labelClass = "mb-2 block text-sm font-medium text-ink";
function SiteHeader() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const toggleRef = (0, import_react.useRef)(null);
	const panelRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		panelRef.current?.querySelector("a")?.focus();
		const onKey = (event) => {
			if (event.key === "Escape") {
				setOpen(false);
				toggleRef.current?.focus();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = previous;
			window.removeEventListener("keydown", onKey);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-5 xl:flex",
					"aria-label": "Primary",
					children: nav.map((item) => {
						const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							"aria-current": active ? "page" : void 0,
							className: `text-sm uppercase tracking-wide ${active ? "text-ink" : "text-muted hover:text-ink"}`,
							children: item.label
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/request-a-quote",
						className: `${btnPrimary} px-3 sm:px-5`,
						children: "Request a quote"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						ref: toggleRef,
						type: "button",
						className: "inline-flex size-11 items-center justify-center border border-line xl:hidden",
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						onClick: () => setOpen((value) => !value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: open ? "Close menu" : "Open menu"
						}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-5",
							"aria-hidden": "true"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							className: "size-5",
							"aria-hidden": "true"
						})]
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: panelRef,
			id: "mobile-nav",
			className: "fixed inset-0 z-30 overflow-y-auto bg-paper px-5 pt-24 pb-12 xl:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Mobile",
				className: "mx-auto flex max-w-lg flex-col gap-1",
				children: [nav.map((item) => {
					const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						"aria-current": active ? "page" : void 0,
						className: "border-b border-line py-4 text-lg uppercase tracking-wide text-ink",
						children: item.label
					}, item.to);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/request-a-quote",
					className: `${btnPrimary} mt-6`,
					children: "Request a quote"
				})]
			})
		}) : null]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { propertyCounts as C, whatsappHref as D, telHref as E, projectTypes as S, site as T, mailHref as _, benefits as a, processStages as b, btnPrimary as c, fieldClass as d, getCategory as f, labelClass as g, industries as h, SiteShell as i, btnSecondary as l, homeSteps as m, PHOTO_NOTE as n, btnInverse as o, hasContactValue as p, PROCESS_NOTE as r, btnInverseSecondary as s, AVAILABILITY_NOTE as t, categories as u, notStandard as v, services as w, projectStatuses as x, principles as y };
