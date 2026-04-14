"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { getArticleImage } from "@/lib/blog-utils";

const ITEMS_PER_PAGE = 9;

type Props = {
  posts: BlogPost[];
  categories: string[];
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}


export default function BlogList({ posts, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [page, setPage] = useState(1);

  const filtered =
    activeCategory === "Tous"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  };

  return (
    <>
      {/* Filtres catégories */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors cursor-pointer ${
              activeCategory === cat
                ? "bg-[#00B6DE] text-white border-[#00B6DE]"
                : "bg-white text-gray-600 border-gray-200 hover:border-[#00B6DE] hover:text-[#00B6DE]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille d'articles */}
      {paginated.length === 0 ? (
        <div className="text-center py-24 flex flex-col items-center gap-6">
          <div className="w-20 h-20 bg-[#F1F8EA] rounded-2xl flex items-center justify-center">
            <svg
              className="w-10 h-10 text-[#00B6DE]/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-900 mb-2">
              Aucun article dans cette catégorie
            </p>
            <p className="text-gray-500">D&apos;autres guides arrivent bientôt.</p>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginated.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#00B6DE]/30 transition-all flex flex-col"
            >
              {/* Image */}
              <div className="h-44 flex-shrink-0 overflow-hidden bg-[#F1F8EA]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getArticleImage(article)}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-[#00B6DE] bg-[#e0f7fd] px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {article.readingTime} min
                  </span>
                </div>
                <h2 className="text-lg font-extrabold text-gray-900 mb-2 group-hover:text-[#00B6DE] transition-colors leading-snug flex-1">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
                  {article.description}
                </p>
                <p className="text-xs text-gray-400">{formatDate(article.date)}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 text-gray-600 hover:border-[#00B6DE] hover:text-[#00B6DE] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            ←
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`w-10 h-10 rounded-full text-sm font-semibold transition-colors ${
                n === page
                  ? "bg-[#00B6DE] text-white"
                  : "border border-gray-200 text-gray-600 hover:border-[#00B6DE] hover:text-[#00B6DE]"
              }`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 text-gray-600 hover:border-[#00B6DE] hover:text-[#00B6DE] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
