"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

import { VOITURE, MOTO, CYCLO } from "@/lib/bareme-ik";
import type { VehicleType, Tranche } from "@/lib/bareme-ik";

function getDefaultCV(type: VehicleType): string {
  if (type === "voiture") return "3 CV et moins";
  if (type === "moto") return "1 ou 2 CV";
  return "";
}

export default function SimulateurIK() {
  const [vehicleType, setVehicleType] = useState<VehicleType>("voiture");
  const [puissance, setPuissance] = useState("3 CV et moins");
  const [distanceStr, setDistanceStr] = useState("");
  const [isElectric, setIsElectric] = useState(false);

  const handleVehicleChange = (type: VehicleType) => {
    setVehicleType(type);
    setPuissance(getDefaultCV(type));
  };

  const baremes = vehicleType === "voiture" ? VOITURE : vehicleType === "moto" ? MOTO : null;

  const result = useMemo(() => {
    const d = parseInt(distanceStr, 10);
    if (!distanceStr || isNaN(d) || d <= 0) return null;

    let tranches: Tranche[];
    if (vehicleType === "cyclo") {
      tranches = CYCLO;
    } else {
      const entry = baremes?.find((b) => b.cv === puissance);
      if (!entry) return null;
      tranches = entry.tranches;
    }

    const tranche = tranches.find((t) => t.max === null || d <= t.max)!;
    const base = d * tranche.coeff + tranche.intercept;
    const final = isElectric ? base * 1.2 : base;

    return { base, final, tranche };
  }, [distanceStr, vehicleType, puissance, isElectric, baremes]);

  const btnBase =
    "px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all focus:outline-none focus:ring-2 focus:ring-turquoise-500/30";
  const active = `${btnBase} bg-turquoise-500 text-white border-turquoise-500`;
  const inactive = `${btnBase} bg-white text-gray-700 border-gray-200 hover:border-turquoise-500 hover:text-turquoise-700`;

  return (
    <>
      {/* Simulateur */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 mb-6">

        {/* Type de véhicule */}
        <fieldset className="mb-7">
          <legend className="block text-sm font-semibold text-gray-700 mb-3">
            Type de véhicule
          </legend>
          <div className="flex flex-wrap gap-2">
            {(["voiture", "moto", "cyclo"] as VehicleType[]).map((t) => {
              const labels: Record<VehicleType, string> = {
                voiture: "Voiture",
                moto: "Moto (> 50 cm³)",
                cyclo: "Cyclomoteur (≤ 50 cm³)",
              };
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => handleVehicleChange(t)}
                  className={vehicleType === t ? active : inactive}
                >
                  {labels[t]}
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* Puissance fiscale */}
        {baremes && (
          <fieldset className="mb-7">
            <legend className="block text-sm font-semibold text-gray-700 mb-3">
              Puissance fiscale
            </legend>
            <div className="flex flex-wrap gap-2">
              {baremes.map((b) => (
                <button
                  key={b.cv}
                  type="button"
                  onClick={() => setPuissance(b.cv)}
                  className={puissance === b.cv ? active : inactive}
                >
                  {b.cv}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {/* Distance */}
        <div className="mb-7">
          <label
            htmlFor="ik-distance"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Distance parcourue à titre professionnel (km/an)
          </label>
          <input
            id="ik-distance"
            type="number"
            min="1"
            step="1"
            value={distanceStr}
            onChange={(e) => setDistanceStr(e.target.value)}
            placeholder="Ex : 8 500"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-turquoise-500/40 focus:border-turquoise-500 transition"
          />
        </div>

        {/* Toggle électrique */}
        <div className="mb-8 flex items-center justify-between gap-4 bg-[#F1F8EA] rounded-xl px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-gray-800">Véhicule 100 % électrique</p>
            <p className="text-xs text-gray-500 mt-0.5">Majoration de +20 % sur le montant calculé</p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={isElectric}
            aria-label="Véhicule 100 % électrique"
            onClick={() => setIsElectric(!isElectric)}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-turquoise-500/40 ${
              isElectric ? "bg-turquoise-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                isElectric ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* Résultat */}
        {result ? (
          <div className="bg-turquoise-500 rounded-xl p-6 text-white text-center">
            <p className="text-sm font-medium text-white/80 mb-1">Indemnité kilométrique estimée</p>
            <p className="text-5xl font-extrabold tracking-tight mb-3">
              {result.final.toLocaleString("fr-FR", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 0,
              })}
            </p>
            <p className="text-sm text-white/80">
              Tranche : {result.tranche.rangeLabel}
            </p>
            <p className="text-sm text-white/80 mt-0.5">
              Formule : {result.tranche.formulaLabel}
              {isElectric && " × 1,20"}
            </p>
            {isElectric && (
              <p className="text-xs text-white/60 mt-1">
                Base avant majoration :{" "}
                {result.base.toLocaleString("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                  maximumFractionDigits: 0,
                })}
              </p>
            )}
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-200 rounded-xl py-8 text-center text-gray-400 text-sm">
            Renseignez une distance pour voir le résultat
          </div>
        )}
      </div>

      {/* CTA 1 */}
      <div className="bg-[#0081A5] rounded-2xl p-8 mb-8 text-white">
        <h2 className="text-xl font-extrabold mb-2">
          Cette simulation vous laisse des questions ?
        </h2>
        <p className="text-sm text-white/80 leading-relaxed mb-6">
          En tant qu&apos;expert-comptable spécialisé freelances et SASU, je vous aide à
          optimiser vos frais professionnels et sécuriser votre déclaration.
        </p>
        <a
          href="https://calendly.com/joel-sayag-jsaexpertise/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-[#0081A5] font-bold text-sm px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
        >
          Prendre rendez-vous (30 min, gratuit)
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Bloc À savoir */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
        <h2 className="text-lg font-extrabold text-gray-900 mb-5 flex items-center gap-2.5">
          <span className="flex-shrink-0 w-8 h-8 bg-turquoise-50 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-turquoise-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          À savoir sur le barème kilométrique
        </h2>
        <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-turquoise-500 mt-2" />
            <div>
              <p className="font-semibold text-gray-900">Ce que couvre le barème</p>
              <p className="text-gray-600 mt-0.5">La dépréciation du véhicule, l&apos;entretien et les réparations, les pneumatiques, le carburant et l&apos;assurance. Aucun justificatif n&apos;est requis pour ces postes.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-turquoise-500 mt-2" />
            <div>
              <p className="font-semibold text-gray-900">Ce qui s&apos;ajoute au barème (avec justificatifs)</p>
              <p className="text-gray-600 mt-0.5">Péages, frais de parking et intérêts d&apos;emprunt pour l&apos;acquisition du véhicule sont déductibles en supplément, sur présentation des pièces justificatives.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-turquoise-500 mt-2" />
            <div>
              <p className="font-semibold text-gray-900">Conditions d&apos;utilisation (voitures)</p>
              <p className="text-gray-600 mt-0.5">Vous devez être propriétaire ou copropriétaire du véhicule, ou qu&apos;il appartienne à un membre de votre foyer fiscal.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-turquoise-500 mt-2" />
            <div>
              <p className="font-semibold text-gray-900">Qui est concerné ?</p>
              <p className="text-gray-600 mt-0.5">Les salariés qui optent pour les frais réels au lieu de l&apos;abattement forfaitaire de 10 %, et les professionnels libéraux au régime de la déclaration contrôlée (BNC, hors micro-BNC) pour un véhicule non inscrit à l&apos;actif. Les dirigeants d&apos;entreprise (gérant d&apos;EURL, président de SASU) utilisant leur véhicule personnel peuvent se faire rembourser leurs trajets professionnels par leur société sur la base du barème.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-turquoise-500 mt-2" />
            <div>
              <p className="font-semibold text-gray-900">Justificatifs obligatoires</p>
              <p className="text-gray-600 mt-0.5">Conservez pendant 3 à 4 ans un relevé mentionnant la date, les lieux de départ et d&apos;arrivée, le motif professionnel et la distance pour chaque déplacement.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA 2 */}
      <div className="bg-white rounded-2xl border-2 border-turquoise-500 p-8">
        <h2 className="text-lg font-extrabold text-gray-900 mb-2">
          Vous avez besoin d&apos;un expert-comptable qui comprend votre activité ?
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          JSA Expertise accompagne les freelances, consultants et indépendants en SASU.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
        >
          Me contacter
        </Link>
      </div>
    </>
  );
}
