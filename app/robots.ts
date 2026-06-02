import type { MetadataRoute } from "next";
import { sampleContent } from "@/lib/content/sample";

export default function robots(): MetadataRoute.Robots {
  const base = (
    process.env.NEXT_PUBLIC_SITE_URL || sampleContent.site.siteUrl
  ).replace(/\/$/, "");
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/studio"] },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
