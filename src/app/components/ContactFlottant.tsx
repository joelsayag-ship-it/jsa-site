"use client";

import { useState, useEffect } from "react";

const API_URL = "https://jsa-contact-6h1i0r3a9-joelsayag-3015s-projects.vercel.app/api/contact";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactFlottant() {
  const [ouvert, setOuvert] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    statut: "",
    message: "",
  });

  // Ferme le panneau avec Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOuvert(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setForm({ nom: "", email: "", telephone: "", statut: "", message: "" });
    setStatus("idle");
  };

  const inputCls =
    "w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00B6DE]/40 focus:border-[#00B6DE] transition placeholder-gray-400";

  return (
    <>
      {/* Overlay semi-transparent quand ouvert */}
      {ouvert && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setOuvert(false)}
        />
      )}

      {/* Bouton flottant fermé */}
      <button
        onClick={() => setOuvert(true)}
        aria-label="Ouvrir le formulaire de contact"
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#FF6B35] hover:bg-[#e85a25] text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-x-1 ${
          ouvert ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{ borderRadius: "12px 0 0 12px" }}
      >
        <span className="flex items-center gap-2.5 px-4 py-3">
          {/* Icône calendrier */}
          <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="text-sm font-extrabold tracking-wide leading-tight whitespace-nowrap">
            Rendez-vous<br />Offert
          </span>
        </span>
      </button>

      {/* Panneau slide-in */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          ouvert ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header panneau */}
        <div className="bg-[#00B6DE] px-5 pt-6 pb-5 flex-shrink-0">
          <div className="flex items-start justify-between mb-1">
            <h2 className="text-white font-extrabold text-lg leading-tight">
              Parlons de votre projet
            </h2>
            <button
              onClick={() => setOuvert(false)}
              aria-label="Fermer"
              className="text-white/80 hover:text-white ml-3 flex-shrink-0 mt-0.5"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-white/80 text-xs">Réponse sous 24h · Premier RDV gratuit</p>
        </div>

        {/* Contenu scrollable */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-base mb-1">Message envoyé !</p>
                <p className="text-sm text-gray-500">On vous répond sous 24h.</p>
              </div>
              <button
                onClick={reset}
                className="mt-2 text-xs text-[#00B6DE] hover:underline"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Prénom</label>
                <input
                  type="text"
                  name="nom"
                  value={form.nom}
                  onChange={handleChange}
                  placeholder="Votre prénom"
                  required
                  className={inputCls}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="vous@example.com"
                  required
                  className={inputCls}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Téléphone</label>
                <input
                  type="tel"
                  name="telephone"
                  value={form.telephone}
                  onChange={handleChange}
                  placeholder="06 12 34 56 78"
                  className={inputCls}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Statut juridique</label>
                <select
                  name="statut"
                  value={form.statut}
                  onChange={handleChange}
                  className={inputCls}
                >
                  <option value="">Sélectionnez...</option>
                  <option value="micro">Micro-entreprise</option>
                  <option value="sasu">SASU / SAS</option>
                  <option value="eurl">EURL / SARL</option>
                  <option value="creation">En création</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Votre situation</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Votre situation en quelques mots..."
                  className={`${inputCls} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  Une erreur est survenue. Réessayez ou contactez-nous directement.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#00B6DE] hover:bg-[#0081A5] disabled:opacity-60 text-white font-bold text-sm py-3 rounded-full transition-colors mt-1"
              >
                {status === "loading" ? "Envoi en cours…" : "Envoyer"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
