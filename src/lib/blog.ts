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

/** Slugify matching rehype-slug behavior */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-");
}

/** Extract H2 headings from raw MDX content */
export function extractHeadings(
  content: string
): { id: string; text: string }[] {
  const regex = /^## (.+)$/gm;
  const headings: { id: string; text: string }[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const text = match[1].trim();
    headings.push({ id: slugify(text), text });
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
