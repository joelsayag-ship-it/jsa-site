import Link from "next/link";
import IncomeTaxSimulator2026 from "../components/IncomeTaxSimulator2026";
import BoutonRdv from "../components/BoutonRdv";
import Footer from "../components/Footer";
import { calculateNetTax, PARAMETRES, type TaxInputs } from "@/lib/tax2026";

const URL_PAGE = "https://www.jsaexpertise.com/simulateur-impot-revenu";
const P = PARAMETRES[2027];

const fmt = (n: number) => `${Math.round(n).toLocaleString("fr-FR")} €`;
const pct = (r: number) => `${Math.round(r * 100)} %`;

/* ── Exemples calculés au build avec le même moteur que le simulateur ── */

const BASE: TaxInputs = {
  situation: "celibataire",
  nbEnfants: 0,
  enfantsAlternes: 0,
  situationParticuliere: "aucune",
  revenus: 0,
  revenusConjoint: 0,
  revenusFonciers: 0,
  bicBncAutres: 0,
  chargesDeductibles: 0,
  donsAssociations: 0,
  gardeEnfantsMoins6: 0,
  appliquerDecote: true,
  annee: 2027,
};

const EXEMPLES: { titre: string; detail: string; inputs: TaxInputs }[] = [
  {
    titre: "Célibataire salarié",
    detail: "30 000 € de salaires nets imposables, sans enfant",
    inputs: { ...BASE, revenus: 30000 },
  },
  {
    titre: "Dirigeant de SASU",
    detail: "60 000 € de rémunération nette imposable, célibataire",
    inputs: { ...BASE, revenus: 60000 },
  },
  {
    titre: "Couple avec deux enfants",
    detail: "50 000 € et 30 000 € de salaires nets imposables",
    inputs: { ...BASE, situation: "marie_pacse", revenus: 50000, revenusConjoint: 30000, nbEnfants: 2 },
  },
];

const exemples = EXEMPLES.map((e) => ({ ...e, r: calculateNetTax(e.inputs) }));

const tauxLabel = (rate: number) => `${Math.round(rate * 100)} %`;
const tranches = P.brackets.map((b, i) => ({
  taux: tauxLabel(b.rate),
  libelle:
    i === 0
      ? `Jusqu'à ${fmt(b.max)}`
      : b.max === Infinity
        ? `Au-delà de ${fmt(b.min)}`
        : `De ${fmt(b.min + 1)} à ${fmt(b.max)}`,
}));

/* ── FAQ ── */

const FAQS = [
  {
    q: "Quel est le barème de l'impôt 2027 sur les revenus 2026 ?",
    a: `Le projet de loi de finances pour 2027 relève les tranches de 2,1 % : 0 % jusqu'à ${fmt(P.brackets[0].max)}, 11 % jusqu'à ${fmt(P.brackets[1].max)}, 30 % jusqu'à ${fmt(P.brackets[2].max)}, 41 % jusqu'à ${fmt(P.brackets[3].max)} et 45 % au-delà, par part de quotient familial. Ces montants restent provisoires jusqu'au vote définitif de la loi de finances.`,
  },
  {
    q: "Quand le barème 2027 sera-t-il définitif ?",
    a: "Le projet de loi de finances a été déposé le 1er octobre 2026 et il est examiné par le Parlement jusqu'à la fin de l'année. Les montants définitifs sont connus avec la publication de la loi de finances, en général fin décembre. Le simulateur sera mis à jour à ce moment-là.",
  },
  {
    q: "Comment saisir ma rémunération de dirigeant de SASU ou d'EURL ?",
    a: "Saisissez votre rémunération nette imposable annuelle dans le champ « Salaires » : le simulateur applique l'abattement forfaitaire de 10 %, comme pour un salaire. C'est le cas pour le président de SASU et pour le gérant majoritaire d'EURL à l'impôt sur les sociétés. Pour une micro-entreprise ou une EURL à l'impôt sur le revenu, saisissez le bénéfice imposable dans le champ « BIC / BNC / autres revenus ».",
  },
  {
    q: "Le simulateur tient-il compte des dividendes ?",
    a: "Non. Les dividendes sont en principe soumis au prélèvement forfaitaire unique, en dehors du barème progressif, sauf option globale pour le barème. Pour arbitrer entre salaire et dividendes, il faut une simulation complète de votre situation.",
  },
  {
    q: "Qu'est-ce que la décote ?",
    a: `La décote réduit l'impôt des foyers faiblement imposés. Selon le projet de loi de finances pour 2027, elle est égale à ${fmt(P.decote.forfaitCelib)} pour une personne seule, ou ${fmt(P.decote.forfaitCouple)} pour un couple soumis à imposition commune, diminués de 45,25 % du montant de l'impôt brut. Le simulateur l'applique automatiquement.`,
  },
  {
    q: "Quelle différence entre taux marginal et taux moyen ?",
    a: "Le taux marginal d'imposition (TMI) est le taux de la tranche la plus haute atteinte par votre quotient familial : c'est celui qui s'applique à chaque euro supplémentaire. Le taux moyen est le rapport entre l'impôt payé et votre revenu net imposable : il est toujours plus faible que le TMI.",
  },
];

