import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Expert-comptable freelance Charenton-le-Pont (94) | JSA Expertise",
  description:
    "JSA Expertise, cabinet d'expertise comptable installé à Charenton-le-Pont (94220). Spécialisé freelances et indépendants : création SASU/EURL, comptabilité, fiscalité. RDV présentiel ou visio.",
  alternates: {
    canonical: "https://www.jsaexpertise.com/expert-comptable-freelance-charenton-le-pont",
  },
  twitter: { card: 'summary_large_image' },
};

const FAQS = [
  {
    q: "Où se trouve exactement le cabinet JSA Expertise à Charenton-le-Pont ?",
    a: "Au 10 rue du Président Kennedy à Charenton-le-Pont (94220), à trois minutes à pied de la station Charenton-Écoles (métro ligne 8). Le cabinet est ouvert du lundi au vendredi sur rendez-vous, et accessible facilement depuis Bercy 2, le quartier de Conflans ou la ZAC Charenton-Bercy.",
  },
  {
    q: "Quels profils de freelances accompagnez-vous principalement à Charenton ?",
    a: "Des consultants en management et transformation digitale, des indépendants tech (développeurs, product managers, architectes data), des freelances en stratégie d'entreprise et en finance. Beaucoup viennent du quartier Bercy 2 ou de la ZAC Charenton-Bercy en pleine mutation. Leur chiffre d'affaires se situe en général entre 80 000 et 200 000 euros par an.",
  },
  {
    q: "Le quartier Charenton-Bercy en cours de transformation est-il intéressant pour un freelance ?",
    a: "Oui, c'est l'un des secteurs les plus dynamiques du 94. La grande ZAC en cours de construction prévoit à terme plusieurs milliers de logements et des dizaines de milliers de mètres carrés de bureaux. Plusieurs de nos clients y résident déjà ou envisagent de s'y installer. L'accès direct à Paris et la proximité immédiate du bois de Vincennes en font une zone très demandée.",
  },
  {
    q: "Puis-je vraiment venir vous rencontrer en physique au cabinet de Charenton ?",
    a: "Absolument. Le premier rendez-vous se fait souvent en visio pour gagner du temps, mais beaucoup de clients charentonnais préfèrent passer au cabinet ensuite : c'est à dix minutes à pied ou en métro depuis la mairie, Conflans ou Bercy 2. Aucune obligation dans un sens ou dans l'autre.",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-turquoise-50 text-turquoise-700 text-sm font-semibold px-4 py-2 rounded-full border border-turquoise-200">
      {children}
    </span>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="w-5 h-5 rounded-full bg-turquoise-500 flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-gray-700 text-sm leading-relaxed">{children}</span>
    </li>
  );
}

