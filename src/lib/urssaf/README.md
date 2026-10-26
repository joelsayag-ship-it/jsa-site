# Règles URSSAF du simulateur SASU / EURL

Le simulateur `/ressources/simulateur-sasu-eurl` utilise le même moteur et les mêmes règles que les simulateurs officiels de l'URSSAF (mon-entreprise.urssaf.fr) :

- moteur : paquet npm `publicodes` en version 1.8.1 (celle utilisée par mon-entreprise) ;
- `modele-as.json` : modèle « assimilé salarié » (SASU) ;
- `modele-ti.json` : modèle « travailleur indépendant » (EURL).

Les deux fichiers JSON sont compilés à partir des dossiers `modele-as/règles`, `modele-ti/règles` et `modele-commun/règles` du dépôt [betagouv/mon-entreprise](https://github.com/betagouv/mon-entreprise) (licence MIT), commit `01861d0` du 23/10/2026. Règles en vigueur au 01/07/2026 (règle `date`).

## Mise à jour annuelle

1. Cloner `betagouv/mon-entreprise` et vérifier la version de `publicodes` dans son `package.json` (aligner `package.json` du site si elle change).
2. Pour chaque modèle, fusionner tous les fichiers `*.publicodes` (YAML 1.2) de `modele-XX/règles` et `modele-commun/règles` dans un seul objet JSON (une clé par règle, sans doublon) et remplacer le fichier correspondant ici.
3. Refaire au moins 3 simulations comparées avec mon-entreprise.urssaf.fr avant de publier.

Logique de calcul : `comparateur.ts`, identique à celle du comparateur de statuts de l'URSSAF (tout le bénéfice versé en rémunération, sans dividendes).
