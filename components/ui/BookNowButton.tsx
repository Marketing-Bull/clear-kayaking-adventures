import Link from "next/link";
import { cn } from "@/lib/cn";

export function BookNowButton({
  href,
  children = "Book Now",
  variant = "primary",
  className,
}: {
  href: string;
  children?: React.ReactNode;
  variant?: "primary" | "ghost" | "white";
  className?: string;
}) {
  const isExternal = href.startsWith("http");
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun px-6 py-3 text-lg min-h-[48px]";
  const variants = {
    primary: "bg-sun text-white shadow-lg shadow-sun/30 hover:bg-sunsoft",
    white: "bg-white text-deep shadow-md hover:bg-foam",
    ghost: "bg-white/15 text-white ring-1 ring-white/40 hover:bg-white/25",
  } as const;

  return (
    <Link
      href={href}
      className={cn(base, variants[variant], className)}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}
