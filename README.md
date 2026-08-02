# Portfolio — Cédric Bouchard

Site web portfolio personnel construit avec Astro et TypeScript.

Le site est généré statiquement : le HTML complet est produit au moment de la
compilation et n'expédie qu'environ 1 Ko de JavaScript (menu mobile, onglets,
curseur de la grille latérale, révélation au défilement).

## Technologies

- **Framework :** Astro 7 (sortie statique, zéro JS par défaut)
- **Langage :** TypeScript
- **Style :** styles à portée de composant + jetons de design (`src/styles/tokens.css`)
- **Contenu :** collections Astro validées par Zod (`src/content/`)
- **Hébergement :** Vercel

## Structure

```
src/
  assets/           images sources + icônes devicon + police Inter
    icons/          SVG devicon (v2.17.0, hébergés localement)
    fonts/          Inter variable, sous-ensemble latin
  components/       composants .astro
  content/          projets, expérience, compétences (JSON)
  layouts/          Base.astro — métadonnées, SEO, JSON-LD
  lib/icons.ts      résolution des icônes vers des URL locales
  pages/index.astro
  scripts/reveal.ts primitive de révélation au défilement
  styles/           tokens.css, global.css, fonts.css
```

## Modifier le contenu

Les projets, expériences et compétences sont des fichiers de données, pas du
code. Pour ajouter un projet, il suffit d'ajouter une entrée à
`src/content/projects.json` — le schéma dans `src/content.config.ts` valide le
résultat à la compilation.

Pour ajouter une icône technologique, télécharger le SVG devicon correspondant
dans `src/assets/icons/` en respectant le nom `<slug>-<variante>.svg`.

## Animations

Les fondations se trouvent dans `src/styles/tokens.css` (durées, courbes
d'accélération, décalage des séquences) et `src/scripts/reveal.ts`. Toute la
motion passe par les variables `--dur-*`, ce qui permet à la règle globale
`prefers-reduced-motion` de tout neutraliser d'un coup.

Pour des effets plus lourds (GSAP, three.js, WebGL), les ajouter dans un
`<script>` de composant ou une île `client:visible` — le coût n'est payé que
lorsque la section concernée est affichée.

## Démarrage

### Prérequis

- [Node.js](https://nodejs.org/) (LTS recommandé)
- npm

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

### Compilation

```bash
npm run build
```

Exécute `astro check` (vérification des types) puis `astro build`.

### Aperçu de la version de production

```bash
npm run preview
```
