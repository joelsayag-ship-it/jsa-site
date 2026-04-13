import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Comptabilité freelance Paris & Val-de-Marne — JSA Expertise",
  description:
    "Cabinet comptable 100% digital spécialisé freelances. Tenue comptable, TVA, bilan, conseil illimité. Basé à Charenton-le-Pont, on accompagne les indépendants à Paris, Vincennes, Saint-Mandé.",
};

const FAQS = [
  {
    q: "Combien coûte un expert-comptable pour freelance ?",
    a: "Le tarif dépend de votre structure juridique et de votre chiffre d'affaires. Pour un freelance en SASU ou EURL, comptez en général entre 150 € et 350 € HT par mois. Nous proposons des devis sur mesure et gratuits — sans engagement.",
  },
  {
    q: "Quand faut-il faire appel à un expert-comptable ?",
    a: "Dès que vous dépassez les seuils de la micro-entreprise, ou que vous créez une société (SASU, EURL…), un expert-comptable devient indispensable. Mais même en micro, un accompagnement dès le départ vous évite des erreurs coûteuses.",
  },
  {
    q: "SASU ou micro-entreprise : que choisir en tant que freelance ?",
    a: "La micro-entreprise est simple mais limitée (plafonds de CA, pas d'optimisation possible). La SASU permet de se verser dividendes et salaire, d'optimiser vos charges et d'avoir une image plus professionnelle. Nous vous aidons à choisir selon votre situation.",
  },
  {
    q: "Puis-je changer de cabinet en cours d'année ?",
    a: "Oui, vous pouvez changer d'expert-comptable à tout moment. Nous gérons la reprise de dossier et les transferts de documents avec votre ancien cabinet, sans interruption de service.",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-turquoise-50 text-turquoise-700 text-sm font-semibold px-4 py-2 rounded-full border border-turquoise-200">
      {children}
    </span>
  );
}

