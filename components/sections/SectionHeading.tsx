import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center,
  light,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-bold uppercase tracking-[0.2em] sm:text-sm",
            light ? "text-aqua" : "text-lagoon"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-4xl font-extrabold sm:text-5xl",
          light && "text-white"
        )}
        style={light ? { color: "#fff" } : undefined}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-foam/90" : "text-inkmuted"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
