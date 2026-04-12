"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    statut: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with actual API call
    setSent(true);
  };

  return (
    <section id="contact" className="bg-turquoise-500 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Parlons de votre projet
          </h2>
          <p className="text-turquoise-100 text-lg">
            Un message, un appel, ou directement un rendez-vous — à vous de choisir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-turquoise-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-turquoise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                <p className="text-gray-500">Joël vous répondra sous 24h ouvrées.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Envoyer un message</h3>

                <div className="grid grid-cols-2 gap-4">
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
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent"
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
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    name="telephone"
                    type="tel"
                    value={form.telephone}
                    onChange={handleChange}
                    placeholder="+33 6 00 00 00 00"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent"
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
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent bg-white"
                  >
                    <option value="">Sélectionnez votre statut</option>
                    <option>Micro-entreprise</option>
                    <option>SASU / SAS</option>
                    <option>EURL / SARL</option>
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
                    rows={4}
                    placeholder="Décrivez brièvement votre situation et vos besoins..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-turquoise-500 hover:bg-turquoise-700 text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </div>

          {/* Calendly */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">Réserver un créneau</h3>
              <p className="text-sm text-gray-500 mt-1">
                Consultation gratuite de 30 minutes avec Joël
              </p>
            </div>
            <iframe
              src="https://calendly.com/joel-sayag-jsaexpertise/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=171717&primary_color=00B6DE"
              width="100%"
              height="480"
              frameBorder="0"
              title="Réserver un rendez-vous"
              className="block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
