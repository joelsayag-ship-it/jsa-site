"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Footer from "../components/Footer";

/* ─── Helpers ─────────────────────────────────────────────── */

function fmt(n: number): string {
  return Math.round(n).toLocaleString("fr-FR") + " €";
}

function calcIS(r: number): number {
  if (r <= 0) return 0;
  return 0.15 * Math.min(r, 42500) + 0.25 * Math.max(0, r - 42500);
}

/* ─── Composant Slider ────────────────────────────────────── */

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  help,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  help?: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline gap-4">
        <label className="text-sm font-semibold text-gray-700">{label}</label>
        <span className="text-xl font-extrabold text-turquoise-500 tabular-nums whitespace-nowrap">
          {fmt(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gray-200"
        style={{ accentColor: "#00B6DE" }}
      />
      <div className="flex justify-between text-xs text-gray-400">
        <span>{fmt(min)}</span>
        <span>{fmt(max)}</span>
      </div>
      {help && (
        <p className="text-xs text-gray-500 leading-relaxed bg-gray-50 rounded-lg px-3 py-2">
          {help}
        </p>
      )}
    </div>
  );
}

/* ─── Ligne tableau ───────────────────────────────────────── */

function LigneTableau({
  label,
  sasu,
  eurl,
  highlight,
  negatif,
}: {
  label: string;
  sasu: number;
  eurl: number;
  highlight?: boolean;
  negatif?: boolean;
}) {
  return (
    <tr className={highlight ? "bg-turquoise-50 font-bold" : "border-t border-gray-100"}>
      <td className={`py-2.5 px-4 text-sm ${highlight ? "text-gray-900 font-bold" : "text-gray-600"}`}>
        {label}
      </td>
      <td className={`py-2.5 px-4 text-sm text-right tabular-nums ${highlight ? "text-turquoise-600 font-bold" : negatif ? "text-red-500" : "text-gray-800"}`}>
        {fmt(sasu)}
      </td>
      <td className={`py-2.5 px-4 text-sm text-right tabular-nums ${highlight ? "text-turquoise-600 font-bold" : negatif ? "text-red-500" : "text-gray-800"}`}>
        {fmt(eurl)}
      </td>
    </tr>
  );
}

/* ─── Page principale ─────────────────────────────────────── */

