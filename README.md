# Site vitrine — Nicolas Rabot

Site one-page (React + Vite + Tailwind) pour Nicolas Rabot, artisan ébéniste et
forestier proposant des formations d'immersion à l'habitat écologique, autonome et
insolite, à Revel (Haute-Garonne).

## Démarrer

```bash
npm install
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

Le dossier `dist/` est un site statique déployable sur Netlify, Vercel, OVH, etc.

## Modifier le contenu

Tout le contenu éditable est centralisé dans **`src/data/content.ts`** :
coordonnées, horaires, formations, avis, textes de l'artisan.

## Formulaire de contact (Formspree)

Le formulaire utilise [Formspree](https://formspree.io) (gratuit, sans backend) :

1. Créez un compte et un formulaire sur formspree.io.
2. Copiez l'identifiant du formulaire (ex. `xkgojabc`).
3. Renseignez-le dans `src/data/content.ts` → `site.formspreeId`.

Les messages arriveront alors sur l'email associé au compte Formspree.

## Images

Les photos optimisées sont dans `public/images/`. Pour en ajouter, déposez le fichier
puis référencez-le dans `src/data/content.ts`.

## Points à confirmer avec Nicolas

- **Prix et dates** des formations (indicatifs pour l'instant).
- **Formation 2 « Habitat insolite »** : programme rédigé de façon plausible, à valider.
- **Avis clients** : témoignages actuellement illustratifs, à remplacer par de vrais avis.
- **Éligibilité au financement** CPF / OPCO / FAF pour chaque stage.
- **Localisation exacte** de la carte (actuellement centrée sur le Lac de Saint-Ferréol).
