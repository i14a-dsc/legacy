import { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  path?: string;
  ogpTitle?: string;
  ogpDescription?: string;
  imageUrl?: string;
}

const SITE_CONFIG = {
  name: "イアと迷える森人達",
  defaultDescription: "dummy placeholder btw",
  url: "https://legacy.i14a.dev",
  defaultImageUrl: "/images/favicon-max.png",
  twitterCreator: "@1u0704",
};

export function createMetadata(props: MetadataProps = {}): Metadata {
  const title = props.title ? `${props.title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;
  const description = props.description ?? SITE_CONFIG.defaultDescription;
  const path = props.path ?? "";
  const fullUrl = `${SITE_CONFIG.url}${path}`;
  const ogpTitle = props.ogpTitle ?? title;
  const imageUrl = props.imageUrl ?? SITE_CONFIG.defaultImageUrl;
  const fullImageUrl = imageUrl.startsWith("http") ? imageUrl : `${SITE_CONFIG.url}${imageUrl}`;

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: props.title
      ? {
          default: title,
          template: `%s | ${SITE_CONFIG.name}`,
        }
      : {
          default: SITE_CONFIG.name,
          template: `%s | ${SITE_CONFIG.name}`,
        },
    description,
    keywords: [
      "I14A",
      "Nestor",
      "Developer",
      "Japan",
      "Portfolio",
      "Web Development",
      "Tech Blog",
      "Projects",
      "Contact",
    ],
    authors: [{ name: "I14A", url: SITE_CONFIG.url }],
    creator: "I14A",
    openGraph: {
      title: ogpTitle,
      description: props.ogpDescription ? props.ogpDescription : description,
      siteName: SITE_CONFIG.name,
      type: "website",
      locale: "ja_JP",
      url: fullUrl,
      images: [
        {
          url: fullImageUrl,
          width: 256,
          height: 256,
          alt: `${ogpTitle} OG Image`,
        },
      ],
    },
    twitter: {
      title: ogpTitle,
      description: props.ogpDescription ? props.ogpDescription : description,
      site: SITE_CONFIG.url,
      card: "summary_large_image",
      creator: SITE_CONFIG.twitterCreator,
      images: [fullImageUrl],
    },
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical: fullUrl,
      languages: {
        "ja-JP": `${fullUrl}`,
      },
    },
    manifest: `${SITE_CONFIG.url}/manifest.json`,
  };
}
