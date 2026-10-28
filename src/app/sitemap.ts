import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const SITE_URL = "https://www.jsaexpertise.com";

/**
 * Pages statiques du site.
 * `updated` = date de la dernière modification significative du contenu.
 * Mettre à jour cette date à chaque modification réelle de la page :
 * Google n'utilise le lastmod que s'il est fiable.
 */
const STATIC_PAGES: {
  path: string;
  updated?: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", updated: "2026-10-27", changeFrequency: "weekly", priority: 1 },
  { path: "/expert-comptable-freelance", updated: "2026-10-23", changeFrequency: "monthly", priority: 0.9 },
  { path: "/expert-comptable-freelance-paris-12", updated: "2026-10-23", changeFrequency: "monthly", priority: 0.9 },
  { path: "/expert-comptable-freelance-charenton-le-pont", updated: "2026-10-23", changeFrequency: "monthly", priority: 0.9 },
  { path: "/expert-comptable-freelance-vincennes", changeFrequency: "monthly", priority: 0.8 },
  { path: "/expert-comptable-freelance-saint-mande", changeFrequency: "monthly", priority: 0.8 },
  { path: "/expert-comptable-freelance-saint-maurice", changeFrequency: "monthly", priority: 0.8 },
  { path: "/expert-comptable-freelance-joinville-le-pont", changeFrequency: "monthly", priority: 0.8 },
  { path: "/attestation-expert-comptable", updated: "2026-10-27", changeFrequency: "monthly", priority: 0.9 },
  { path: "/attestation-expert-comptable/revenus", updated: "2026-10-27", changeFrequency: "monthly", priority: 0.8 },
  { path: "/attestation-expert-comptable/chiffre-affaires", updated: "2026-10-27", changeFrequency: "monthly", priority: 0.8 },
  { path: "/attestation-expert-comptable/business-plan-previsionnel", updated: "2026-10-28", changeFrequency: "monthly", priority: 0.8 },
  { path: "/attestation-expert-comptable/fonds-propres", updated: "2026-10-27", changeFrequency: "monthly", priority: 0.8 },
  { path: "/attestation-expert-comptable/france-travail", updated: "2026-10-27", changeFrequency: "monthly", priority: 0.8 },
  { path: "/attestation-expert-comptable/bpi", updated: "2026-10-27", changeFrequency: "monthly", priority: 0.8 },
  { path: "/qui-sommes-nous", changeFrequency: "monthly", priority: 0.7 },
  { path: "/ressources", changeFrequency: "monthly", priority: 0.7 },
  { path: "/ressources/simulateur-indemnites-kilometriques", updated: "2026-10-23", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ressources/simulateur-sasu-eurl", updated: "2026-10-26", changeFrequency: "monthly", priority: 0.8 },
  { path: "/simulateur-impot-revenu", updated: "2026-10-26", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/mentions-legales", changeFrequency: "yearly", priority: 0.2 },
  { path: "/politique-confidentialite", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latestPost = posts[0]?.updated || posts[0]?.date;

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((p) => {
    const lastModified = p.path === "/blog" ? latestPost : p.updated;
    return {
      url: p.path === "/" ? SITE_URL : `${SITE_URL}${p.path}`,
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    };
  });

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updated || post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...postEntries];
}