export default function SimulateurImpotRevenuPage() {
  return (
    <>
      <main>
        {/* ── HERO ────────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] pt-32 pb-12 md:pt-40 md:pb-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/ressources"
              className="inline-flex items-center gap-1.5 text-sm text-turquoise-700 hover:text-turquoise-500 font-medium mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour aux ressources
            </Link>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-4">
                Simulateur d&apos;impôt sur le revenu<br />
                <span className="text-turquoise-500">2027 (revenus 2026)</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Estimez votre impôt 2027 sur les revenus 2026 avec le nouveau barème du projet de loi de finances.
                Pour les freelances, dirigeants de SASU ou d&apos;EURL, micro-entrepreneurs et LMNP.
              </p>
            </div>
          </div>
        </section>

        {/* ── SIMULATEUR ──────────────────────────────────── */}
        <section className="bg-white py-10 md:py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <IncomeTaxSimulator2026 />
          </div>
        </section>

        {/* ── BARÈME 2027 ─────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-14 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              Barème de l&apos;impôt 2027 sur les revenus 2026
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Le projet de loi de finances pour 2027 relève toutes les tranches de 2,1 % pour tenir compte de
              l&apos;inflation. Les taux restent inchangés. Le barème s&apos;applique au revenu net imposable divisé par
              le nombre de parts du foyer.
            </p>
            <div className="overflow-x-auto rounded-2xl bg-white shadow-sm border border-gray-100">
              <table className="w-full text-sm text-left">
                <thead className="bg-white text-gray-900 border-b border-gray-100">
                  <tr>
                    <th className="px-5 py-3 font-bold">Revenu imposable par part</th>
                    <th className="px-5 py-3 font-bold text-right">Taux</th>
                  </tr>
                </thead>
                <tbody>
                  {tranches.map((t) => (
                    <tr key={t.libelle} className="border-t border-gray-100">
                      <td className="px-5 py-3 text-gray-700">{t.libelle}</td>
                      <td className="px-5 py-3 text-right font-semibold text-gray-900">{t.taux}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Plafond de l&apos;avantage du quotient familial : {fmt(P.plafondDemiPart)} par demi-part. Montants du projet
              de loi de finances pour 2027, provisoires jusqu&apos;au vote définitif.
            </p>
          </div>
        </section>

        {/* ── COMMENT EST CALCULÉ L'IMPÔT ─────────────────── */}
        <section className="py-14 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">
              Comment est calculé l&apos;impôt sur le revenu
            </h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>
                <strong>Revenu net imposable</strong> : salaires et rémunérations après l&apos;abattement de 10 %,
                bénéfices des indépendants, revenus fonciers, moins les charges déductibles (PER, pensions
                alimentaires…).
              </li>
              <li>
                <strong>Quotient familial</strong> : ce revenu est divisé par le nombre de parts du foyer (1 pour une
                personne seule, 2 pour un couple marié ou pacsé, plus une demi-part pour chacun des deux premiers
                enfants et une part à partir du troisième).
              </li>
              <li>
                <strong>Barème progressif</strong> : chaque tranche du quotient est imposée à son taux, puis le
                résultat est multiplié par le nombre de parts.
              </li>
              <li>
                <strong>Plafonnement</strong> : l&apos;avantage procuré par les demi-parts supplémentaires
                (enfants notamment) est en principe limité à {fmt(P.plafondDemiPart)} par demi-part.
              </li>
              <li>
                <strong>Décote, réductions et crédits d&apos;impôt</strong> : la décote allège l&apos;impôt des
                foyers modestes, puis les dons et les frais de garde viennent en déduction.
              </li>
            </ol>
          </div>
        </section>

        {/* ── EXEMPLES ────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-14 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Exemples de calcul de l&apos;impôt 2027</h2>
            <p className="text-sm text-gray-500 mb-6">
              Calculés avec le simulateur, barème du projet de loi de finances pour 2027.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {exemples.map((e) => (
                <div key={e.titre} className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5">
                  <h3 className="font-extrabold text-gray-900 mb-1">{e.titre}</h3>
                  <p className="text-xs text-gray-500 mb-4">{e.detail}</p>
                  <dl className="text-sm space-y-2">
                    <div className="flex justify-between gap-3">
                      <dt className="text-gray-600">Parts fiscales</dt>
                      <dd className="font-semibold tabular-nums">{e.r.parts.toLocaleString("fr-FR")}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-gray-600">Revenu net imposable</dt>
                      <dd className="font-semibold tabular-nums">{fmt(e.r.revenuNetImposable)}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-gray-600">Taux marginal</dt>
                      <dd className="font-semibold tabular-nums">{pct(e.r.tauxMarginal)}</dd>
                    </div>
                    <div className="flex justify-between gap-3 pt-2 border-t border-gray-100">
                      <dt className="text-gray-900 font-semibold">Impôt 2027 estimé</dt>
                      <dd className="font-extrabold tabular-nums">{fmt(e.r.impotNet)}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FREELANCES & DIRIGEANTS ─────────────────────── */}
        <section className="py-14 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Freelances et dirigeants : anticiper l&apos;impôt 2027
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Pour un dirigeant, l&apos;impôt sur le revenu dépend directement de la rémunération qu&apos;il décide de
                se verser. Avant le 31 décembre, il est encore temps d&apos;ajuster cette rémunération, de verser sur un
                PER ou de comparer salaire et dividendes.
              </p>
              <p>
                Pour mesurer l&apos;effet de votre statut sur vos cotisations et votre revenu net, utilisez notre{" "}
                <Link href="/ressources/simulateur-sasu-eurl" className="text-turquoise-700 font-semibold underline underline-offset-2 hover:text-turquoise-500">
                  simulateur SASU ou EURL
                </Link>
                , et consultez notre article sur{" "}
                <Link href="/blog/optimiser-remuneration-sasu-salaire-dividendes" className="text-turquoise-700 font-semibold underline underline-offset-2 hover:text-turquoise-500">
                  l&apos;arbitrage entre salaire et dividendes en SASU
                </Link>
                .
              </p>
            </div>
            <div className="mt-8 bg-[#F1F8EA] border border-turquoise-100 rounded-2xl p-6 md:flex md:items-center md:justify-between gap-6">
              <p className="text-gray-800 font-semibold leading-relaxed mb-4 md:mb-0">
                Vous êtes freelance ou dirigeant ? On chiffre avec vous les leviers à activer avant le 31 décembre.
              </p>
              <BoutonRdv
                source="Simulateur d'impôt 2027 (section freelances et dirigeants)"
                message="Bonjour, je suis freelance / dirigeant et j'aimerais faire le point sur mon impôt 2027 avant le 31 décembre."
                className="flex-shrink-0 bg-[#FF6B35] hover:bg-[#e85a25] text-white font-bold px-6 py-3 rounded-full transition-colors text-sm"
              >
                Faire le point gratuitement
              </BoutonRdv>
            </div>
          </div>
        </section>

        {/* ── DONNÉES STRUCTURÉES ─────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "Simulateur d'impôt sur le revenu 2027",
                url: URL_PAGE,
                description:
                  "Simulateur gratuit de l'impôt 2027 sur les revenus 2026 : barème du projet de loi de finances pour 2027, parts fiscales, quotient familial, décote et crédits d'impôt.",
                applicationCategory: "FinanceApplication",
                operatingSystem: "Web",
                inLanguage: "fr-FR",
                isAccessibleForFree: true,
                offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
                provider: { "@type": "AccountingService", name: "JSA Expertise", url: "https://www.jsaexpertise.com" },
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.jsaexpertise.com" },
                  { "@type": "ListItem", position: 2, name: "Ressources", item: "https://www.jsaexpertise.com/ressources" },
                  { "@type": "ListItem", position: 3, name: "Simulateur d'impôt sur le revenu 2027", item: URL_PAGE },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: FAQS.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ]),
          }}
        />

        {/* ── FAQ ─────────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-14 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Questions fréquentes sur l&apos;impôt 2027</h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.q} className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                  <h3 className="font-extrabold text-gray-900 mb-2">{f.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="bg-[#00B6DE] py-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Optimisez votre impôt avant le 31 décembre</h2>
            <p className="text-white/85 text-lg mb-8">
              Rémunération, dividendes, PER : nous chiffrons avec vous les leviers adaptés à votre situation. Premier
              rendez-vous gratuit.
            </p>
            <BoutonRdv
              source="Simulateur d'impôt 2027 (bas de page)"
              message="Bonjour, j'aimerais faire le point sur ma rémunération et mon impôt 2027 avant le 31 décembre."
              className="inline-block bg-white text-[#0081A5] hover:bg-gray-50 font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg"
            >
              Prendre RDV gratuitement
            </BoutonRdv>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