export default function CharentonPage() {
  return (
    <>
      <Header />
      <main className="pt-16">

        {/* ── HERO ─────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Badge>
                  <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                  Cabinet basé à Charenton-le-Pont
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5">
                Expert-comptable freelance à{" "}
                <span className="text-turquoise-500">Charenton-le-Pont</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Notre cabinet est installé au 10 rue du Président Kennedy, à trois minutes du métro Charenton-Écoles. Un avantage rare pour les freelances du 94 : un expert-comptable spécialisé, physiquement dans votre ville, qui connaît le tissu local.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" className="bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors">
                  Prendre RDV gratuitement
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-5 mt-6 text-sm text-gray-500">
                {["Cabinet physique à Charenton", "Premier RDV gratuit", "Réponse sous 24h"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-turquoise-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-turquoise-100 rounded-3xl scale-105 -rotate-2" />
                <Image
                  src="/images/joel.png"
                  alt="Joël Sayag, expert-comptable à Charenton-le-Pont"
                  width={380}
                  height={460}
                  className="relative rounded-3xl object-cover shadow-xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-2.5 border border-gray-100">
                  <p className="text-xs font-bold text-gray-900">Joël Sayag</p>
                  <p className="text-xs text-gray-400">Expert-comptable · 10 ans d'expérience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── INTRO LOCAL ───────────────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Charenton-le-Pont, une ville à part
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Une ville résidentielle qui attire de plus en plus d'indépendants
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Charenton-le-Pont (94220) occupe une position singulière dans l'Est parisien. Coincée entre le bois de Vincennes au nord, la Seine au sud-est et le 12e arrondissement à l'ouest, la ville conjugue calme résidentiel et hyper-accessibilité. Trente mille habitants, deux stations de métro sur la ligne 8 (Charenton-Écoles et Liberté), un accès direct à Paris en moins de dix minutes : on comprend pourquoi tant de cadres supérieurs y posent leurs valises.
              </p>
              <p>
                La transformation du quartier Charenton-Bercy en grande ZAC accélère ce mouvement. Avec ses nouveaux logements, ses bureaux et ses commerces qui sortent de terre, le secteur attire de plus en plus de freelances tech, designers UX et consultants en stratégie qui cherchent un cadre de vie cohérent avec leur activité indépendante.
              </p>
              <p>
                Les freelances que nous accompagnons à Charenton ont un profil récurrent. Anciens salariés dans des grandes structures (banque, conseil, tech), passés à leur compte entre 35 et 50 ans pour reprendre la main sur leur temps. Leur chiffre d'affaires se situe en général entre 80 000 et 200 000 euros par an, avec des enjeux fiscaux concrets : optimisation de la rémunération en SASU, arbitrage entre revenus immédiats et dividendes différés, gestion fine des charges déductibles. C'est exactement pour ces situations que nous existons.
              </p>
            </div>
          </div>
        </section>

        {/* ── POURQUOI CHOISIR JSA À CHARENTON ──────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Pourquoi nous choisir
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Pourquoi choisir JSA Expertise à Charenton-le-Pont
            </h2>
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              {[
                {
                  title: "Cabinet physique dans votre ville",
                  desc: "Au 10 rue du Président Kennedy, à trois minutes à pied de Charenton-Écoles (ligne 8). Vous pouvez passer au cabinet sans organiser un déplacement à l'autre bout de Paris.",
                },
                {
                  title: "RDV présentiel ou visio, vous choisissez",
                  desc: "Le premier rendez-vous se fait souvent en visio pour gagner du temps. Si vous préférez le présentiel, on bloque un créneau au cabinet. Aucune obligation dans un sens ou dans l'autre.",
                },
                {
                  title: "Connaissance fine du tissu local",
                  desc: "Nous travaillons avec des freelances de Bercy 2, du centre-ville, de Conflans, de la nouvelle ZAC Charenton-Bercy. Nous connaissons les enjeux concrets du 94 : CFE, taxe foncière, contraintes locales.",
                },
                {
                  title: "Réponse garantie sous 24h",
                  desc: "Un freelance ne peut pas attendre dix jours pour une réponse sur un devis ou une facture. Notre engagement : une réponse sous 24h ouvrées, par mail ou téléphone.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-extrabold text-gray-900 mb-2 text-base">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FREELANCES À CHARENTON ────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Freelances et quartiers
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Freelances et indépendants à Charenton-le-Pont
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-7">
              <p>
                Charenton concentre une population active particulière : une part importante de cadres et professions intellectuelles supérieures, ce qui en fait l'une des communes du Val-de-Marne avec la plus forte densité de freelances et professions libérales par habitant. Le revenu médian y est nettement supérieur à la moyenne départementale.
              </p>
              <p>
                Les activités prédominantes que nous accompagnons : conseil en management et stratégie, développement logiciel, transformation digitale, communication, métiers de la data, finance d'entreprise. Beaucoup de profils ex-grands cabinets ou ex-grandes entreprises tech qui ont structuré leur activité en SASU ou EURL.
              </p>
            </div>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Quartiers et lieux emblématiques</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "Centre-ville (Mairie)", desc: "Cœur historique, commerces" },
                { label: "Bercy 2", desc: "Quartier d'affaires, bureaux" },
                { label: "Conflans", desc: "Résidentiel, bord de Seine" },
                { label: "ZAC Charenton-Bercy", desc: "Nouveau quartier en mutation" },
                { label: "Quartier Liberté", desc: "Calme, proche du bois" },
                { label: "Bord de Marne", desc: "Sud de la commune" },
              ].map((q) => (
                <div key={q.label} className="bg-[#F1F8EA] border border-turquoise-100 rounded-xl px-4 py-3">
                  <p className="text-sm font-bold text-gray-900">{q.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{q.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TÉMOIGNAGE LOCAL ──────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-turquoise-100">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed italic mb-5">
                "Joël m'accompagne depuis la création de ma SASU. Réactif, clair, toujours disponible. Et le fait de pouvoir le rencontrer en physique à dix minutes de chez moi quand j'ai besoin, ça change vraiment la donne par rapport à un cabinet en ligne."
              </p>
              <div>
                <p className="font-bold text-gray-900 text-sm">Marc R.</p>
                <p className="text-gray-500 text-xs">Consultant en transformation digitale, Charenton-le-Pont</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA MILIEU ────────────────────────────────── */}
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-3xl mx-auto bg-[#F1F8EA] rounded-3xl p-8 md:p-10 text-center border border-turquoise-100">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              Envie d'un premier échange sans engagement ?
            </h2>
            <p className="text-gray-600 mb-6">
              Trente minutes en visio ou au cabinet pour faire le point sur votre situation. Réponse sous 24h.
            </p>
            <Link href="/#contact" className="inline-block bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors">
              Prendre RDV gratuitement
            </Link>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 flex flex-col items-center">
              <Badge><span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />Questions fréquentes</Badge>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-4">FAQ Charenton-le-Pont</h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-extrabold text-gray-900 mb-2 text-base">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAILLAGE ──────────────────────────────────── */}
        <section className="bg-white py-10 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">Autres villes accompagnées</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Vincennes", href: "/expert-comptable-freelance-vincennes" },
                { label: "Saint-Mandé", href: "/expert-comptable-freelance-saint-mande" },
                { label: "Saint-Maurice", href: "/expert-comptable-freelance-saint-maurice" },
                { label: "Joinville-le-Pont", href: "/expert-comptable-freelance-joinville-le-pont" },
                { label: "Paris 12e", href: "/expert-comptable-freelance-paris-12" },
                { label: "Simulateur charges", href: "/simulateur-charges" },
                { label: "Actualités", href: "/blog" },
                { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="bg-[#F1F8EA] border border-turquoise-100 hover:border-turquoise-400 rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 hover:text-turquoise-600 transition-all text-center">{l.label}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FIN ───────────────────────────────────── */}
        <section className="bg-[#00B6DE] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Parlons de votre activité</h2>
            <p className="text-white/80 text-lg mb-8">Premier rendez-vous gratuit et sans engagement. On analyse votre situation et on vous conseille le meilleur statut.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="bg-white text-[#00B6DE] hover:bg-gray-50 font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg">Prendre RDV gratuitement</Link>
              <Link href="tel:+33660735546" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-4 rounded-full transition-colors">06 60 73 55 46</Link>
            </div>
            <p className="text-white/60 text-sm mt-5">Réponse sous 24h garantie</p>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
