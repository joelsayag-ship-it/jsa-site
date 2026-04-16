import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import BlogList from "../components/BlogList";
import { getAllPosts, CATEGORIES } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Actualités JSA Expertise — Conseils pour freelances et indépendants",
  description:
    "Conseils pratiques pour freelances et indépendants : comptabilité, fiscalité, choix du statut juridique, optimisation de rémunération. Par JSA Expertise.",
  alternates: { canonical: "/blog" },
  twitter: { card: 'summary_large_image' },
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-[#e0f7fd] text-[#0081A5] text-sm font-semibold px-4 py-2 rounded-full border border-[#80dff4]">
      {children}
    </span>
  );
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <main>
        {/* HERO */}
        <section className="bg-[#F1F8EA] pt-28 pb-10 md:pt-32 md:pb-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Actualités JSA Expertise — Conseils pour freelances et indépendants
            </h1>
          </div>
        </section>

        {/* ARTICLES */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <BlogList posts={posts} categories={[...CATEGORIES]} />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F1F8EA] py-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Une question sur votre situation ?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Pas besoin d&apos;attendre le prochain article. On répond sous 24h.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center bg-[#00B6DE] hover:bg-[#0081A5] text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              Prendre RDV gratuitement
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
