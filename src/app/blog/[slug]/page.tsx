import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import Footer from "../../components/Footer";
import CTABlog from "../../components/CTABlog";
import {
  getAllPosts,
  getPostBySlug,
  extractHeadings,
  formatDate,
} from "@/lib/blog";

// ── Types ──────────────────────────────────────────────────────────────────

type Params = Promise<{ slug: string }>;

// ── Static generation ──────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

// ── Metadata ───────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter: fm } = getPostBySlug(slug);
    return {
      title: `${fm.title} — JSA Expertise`,
      description: fm.description,
      alternates: { canonical: `/blog/${slug}` },
      openGraph: {
        title: fm.title,
        description: fm.description,
        type: "article",
        publishedTime: fm.date,
      },
    };
  } catch {
    return { title: "Article — JSA Expertise" };
  }
}

// ── CTA textes par catégorie ───────────────────────────────────────────────

const CATEGORY_CTA: Record<string, string> = {
  Fiscalité:
    "Votre situation fiscale est unique. Joël analyse votre cas et vous propose les meilleures options d'optimisation.",
  "Statuts juridiques":
    "Encore incertain sur votre statut ? Joël compare les scénarios chiffrés pour votre activité spécifique.",
  Comptabilité:
    "Déléguer votre comptabilité à un expert, c'est gagner du temps et éviter les erreurs coûteuses.",
  Rémunération:
    "La bonne stratégie de rémunération peut vous faire économiser plusieurs milliers d'euros par an.",
  "Création d'entreprise":
    "Vous créez votre entreprise ? Partez sur les bonnes bases avec un accompagnement dès le départ.",
  "Freelance & Indépendance":
    "Chaque indépendant a sa situation particulière. Joël vous accompagne avec des conseils personnalisés.",
  Actualités:
    "Des questions sur l'impact de ces actualités sur votre activité ? Joël vous éclaire.",
};

// ── MDX components ─────────────────────────────────────────────────────────

const mdxComponents = {
  CTABlog,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-10 mb-4 leading-tight"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl font-extrabold text-gray-900 mt-10 mb-4 leading-tight"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-xl font-bold text-gray-800 mt-8 mb-3"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-gray-700 leading-relaxed mb-5" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-outside pl-6 mb-5 space-y-2 text-gray-700" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-outside pl-6 mb-5 space-y-2 text-gray-700" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-gray-900" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic" {...props} />
  ),
  hr: () => <hr className="my-8 border-gray-200" />,
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className="border-l-4 border-[#00B6DE] pl-5 py-1 my-6 text-gray-600 italic"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-gray-100 text-[#0081A5] px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLElement>) => (
    <pre
      className="bg-gray-900 text-gray-100 rounded-xl p-5 overflow-x-auto my-6 text-sm"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-[#00B6DE] hover:text-[#0081A5] underline underline-offset-2 transition-colors"
      {...props}
    />
  ),
};

// ── Page ───────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;

  let frontmatter: ReturnType<typeof getPostBySlug>["frontmatter"];
  let content: string;

  try {
    const post = getPostBySlug(slug);
    frontmatter = post.frontmatter;
    content = post.content;
  } catch {
    notFound();
  }

  const headings = extractHeadings(content);
  const ctaText =
    CATEGORY_CTA[frontmatter.category] ??
    "Cet article vous concerne ? Joël est disponible pour répondre à toutes vos questions.";

  // Articles similaires (même catégorie, jusqu'à 3, hors article actuel)
  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.category === frontmatter.category && p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <main className="pt-20">
        {/* ── Article header ── */}
        <section className="bg-[#F1F8EA] pt-12 pb-10 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-gray-500">
              <Link href="/blog" className="text-[#00B6DE] hover:underline font-medium">
                ← Actualités
              </Link>
              <span>/</span>
              <span className="bg-[#e0f7fd] text-[#0081A5] px-3 py-1 rounded-full font-semibold text-xs">
                {frontmatter.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              {frontmatter.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(frontmatter.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {frontmatter.readingTime} min de lecture
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Joël Sayag, expert-comptable
              </span>
            </div>
          </div>
        </section>

        {/* ── Body ── */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-16 items-start">

              {/* Contenu MDX */}
              <article className="min-w-0">
                <MDXRemote
                  source={content}
                  components={mdxComponents}
                  options={{
                    mdxOptions: {
                      rehypePlugins: [rehypeSlug],
                    },
                  }}
                />
              </article>

              {/* Sidebar : Table des matières */}
              {headings.length > 0 && (
                <aside className="hidden lg:block sticky top-24">
                  <div className="bg-[#F1F8EA] rounded-2xl p-6">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                      Sommaire
                    </p>
                    <nav className="flex flex-col gap-2">
                      {headings.map((h) => (
                        <a
                          key={h.id}
                          href={`#${h.id}`}
                          className="text-sm text-gray-600 hover:text-[#00B6DE] transition-colors leading-snug py-0.5 border-l-2 border-transparent hover:border-[#00B6DE] pl-3"
                        >
                          {h.text}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Mini CTA sidebar */}
                  <div className="mt-6 bg-[#00B6DE] rounded-2xl p-6 text-white">
                    <p className="font-bold text-sm mb-1">Besoin d&apos;un conseil ?</p>
                    <p className="text-white/80 text-xs mb-4">
                      Premier RDV gratuit · Réponse sous 24h
                    </p>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center bg-white text-[#00B6DE] hover:bg-[#e0f7fd] font-bold text-xs px-4 py-2.5 rounded-full transition-colors w-full justify-center"
                    >
                      Parler à Joël →
                    </Link>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </section>

        {/* ── CTA final ── */}
        <section className="bg-[#F1F8EA] py-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 bg-[#00B6DE]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-[#00B6DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Cet article vous concerne ?
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-xl mx-auto">
              {ctaText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/#contact"
                className="inline-flex items-center bg-[#00B6DE] hover:bg-[#0081A5] text-white font-bold px-8 py-4 rounded-full transition-colors"
              >
                Prendre RDV gratuitement
              </Link>
              <a
                href="tel:+33660735546"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-[#00B6DE] font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 60 73 55 46
              </a>
            </div>
          </div>
        </section>

        {/* ── Articles similaires ── */}
        {related.length > 0 && (
          <section className="bg-white py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
                Articles similaires
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#00B6DE]/30 transition-all flex flex-col"
                  >
                    <div className="bg-[#F1F8EA] h-36 flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-[#00B6DE]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-[#00B6DE] bg-[#e0f7fd] px-2.5 py-0.5 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-400">{article.readingTime} min</span>
                      </div>
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-[#00B6DE] transition-colors leading-snug flex-1">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-3">{formatDate(article.date)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