export default function ComptabiliteFreelance() {
  return (
    <>
      <main>

        {/* ── 1. HERO ─────────────────────────────────────── */}
        <section className="min-h-[80vh] bg-[#F1F8EA] pt-16 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 w-full">
            <div className="max-w-3xl">
              <div className="mb-6">
                <Badge>
                  <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                  Cabinet spécialisé freelances
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
                Comptabilité freelance à{" "}
                <span className="text-turquoise-500">Paris & Val-de-Marne</span>
                {" "}— JSA Expertise
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
                Un cabinet comptable 100% digital pensé pour les indépendants. On prend en charge
                toute votre comptabilité — tenue des comptes, TVA, bilan, optimisation fiscale —
                pour que vous vous concentriez sur votre activité.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors"
                >
                  Prendre RDV gratuitement
                </Link>
                <Link
                  href="/#offre"
                  className="border-2 border-turquoise-500 text-turquoise-500 hover:bg-turquoise-50 font-bold text-lg px-8 py-4 rounded-full transition-colors"
                >
                  Voir nos formules
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-gray-500">
                {["Premier RDV gratuit", "Réponse sous 24h", "Sans engagement"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-turquoise-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. POURQUOI EXTERNALISER ─────────────────────── */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14 flex flex-col items-center">
              <Badge>
                <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                Pourquoi nous confier votre comptabilité ?
              </Badge>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mt-4">
                Externaliser, c&apos;est gagner sur tous les tableaux
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6 text-turquoise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Gagnez du temps",
                  text: "Finies les heures passées à jongler entre factures, déclarations de TVA et obligations fiscales. On s'occupe de tout, vous vous concentrez sur vos missions.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-turquoise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Sécurité fiscale totale",
                  text: "Zéro échéance manquée, zéro erreur de TVA. Un expert-comptable inscrit à l'Ordre vous garantit une comptabilité conforme et à jour en permanence.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-turquoise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  title: "Optimisation fiscale",
                  text: "Rémunération en dividendes, frais déductibles, choix du régime fiscal… Nous identifions chaque levier pour maximiser votre revenu net en toute légalité.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-[#F1F8EA] rounded-2xl p-8 flex flex-col gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. CE QUI EST INCLUS ─────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <Badge>
                  <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                  Notre mission comptable
                </Badge>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mt-4 mb-8">
                  Tout est inclus,<br />
                  <span className="text-turquoise-500">rien à gérer</span>
                </h2>
                <ul className="space-y-4">
                  {[
                    { label: "Tenue comptable complète", desc: "Saisie, lettrage, rapprochement bancaire automatisé via Tiime." },
                    { label: "Déclarations de TVA", desc: "Mensuelle ou trimestrielle selon votre régime, envoi automatique." },
                    { label: "Bilan & liasse fiscale", desc: "Clôture annuelle, bilan certifié, dépôt des comptes au Greffe." },
                    { label: "Conseil illimité", desc: "Questions en illimité par mail ou téléphone. Réponse sous 24h garantie." },
                    { label: "Accès application Tiime", desc: "Facturation, notes de frais, tableau de bord financier en temps réel." },
                    { label: "Optimisation de rémunération", desc: "Mix salaire / dividendes pour maximiser votre revenu net chaque année." },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-turquoise-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                        <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-8 py-4 rounded-full transition-colors"
                  >
                    Demander un devis gratuit →
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-6 bg-turquoise-500/10 rounded-3xl blur-2xl" />
                  <Image
                    src="/images/tiime-dashboard.png"
                    alt="Application Tiime — tableau de bord comptable freelance"
                    width={600}
                    height={420}
                    className="relative rounded-2xl shadow-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. POUR QUEL PROFIL ──────────────────────────── */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14 flex flex-col items-center">
              <Badge>
                <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                Nos clients
              </Badge>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mt-4">
                Pour quel profil ?
              </h2>
              <p className="text-xl text-gray-500 mt-4 max-w-xl">
                JSA Expertise accompagne tous les indépendants, quelle que soit leur activité.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { label: "Consultants IT", icon: "💻" },
                { label: "Développeurs", icon: "⌨️" },
                { label: "Designers", icon: "🎨" },
                { label: "Coachs & formateurs", icon: "🎯" },
                { label: "Agences & studios", icon: "🏢" },
              ].map((p) => (
                <div
                  key={p.label}
                  className="flex flex-col items-center gap-3 bg-[#F1F8EA] border border-turquoise-100 rounded-2xl px-4 py-6 text-center hover:border-turquoise-400 hover:shadow-md transition-all"
                >
                  <span className="text-3xl">{p.icon}</span>
                  <span className="font-bold text-gray-800 text-sm leading-tight">{p.label}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-8">
              Vous ne vous reconnaissez pas dans cette liste ?{" "}
              <Link href="/#contact" className="text-turquoise-500 hover:underline font-semibold">
                Contactez-nous quand même
              </Link>
              , nous accompagnons tous les profils d&apos;indépendants.
            </p>
          </div>
        </section>

        {/* ── 5. FAQ ───────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQS.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            }),
          }}
        />
        <section className="bg-[#F1F8EA] py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14 flex flex-col items-center">
              <Badge>
                <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                Questions fréquentes
              </Badge>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mt-4">
                FAQ Comptabilité freelance
              </h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-base font-extrabold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. CTA FINAL ─────────────────────────────────── */}
        <section className="bg-[#00B6DE] py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
              Parlons de votre situation
            </h2>
            <p className="text-white/80 text-xl mb-10 leading-relaxed">
              Premier rendez-vous gratuit et sans engagement. On analyse votre situation et
              on vous propose la solution la plus adaptée.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="bg-white text-[#00B6DE] hover:bg-gray-50 font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg"
              >
                Prendre RDV gratuitement
              </Link>
              <Link
                href="tel:+33660735546"
                className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-4 rounded-full transition-colors"
              >
                06 60 73 55 46
              </Link>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 mt-10 text-white/70 text-sm">
              {["Premier RDV gratuit", "Réponse sous 24h", "Sans engagement"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white/90 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png.png"
              alt="JSA Expertise"
              width={999}
              height={129}
              className="h-7 w-auto object-contain"
            />
          </div>
          <p>© {new Date().getFullYear()} JSA Expertise. Tous droits réservés.</p>
          <div className="flex gap-5">
            <Link href="/mentions-legales" className="hover:text-turquoise-400 transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-turquoise-400 transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
