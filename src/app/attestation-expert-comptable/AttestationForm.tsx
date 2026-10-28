"use client";

import { useState } from "react";
import Link from "next/link";
import { DELAI, EXPRESS, prix } from "./attestations-data";
import { origineDemande } from "@/lib/origine-contact";

// Même API que le formulaire de contact principal (envoi par Resend vers joel.sayag@jsaexpertise.com)
const API_URL = "https://jsa-contact-api-joelsayag-3015s-projects.vercel.app/api/contact";

// Liste volontairement courte (choix de Joël, 28/10/2026). Les autres pages attestation
// (fonds propres, France Travail, Bpifrance) présélectionnent « Autre attestation ».
const TYPES = [
  "Attestation de revenus",
  "Attestation de chiffre d'affaires",
  "Business plan / prévisionnel",
  "Autre attestation",
];

// Une demande est signalée EXPRESS dans le mail si le message parle d'urgence.
const EXPRESS_RE = /express|urgen|aujourd'hui|dans la journ[ée]e|demain/i;

type Status = "idle" | "loading" | "success" | "error";

export default function AttestationForm({ defaultType = "", prixMin = 150 }: { defaultType?: string; prixMin?: number }) {
  const typeInitial = !defaultType ? "" : TYPES.includes(defaultType) ? defaultType : "Autre attestation";
  const empty = { type: typeInitial, nom: "", email: "", telephone: "", message: "", website: "" };
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const type = form.type || "Non précisé";
    const express = EXPRESS_RE.test(form.message);
    const message = [
      express ? "DEMANDE D'ATTESTATION, URGENCE MENTIONNÉE DANS LE MESSAGE" : "DEMANDE D'ATTESTATION (page attestation du site)",
      `Type : ${type}`,
      ...(defaultType && !TYPES.includes(defaultType) ? [`Page consultée : ${defaultType}`] : []),
      `Page : ${typeof window !== "undefined" ? window.location.pathname : ""}`,
      "",
      form.message.trim() || "(pas de précision)",
    ].join("\n");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: form.nom,
          email: form.email,
          telephone: form.telephone,
          statut: `${express ? "EXPRESS " : ""}Attestation : ${type}`,
          message,
          website: form.website,
          ...origineDemande("Formulaire de demande d'attestation"),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "form_submit", {
        event_category: "attestation",
        event_label: type,
      });
    } catch (err) {
      console.error("[JSA Attestation] Échec de l'envoi", err);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent";

  return (
    <section id="demande" className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8 scroll-mt-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Demandez votre attestation
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Décrivez votre besoin en deux lignes. Je vous réponds sous 24 h avec la liste des pièces à
            fournir et le prix exact, avant toute intervention.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              `À partir de ${prix(prixMin)}`,
              `Attestation signée sous ${DELAI} après réception des pièces`,
              `Service express possible : attestation ${EXPRESS}`,
              "100 % en ligne, partout en France",
              "Signée par un expert-comptable inscrit à l'Ordre",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-turquoise-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 bg-white rounded-2xl p-6 md:p-8 shadow-xl">
          {status === "success" ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-turquoise-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-turquoise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Demande bien reçue</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {EXPRESS_RE.test(form.message)
                  ? "Urgence bien notée : je vous recontacte en priorité, par téléphone ou par e-mail, avec la liste des pièces et le prix."
                  : "Je reviens vers vous sous 24 h, par e-mail ou par téléphone, avec la liste des pièces et le prix de votre attestation."}
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setForm(empty);
                }}
                className="text-sm font-medium text-turquoise-500 hover:text-turquoise-700 border border-turquoise-200 hover:border-turquoise-500 rounded-full px-4 py-2 transition-colors"
              >
                Faire une autre demande
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="website" value={form.website} onChange={handleChange} hidden tabIndex={-1} autoComplete="off" />

              <div>
                <label htmlFor="att-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Type d&apos;attestation *
                </label>
                <select id="att-type" name="type" value={form.type} onChange={handleChange} required className={inputClass}>
                  <option value="">Choisissez</option>
                  {TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="att-nom" className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                  <input id="att-nom" name="nom" value={form.nom} onChange={handleChange} required autoComplete="name" placeholder="Jean Dupont" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="att-tel" className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                  <input id="att-tel" name="telephone" type="tel" value={form.telephone} onChange={handleChange} required autoComplete="tel" placeholder="06 00 00 00 00" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="att-email" className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                <input id="att-email" name="email" type="email" value={form.email} onChange={handleChange} required autoComplete="email" placeholder="jean@exemple.com" className={inputClass} />
              </div>

              <div>
                <label htmlFor="att-msg" className="block text-sm font-medium text-gray-700 mb-1">
                  Votre besoin <span className="text-gray-400">(pour qui, période, date limite, express si urgent)</span>
                </label>
                <textarea
                  id="att-msg"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Ex. : SASU créée en 2024, la banque demande mes revenus 2024 et 2025 pour un crédit immobilier, avant le 15 novembre."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  L&apos;envoi n&apos;a pas fonctionné. Réessayez, ou écrivez directement à{" "}
                  <a href="mailto:joel.sayag@jsaexpertise.com" className="underline">joel.sayag@jsaexpertise.com</a>.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-turquoise-500 hover:bg-turquoise-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-colors"
              >
                {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
              </button>
              <p className="text-xs text-gray-400 leading-relaxed">
                Sans engagement. Vos coordonnées servent uniquement à traiter votre demande (
                <Link href="/politique-confidentialite" className="underline">politique de confidentialité</Link>).
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
