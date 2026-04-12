'use client';

export default function HeroForm() {
  return (
    <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Nom</label>
        <input
          type="text"
          placeholder="Jean Dupont"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B6DE] focus:border-transparent transition bg-gray-50"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
        <input
          type="email"
          placeholder="jean@monactivite.fr"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B6DE] focus:border-transparent transition bg-gray-50"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Statut juridique</label>
        <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00B6DE] focus:border-transparent transition bg-gray-50">
          <option value="">Sélectionner...</option>
          <option>Micro-entreprise</option>
          <option>SASU</option>
          <option>EURL</option>
          <option>Portage salarial</option>
          <option>Je ne sais pas encore</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-[#00B6DE] text-white font-semibold py-3 rounded-xl hover:bg-[#0081A5] transition-colors text-sm mt-1"
      >
        Obtenir mon devis gratuit →
      </button>
      <p className="text-center text-xs text-gray-400">Sans engagement · Réponse sous 24h</p>
    </form>
  );
}
