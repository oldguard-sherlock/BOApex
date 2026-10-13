import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  Building2,
  ClipboardList,
  FileSearch,
  Layers,
  Package,
  Truck,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { btnInverse, btnPrimary, btnSecondary } from "@/components/ui";
import {
  AVAILABILITY_NOTE,
  benefits,
  categories,
  homeSteps,
  industries,
  PHOTO_NOTE,
  PROCESS_NOTE,
} from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "Property equipment sourcing in Lagos | BOapex Property Solutions",
      "BOapex Property Solutions coordinates sourcing and supply of appliances and essential equipment for residential developments, serviced apartments, hotels and commercial projects.",
    ),
  component: Home,
});

const solutionCards = [
  {
    icon: ClipboardList,
    title: "Project equipment sourcing",
    body: "We help identify suitable products and source options based on your specifications, quantities, budget and project requirements.",
  },
  {
    icon: Package,
    title: "Appliance and equipment supply",
    body: "We coordinate the supply of selected appliances and essential equipment across multiple product categories.",
  },
  {
    icon: Boxes,
    title: "Multi-category procurement",
    body: "We help customers consolidate requirements across different equipment categories through one coordinated point of contact.",
  },
  {
    icon: Truck,
    title: "Delivery coordination",
    body: "We coordinate delivery arrangements according to the agreed project scope, location, supplier arrangements and quotation terms.",
  },
];

const benefitIcons = [Layers, FileSearch, Package, Boxes, ClipboardList, Truck, Building2];

function Home() {
  return (
    <SiteShell>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-stone">BOapex Property Solutions</p>
            <h1 className="mt-4 font-display text-4xl uppercase leading-none tracking-tight text-ink sm:text-5xl lg:text-6xl">
              <span className="block">One supplier.</span>
              <span className="block">Complete setup.</span>
            </h1>
            <p className="mt-6 max-w-xl font-display text-xl leading-snug text-charcoal sm:text-2xl">
              Outfitting a property project? We make procurement simpler.
            </p>
            <div className="mt-6 max-w-xl space-y-4 leading-relaxed text-muted">
              <p>
                BOapex Property Solutions coordinates the sourcing and supply of appliances and essential
                equipment for residential developments, serviced apartments, hotels, commercial properties
                and institutional projects.
              </p>
              <p>
                We help you bring multiple equipment requirements together through one coordinated point of
                contact, from sourcing and quotation to procurement and delivery arrangements.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/request-a-quote" className={btnPrimary}>
                Request a project quote
              </Link>
              <Link to="/solutions" className={btnSecondary}>
                Explore our solutions
              </Link>
            </div>
          </div>
          <figure>
            <img
              src="/images/hero.jpg"
              alt="Contemporary residential apartment building in warm late-afternoon light"
              width={1400}
              height={787}
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
            />
            <figcaption className="mt-2 text-xs text-faint">{PHOTO_NOTE}</figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-sheet">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:items-end">
          <SectionHeading title="Property projects require more than just products." />
          <div>
            <div className="space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Equipping a property can involve sourcing products across multiple categories, comparing
                specifications, coordinating suppliers and organising deliveries.
              </p>
              <p>
                BOapex Property Solutions helps simplify that process by coordinating equipment sourcing
                and supply around your project requirements.
              </p>
              <p>
                Whether you are furnishing apartments, preparing a hospitality property or sourcing
                equipment for a commercial project, we help bring your requirements together in a more
                organised way.
              </p>
            </div>
            <Link to="/request-a-quote" className={`${btnPrimary} mt-8`}>
              Tell us about your project
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <SectionHeading title="Supply solutions built around your project." />
          <div className="mt-10 grid gap-px bg-line sm:grid-cols-2">
            {solutionCards.map((card) => (
              <article key={card.title} className="bg-card p-6">
                <card.icon className="size-5 text-stone" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl uppercase tracking-tight">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{card.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
            Installation, maintenance and technical commissioning are not included as standard services.
            They are only in scope when a quotation expressly says so.
          </p>
          <Link to="/solutions" className={`${btnSecondary} mt-8`}>
            Explore our solutions
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-sheet">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <SectionHeading
            title="Equipment for the way your property works."
            lede="These are examples of categories BOapex may source. They are not a guarantee of current stock or availability."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to="/products/$slug"
                params={{ slug: category.slug }}
                className="group flex flex-col border border-line bg-card"
              >
                <img
                  src={category.image}
                  alt={category.alt}
                  width={1100}
                  height={825}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <span className="flex flex-1 flex-col p-5">
                  <span className="font-display text-lg uppercase leading-tight tracking-tight text-ink">
                    {category.name}
                  </span>
                  <span className="mt-2 flex-1 text-sm leading-relaxed text-muted">{category.summary}</span>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-ink">
                    View category
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">{AVAILABILITY_NOTE}</p>
          <Link to="/request-a-quote" className={`${btnPrimary} mt-8`}>
            Request a product quote
          </Link>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <SectionHeading title="Supporting the people who build, equip and manage properties." />
          <div className="mt-10 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article key={industry.title} className="bg-paper p-6">
                <h3 className="font-display text-lg uppercase tracking-tight">{industry.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {industry.title === "Property developers" &&
                    "Equipment sourcing for residential developments, apartment projects and property handovers."}
                  {industry.title === "Serviced apartments and shortlets" &&
                    "Coordinated sourcing for furnishing and equipping individual units or multiple apartments."}
                  {industry.title === "Hotels and hospitality" &&
                    "Equipment supply coordination for new properties, upgrades and replacement requirements."}
                  {industry.title === "Contractors and project teams" &&
                    "Support with sourcing specified appliances and equipment required for project completion."}
                  {industry.title === "Property managers" &&
                    "Procurement support for managed properties, equipment replacements and selected operational needs."}
                  {industry.title === "Corporate and institutional clients" &&
                    "Sourcing support for offices, schools, staff accommodation and other eligible projects."}
                </p>
              </article>
            ))}
          </div>
          <Link to="/request-a-quote" className={`${btnSecondary} mt-8`}>
            Discuss your project
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-sheet">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <SectionHeading title="A clearer way to source property equipment." />
          <ol className="mt-10 grid gap-px bg-line md:grid-cols-2 xl:grid-cols-5">
            {homeSteps.map((step, index) => (
              <li key={step.title} className="bg-card p-5">
                <p className="font-display text-sm text-stone">0{index + 1}</p>
                <h3 className="mt-3 font-display text-lg uppercase leading-tight tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">{PROCESS_NOTE}</p>
          <Link to="/request-a-quote" className={`${btnSecondary} mt-8`}>
            Start your enquiry
          </Link>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <SectionHeading title="One coordinated point of contact. Multiple equipment categories." />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefitIcons[index] ?? Layers;
              return (
                <li key={benefit.title} className="border-t border-line pt-5">
                  <Icon className="size-5 text-stone" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-lg uppercase tracking-tight">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-charcoal text-paper">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl uppercase leading-tight tracking-tight md:text-4xl">
              Serving projects from Lagos and beyond.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-paper/80">
              BOapex Property Solutions is focused on serving projects in Lagos, with enquiries for Abuja,
              Ibadan, Abeokuta and other locations considered according to project requirements and delivery
              feasibility.
            </p>
            <Link to="/contact" hash="locations" className={`${btnInverse} mt-8`}>
              Check project availability
            </Link>
          </div>
          <img
            src="/images/hotel.jpg"
            alt="Hotel lobby illustrating the kind of hospitality property BOapex can equip"
            width={1400}
            height={787}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
