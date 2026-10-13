import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { SiteShell } from "@/components/site-shell";
import { categories } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

type QuoteSearch = { category?: string };

export const Route = createFileRoute("/request-a-quote")({
  validateSearch: (search: Record<string, unknown>): QuoteSearch => {
    const raw = search.category;
    const category = typeof raw === "string" && categories.some((item) => item.slug === raw) ? raw : undefined;
    return { category };
  },
  head: () =>
    pageMeta(
      "Request a project quote | BOapex Property Solutions",
      "Send your equipment requirements, location and timeline. BOapex reviews the enquiry before preparing a quotation. No payment details are collected here.",
    ),
  component: QuotePage,
});

function QuotePage() {
  const { category } = Route.useSearch();
  return (
    <SiteShell>
      <header className="border-b border-line bg-sheet">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-stone">Request a quote</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-tight tracking-tight md:text-5xl">
            Tell us what your project needs.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Share your equipment requirements and project details with BOapex Property Solutions. We will
            review your enquiry and follow up regarding sourcing options and a quotation.
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <QuoteForm variant="project" initialCategory={category} />
      </div>
    </SiteShell>
  );
}
