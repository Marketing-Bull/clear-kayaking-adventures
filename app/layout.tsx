import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { getContent } from "@/lib/content";

const display = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const { site } = await getContent();
  return {
    metadataBase: new URL(site.siteUrl),
    title: {
      default: site.seoTitle,
      template: `%s | ${site.name}`,
    },
    description: site.seoDescription,
    keywords: [
      "clear kayaking Jupiter",
      "clear kayak Jupiter",
      "transparent kayak tour Jupiter",
      "kayaking Jupiter Florida",
      "manatee kayak tour Jupiter",
      "eco tour Jupiter",
    ],
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: site.seoTitle,
      description: site.seoDescription,
      url: site.siteUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: site.seoTitle,
      description: site.seoDescription,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-ink">{children}</body>
    </html>
  );
}
