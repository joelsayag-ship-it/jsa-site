// Utilitaires sans dépendance Node.js — utilisables côté client et serveur

const CATEGORY_KEYWORDS: Record<string, string> = {
  "Fiscalité": "tax finance",
  "Statuts juridiques": "business contract",
  "Comptabilité": "accounting",
  "Rémunération": "salary money",
  "Création d'entreprise": "startup entrepreneur",
  "Freelance & Indépendance": "freelance laptop",
  "Actualités": "news business",
};

export function getArticleImage(post: {
  image?: string;
  category: string;
}): string {
  if (post.image) return post.image;
  const keyword = CATEGORY_KEYWORDS[post.category] ?? "business";
  return `https://source.unsplash.com/featured/800x400?${encodeURIComponent(keyword)}`;
}
