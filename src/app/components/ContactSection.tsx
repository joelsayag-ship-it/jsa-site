"use client";

import { useState } from "react";

const API_URL = "https://jsa-contact-6h1i0r3a9-joelsayag-3015s-projects.vercel.app/api/contact";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    statut: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const payload = {
      nom: form.nom,
      email: form.email,
      telephone: form.telephone,
      statut: form.statut,
      message: form.message,
    };

    console.log("[JSA Contact] Envoi vers", API_URL);
    console.log("[JSA Contact] Payload", payload);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log("[JSA Contact] Status HTTP", res.status);

      if (!res.ok) {
        let errorBody = "";
        try { errorBody = await res.text(); } catch {}
        console.error("[JSA Contact] Erreur API", res.status, errorBody);
        throw new Error(`HTTP ${res.status} — ${errorBody}`);
      }

      const data = await res.json().catch(() => ({}));
      console.log("[JSA Contact] Réponse API", data);
      setStatus("success");
    } catch (err) {
      console.error("[JSA Contact] Exception fetch", err);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent";

  return (
    <section id="contact" className="bg-[#F1F8EA] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-3 leading-[1.1] tracking-tight">
            Prenons rendez-vous
          </h2>
          <p className="text-gray-600 text-base md:text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
            Que vous soyez en création d&apos;activité, en transition depuis un autre cabinet
            ou simplement à la recherche d&apos;un expert-comptable réactif, nous sommes là
            pour vous accompagner. Le premier rendez-vous est gratuit et sans engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* Formulaire */}
          <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col">
            {status === "success" ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-turquoise-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-turquoise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">Demande envoyée !</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  ✅ Votre demande a bien été envoyée. Nous vous répondons sous 24h&nbsp;!
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setForm({ nom: "", email: "", telephone: "", statut: "", message: "" });
                  }}
                  className="inline-flex items-center gap-2 text-sm font-medium text-turquoise-500 hover:text-turquoise-700 border border-turquoise-200 hover:border-turquoise-500 rounded-full px-4 py-2 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-turquoise-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-gray-900 leading-tight">Envoyer un message</h3>
                    <p className="text-xs text-turquoise-500 font-semibold tracking-wide uppercase">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      name="nom"
                      value={form.nom}
                      onChange={handleChange}
                      required
                      placeholder="Jean Dupont"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jean@exemple.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone <span className="text-gray-400">(optionnel)</span>
                  </label>
                  <input
                    name="telephone"
                    type="tel"
                    value={form.telephone}
                    onChange={handleChange}
                    placeholder="+33 6 00 00 00 00"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Statut juridique
                  </label>
                  <select
                    name="statut"
                    value={form.statut}
                    onChange={handleChange}
                    className={`${inputClass} bg-white`}
                  >
                    <option value="">Sélectionnez votre statut</option>
                    <option>Micro-entreprise</option>
                    <option>SASU / SAS</option>
                    <option>EURL / SARL</option>
                    <option>EI</option>
                    <option>En cours de création</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    placeholder="Décrivez brièvement votre situation et vos besoins..."
                    className={`${inputClass} resize-none flex-1`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    Une erreur est survenue, veuillez réessayer.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-turquoise-500 hover:bg-turquoise-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-colors"
                >
                  {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
                </button>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="tel:+33660735546"
                    className="flex-1 inline-flex items-center gap-3 bg-[#F1F8EA] border border-gray-200 hover:border-turquoise-500 hover:shadow-md rounded-2xl px-4 py-3 transition-all group"
                  >
                    <div className="w-9 h-9 bg-white group-hover:bg-turquoise-500 rounded-xl flex items-center justify-center transition-colors flex-shrink-0">
                      <svg className="w-4 h-4 text-turquoise-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Appelez directement</p>
                      <p className="text-sm font-extrabold text-gray-900 tracking-wide">06 60 73 55 46</p>
                    </div>
                  </a>

                  <a
                    href="mailto:joel.sayag@jsaexpertise.com"
                    className="flex-1 inline-flex items-center gap-3 bg-[#F1F8EA] border border-gray-200 hover:border-turquoise-500 hover:shadow-md rounded-2xl px-4 py-3 transition-all group"
                  >
                    <div className="w-9 h-9 bg-white group-hover:bg-turquoise-500 rounded-xl flex items-center justify-center transition-colors flex-shrink-0">
                      <svg className="w-4 h-4 text-turquoise-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Écrivez-nous</p>
                      <p className="text-sm font-extrabold text-gray-900">Par email</p>
                    </div>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Calendly */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-turquoise-500 to-turquoise-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white leading-tight">Réserver un créneau</h3>
                  <p className="text-xs text-white/80 font-semibold tracking-wide uppercase">Consultation gratuite · 30 min · avec Joël</p>
                </div>
              </div>
            </div>
            <iframe
              src="https://calendly.com/joel-sayag-jsaexpertise/30min?hide_gdpr_banner=1&primary_color=00B6DE"
              width="100%"
              height="700"
              frameBorder="0"
              title="Réserver un rendez-vous avec Joël Sayag"
              className="block"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
