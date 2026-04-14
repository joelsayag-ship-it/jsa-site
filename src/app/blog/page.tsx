import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import BlogList from "../components/BlogList";
import { getAllPosts, CATEGORIES } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog expert-comptable freelance — JSA Expertise",
  description:
    "Conseils pratiques pour freelances et indépendants : comptabilité, fiscalité, choix du statut juridique, optimisation de rémunération. Par JSA Expertise.",
  alternates: { canonical: "/blog" },
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
        <section className="bg-[#F1F8EA] pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <div className="mb-6">
                <Badge>
                  <span className="w-2 h-2 rounded-full bg-[#00B6DE] inline-block flex-shrink-0" />
                  Ressources freelances
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
                Blog JSA Expertise — Conseils pour freelances &amp; indépendants
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Guides pratiques sur la comptabilité, la fiscalité et le choix
                du statut juridique. Rédigés par Joël Sayag, expert&#8209;comptable
                spécialisé indépendants.
              </p>
            </div>
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
