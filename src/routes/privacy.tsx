import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { pageMeta } from "@/lib/meta";
import { hasContactValue, site } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageMeta(
      "Privacy Policy | BOapex Property Solutions",
      "Draft privacy notice for enquiries sent to BOapex Property Solutions. Review and confirm before relying on it.",
    ),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <p className="text-xs font-medium uppercase tracking-widest text-stone">Draft for review</p>
        <h1 className="mt-3 font-display text-4xl uppercase tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Draft date: 13 October 2026. This notice describes how this website actually handles information
          today. It is not legal advice and has not yet been adopted as a final policy of BOapex LTD.
          Confirm it before publication.
        </p>
        <div className="mt-10 space-y-8 text-muted">
          <section>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">Who we are</h2>
            <p className="mt-3 leading-relaxed">
              BOapex Property Solutions is the trading name used by BOapex LTD for property equipment
              sourcing and supply coordination. This notice covers the enquiry forms on this website.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">What we collect</h2>
            <p className="mt-3 leading-relaxed">
              If you submit a form, you may provide your name, company, email, telephone number, preferred
              contact method, project details, product requirements, quantities, an indicative budget,
              timeline and any extra notes you choose to add. You may also select a document. The site
              checks the file type and size in your browser. The file itself is not uploaded.
            </p>
            <p className="mt-3 leading-relaxed">
              The forms do not ask for payment card numbers, bank passwords or copies of identity documents.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">How it is handled today</h2>
            <p className="mt-3 leading-relaxed">
              A submitted enquiry is saved in your own browser so you can keep the reference and copy a
              summary. It is not sent to a BOapex email inbox, because an official address has not been
              connected
              {hasContactValue(site.email) ? "" : " yet"}. It is not stored in a shared database on this
              website. Clearing your browser data removes it.
            </p>
            <p className="mt-3 leading-relaxed">
              If an official email is later connected, this notice should be updated to describe that
              delivery, who can read the messages, and how long they are kept.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">Why it is used</h2>
            <p className="mt-3 leading-relaxed">
              The information is used to understand a project enquiry and to prepare a response or
              quotation. It is not sold. It is not used for unrelated marketing from this website.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">Cookies and analytics</h2>
            <p className="mt-3 leading-relaxed">
              This website does not set analytics or advertising cookies. The browser’s own storage is used
              only for the enquiry summary described above. A separate analytics tool should be added only
              after a privacy review, and this notice should then name it.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">How long it is kept</h2>
            <p className="mt-3 leading-relaxed">
              The copy in your browser is kept until you clear site data, or until newer enquiries replace
              older ones on that device. There is no separate server archive from this website at present.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">Your requests</h2>
            <p className="mt-3 leading-relaxed">
              Questions about personal information should go to the official business contact once it is
              published on the <Link to="/contact" className="underline">contact page</Link>. Applicable
              Nigerian data protection law, including the Nigeria Data Protection Act 2023, should be
              considered when the final process is confirmed. This draft does not claim that a particular
              registration or audit has been completed.
            </p>
          </section>
        </div>
      </article>
    </SiteShell>
  );
}