export default function SimulateurRemuneration() {
  const [ca, setCa] = useState(80000);
  const [charges, setCharges] = useState(10000);
  const [remuneration, setRemuneration] = useState(40000);
  const [tableauOuvert, setTableauOuvert] = useState(false);

  const benefice = ca - charges;
  const chargesDepassent = charges > ca;
  const remuCapped = Math.min(remuneration, Math.max(0, benefice));

  /* ── Calculs EURL ── */
  // Rémunération optimale : tout le bénéfice est sorti en rémunération
  // Rémunération × 1,45 = Bénéfice  →  Rémunération = Bénéfice / 1,45
  const eurl = useMemo(() => {
    const remGer = benefice / 1.45;
    const cotTNS = remGer * 0.45;
    const resultatFiscal = 0; // tout est sorti, pas de réserves
    const is = 0;
    const netTotal = remGer;
    return { remGer, cotTNS, resultatFiscal, is, netTotal };
  }, [benefice]);

  /* ── Calculs SASU ── */
  const sasu = useMemo(() => {
    const remBrute = remuCapped;
    const remNette = remBrute * 0.78;
    const coutEmployeur = remBrute * 1.45;
    const chargesSociales = remNette * 0.85;
    const resultatFiscal = benefice - coutEmployeur;
    const resultatPositif = Math.max(0, resultatFiscal);
    const is = calcIS(resultatPositif);
    const resultatApresIS = resultatPositif - is;
    const dividendesNets = resultatApresIS * (1 - 0.30);
    const netTotal = remNette + dividendesNets;
    return { remBrute, remNette, coutEmployeur, chargesSociales, resultatFiscal, resultatPositif, is, resultatApresIS, dividendesNets, netTotal, remuTropElevee: resultatFiscal < 0 };
  }, [remuCapped, benefice]);

  return (
    <>
      <main>

        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] pt-32 pb-12 md:pt-40 md:pb-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-4">
              Simulateur rémunération<br />
              <span className="text-turquoise-500">SASU vs EURL</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Entrez votre CA et vos charges, comparez votre net en poche en temps réel selon votre statut.
            </p>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-10">

            {/* ── Section 1 : Votre situation ─────────────── */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-8">
              <h2 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-turquoise-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
                Votre situation
              </h2>

              <Slider
                label="Chiffre d'affaires HT"
                value={ca}
                min={20000}
                max={300000}
                step={5000}
                onChange={(v) => {
                  setCa(v);
                  if (remuneration > v) setRemuneration(v);
                }}
              />

              <Slider
                label="Charges de fonctionnement"
                value={charges}
                min={0}
                max={100000}
                step={500}
                onChange={setCharges}
                help="Incluez ici tous vos frais : loyer, téléphone, internet, logiciels, abonnements, repas professionnels, déplacements, fournitures, etc."
              />

              {/* Récapitulatif */}
              <div className={`rounded-xl p-4 ${chargesDepassent ? "bg-red-50 border border-red-200" : "bg-[#F1F8EA] border border-turquoise-100"}`}>
                {chargesDepassent ? (
                  <p className="text-red-600 font-semibold text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    </svg>
                    Vos charges dépassent votre CA
                  </p>
                ) : (
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { label: "CA HT", value: ca },
                      { label: "Charges", value: charges },
                      { label: "Bénéfice disponible", value: benefice },
                    ].map((item) => (
                      <div key={item.label}>
                        <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                        <p className={`text-base font-extrabold ${item.label === "Bénéfice disponible" ? "text-turquoise-600" : "text-gray-800"}`}>
                          {fmt(item.value)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* ── Section 2 : Rémunération souhaitée ─────── */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-turquoise-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
                Rémunération souhaitée (SASU)
              </h2>
              <Slider
                label="Rémunération annuelle brute — SASU uniquement"
                value={remuneration}
                min={0}
                max={Math.max(benefice, 1000)}
                step={1000}
                onChange={setRemuneration}
              />
              <p className="text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 leading-relaxed">
                En EURL, la rémunération est calculée automatiquement pour optimiser le net : la totalité du bénéfice est sortie en rémunération (pas de mise en réserve, pas d&apos;IS).
              </p>
            </div>

            {/* ── Section 3 : Résultats ───────────────────── */}
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-turquoise-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
                Résultats en temps réel
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Carte SASU */}
                <div className="rounded-2xl p-6 border-2 border-gray-200 bg-white shadow-sm">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">SASU</p>
                  <p className="text-xs text-gray-400 mb-4">Président assimilé salarié</p>

                  {sasu.remuTropElevee && (
                    <div className="mb-4 bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 text-xs text-orange-700 font-medium">
                      Rémunération trop élevée par rapport au bénéfice
                    </div>
                  )}

                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">Net annuel en poche</p>
                    <p className="text-4xl font-extrabold text-turquoise-500">
                      {fmt(sasu.netTotal)}
                    </p>
                  </div>

                  <div className="space-y-2 text-sm">
                    {[
                      { label: "dont Rémunération nette", value: sasu.remNette },
                      { label: "dont Dividendes nets", value: sasu.dividendesNets },
                      { label: "Charges sociales (85%)", value: sasu.chargesSociales },
                      { label: "IS payé", value: sasu.is },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-center">
                        <span className="text-gray-500">{label}</span>
                        <span className="font-semibold text-gray-800 tabular-nums">{fmt(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carte EURL */}
                <div className="rounded-2xl p-6 border-2 border-gray-200 bg-white shadow-sm">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">EURL</p>
                  <p className="text-xs text-gray-400 mb-4">Gérant majoritaire TNS</p>

                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">Net annuel en poche</p>
                    <p className="text-4xl font-extrabold text-turquoise-500">
                      {fmt(eurl.netTotal)}
                    </p>
                  </div>

                  <div className="space-y-2 text-sm">
                    {[
                      { label: "Rémunération gérant", value: eurl.remGer },
                      { label: "Cotisations TNS (45%)", value: eurl.cotTNS },
                      { label: "IS", value: eurl.is },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-center">
                        <span className="text-gray-500">{label}</span>
                        <span className="font-semibold text-gray-800 tabular-nums">{fmt(value)}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-4 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 leading-relaxed">
                    Totalité du bénéfice sortie en rémunération. Pas de mise en réserve.
                  </p>
                </div>
              </div>

              {/* ── Encadré neutre ───────────────────────── */}
              <div className="mt-8 bg-gray-50 border border-gray-200 rounded-2xl px-6 py-6">
                <p className="text-sm font-bold text-gray-800 mb-3">Ces chiffres ne suffisent pas à trancher.</p>
                <p className="text-sm text-gray-600 mb-3">Le choix entre SASU et EURL dépend de nombreux facteurs personnels :</p>
                <ul className="text-sm text-gray-600 space-y-1.5 mb-5">
                  <li className="flex items-start gap-2"><span className="text-turquoise-500 mt-0.5 flex-shrink-0">—</span>Vos droits aux indemnités chômage (ARE / ARCE) — la SASU peut les préserver</li>
                  <li className="flex items-start gap-2"><span className="text-turquoise-500 mt-0.5 flex-shrink-0">—</span>Votre situation familiale et votre taux marginal d&apos;imposition</li>
                  <li className="flex items-start gap-2"><span className="text-turquoise-500 mt-0.5 flex-shrink-0">—</span>Votre âge et vos droits à la retraite</li>
                  <li className="flex items-start gap-2"><span className="text-turquoise-500 mt-0.5 flex-shrink-0">—</span>Votre besoin de protection sociale (arrêt maladie, prévoyance)</li>
                  <li className="flex items-start gap-2"><span className="text-turquoise-500 mt-0.5 flex-shrink-0">—</span>Votre stratégie patrimoniale à long terme</li>
                  <li className="flex items-start gap-2"><span className="text-turquoise-500 mt-0.5 flex-shrink-0">—</span>La présence d&apos;associés ou d&apos;investisseurs</li>
                </ul>
                <p className="text-sm text-gray-500 italic mb-6">Un simulateur donne une direction, pas une réponse définitive.</p>
                <div className="border-t border-gray-200 pt-5 text-center">
                  <p className="text-base font-extrabold text-gray-900 mb-4">Parlons de votre situation</p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-7 py-3 rounded-full transition-colors text-sm"
                  >
                    Prendre RDV gratuitement — c&apos;est gratuit
                  </Link>
                </div>
              </div>
            </div>

            {/* ── Section 4 : Tableau détaillé ───────────── */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setTableauOuvert(!tableauOuvert)}
                className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="text-sm font-bold text-gray-800">Tableau détaillé ligne par ligne</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${tableauOuvert ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {tableauOuvert && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wide">Poste</th>
                        <th className="py-3 px-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wide">SASU</th>
                        <th className="py-3 px-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wide">EURL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <LigneTableau label="Chiffre d'affaires HT" sasu={ca} eurl={ca} />
                      <LigneTableau label="Charges de fonctionnement" sasu={charges} eurl={charges} negatif />
                      <LigneTableau label="Bénéfice avant rémunération" sasu={benefice} eurl={benefice} highlight />
                      <LigneTableau label="Rémunération brute / gérant" sasu={sasu.remBrute} eurl={eurl.remGer} negatif />
                      <LigneTableau label="Charges sociales" sasu={sasu.chargesSociales} eurl={eurl.cotTNS} negatif />
                      <LigneTableau label="Coût total employeur (SASU)" sasu={sasu.coutEmployeur} eurl={0} negatif />
                      <LigneTableau label="Résultat fiscal" sasu={sasu.resultatFiscal} eurl={eurl.resultatFiscal} />
                      <LigneTableau label="Impôt sur les sociétés (IS)" sasu={sasu.is} eurl={eurl.is} negatif />
                      <LigneTableau label="Résultat après IS (réserves)" sasu={sasu.resultatApresIS} eurl={0} />
                      <LigneTableau label="Flat tax dividendes (SASU)" sasu={sasu.dividendesNets > 0 ? sasu.resultatApresIS * 0.30 : 0} eurl={0} negatif />
                      <LigneTableau label="Dividendes nets" sasu={sasu.dividendesNets} eurl={0} />
                      <LigneTableau label="Rémunération nette" sasu={sasu.remNette} eurl={eurl.remGer} />
                      <LigneTableau label="Net total annuel en poche" sasu={sasu.netTotal} eurl={eurl.netTotal} highlight />
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* ── Section 5 : Mention légale ─────────────── */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-xs text-gray-500 leading-relaxed">
              <strong className="text-gray-700">Simulation indicative</strong> basée sur les taux 2025. Ne constitue pas un conseil fiscal. Votre situation personnelle peut modifier significativement ces résultats.
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
