import { Link } from "@tanstack/react-router";
import { btnInverse, btnInverseSecondary } from "@/components/ui";

type Destination =
  | "/"
  | "/solutions"
  | "/products"
  | "/industries"
  | "/how-it-works"
  | "/about"
  | "/request-a-quote"
  | "/contact";

export function CtaBand({
  title = "Planning a property project?",
  body = "Share your equipment requirements with BOapex Property Solutions. We will review your enquiry and determine the appropriate next steps towards a tailored quotation.",
  primaryLabel = "Request a project quote",
  primaryTo = "/request-a-quote",
  secondaryLabel = "Contact BOapex",
  secondaryTo = "/contact",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryTo?: Destination;
  secondaryLabel?: string;
  secondaryTo?: Destination;
}) {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 md:px-8 md:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl uppercase leading-tight tracking-tight text-paper md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-paper/80">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to={primaryTo} className={btnInverse}>
            {primaryLabel}
          </Link>
          <Link to={secondaryTo} className={btnInverseSecondary}>
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
