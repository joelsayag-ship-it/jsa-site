import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

const SITE_URL = "https://www.jsaexpertise.com";
const PAGE_URL = `${SITE_URL}/expert-comptable-consultant-informatique`;

export const metadata: Metadata = {
  title: "Expert-comptable consultant informatique et développeur freelance",
  description:
    "Expert-comptable pour consultants IT, développeurs et freelances en régie via une ESN : SASU ou EURL, TVA, rémunération, référencement. Premier RDV gratuit.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Expert-comptable pour consultants informatiques et développeurs freelance",
    description:
      "SASU ou EURL, TVA, rémunération, missions en régie via une ESN : un expert-comptable qui connaît le métier de freelance IT.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const FAQS = [
  {
    q: "SASU ou EURL : quel statut pour un développeur ou un consultant IT ?",
    a: "Il n'y a pas de réponse unique. La SASU donne au dirigeant le régime général de la Sécurité sociale et beaucoup de souplesse sur la rémunération, avec des cotisations plus élevées sur le salaire. L'EURL, avec un gérant travailleur non salarié, coûte moins cher en cotisations pour un même revenu, avec une protection sociale plus légère. Le bon choix dépend de votre TJM, du nombre de jours facturés, de l'ARE éventuelle et de vos projets (prêt, retraite, trésorerie). Nous chiffrons les deux options avant la création.",
  },
  {
    q: "La micro-entreprise suffit-elle pour un freelance informatique ?",
    a: "Pour tester une activité ou facturer quelques missions, oui. Mais avec un TJM de consultant et une mission à temps plein, le plafond de chiffre d'affaires des prestations de services est vite atteint, et l'abattement forfaitaire ne tient pas compte de vos frais réels. La plupart des consultants IT passent en société au bout de quelques mois.",
  },
  {
    q: "Peut-on travailler en régie via une ESN avec sa SASU ou son EURL ?",
    a: "Oui, c'est le cas le plus courant. L'ESN signe un contrat de sous-traitance avec votre société et vous facture au client final. Pour vous référencer, elle demande en général un extrait Kbis, l'attestation de vigilance Urssaf, une attestation d'assurance responsabilité civile professionnelle et, parfois, votre chiffre d'affaires des derniers exercices. Nous vous aidons à réunir ces pièces et à suivre les délais de paiement de l'ESN.",
  },
  {
    q: "Comment facturer un client à l'étranger ?",
    a: "Pour une prestation de services à un client professionnel établi dans un autre pays de l'Union européenne, vous facturez en principe hors TVA française, avec son numéro de TVA intracommunautaire et la mention d'autoliquidation. Hors Union européenne, les règles dépendent du lieu d'établissement du client. Nous vérifions chaque nouveau cas avec vous avant la première facture.",
  },
  {
    q: "Combien coûte un expert-comptable pour un consultant IT ?",
    a: "Pour une SASU ou une EURL, comptez en général entre 150 et 250 € HT par mois pour un accompagnement complet : tenue comptable, TVA, bilan, liasse fiscale et conseil. Chez JSA Expertise, le prix est fixé sur devis selon votre volume, et le premier rendez-vous est gratuit.",
  },
  {
    q: "Je suis en portage salarial, est-ce le bon moment pour passer en société ?",
    a: "Le portage est simple, mais ses frais de gestion et les cotisations salariales réduisent fortement le net. Dès que la mission est stable, la société devient souvent plus intéressante. Nous comparons les deux avec vos chiffres réels : TJM, jours facturés, frais.",
  },
];

const SITUATIONS = [
  {
    titre: "Vous quittez votre CDI d'ESN pour la régie",
    texte:
      "Choix entre SASU et EURL, création, cumul avec l'ARE ou demande d'ARCE, ouverture du compte pro : on prépare tout avant votre première facture.",
  },
  {
    titre: "Votre micro-entreprise devient trop petite",
    texte:
      "Plafond de chiffre d'affaires en vue, TVA à facturer, frais réels qui dépassent l'abattement : on chiffre le passage en société et le bon moment pour le faire.",
  },
  {
    titre: "Vous travaillez via une ESN ou une plateforme",
    texte:
      "Contrat de sous-traitance, pièces de référencement, délais de paiement à 45 ou 60 jours : on suit votre trésorerie et vos encaissements.",
  },
  {
    titre: "Vous avez des clients à l'étranger",
    texte:
      "Client européen ou hors Union européenne, facturation en devises : on vérifie la TVA applicable et les mentions de chaque facture.",
  },
];

