import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { variations, getVariation } from "@/lib/showcase";

export function generateStaticParams() {
  return variations.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = getVariation(slug);
  return {
    title: v ? `${v.name} — Homepage Design` : "Homepage Design",
    robots: { index: false, follow: false },
  };
}

export default async function VariationPreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = getVariation(slug);
  if (!v) notFound();

  return (
    <div className="fixed inset-0 bg-white">
      {/* the full design, isolated in an iframe */}
      <iframe
        src={v.file}
        title={`${v.name} — full page design`}
        className="h-full w-full border-0"
      />

      {/* floating controls */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-3 p-3 sm:p-4">
        <Link
          href="/showcase"
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-deep/90 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition hover:bg-deep"
        >
          ← Showcase
        </Link>
        <span className="pointer-events-auto rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-deep shadow-lg backdrop-blur">
          {v.name}
          <span className="ml-2 font-normal text-inkmuted">{v.tagline}</span>
        </span>
      </div>
    </div>
  );
}
