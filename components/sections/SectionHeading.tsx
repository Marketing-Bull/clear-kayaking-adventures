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
            "mb-3 text-sm font-bold uppercase tracking-[0.18em]",
            light ? "text-aqua" : "text-lagoon"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl font-extrabold",
          light && "text-white"
        )}
        style={light ? { color: "#fff" } : undefined}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 text-lg",
            light ? "text-foam/90" : "text-inkmuted"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
