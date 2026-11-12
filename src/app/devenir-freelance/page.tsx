import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import {
  CHAPITRES,
  DATE_MAJ_ISO,
  DATE_VERIFICATION,
  SECTION_NOM,
  SECTION_URL,
  SITE_URL,
  urlChapitre,
} from "./chapitres";
import { SOURCES, type CleSource } from "./sources";
import { A, Badge, Encart, JsonLd, Tableau, type Faq } from "./ui";

export const metadata: Metadata = {
  title: "Devenir freelance en 2026 : le guide complet, étape par étape",
  description:
    "Quitter son CDI, garder le chômage (ARE ou ARCE), ACRE, choisir entre micro, EURL et SASU, se rémunérer : le parcours complet pour devenir freelance en 2026, règles vérifiées.",
  alternates: { canonical: SECTION_URL },
  openGraph: {
    title: "Devenir freelance en 2026 : le guide complet, de la démission au premier salaire",
    description:
      "Le parcours pas à pas d'un salarié qui devient freelance : chômage, aides, statut, rémunération, première année.",
    url: SECTION_URL,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const FAQS: Faq[] = [
  {
    q: "Peut-on démissionner pour devenir freelance et toucher le chômage ?",
    a: "Oui, dans le cadre de la démission pour reconversion : il faut être en CDI, avoir travaillé au moins 1 300 jours au cours des 5 dernières années, demander un conseil en évolution professionnelle avant de démissionner, et faire attester le caractère réel et sérieux du projet de création par Transitions Pro (commission paritaire régionale). Vous avez ensuite 6 mois pour vous inscrire et demander l'ARE.",
  },
  {
    q: "La rupture conventionnelle donne-t-elle toujours droit au chômage ?",
    a: "Oui, elle ouvre droit à l'ARE. Mais pour une fin de contrat fixée à compter du 1er septembre 2026, la durée maximale d'indemnisation après une rupture conventionnelle individuelle est ramenée à 15 mois avant 55 ans (20,5 mois à partir de 55 ans).",
  },
  {
    q: "Peut-on garder le chômage en créant son entreprise ?",
    a: "Oui. Vous pouvez cumuler l'ARE avec vos revenus de freelance (l'allocation est réduite de 70 % des revenus pris en compte), ou demander l'ARCE, un capital égal à 60 % de vos droits restants. Pour les fins de contrat depuis le 1er avril 2025, le cumul est plafonné à 60 % des droits restants à la création.",
  },
  {
    q: "Quel statut choisir pour se lancer en freelance ?",
    a: "La micro-entreprise suffit pour tester une activité avec peu de frais. Pour un consultant à temps plein, la société devient vite plus intéressante : EURL pour des cotisations plus faibles, SASU pour une protection sociale proche du salariat et des dividendes sans cotisations. Le bon choix dépend de votre chiffre d'affaires, de l'ARE et de vos projets : chiffrez les options avant la création.",
  },
  {
    q: "Quels délais ne faut-il pas rater en se lançant ?",
    a: "Les principaux : s'inscrire à France Travail dans les 12 mois qui suivent la fin du contrat, demander l'ACRE dans les 60 jours du début d'activité, s'actualiser chaque mois du 28 au 15, opter pour l'IS en EURL avant la fin du 3e mois de l'exercice, et approuver les comptes dans les 6 mois de la clôture.",
  },
];

const SOURCES_HUB: CleSource[] = [
  "unedicDemission",
  "ftDemission",
  "unedicSeptembre2026",
  "unedicDiffere",
  "unedicAre",
  "ftCreation",
  "ftArce",
  "spAcre",
  "spEurl",
  "unedicReglement",
];

type Etape = { id: string; titre: string; contenu: React.ReactNode; liens: { label: string; href: string }[] };

const ETAPES: Etape[] = [
  {
    id: "quitter-son-emploi",
    titre: "Quitter son emploi sans perdre ses droits",
    contenu: (
      <>
        <p>
          <strong>Rupture conventionnelle ou licenciement</strong> : vous ouvrez droit à l&apos;ARE. Attention, depuis le
          1er septembre 2026, la durée maximale après une rupture conventionnelle individuelle passe à 15 mois avant 55
          ans (20,5 mois après). Avant le premier paiement s&apos;appliquent un différé pour congés payés (30 jours au
          plus), un différé pour les indemnités supérieures au minimum légal (150 jours au plus) et 7 jours
          d&apos;attente.
        </p>
        <p>
          <strong>Démission</strong> : pas de chômage, sauf démission pour reconversion avec un projet de création. Il
          faut un CDI, 1 300 jours travaillés sur les 5 dernières années, un conseil en évolution professionnelle{" "}
          <em>avant</em> de démissionner, et l&apos;accord de Transitions Pro sur un projet réel et sérieux (étude de
          marché, plan de financement sur 3 ans). Un{" "}
          <A href="/attestation-expert-comptable/business-plan-previsionnel">prévisionnel établi par un expert-comptable</A>{" "}
          renforce le dossier.
        </p>
      </>
    ),
    liens: [],
  },
  {
    id: "france-travail",
    titre: "S'inscrire à France Travail avant de créer",
    contenu: (
      <p>
        Inscrivez-vous dès la fin de votre contrat (au plus tard dans les 12 mois), avant d&apos;immatriculer votre
        entreprise : c&apos;est le plus sûr pour l&apos;ARCE, qui suppose une création après la fin du contrat ayant
        ouvert les droits. Ensuite, actualisez-vous chaque mois (du 28 au 15 du mois suivant) en déclarant vos revenus
        d&apos;activité.
      </p>
    ),
    liens: [{ label: "Ce qui se cumule selon votre statut", href: urlChapitre("cumul-are-arce-acre") }],
  },
  {
    id: "statut",
    titre: "Choisir son statut : micro, EURL ou SASU",
    contenu: (
      <p>
        La micro-entreprise pour tester, une société dès que le chiffre d&apos;affaires est régulier. L&apos;EURL coûte
        moins cher en cotisations, la SASU protège mieux et permet des dividendes sans cotisations. Le statut change
        aussi la façon dont France Travail réduit votre allocation.
      </p>
    ),
    liens: [
      { label: "SASU ou EURL : quel statut choisir", href: "/blog/sasu-ou-eurl-quel-statut-choisir-2026" },
      { label: "Simulateur SASU ou EURL", href: "/ressources/simulateur-sasu-eurl" },
      { label: "Portage salarial ou société", href: "/blog/portage-salarial-ou-societe-freelance-comment-choisir" },
      { label: "Micro-entreprise : quand passer en société", href: "/blog/micro-entreprise-quand-passer-en-societe" },
    ],
  },
  {
    id: "aides",
    titre: "Créer, demander l'ACRE, choisir entre ARE et ARCE",
    contenu: (
      <p>
        Une fois l&apos;entreprise immatriculée, vous avez 60 jours pour demander l&apos;ACRE à l&apos;Urssaf. Elle réduit
        vos cotisations la première année et elle conditionne l&apos;ARCE. Puis vous choisissez : garder l&apos;ARE
        chaque mois, ou prendre 60 % de vos droits restants en capital.
      </p>
    ),
    liens: [
      { label: "ARE ou ARCE", href: urlChapitre("are-ou-arce") },
      { label: "ACRE 2026", href: urlChapitre("acre") },
      { label: "Créer sa société en 2026", href: "/blog/comment-creer-sa-societe-2026" },
    ],
  },
  {
    id: "remuneration",
    titre: "Fixer son TJM et sa rémunération",
    contenu: (
      <p>
        Partez de ce dont vous avez besoin pour vivre, ajoutez cotisations, impôts et frais, et divisez par un nombre
        réaliste de jours facturés (bien moins de 250 par an). Puis décidez comment sortir l&apos;argent de la société :
        rémunération, dividendes, ou réserve.
      </p>
    ),
    liens: [
      { label: "Fixer son TJM", href: "/blog/fixer-son-tjm-freelance-methode-calcul" },
      { label: "Simulateur TJM en salaire net", href: "/ressources/simulateur-tjm-salaire-net" },
      { label: "Se rémunérer en SASU ou en EURL", href: urlChapitre("remuneration-sasu-eurl") },
      { label: "Dividendes", href: urlChapitre("dividendes-sasu-eurl") },
    ],
  },
  {
    id: "premiere-annee",
    titre: "Passer la première année sans mauvaise surprise",
    contenu: (
      <p>
        Compte bancaire dédié dès le premier jour, TVA, CFE, mutuelle et prévoyance, facturation électronique, puis
        clôture et approbation des comptes : les rendez-vous de la première année.
      </p>
    ),
    liens: [
      { label: "Compte bancaire pro", href: "/blog/compte-bancaire-pro-freelance-micro-sasu-eurl" },
      { label: "TVA du freelance", href: "/blog/tva-freelance-franchise-reel-obligations-2026" },
      { label: "CFE", href: "/blog/cfe-freelance-micro-entreprise-societe-guide" },
      { label: "Mutuelle et prévoyance", href: "/blog/mutuelle-prevoyance-dirigeant-freelance-sasu-eurl" },
      { label: "Calendrier fiscal", href: "/blog/calendrier-fiscal-freelance-societe-2027" },
      { label: "Clôture au 31/12", href: "/blog/cloture-31-12-sasu-eurl-checklist-freelance" },
    ],
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Devenir freelance en 2026 : le guide complet",
          url: SECTION_URL,
          inLanguage: "fr-FR",
          dateModified: DATE_MAJ_ISO,
          author: { "@type": "Person", name: "Joël Sayag", jobTitle: "Expert-comptable inscrit à l'Ordre", url: `${SITE_URL}/qui-sommes-nous` },
          publisher: { "@type": "AccountingService", name: "JSA Expertise", url: SITE_URL },
          hasPart: CHAPITRES.map((c) => ({ "@type": "Article", headline: c.titre, url: `${SITE_URL}${urlChapitre(c.slug)}` })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: SECTION_NOM, item: SECTION_URL },
          ],
        }}
      />

      <main className="pt-16">
        {/* ── EN-TÊTE ───────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-14 md:py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <nav aria-label="Fil d'Ariane" className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-turquoise-600">Accueil</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-700">{SECTION_NOM}</span>
            </nav>
            <div className="mb-5">
              <Badge>Guide 2026 · Règles vérifiées le {DATE_VERIFICATION}</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5 max-w-4xl">
              Devenir freelance en 2026 : le guide complet,{" "}
              <span className="text-turquoise-500">de la démission au premier salaire</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-8">
              Vous êtes salarié et vous voulez vous lancer. Chômage, ARE ou ARCE, ACRE, choix entre micro-entreprise, EURL
              et SASU, salaire et dividendes : ce guide suit le parcours dans l&apos;ordre, avec les règles en vigueur et
              des exemples chiffrés. Rédigé par Joël Sayag, expert-comptable des freelances.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#parcours"
                className="bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors"
              >
                Suivre le parcours
              </a>
              <Link
                href={urlChapitre("cumul-are-arce-acre")}
                className="border-2 border-turquoise-500 text-turquoise-700 hover:bg-turquoise-50 font-bold px-7 py-3 rounded-full transition-colors"
              >
                Voir ce qui se cumule
              </Link>
            </div>
          </div>
        </section>

        {/* ── CHAPITRES ─────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-16 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-start mb-8">
              <Badge>Les chapitres du guide</Badge>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mt-4">
                Les sujets qui font gagner ou perdre de l&apos;argent au démarrage
              </h2>
            </div>
            <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CHAPITRES.map((c, i) => (
                <li key={c.slug}>
                  <Link
                    href={urlChapitre(c.slug)}
                    className="group flex flex-col h-full bg-[#F1F8EA] hover:bg-turquoise-50 border border-transparent hover:border-turquoise-200 rounded-2xl p-6 transition-colors"
                  >
                    <span className="w-9 h-9 rounded-full bg-turquoise-500 text-white font-extrabold flex items-center justify-center mb-4">
                      {i + 1}
                    </span>
                    <span className="font-extrabold text-gray-900 text-lg leading-snug group-hover:text-turquoise-700 mb-2">
                      {c.titre}
                    </span>
                    <span className="text-gray-600 text-sm leading-relaxed">{c.resume}</span>
                    <span className="mt-auto pt-4 text-sm font-bold text-turquoise-700">Lire le chapitre →</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── PARCOURS ──────────────────────────────────────── */}
        <section id="parcours" className="scroll-mt-20 bg-[#F1F8EA] py-14 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-start mb-10">
              <Badge>Le parcours</Badge>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mt-4">
                Passer de salarié à freelance en 6 étapes
              </h2>
            </div>
            <ol className="space-y-6">
              {ETAPES.map((e, i) => (
                <li key={e.id} id={e.id} className="scroll-mt-24 bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-full bg-turquoise-500 text-white font-extrabold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xl font-extrabold text-gray-900 mb-3">{e.titre}</h3>
                      <div className="text-gray-700 leading-relaxed space-y-3">{e.contenu}</div>
                      {e.liens.length > 0 && (
                        <ul className="flex flex-wrap gap-2 mt-5">
                          {e.liens.map((l) => (
                            <li key={l.href}>
                              <Link
                                href={l.href}
                                className="inline-block text-sm font-semibold bg-[#F1F8EA] border border-turquoise-100 hover:border-turquoise-400 text-gray-700 hover:text-turquoise-700 rounded-full px-4 py-2 transition-colors"
                              >
                                {l.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── DÉLAIS ────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>Le calendrier</Badge>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mt-4 mb-2">
              Les délais à ne pas rater
            </h2>
            <Tableau
              premiereColonneLarge
              entetes={["Démarche", "Délai", "Si vous le ratez"]}
              lignes={[
                ["Inscription à France Travail", "Dans les 12 mois qui suivent la fin du contrat", "Ce contrat ne peut plus servir à ouvrir des droits"],
                ["Demande d'ACRE à l'Urssaf", "60 jours après le début d'activité", "Pas d'exonération, et pas d'ARCE possible"],
                ["Actualisation mensuelle", "Du 28 du mois au 15 du mois suivant", "Allocation du mois non versée, risque de radiation"],
                ["Second versement de l'ARCE", "6 mois après le premier", "Perdu si l'activité a cessé ou en cas de CDI à temps plein"],
                ["Option pour l'IS (EURL)", "Avant la fin du 3e mois de l'exercice", "L'EURL reste à l'impôt sur le revenu pour cet exercice"],
                ["Dispense d'acompte sur dividendes", "30 novembre pour les dividendes de l'année suivante", "Acompte de 12,8 % retenu au versement"],
                ["Approbation des comptes", "6 mois après la clôture", "Pas de dividendes tant que les comptes ne sont pas approuvés"],
              ]}
            />
          </div>
        </section>

        {/* ── ERREURS ───────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-14 md:py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>Ce qu&apos;on voit souvent</Badge>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Les erreurs qui coûtent cher au démarrage
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                ["Créer sa société avant la fin du contrat", "L'ARCE suppose une création après la fin du contrat qui a ouvert les droits."],
                ["Oublier l'ACRE", "Depuis 2026, sans demande dans les 60 jours, pas d'exonération et pas d'ARCE."],
                ["Croire que le chômage est illimité en créant", "Le cumul est plafonné à 60 % des droits pour les fins de contrat depuis avril 2025."],
                ["Se verser un salaire sans mesurer l'effet sur l'ARE", "Chaque euro de salaire en SASU réduit l'allocation de 70 centimes."],
                ["Distribuer des dividendes en EURL comme en SASU", "Au-delà de 10 % du capital, ils supportent les cotisations."],
                ["Mélanger comptes perso et pro", "Un compte dédié dès le premier jour évite des mois de reconstitution."],
              ].map(([t, d]) => (
                <li key={t} className="bg-white rounded-2xl p-5">
                  <p className="font-extrabold text-gray-900 mb-1">{t}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── OUTILS ────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-16 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <Badge>Outils gratuits</Badge>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Faites vos calculs
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  t: "Simulateur TJM en salaire net",
                  d: "Ce qui vous reste de votre TJM en micro, EURL et SASU, ou le TJM à facturer pour le net que vous visez.",
                  h: "/ressources/simulateur-tjm-salaire-net",
                },
                {
                  t: "Simulateur SASU ou EURL",
                  d: "Cotisations, impôt et revenu net dans les deux statuts, calculés avec le moteur officiel de l'Urssaf.",
                  h: "/ressources/simulateur-sasu-eurl",
                },
                {
                  t: "Business plan et prévisionnel",
                  d: "Pour Transitions Pro, la banque ou Bpifrance : un prévisionnel signé par un expert-comptable.",
                  h: "/attestation-expert-comptable/business-plan-previsionnel",
                },
              ].map((o) => (
                <Link
                  key={o.h}
                  href={o.h}
                  className="group bg-[#F1F8EA] rounded-2xl p-6 border border-transparent hover:border-turquoise-300 transition-colors"
                >
                  <p className="font-extrabold text-gray-900 group-hover:text-turquoise-700 mb-2">{o.t}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{o.d}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-14 md:py-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 flex flex-col items-center">
              <Badge>Questions fréquentes</Badge>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-4">Devenir freelance : vos questions</h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.q} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-extrabold text-gray-900 mb-2">{f.q}</h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <Encart type="retenir" titre="Une information générale, à confronter à votre cas">
              <p>
                Règles vérifiées le {DATE_VERIFICATION}. Votre date de fin de contrat, vos droits restants et votre
                statut peuvent changer la réponse : faites vérifier votre situation avant de décider.
              </p>
            </Encart>
          </div>
        </section>

        {/* ── SOURCES ───────────────────────────────────────── */}
        <section className="bg-white py-10 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-extrabold text-gray-900 mb-3">Sources officielles</h2>
            <ul className="space-y-2 text-sm">
              {SOURCES_HUB.map((k) => (
                <li key={k}>
                  <a
                    href={SOURCES[k].url}
                    target="_blank"
                    rel="noopener"
                    className="text-turquoise-700 hover:text-turquoise-600 underline decoration-turquoise-200 underline-offset-2"
                  >
                    {SOURCES[k].label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              Chaque chapitre liste ses propres sources en bas de page.
            </p>
          </div>
        </section>

        <ContactSection
          titre="Vous préparez votre passage en freelance ?"
          formulaire="Formulaire du guide devenir freelance (sommaire)"
          intro={
            <>
              Statut, chômage, ACRE, rémunération : on prépare votre lancement avec vos vrais chiffres, avant la
              création. Le premier rendez-vous est gratuit et sans engagement, en visio ou par téléphone.
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
