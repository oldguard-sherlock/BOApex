import { createFileRoute, Link } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { SiteShell } from "@/components/site-shell";
import { btnPrimary } from "@/components/ui";
import { pageMeta } from "@/lib/meta";
import { hasContactValue, site, telHref } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta(
      "Contact BOapex Property Solutions",
      "Contact BOapex Property Solutions about a property equipment enquiry. Official email, telephone and office details are published when confirmed.",
    ),
  component: ContactPage,
});

const rows = [
  { label: "Business email", value: site.email, href: site.email ? `mailto:${site.email}` : "" },
  { label: "Telephone", value: site.phone, href: telHref(site.phone) },
  { label: "WhatsApp", value: site.whatsapp, href: "" },
  { label: "Office address", value: site.address, href: "" },
  { label: "Business hours", value: site.hours, href: "" },
];

function ContactPage() {
  return (
    <SiteShell>
      <header className="border-b border-line bg-sheet">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-stone">Contact</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-tight tracking-tight md:text-5xl">
            Contact BOapex.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            For a detailed equipment list, use the project quotation form. For a shorter note, use the
            message form on this page. No map is shown, because a verified office location has not been
            supplied.
          </p>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-12">
        <section className="lg:col-span-4" id="locations">
          <h2 className="font-display text-2xl uppercase tracking-tight">Details</h2>
          <dl className="mt-6 divide-y divide-line border-y border-line">
            {rows.map((row) => (
              <div key={row.label} className="py-4">
                <dt className="text-xs font-medium uppercase tracking-widest text-stone">{row.label}</dt>
                <dd className="mt-1 text-ink">
                  {hasContactValue(row.value) ? (
                    row.href ? (
                      <a className="underline" href={row.href}>
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )
                  ) : (
                    <span className="text-muted">Pending confirmation</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <h2 className="mt-10 font-display text-2xl uppercase tracking-tight">Service locations</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Lagos is the primary market. Enquiries for Abuja, Ibadan, Abeokuta and other locations are
            considered according to project requirements and delivery feasibility. Nationwide delivery is
            not promised for every product.
          </p>
          <Link to="/request-a-quote" className={`${btnPrimary} mt-8`}>
            Request a project quote
          </Link>
        </section>
        <section className="lg:col-span-8">
          <h2 className="mb-6 font-display text-2xl uppercase tracking-tight">Send a short message</h2>
          <QuoteForm variant="contact" />
        </section>
      </div>
    </SiteShell>
  );
}
