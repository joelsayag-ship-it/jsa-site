import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: number;
  published: boolean;
  image?: string;
};

export { getArticleImage } from "./blog-utils";

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(CONTENT_DIR);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, f), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? "",
        description: data.description ?? "",
        date: data.date ?? "",
        category: data.category ?? "",
        readingTime: data.readingTime ?? 5,
        published: data.published !== false,
        image: data.image,
      };
    })
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): {
  frontmatter: BlogPost;
  content: string;
} {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    frontmatter: {
      slug,
      title: data.title ?? "",
      description: data.description ?? "",
      date: data.date ?? "",
      category: data.category ?? "",
      readingTime: data.readingTime ?? 5,
      published: data.published !== false,
      image: data.image,
    },
    content,
  };
}

/**
 * Slugify aligné sur github-slugger (utilisé par rehype-slug) :
 * - minuscules
 * - garde les lettres Unicode (accents compris)
 * - supprime ponctuation et caractères spéciaux
 * - espaces → tirets
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/ /g, "-"); // chaque espace → tiret, identique à github-slugger (sans trim)
}

/** Extract H2 and H3 headings from raw MDX content */
export function extractHeadings(
  content: string
): { id: string; text: string; level: number }[] {
  const regex = /^(#{2,3}) (.+)$/gm;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const level = match[1].length; // 2 or 3
    const text = match[2].trim();
    headings.push({ id: slugify(text), text, level });
  }
  return headings;
}

/** Format a date string to French locale */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const CATEGORIES = [
  "Tous",
  "Fiscalité",
  "Statuts juridiques",
  "Comptabilité",
  "Rémunération",
  "Création d'entreprise",
  "Freelance & Indépendance",
  "Actualités",
] as const;

export type Category = (typeof CATEGORIES)[number];
