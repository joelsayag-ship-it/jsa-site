"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  calculateNetTax,
  MAX_ENFANTS,
  type Situation,
  type SituationParticuliere,
  type TaxInputs,
} from "../../lib/tax2026";

// ─────────────────────────────────────────────────────────────────────────────
// Valeurs initiales
// ─────────────────────────────────────────────────────────────────────────────

const INITIAL_INPUTS: TaxInputs = {
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
};

interface Props {
  contactHref?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers de formatage
// ─────────────────────────────────────────────────────────────────────────────

const eurosFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const percentFormatter = new Intl.NumberFormat("fr-FR", {
  style: "percent",
  maximumFractionDigits: 1,
});

const formatEuros = (n: number) => eurosFormatter.format(Math.round(n));
const formatPercent = (n: number) => percentFormatter.format(n);

// ─────────────────────────────────────────────────────────────────────────────
// Sous-composants UI
// ─────────────────────────────────────────────────────────────────────────────

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
      <header className="mb-5">
        <h2 className="text-lg md:text-xl font-bold text-gray-900">{title}</h2>
        {subtitle && (
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        )}
      </header>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Tooltip({ text }: { text: string }) {
  return (
    <span className="relative inline-block group ml-1 align-middle">
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 text-gray-600 text-[10px] font-bold cursor-help select-none"
      >
        ?
      </span>
      <span
        role="tooltip"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 max-w-[80vw] bg-gray-900 text-white text-xs leading-snug rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-10 shadow-lg"
      >
        {text}
      </span>
    </span>
  );
}

interface NumberFieldProps {
  label: string;
  value: number;
  onChange: (n: number) => void;
  hint?: string;
  tooltip?: string;
  suffix?: string;
  min?: number;
  step?: number;
}

function NumberField({
  label,
  value,
  onChange,
  hint,
  tooltip,
  suffix = "€",
  min = 0,
  step = 100,
}: NumberFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {tooltip && <Tooltip text={tooltip} />}
      </label>
      <div className="mt-1 relative">
        <input
          type="number"
          inputMode="numeric"
          min={min}
          step={step}
          value={value === 0 ? "" : value}
          placeholder="0"
          onChange={(e) => {
            const v = e.target.value;
            onChange(v === "" ? 0 : Math.max(min, Number(v)));
          }}
          className="w-full rounded-lg border border-gray-300 bg-white pl-3 pr-10 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-turquoise-500 transition"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
          {suffix}
        </span>
      </div>
      {hint && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
    </div>
  );
}

interface SelectFieldProps<T extends string> {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
  tooltip?: string;
}

function SelectField<T extends string>({
  label,
  value,
  onChange,
  options,
  tooltip,
}: SelectFieldProps<T>) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {tooltip && <Tooltip text={tooltip} />}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="mt-1 w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-turquoise-500"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-turquoise-50 text-turquoise-700 border border-turquoise-100">
      {children}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Composant principal
// ─────────────────────────────────────────────────────────────────────────────

export default function IncomeTaxSimulator2026({
  contactHref = "/#contact",
}: Props) {
  const [inputs, setInputs] = useState<TaxInputs>(INITIAL_INPUTS);
  const [detailOpen, setDetailOpen] = useState(false);

  const result = useMemo(() => calculateNetTax(inputs), [inputs]);

  const update = <K extends keyof TaxInputs>(key: K, value: TaxInputs[K]) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const reset = () => setInputs(INITIAL_INPUTS);

  const isCouple = inputs.situation === "marie_pacse";
  const enfantsOptions = Array.from({ length: MAX_ENFANTS + 1 }, (_, i) => ({
    value: String(i),
    label: i === 0 ? "Aucun enfant" : i === 1 ? "1 enfant" : `${i} enfants`,
  }));
  const alternesMax = inputs.nbEnfants;
  const alternesOptions = Array.from({ length: alternesMax + 1 }, (_, i) => ({
    value: String(i),
    label: i === 0 ? "Aucun" : `${i}`,
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* ── Colonne saisie ──────────────────────────────────────────────── */}
      <div className="lg:col-span-2 space-y-6">
        {/* 1. Situation familiale */}
        <Card
          title="Situation familiale"
          subtitle="Détermine le nombre de parts fiscales du foyer."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SelectField<Situation>
              label="Situation"
              value={inputs.situation}
              onChange={(v) => update("situation", v)}
              options={[
                { value: "celibataire", label: "Célibataire" },
                { value: "marie_pacse", label: "Marié(e) / PACSÉ(e)" },
                { value: "veuf", label: "Veuf / Veuve" },
                { value: "divorce_separe", label: "Divorcé(e) / Séparé(e)" },
              ]}
            />

            <SelectField
              label="Nombre d'enfants à charge"
              value={String(inputs.nbEnfants)}
              onChange={(v) => {
                const n = Number(v);
                update("nbEnfants", n);
                if (inputs.enfantsAlternes > n) update("enfantsAlternes", n);
              }}
              options={enfantsOptions}
            />
          </div>

          {inputs.nbEnfants > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SelectField<SituationParticuliere>
                label="Situation particulière"
                value={inputs.situationParticuliere}
                onChange={(v) => update("situationParticuliere", v)}
                options={[
                  { value: "aucune", label: "Pas de situation particulière" },
                  { value: "parent_isole", label: "Parent isolé (case T)" },
                  { value: "invalide", label: "Invalide (case P)" },
                ]}
                tooltip="Parent isolé : vous élevez seul(e) vos enfants. Invalide : titulaire d'une carte d'invalidité d'au moins 80 %."
              />

              <SelectField
                label="Dont enfants en garde alternée"
                value={String(inputs.enfantsAlternes)}
                onChange={(v) => update("enfantsAlternes", Number(v))}
                options={alternesOptions}
                tooltip="Enfants en résidence alternée : ils comptent pour la moitié d'une part fiscale."
              />
            </div>
          )}

          {inputs.nbEnfants === 0 && (
            <SelectField<SituationParticuliere>
              label="Situation particulière"
              value={inputs.situationParticuliere}
              onChange={(v) => update("situationParticuliere", v)}
              options={[
                { value: "aucune", label: "Pas de situation particulière" },
                { value: "invalide", label: "Invalide (case P)" },
              ]}
              tooltip="Invalide : titulaire d'une carte d'invalidité d'au moins 80 %."
            />
          )}

          <div className="flex flex-wrap gap-2 pt-1">
            <Pill>{result.parts.toLocaleString("fr-FR")} part(s) fiscales</Pill>
          </div>
        </Card>

        {/* 2. Revenus */}
        <Card
          title="Revenus"
          subtitle="Montants annuels nets imposables (l'abattement de 10 % est appliqué automatiquement sur les revenus)."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NumberField
              label={isCouple ? "Salaires du déclarant" : "Salaires"}
              value={inputs.revenus}
              onChange={(n) => update("revenus", n)}
              tooltip="Salaires, rémunération de dirigeant, pensions et retraites — net imposable annuel."
            />
            {isCouple && (
              <NumberField
                label="Salaires du conjoint"
                value={inputs.revenusConjoint}
                onChange={(n) => update("revenusConjoint", n)}
                tooltip="Salaires, rémunération de dirigeant, pensions et retraites du conjoint."
              />
            )}
            <NumberField
              label="Revenus fonciers"
              value={inputs.revenusFonciers}
              onChange={(n) => update("revenusFonciers", n)}
              tooltip="Loyers nets imposables, après charges (régime réel) ou après abattement micro-foncier 30 %."
            />
            <NumberField
              label="BIC / BNC / autres revenus"
              value={inputs.bicBncAutres}
              onChange={(n) => update("bicBncAutres", n)}
              tooltip="Bénéfices indépendants (réel ou micro après abattement), LMNP, et autres revenus à intégrer au barème."
            />
          </div>
        </Card>

        {/* 3. Charges déductibles */}
        <Card
          title="Charges déductibles"
          subtitle="Diminuent le revenu net global imposable."
        >
          <NumberField
            label="Total des charges déductibles"
            value={inputs.chargesDeductibles}
            onChange={(n) => update("chargesDeductibles", n)}
            tooltip="Pension alimentaire versée, versements PER, CSG déductible, et autres charges admises en déduction du revenu global."
          />
        </Card>

        {/* 4. Dons & crédit garde d'enfants */}
        <Card
          title="Dons & crédit d'impôt garde d'enfants"
          subtitle="Viennent en déduction de l'impôt."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NumberField
              label="Dons aux associations"
              value={inputs.donsAssociations}
              onChange={(n) => update("donsAssociations", n)}
              hint="Réduction de 66 %"
              tooltip="Dons aux organismes d'intérêt général. Plafonds spécifiques non gérés dans cette version."
            />
            <NumberField
              label="Frais de garde d'enfants de moins de 6 ans"
              value={inputs.gardeEnfantsMoins6}
              onChange={(n) => update("gardeEnfantsMoins6", n)}
              hint="Crédit de 50 %"
              tooltip="Crèche, assistante maternelle agréée, garderie pour les enfants de moins de 6 ans, hors domicile."
            />
          </div>

          <button
            type="button"
            onClick={reset}
            className="mt-2 inline-flex items-center text-sm font-medium text-turquoise-700 hover:text-turquoise-900 underline underline-offset-4"
          >
            Réinitialiser tous les champs
          </button>
        </Card>
      </div>

      {/* ── Colonne résultat (sticky) ───────────────────────────────────── */}
      <aside className="lg:col-span-1">
        <div className="lg:sticky lg:top-24 space-y-4">
          <div className="bg-gradient-to-br from-turquoise-500 to-turquoise-700 text-white rounded-2xl p-6 shadow-lg">
            <p className="text-sm uppercase tracking-wide opacity-90">
              Impôt net estimé 2026
            </p>
            <p className="text-4xl md:text-5xl font-extrabold mt-2 leading-none">
              {formatEuros(result.impotNet)}
            </p>
            <p className="text-xs opacity-90 mt-2">sur les revenus 2025</p>

            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white/10 rounded-lg p-3">
                <dt className="text-xs opacity-80">TMI</dt>
                <dd className="font-bold text-lg">
                  {formatPercent(result.tauxMarginal)}
                </dd>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <dt className="text-xs opacity-80">Taux moyen</dt>
                <dd className="font-bold text-lg">
                  {formatPercent(result.tauxMoyen)}
                </dd>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <dt className="text-xs opacity-80">Revenu imposable</dt>
                <dd className="font-bold text-base">
                  {formatEuros(result.revenuNetImposable)}
                </dd>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <dt className="text-xs opacity-80">Parts</dt>
                <dd className="font-bold text-base">
                  {result.parts.toLocaleString("fr-FR")}
                </dd>
              </div>
            </dl>
          </div>

          {/* Détail du calcul pliable */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <button
              type="button"
              onClick={() => setDetailOpen((v) => !v)}
              className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-800 hover:bg-gray-50 transition"
              aria-expanded={detailOpen}
            >
              <span>Détail du calcul</span>
              <span
                className={`transform transition-transform ${
                  detailOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>
            {detailOpen && (
              <dl className="px-5 pb-5 text-sm space-y-2">
                <Row
                  label="Revenu brut total"
                  value={formatEuros(result.revenuBrutTotal)}
                />
                <Row
                  label="Abattements salaires (10 %)"
                  value={`- ${formatEuros(result.abattementsTotal)}`}
                />
                <Row
                  label="Charges déductibles"
                  value={`- ${formatEuros(result.chargesDeductiblesTotal)}`}
                />
                <Row
                  label="Revenu net imposable"
                  value={formatEuros(result.revenuNetImposable)}
                  emphasis
                />
                <Row
                  label="Quotient familial"
                  value={formatEuros(result.quotientFamilial)}
                />
                <Row
                  label="Impôt brut (parts réelles)"
                  value={formatEuros(result.impotAvantPlafond)}
                />
                {result.effetPlafonnement > 0 && (
                  <Row
                    label="Effet plafonnement QF"
                    value={`+ ${formatEuros(result.effetPlafonnement)}`}
                  />
                )}
                <Row
                  label="Impôt après plafonnement QF"
                  value={formatEuros(result.impotApresPlafond)}
                />
                {result.decote > 0 && (
                  <Row
                    label="Décote"
                    value={`- ${formatEuros(result.decote)}`}
                  />
                )}
                <Row
                  label="Réductions / crédits d'impôt"
                  value={`- ${formatEuros(result.reductionsCreditsTotal)}`}
                />
                <Row
                  label="Impôt net estimé"
                  value={formatEuros(result.impotNet)}
                  emphasis
                />
                {result.effetPlafonnement > 0 && (
                  <p className="text-xs text-gray-500 pt-2">
                    Plafonnement du quotient familial appliqué de manière
                    simplifiée.
                  </p>
                )}
              </dl>
            )}
          </div>

          {/* CTA */}
          <div className="bg-[#F1F8EA] rounded-2xl p-5 border border-green-100">
            <p className="text-sm text-gray-700 leading-relaxed">
              Vous êtes <strong>freelance, dirigeant de SASU/EURL,
              micro-entrepreneur ou LMNP</strong> ? JSA Expertise peut vous
              aider à optimiser votre rémunération, vos charges et votre
              fiscalité.
            </p>
            <Link
              href={contactHref}
              className="mt-4 inline-flex items-center justify-center w-full bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-5 py-3 rounded-full transition-colors text-sm"
            >
              Être accompagné par JSA Expertise
            </Link>
          </div>

          {/* Mentions */}
          <div className="text-[11px] leading-relaxed text-gray-500 space-y-2 px-1">
            <p>
              Ce simulateur fournit une <strong>estimation indicative</strong>{" "}
              de l&apos;impôt sur le revenu 2026, calculée sur la base du barème
              applicable aux revenus 2025. Il ne remplace pas une étude
              personnalisée. Certains cas particuliers ne sont pas pris en
              compte.
            </p>
            <p>Les montants doivent être saisis en euros annuels.</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

function Row({
  label,
  value,
  emphasis = false,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`flex justify-between items-center gap-4 ${
        emphasis
          ? "pt-2 border-t border-gray-200 font-semibold text-gray-900"
          : "text-gray-700"
      }`}
    >
      <dt>{label}</dt>
      <dd className="tabular-nums whitespace-nowrap">{value}</dd>
    </div>
  );
}
