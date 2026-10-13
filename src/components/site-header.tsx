import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/content";
import { btnPrimary } from "@/components/ui";
import { Logo } from "@/components/logo";

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={`text-sm uppercase tracking-wide ${active ? "text-ink" : "text-muted hover:text-ink"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/request-a-quote" className={`${btnPrimary} px-3 sm:px-5`}>
            Request a quote
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center border border-line xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open ? (
        <div
          ref={panelRef}
          id="mobile-nav"
          className="fixed inset-0 z-30 overflow-y-auto bg-paper px-5 pt-24 pb-12 xl:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto flex max-w-lg flex-col gap-1">
            {nav.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  className="border-b border-line py-4 text-lg uppercase tracking-wide text-ink"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link to="/request-a-quote" className={`${btnPrimary} mt-6`}>
              Request a quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
