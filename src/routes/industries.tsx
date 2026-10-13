import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { btnPrimary } from "@/components/ui";
import { industries, PHOTO_NOTE } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/industries")({
  head: () =>
    pageMeta(
      "Industries we support | BOapex Property Solutions",
      "Equipment sourcing support for property developers, serviced apartments, hotels, contractors, property managers and institutional clients.",
    ),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <SiteShell>
      <header className="border-b border-line bg-sheet">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-medium uppercase tracking-widest text-stone">Industries</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-tight tracking-tight md:text-5xl">
            Supporting the people who build, equip and manage properties.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            The notes below describe typical sourcing needs. They are not claims that BOapex has already
            completed work for a named client.
          </p>
        </div>
      </header>
      {industries.map((industry, index) => (
        <article key={industry.title} className="border-b border-line">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 md:px-8 lg:grid-cols-2">
            <img
              src={industry.image}
              alt={industry.alt}
              width={1400}
              height={825}
              loading="lazy"
              className={`aspect-[4/3] w-full object-cover ${index % 2 === 1 ? "lg:order-2" : ""}`}
            />
            <div>
              <h2 className="font-display text-3xl uppercase tracking-tight">{industry.title}</h2>
              <h3 className="mt-6 text-sm font-medium uppercase tracking-wide">Typical sourcing needs</h3>
              <p className="mt-2 leading-relaxed text-muted">{industry.needs}</p>
              <h3 className="mt-6 text-sm font-medium uppercase tracking-wide">How BOapex may help</h3>
              <p className="mt-2 leading-relaxed text-muted">{industry.help}</p>
              <h3 className="mt-6 text-sm font-medium uppercase tracking-wide">Relevant categories</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
                {industry.categories.map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
              <h3 className="mt-6 text-sm font-medium uppercase tracking-wide">Helpful in a quotation request</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
                {industry.quoteInfo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to="/request-a-quote" className={`${btnPrimary} mt-8`}>
                Discuss your requirements
              </Link>
            </div>
          </div>
        </article>
      ))}
      <p className="mx-auto max-w-7xl px-5 py-8 text-xs text-faint md:px-8">{PHOTO_NOTE}</p>
      <CtaBand title="Discuss your project." primaryLabel="Request a project quote" />
    </SiteShell>
  );
}
