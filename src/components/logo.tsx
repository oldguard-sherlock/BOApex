import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="block max-w-52 shrink-0">
      <span className="block font-display text-xl leading-none tracking-tight text-ink">BOapex</span>
      <span className="mt-1 block text-xs uppercase tracking-widest text-faint">Logo placeholder</span>
    </Link>
  );
}
