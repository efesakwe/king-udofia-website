import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kingudofia.com";

export const SITE_NAME = "King Udofia";

export const DEFAULT_DESCRIPTION =
  "Nigerian-Canadian composer, arranger, conductor, and music director creating powerful musical experiences across live performance, recording, film, worship, and cultural productions.";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "en_CA",
      siteName: SITE_NAME,
      // TODO: add OG image asset at /public/og-image.jpg
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og-image.jpg`],
    },
  };
}
