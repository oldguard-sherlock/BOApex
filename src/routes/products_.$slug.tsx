import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { btnPrimary, btnSecondary } from "@/components/ui";
import { AVAILABILITY_NOTE, categories, getCategory } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/products_/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return category;
  },
  head: ({ loaderData }) =>
    pageMeta(
      loaderData
        ? `${loaderData.name} sourcing | BOapex Property Solutions`
        : "Products | BOapex Property Solutions",
      loaderData?.explanation ??
        "Equipment categories BOapex Property Solutions may source for property projects.",
    ),
  component: CategoryPage,
});

function CategoryPage() {
  const category = Route.useLoaderData();
  const others = categories.filter((item) => item.slug !== category.slug);
  return (
    <SiteShell>
      <header className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-stone">
              <Link to="/products" className="hover:text-ink">
                Products
              </Link>
            </p>
            <h1 className="mt-3 font-display text-4xl uppercase leading-tight tracking-tight md:text-5xl">
              {category.name}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">{category.explanation}</p>
          </div>
          <img
            src={category.image}
            alt={category.alt}
            width={1100}
            height={825}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-2">
        <section>
          <h2 className="font-display text-2xl uppercase tracking-tight">Examples of what may be sourced</h2>
          <p className="mt-3 text-sm text-muted">
            Illustrative only. No model numbers, prices, stock figures or warranties are stated here.
          </p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {category.examples.map((example) => (
              <li key={example} className="py-3 text-ink">
                {example}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl uppercase tracking-tight">Useful in a quotation request</h2>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-muted">
            {category.quoteNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">{AVAILABILITY_NOTE}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/request-a-quote" search={{ category: category.slug }} className={btnPrimary}>
              Request a quote
            </Link>
            <Link to="/products" className={btnSecondary}>
              All categories
            </Link>
          </div>
        </section>
      </div>
      <section className="border-t border-line bg-sheet">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <h2 className="text-xs font-medium uppercase tracking-widest text-stone">Other categories</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link to="/products/$slug" params={{ slug: item.slug }} className="text-ink underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