const ETAPES = [
  {
    titre: "Avant la création",
    texte:
      "Simulation SASU contre EURL à partir de votre TJM et de vos jours facturés, prise en compte de l'ARE, choix de la rémunération de départ.",
  },
  {
    titre: "La création",
    texte:
      "Statuts, immatriculation, compte bancaire pro, numéro de TVA intracommunautaire : votre société est prête pour signer avec l'ESN.",
  },
  {
    titre: "Chaque mois",
    texte:
      "Banque synchronisée dans Tiime, justificatifs photographiés, TVA déclarée à temps, réponse à vos questions sous 24 h.",
  },
  {
    titre: "En fin d'exercice",
    texte:
      "Bilan, liasse fiscale, arbitrage salaire et dividendes, et point sur l'année suivante : TJM, frais, projets personnels.",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-turquoise-50 text-turquoise-700 text-sm font-semibold px-4 py-2 rounded-full border border-turquoise-200">
      <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
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

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function ExpertComptableConsultantInformatiquePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Expert-comptable pour consultants informatiques et développeurs freelance",
          serviceType: "Expertise comptable",
          url: PAGE_URL,
          areaServed: { "@type": "State", name: "Île-de-France" },
          audience: { "@type": "Audience", audienceType: "Consultants informatiques et développeurs freelance" },
          provider: { "@type": "AccountingService", name: "JSA Expertise", url: SITE_URL, telephone: "+33660735546" },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Expert-comptable freelance", item: `${SITE_URL}/expert-comptable-freelance` },
            { "@type": "ListItem", position: 3, name: "Consultants informatiques et développeurs", item: PAGE_URL },
          ],
        }}
      />

      <main className="pt-16">
        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <nav aria-label="Fil d'Ariane" className="text-sm text-gray-500 mb-6">
                <Link href="/" className="hover:text-turquoise-600">Accueil</Link>
                <span className="mx-2">›</span>
                <Link href="/expert-comptable-freelance" className="hover:text-turquoise-600">Expert-comptable freelance</Link>
                <span className="mx-2">›</span>
                <span className="text-gray-700">Consultants IT</span>
              </nav>
              <div className="mb-5">
                <Badge>Consultants IT, développeurs, data, devops</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5">
                Expert-comptable pour consultants informatiques et{" "}
                <span className="text-turquoise-500">développeurs freelance</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Mission en régie via une ESN, TJM élevé, un ou deux gros clients, du matériel et des abonnements à
                déduire : votre comptabilité a ses particularités. JSA Expertise accompagne les freelances de
                l&apos;informatique en SASU, en EURL ou en micro-entreprise, en Île-de-France et 100 % en ligne.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors"
                >
                  Prendre RDV gratuitement
                </a>
                <Link
                  href="/ressources/simulateur-sasu-eurl"
                  className="border-2 border-turquoise-500 text-turquoise-700 hover:bg-turquoise-50 font-bold px-7 py-3 rounded-full transition-colors"
                >
                  Simuler SASU ou EURL
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-5">Premier rendez-vous gratuit · Réponse sous 24 h</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-turquoise-100 rounded-3xl scale-105 -rotate-2" />
                <Image
                  src="/images/joel.png"
                  alt="Joël Sayag, expert-comptable des consultants informatiques et développeurs freelance"
                  width={340}
                  height={410}
                  className="relative rounded-3xl object-cover shadow-xl"
                  priority
                />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-2.5 border border-gray-100">
                  <p className="text-xs font-bold text-gray-900">Joël Sayag</p>
                  <p className="text-xs text-gray-400">Expert-comptable inscrit à l&apos;Ordre</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SITUATIONS ────────────────────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center flex flex-col items-center mb-10">
              <Badge>Votre situation</Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4">
                Les situations que l&apos;on rencontre chez les freelances IT
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {SITUATIONS.map((s) => (
                <div key={s.titre} className="bg-[#F1F8EA] rounded-2xl p-6">
                  <h3 className="font-extrabold text-gray-900 mb-2 text-lg">{s.titre}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.texte}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CE QUE COMPREND L'ACCOMPAGNEMENT ─────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>L&apos;accompagnement</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Ce que nous faisons pour vous
            </h2>
            <p className="text-gray-600 leading-relaxed mb-7">
              Un forfait mensuel, un seul interlocuteur qui connaît votre dossier, et des réponses chiffrées plutôt
              que des généralités.
            </p>
            <ul className="space-y-4">
              <CheckItem>
                <strong>Tenue comptable et TVA :</strong> banque synchronisée dans Tiime, justificatifs en photo,
                déclarations de TVA dans les délais, y compris pour vos clients étrangers.
              </CheckItem>
              <CheckItem>
                <strong>Frais du métier bien déduits :</strong> ordinateur et écrans amortis, abonnements logiciels et
                cloud, formations et certifications, coworking, mutuelle et prévoyance du dirigeant.
              </CheckItem>
              <CheckItem>
                <strong>Rémunération pilotée :</strong> salaire, dividendes ou mise en réserve selon vos projets, avec
                une simulation avant chaque décision.
              </CheckItem>
              <CheckItem>
                <strong>Bilan et liasse fiscale :</strong> clôture, approbation des comptes, dépôt au greffe.
              </CheckItem>
              <CheckItem>
                <strong>Documents pour vos clients et votre banque :</strong> pièces de référencement pour une ESN,
                attestation de chiffre d&apos;affaires pour un appel d&apos;offres, attestation de revenus pour un
                prêt ou une location.
              </CheckItem>
              <CheckItem>
                <strong>Facturation électronique :</strong> mise en conformité incluse, sans surcoût.
              </CheckItem>
            </ul>
          </div>
        </section>

        {/* ── ÉTAPES ────────────────────────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center flex flex-col items-center mb-10">
              <Badge>Exemple</Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4">
                Un développeur qui quitte son ESN : comment ça se passe
              </h2>
            </div>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {ETAPES.map((e, i) => (
                <li key={e.titre} className="bg-[#F1F8EA] rounded-2xl p-6">
                  <span className="w-9 h-9 rounded-full bg-turquoise-500 text-white font-extrabold flex items-center justify-center mb-4">
                    {i + 1}
                  </span>
                  <h3 className="font-extrabold text-gray-900 mb-2">{e.titre}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{e.texte}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-12 px-4 md:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-10 text-center border border-turquoise-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              Votre TJM, votre statut, votre net : on fait le calcul ensemble
            </h2>
            <p className="text-gray-600 mb-6">
              Premier rendez-vous gratuit et sans engagement, en visio ou par téléphone.
            </p>
            <a
              href="#contact"
              className="inline-block bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              Prendre RDV gratuitement
            </a>
          </div>
        </section>

        {/* ── POURQUOI JSA ──────────────────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center flex flex-col items-center mb-10">
              <Badge>Pourquoi JSA Expertise</Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4">
                Un cabinet qui parle le langage des freelances IT
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  t: "Spécialisé freelances",
                  d: "Le cabinet accompagne des freelances et des consultants indépendants. Régie, ESN, TJM, intercontrat : on connaît votre quotidien.",
                },
                {
                  t: "Un expert-comptable joignable",
                  d: "Joël Sayag, expert-comptable inscrit à l'Ordre, est votre interlocuteur et vous répond sous 24 h.",
                },
                {
                  t: "En ligne et en Île-de-France",
                  d: "Tout se fait à distance avec Tiime. Le cabinet est basé à Charenton-le-Pont, aux portes de Paris 12e, et accompagne les freelances de toute l'Île-de-France.",
                },
              ].map((c) => (
                <div key={c.t} className="bg-[#F1F8EA] rounded-2xl p-6">
                  <h3 className="font-extrabold text-gray-900 mb-2 text-lg">{c.t}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 flex flex-col items-center">
              <Badge>Questions fréquentes</Badge>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-4">Freelance IT : vos questions</h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.q} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-extrabold text-gray-900 mb-2 text-base">{f.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAILLAGE INTERNE ──────────────────────────────── */}
        <section className="bg-white py-10 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">Pour aller plus loin</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "Guide du freelance IT", href: "/blog/expert-comptable-consultant-it-developpeur-freelance" },
                { label: "Fixer son TJM", href: "/blog/fixer-son-tjm-freelance-methode-calcul" },
                { label: "SASU ou EURL en 2026", href: "/blog/sasu-ou-eurl-quel-statut-choisir-2026" },
                { label: "Portage ou société", href: "/blog/portage-salarial-ou-societe-freelance-comment-choisir" },
                { label: "ARE, ARCE et ACRE", href: "/devenir-freelance/are-ou-arce" },
                { label: "Attestation de chiffre d'affaires", href: "/attestation-expert-comptable/chiffre-affaires" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="bg-[#F1F8EA] border border-turquoise-100 hover:border-turquoise-400 rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 hover:text-turquoise-600 transition-all text-center"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactSection
          titre="Parlons de votre activité de freelance IT"
          formulaire="Formulaire de la page expert-comptable consultant informatique"
        />
      </main>
      <Footer />
    </>
  );
}
