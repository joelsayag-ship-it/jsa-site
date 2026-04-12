'use client';

export default function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Prénom</label>
          <input
            type="text"
            placeholder="Jean"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B6DE] focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Nom</label>
          <input
            type="text"
            placeholder="Dupont"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B6DE] focus:border-transparent transition"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email professionnel</label>
        <input
          type="email"
          placeholder="jean@monactivite.fr"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B6DE] focus:border-transparent transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Votre activité</label>
        <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00B6DE] focus:border-transparent transition bg-white">
          <option value="">Sélectionner...</option>
          <option>Développeur / Tech</option>
          <option>Designer / Créatif</option>
          <option>Consultant / Stratégie</option>
          <option>Marketing / Communication</option>
          <option>Autre</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message (optionnel)</label>
        <textarea
          rows={3}
          placeholder="Parlez-nous de votre situation, vos questions..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B6DE] focus:border-transparent transition resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#00B6DE] text-white font-bold py-4 rounded-xl hover:bg-[#0081A5] transition-colors text-lg"
      >
        Envoyer ma demande →
      </button>
      <p className="text-center text-xs text-gray-400">
        Réponse garantie sous 24h · Aucun engagement
      </p>
    </form>
  );
}
