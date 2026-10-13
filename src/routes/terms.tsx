import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageMeta(
      "Terms and Conditions | BOapex Property Solutions",
      "Draft terms for BOapex Property Solutions covering quotations, customer-funded procurement, availability and delivery coordination.",
    ),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <p className="text-xs font-medium uppercase tracking-widest text-stone">Draft for review</p>
        <h1 className="mt-3 font-display text-4xl uppercase tracking-tight">Terms and Conditions</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Draft date: 13 October 2026. These terms describe the intended commercial approach of BOapex
          Property Solutions, part of BOapex LTD. They are a working draft for the business to confirm
          with its own advisers before publication. They are not copied from another company’s terms. If a
          quotation or written agreement says something different, that document governs the job it covers.
        </p>
        <div className="mt-10 space-y-8 text-muted">
          <section>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">What BOapex does</h2>
            <p className="mt-3 leading-relaxed">
              BOapex coordinates sourcing, quotation, procurement and delivery arrangements for appliances
              and essential equipment used in property projects. BOapex is not the manufacturer of those
              products and does not operate this website as an online shop or marketplace.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">Website content</h2>
            <p className="mt-3 leading-relaxed">
              Category lists and photographs are illustrative. They are not an offer, a stock list, a price
              list or evidence of completed projects. Specifications, availability, pricing, warranties and
              lead times are confirmed in a quotation.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">Enquiries and quotations</h2>
            <p className="mt-3 leading-relaxed">
              Submitting an enquiry does not create an order and does not reserve any product. A quotation
              sets out the scope BOapex is prepared to coordinate, including products, quantities, pricing
              and relevant charges. It may be withdrawn or revised before you accept it, for example if a
              supplier’s price or availability changes.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">Payment</h2>
            <p className="mt-3 leading-relaxed">
              Procurement is customer-funded. Unless a quotation expressly agrees something else, payment
              is due according to that quotation before procurement begins. BOapex does not offer loans or
              a buy-now-pay-later service as a standard term. This website does not collect payment.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">Procurement and delivery</h2>
            <p className="mt-3 leading-relaxed">
              After acceptance and payment on the agreed terms, BOapex coordinates procurement and delivery
              for the agreed scope. Delivery locations outside Lagos, including Abuja, Ibadan and Abeokuta,
              depend on feasibility. Dates are estimates until confirmed. Supplier delays, access problems
              and incomplete site information can change them. Risk, title, inspection and any handover
              documents are as stated in the quotation.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">What is not included</h2>
            <p className="mt-3 leading-relaxed">
              Installation, maintenance and technical commissioning are not included unless the quotation
              says so. Warranties, where they exist, come from the relevant supplier or manufacturer on the
              terms stated in the quotation, not from a general promise on this website.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">Changes and cancellation</h2>
            <p className="mt-3 leading-relaxed">
              Changing quantities or specifications after acceptance may require a revised quotation.
              Cancellation, restocking and supplier charges, if any, are those set out in the quotation or
              agreed in writing. Because goods may be procured specifically for a project, cancellation
              after procurement has started may not be free of cost.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">Liability</h2>
            <p className="mt-3 leading-relaxed">
              To the extent the law allows, BOapex’s responsibility for a supply is limited to the scope
              and remedies described in the relevant quotation. Nothing on this website excludes liability
              that cannot legally be excluded. The business should replace this paragraph with wording its
              advisers approve.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">Contact</h2>
            <p className="mt-3 leading-relaxed">
              Use the <Link to="/contact" className="underline">contact page</Link> or the{" "}
              <Link to="/request-a-quote" className="underline">quotation form</Link>. Official contact
              details will be added when BOapex confirms them.
            </p>
          </section>
        </div>
      </article>
    </SiteShell>
  );
}
