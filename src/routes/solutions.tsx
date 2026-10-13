import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { btnPrimary } from "@/components/ui";
import { notStandard, services } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/solutions")({
  head: () =>
    pageMeta(
      "Property equipment sourcing and supply | BOapex Property Solutions",
      "How BOapex coordinates equipment sourcing, multi-category procurement, project quotations and delivery for property projects in Nigeria.",
    ),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <SiteShell>
      <header className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-stone">Solutions</p>
            <h1 className="mt-3 font-display text-4xl uppercase leading-tight tracking-tight md:text-5xl">
              Property equipment sourcing and supply, simplified.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-muted">
            BOapex Property Solutions supports property-related procurement by coordinating the sourcing
            and supply of selected appliances and essential equipment around each customer’s requirements.
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <ol className="grid gap-12">
          {services.map((service, index) => (
            <li key={service.title} className="grid gap-6 border-t border-line pt-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="font-display text-sm text-stone">0{index + 1}</p>
                <h2 className="mt-2 font-display text-2xl uppercase tracking-tight">{service.title}</h2>
                <p className="mt-3 text-xs font-medium uppercase tracking-widest text-faint">{service.status}</p>
              </div>
              <div className="grid gap-6 text-muted lg:col-span-8">
                <p className="leading-relaxed text-ink">{service.meaning}</p>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-ink">Who it is for</h3>
                  <p className="mt-2 leading-relaxed">{service.who}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-ink">What to provide</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {service.provide.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-ink">Where it sits in the process</h3>
                  <p className="mt-2 leading-relaxed">{service.fit}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <section className="bg-sheet">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="font-display text-3xl uppercase tracking-tight">Not included unless expressly agreed</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {notStandard.map((item) => (
              <article key={item.title} className="border border-line bg-card p-5">
                <h3 className="font-display text-lg uppercase tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
          <Link to="/request-a-quote" className={`${btnPrimary} mt-10`}>
            Request a quote
          </Link>
        </div>
      </section>
      <CtaBand
        title="Tell us what the project needs."
        primaryLabel="Request a project quote"
        secondaryLabel="See how it works"
        secondaryTo="/how-it-works"
      />
    </SiteShell>
  );
}
