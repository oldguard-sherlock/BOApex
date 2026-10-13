export function SectionHeading({
  eyebrow,
  title,
  lede,
  inverse = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  inverse?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className={`text-xs font-medium uppercase tracking-widest ${inverse ? "text-stone" : "text-stone"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl uppercase leading-tight tracking-tight md:text-4xl ${eyebrow ? "mt-3" : ""} ${inverse ? "text-paper" : "text-ink"}`}
      >
        {title}
      </h2>
      {lede ? (
        <p className={`mt-4 text-lg leading-relaxed ${inverse ? "text-paper/80" : "text-muted"}`}>{lede}</p>
      ) : null}
    </div>
  );
}
