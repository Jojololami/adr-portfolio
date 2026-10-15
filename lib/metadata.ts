import type { Metadata } from "next";
import { site } from "@/content/portfolio";

/**
 * Builds complete metadata for a page. Next.js replaces (does not merge)
 * nested objects like `openGraph` between layout and page, so each page
 * gets the full set here rather than a partial override.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      url: path,
      images: [{ url: "/images/ADR.jpeg", alt: site.name }],
    },
  };
}
