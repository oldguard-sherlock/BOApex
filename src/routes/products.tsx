import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { btnPrimary } from "@/components/ui";
import { AVAILABILITY_NOTE, categories } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/products")({
  head: () =>
    pageMeta(
      "Equipment categories we can source | BOapex Property Solutions",
      "Cooling, kitchen, laundry, water, entertainment, power, lighting and security equipment that BOapex may source for property projects. Not a live stock list.",
    ),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <SiteShell>
      <header className="border-b border-line bg-sheet">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-medium uppercase tracking-widest text-stone">Products</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-tight tracking-tight md:text-5xl">
            Categories we can source for a project.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            This page shows the range. It is not an inventory, a live stock feed or an online checkout.
            Sample items are examples only, with no prices, model numbers or warranty claims.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            BOapex sources products according to customer specifications and project requirements. Product
            availability, specifications, pricing, warranties and delivery lead times are confirmed during
            the quotation process.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <a
                  href={`#${category.slug}`}
                  className="inline-flex min-h-11 items-center border border-line bg-card px-3 text-sm text-ink"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
      {categories.map((category) => (
        <section key={category.slug} id={category.slug} className="border-b border-line scroll-mt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 md:px-8 lg:grid-cols-2">
            <img
              src={category.image}
              alt={category.alt}
              width={1100}
              height={825}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div>
              <h2 className="font-display text-3xl uppercase tracking-tight">{category.name}</h2>
              <p className="mt-4 leading-relaxed text-muted">{category.explanation}</p>
              <h3 className="mt-6 text-sm font-medium uppercase tracking-wide">Examples, not stock</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
                {category.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/request-a-quote"
                  search={{ category: category.slug }}
                  className={btnPrimary}
                >
                  Request a quote
                </Link>
                <Link
                  to="/products/$slug"
                  params={{ slug: category.slug }}
                  className="inline-flex min-h-11 items-center text-sm font-medium uppercase tracking-wide underline"
                >
                  Category details
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <p className="text-sm leading-relaxed text-muted">{AVAILABILITY_NOTE}</p>
      </div>
    </SiteShell>
  );
}
