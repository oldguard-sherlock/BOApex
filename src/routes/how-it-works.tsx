import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { btnPrimary, btnSecondary } from "@/components/ui";
import { PROCESS_NOTE, processStages } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/how-it-works")({
  head: () =>
    pageMeta(
      "How property equipment procurement works | BOapex Property Solutions",
      "From enquiry to quotation, customer-funded procurement and delivery coordination. Timing is confirmed per project, not promised as a fixed turnaround.",
    ),
  component: HowPage,
});

function HowPage() {
  return (
    <SiteShell>
      <header className="border-b border-line bg-sheet">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-medium uppercase tracking-widest text-stone">How it works</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-tight tracking-tight md:text-5xl">
            A clearer way to source property equipment.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            BOapex works on a customer-funded procurement model. You describe the requirement, we quote,
            and procurement starts after acceptance and payment on the agreed terms, unless different terms
            are expressly agreed.
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <ol>
          {processStages.map((stage, index) => (
            <li key={stage.title} className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-4">
              <div className="flex flex-col items-center">
                <span className="grid size-11 place-items-center bg-ink font-display text-sm text-paper">
                  {index + 1}
                </span>
                {index < processStages.length - 1 ? <span className="mt-2 w-px flex-1 bg-line" /> : null}
              </div>
              <div className={index < processStages.length - 1 ? "pb-10" : ""}>
                <h2 className="font-display text-2xl uppercase tracking-tight">{stage.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{stage.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <aside className="mt-12 border border-line bg-sheet p-5">
          <h2 className="font-display text-lg uppercase tracking-tight">Timing is confirmed per project</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Actual timing depends on product availability, supplier lead times, payment confirmation,
            delivery arrangements and other relevant factors. This website does not promise a fixed
            turnaround. {PROCESS_NOTE}
          </p>
        </aside>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link to="/request-a-quote" className={btnPrimary}>
            Start your enquiry
          </Link>
          <Link to="/solutions" className={btnSecondary}>
            Explore our solutions
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
