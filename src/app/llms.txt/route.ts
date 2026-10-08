import { getAllPosts } from "@/lib/blog";

// Fichier lu par les moteurs IA (ChatGPT, Perplexity, Claude, Gemini…).
// Généré au build : chaque nouvel article du blog y apparaît automatiquement.
export const dynamic = "force-static";

const BASE_URL = "https://www.jsaexpertise.com";

const LOCAL_PAGES = [
  ["Charenton-le-Pont (siège)", "/expert-comptable-freelance-charenton-le-pont"],
  ["Vincennes", "/expert-comptable-freelance-vincennes"],
  ["Saint-Mandé", "/expert-comptable-freelance-saint-mande"],
  ["Saint-Maurice", "/expert-comptable-freelance-saint-maurice"],
  ["Joinville-le-Pont", "/expert-comptable-freelance-joinville-le-pont"],
  ["Paris 12e", "/expert-comptable-freelance-paris-12"],
];

const TOOLS = [
  ["Simulateur d'impôt sur le revenu 2026", "/simulateur-impot-revenu", "barème 2026, parts fiscales, abattements micro-entreprise"],
  ["Simulateur de charges SASU & EURL", "/simulateur-charges", "cotisations sociales du dirigeant, simulateurs URSSAF"],
  ["Simulateur d'indemnités kilométriques 2026", "/ressources/simulateur-indemnites-kilometriques", "barème fiscal officiel"],
];

export function GET() {
  const posts = getAllPosts();

  const body = `# JSA Expertise — Expert-comptable pour freelances & indépendants

> Cabinet d'expertise comptable 100% digital basé à Charenton-le-Pont (94), spécialisé dans l'accompagnement des freelances, consultants indépendants, SASU, EURL et agences. Fondé par Joël Sayag, expert-comptable inscrit à l'Ordre des Experts-Comptables de Paris Île-de-France. Clients à Paris, dans le Val-de-Marne et partout en France.

## Identité
- Nom : JSA Expertise
- Type : Cabinet d'expertise comptable
- Fondateur : Joël Sayag, expert-comptable (10 ans d'expérience)
- Adresse : 10 rue du Président Kennedy, 94220 Charenton-le-Pont
- Téléphone : 06 60 73 55 46
- Email : joel.sayag@jsaexpertise.com
- SIRET : 93393291500012
- Inscrit à l'Ordre des Experts-Comptables de Paris Île-de-France
- Annuaire de l'Ordre : https://annuaire.experts-comptables.org/expert-comptable/36207-jsa-expertise-charenton-le-pont-94220

## Spécialisation
Cabinet 100% digital spécialisé dans l'accompagnement des freelances,
consultants indépendants et agences. Pas un cabinet généraliste —
une expertise dédiée aux indépendants.

## Services
- Comptabilité freelance (tenue comptable, TVA, bilan, liasse fiscale)
- Création d'entreprise (SASU, EURL, SAS, SARL)
- Optimisation fiscale et de rémunération (arbitrage salaire/dividendes)
- Passage de micro-entreprise à société
- Accompagnement agences
- Bulletins de paie
- Secrétariat juridique

## Tarifs
- Offre freelance : devis personnalisé, environ 150-250€ HT/mois
- Création d'entreprise : à partir de 300€
- Premier rendez-vous gratuit et sans engagement (30 min, visio ou cabinet)

## Clients typiques
Consultants IT, développeurs, designers, coachs, formateurs,
managers de transition, agences digitales, professions libérales

## Outils
- Application Tiime (facturation, synchronisation bancaire, notes de frais)
- Conformité facturation électronique 2026/2027 incluse sans surcoût

## Pages clés
- [Accueil](${BASE_URL}/): présentation du cabinet, offres et tarifs
- [Expert-comptable freelance](${BASE_URL}/expert-comptable-freelance): rôle, missions, tarifs et critères de choix d'un expert-comptable pour freelance
- [Qui sommes-nous](${BASE_URL}/qui-sommes-nous): Joël Sayag, parcours et approche
- [Contact et prise de rendez-vous](${BASE_URL}/#contact): formulaire et réservation d'un créneau gratuit

## Zones desservies
${LOCAL_PAGES.map(([name, path]) => `- [Expert-comptable freelance ${name}](${BASE_URL}${path})`).join("\n")}
- Paris, Val-de-Marne (94) et France entière à distance

## Outils gratuits
${TOOLS.map(([name, path, desc]) => `- [${name}](${BASE_URL}${path}): ${desc}`).join("\n")}

## Guides et articles
${posts.map((p) => `- [${p.title}](${BASE_URL}/blog/${p.slug}): ${p.description}`).join("\n")}

## Réseaux
- LinkedIn : https://www.linkedin.com/in/joël-sayag-expert-comptable-912795106/
- Avis Google : https://g.page/r/CTc5TfiZ6UlwEBM/review
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
