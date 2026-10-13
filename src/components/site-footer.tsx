import { Link } from "@tanstack/react-router";
import { categories, nav, PHOTO_NOTE } from "@/lib/content";
import { hasContactValue, site, telHref } from "@/lib/site";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-sheet">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            BOapex Property Solutions, part of BOapex LTD, coordinates sourcing and supply of appliances
            and essential equipment for property projects.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-faint">
            The wordmark above is a placeholder. Send the original BOapex LTD logo file to replace it
            without changing its proportions or colours.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-medium uppercase tracking-widest text-stone">Navigate</h2>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-ink hover:text-muted">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/request-a-quote" className="text-sm text-ink hover:text-muted">
                Request a quote
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-medium uppercase tracking-widest text-stone">Categories</h2>
          <ul className="mt-4 space-y-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  to="/products/$slug"
                  params={{ slug: category.slug }}
                  className="text-sm text-ink hover:text-muted"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-medium uppercase tracking-widest text-stone">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink">
            <li>
              Email:{" "}
              {hasContactValue(site.email) ? (
                <a className="underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              ) : (
                <span className="text-muted">Pending official address</span>
              )}
            </li>
            <li>
              Telephone:{" "}
              {hasContactValue(site.phone) ? (
                <a className="underline" href={telHref(site.phone)}>
                  {site.phone}
                </a>
              ) : (
                <span className="text-muted">Pending</span>
              )}
            </li>
            <li>
              WhatsApp:{" "}
              {hasContactValue(site.whatsapp) ? (
                <span>{site.whatsapp}</span>
              ) : (
                <span className="text-muted">Pending</span>
              )}
            </li>
            <li>
              Office:{" "}
              {hasContactValue(site.address) ? site.address : <span className="text-muted">Pending</span>}
            </li>
            <li>
              Hours: {hasContactValue(site.hours) ? site.hours : <span className="text-muted">Pending</span>}
            </li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Lagos is the focus. Abuja, Ibadan, Abeokuta and other locations are considered according to
            the project and delivery feasibility.
          </p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {year} BOapex LTD. All rights reserved.</p>
          <p className="flex gap-4">
            <Link to="/privacy" className="hover:text-ink">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-ink">
              Terms and Conditions
            </Link>
          </p>
        </div>
        <p className="mx-auto max-w-7xl px-5 pb-8 text-xs leading-relaxed text-faint md:px-8">{PHOTO_NOTE}</p>
      </div>
    </footer>
  );
}
