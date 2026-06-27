import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "イアと迷える森人達",
    short_name: "I14A",
    description: "dummy placeholder btw",
    start_url: "/",
    display: "standalone",
    background_color: "#e2e2e2",
    theme_color: "#42dd23",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

export const dynamic = "force-static";
