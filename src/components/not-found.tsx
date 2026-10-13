import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { btnPrimary, btnSecondary } from "@/components/ui";

export function NotFound() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-5 py-24 md:px-8">
        <p className="text-xs font-medium uppercase tracking-widest text-stone">Page not found</p>
        <h1 className="mt-3 font-display text-4xl uppercase tracking-tight">That page is not on this site.</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          The address may be out of date. You can go back to the homepage or send a project enquiry.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className={btnPrimary}>
            Home
          </Link>
          <Link to="/request-a-quote" className={btnSecondary}>
            Request a quote
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
