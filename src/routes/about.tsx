import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { btnPrimary } from "@/components/ui";
import { principles } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta(
      "About BOapex Property Solutions",
      "BOapex Property Solutions, part of BOapex LTD, coordinates property equipment sourcing, quotations, procurement and delivery from Lagos.",
    ),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <header className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-stone">About</p>
            <h1 className="mt-3 font-display text-4xl uppercase leading-tight tracking-tight md:text-5xl">
              A more coordinated approach to property equipment supply.
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                BOapex Property Solutions was established to help make property-related equipment sourcing
                and supply more organised.
              </p>
              <p>
                The company focuses on coordinating customer requirements, sourcing suitable products,
                preparing quotations and arranging procurement and delivery.
              </p>
              <p>
                It operates under BOapex LTD, with attention on projects in Lagos. Enquiries for Abuja,
                Ibadan, Abeokuta and other locations are considered according to the project and whether
                delivery is feasible.
              </p>
            </div>
          </div>
          <figure>
            <img
              src="/images/hero.jpg"
              alt="Residential building of the kind of project BOapex can help equip"
              width={1400}
              height={787}
              className="aspect-[3/2] w-full object-cover"
            />
            <figcaption className="mt-2 text-xs text-faint">
              Illustrative photograph. Not a completed BOapex project.
            </figcaption>
          </figure>
        </div>
      </header>
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <h2 className="font-display text-3xl uppercase tracking-tight">How we try to work</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <li key={principle.title} className="border-t border-line pt-5">
                <h3 className="font-display text-lg uppercase tracking-tight">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{principle.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-sheet">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
          <h2 className="font-display text-3xl uppercase tracking-tight">Official background and registration</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            This section is reserved for verified information. It is intentionally incomplete. Registration
            numbers, addresses and biographies are not published until BOapex confirms them.
          </p>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {[
              ["Trading name", "BOapex Property Solutions"],
              ["Parent company", "BOapex LTD"],
              ["Registration number", "To be confirmed"],
              ["Registered address", "To be confirmed"],
              ["Leadership", "To be confirmed"],
              ["Founding narrative", "To be confirmed. Not invented here."],
            ].map(([label, value]) => (
              <div key={label} className="grid gap-1 py-4 sm:grid-cols-3">
                <dt className="text-sm font-medium text-ink">{label}</dt>
                <dd className="text-sm text-muted sm:col-span-2">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-3xl uppercase tracking-tight md:text-4xl">
            Let’s discuss your next project.
          </h2>
          <Link to="/contact" className="mt-8 inline-flex min-h-11 items-center bg-paper px-5 text-sm font-medium uppercase tracking-wide text-ink">
            Contact BOapex
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
