import Image from "next/image";
import type { Img } from "@/lib/content/types";
import { cn } from "@/lib/cn";

function tone(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 360;
  const a = 180 + (h % 40); // aqua-teal range
  const b = 195 + ((h * 2) % 35);
  return { a, b };
}

/**
 * Renders a CMS/remote image when a src is present; otherwise a calm,
 * on-brand water-gradient placeholder (client photos drop in via the CMS).
 */
export function Media({
  image,
  className,
  sizes,
  priority,
}: {
  image: Img;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (image.src) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes ?? "100vw"}
        priority={priority}
        className={cn("object-cover", className)}
      />
    );
  }
  const { a, b } = tone(image.alt);
  return (
    <div
      role="img"
      aria-label={image.alt}
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={{
        background: `linear-gradient(140deg, hsl(${a} 70% 58%), hsl(${b} 75% 42%))`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(120% 80% at 20% 10%, rgba(255,255,255,.7), transparent 50%), radial-gradient(90% 70% at 85% 90%, rgba(0,0,0,.25), transparent 60%)",
        }}
      />
      <svg
        className="absolute bottom-0 left-0 w-[200%] opacity-30 animate-shimmer"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,120 L0,120 Z"
          fill="rgba(255,255,255,.35)"
        />
      </svg>
    </div>
  );
}
