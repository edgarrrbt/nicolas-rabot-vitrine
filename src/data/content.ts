// -----------------------------------------------------------------------------
// Contenu centralisé du site — modifiez ici sans toucher au code des composants.
// Les éléments marqués "À CONFIRMER" doivent être validés avec Nicolas Rabot.
// -----------------------------------------------------------------------------

export const site = {
  name: 'Nicolas Rabot',
  tagline: 'Artisan ébéniste & forestier',
  phone: '07 56 80 41 24',
  phoneHref: 'tel:+33756804124',
  phoneHours: '9h – 18h',
  address: '455 chemin de Lasprades, 31250 Vaudreuille',
  location: 'Vaudreuille · Revel · Lac de Saint-Ferréol',
  region: 'Haute-Garonne, Occitanie',
  // Identifiant Formspree (https://formspree.io) — formulaire « Contact — Site Nicolas Rabot »
  formspreeId: 'meaqeqeq',
  mapEmbed:
    'https://www.google.com/maps?q=455+chemin+de+Lasprades+31250+Vaudreuille&output=embed',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=455+chemin+de+Lasprades+31250+Vaudreuille',
}

export const nav = [
  { label: 'L’artisan', href: '#artisan' },
  { label: 'Formations', href: '#formations' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Avis', href: '#avis' },
  { label: 'Contact', href: '#contact' },
]

export const hours = {
  weekdays: '9h – 12h puis 13h30 – 17h',
  note: 'Sur rendez-vous — nous consulter pour les dates de stage.',
}

export type Formation = {
  id: string
  eyebrow: string
  title: string
  image: string
  imageAlt: string
  duration: string
  price: string
  group: string
  intro: string
  program: { day: string; items: string[] }[]
  highlights: string[]
  note?: string
}

export const formations: Formation[] = [
  {
    id: 'maison-ecologique',
    eyebrow: 'Formation 1',
    title: 'Maison en bois écologique & autonome',
    image: '/images/decoupe.jpg',
    imageAlt: 'Découpe et sciage du bois de chêne à la scierie',
    duration: '3 jours',
    price: '750 € (indicatif)',
    group: 'Immersion en petit groupe',
    intro:
      'Trois jours en immersion chez l’artisan pour comprendre, du tronc au toit, comment se conçoit un habitat écologique autonome en eau et en électricité, au cœur d’une forêt de chênes gérée durablement.',
    program: [
      {
        day: 'Jour 1 — La maison autonome',
        items: [
          'Visite de l’exploitation et de la maison écologique auto-construite',
          'Fonctionnement de l’autonomie en eau et en électricité',
          'Lecture du milieu forestier environnant',
        ],
      },
      {
        day: 'Jour 2 — Le bois, de la coupe à l’atelier',
        items: [
          'Postes de travail : découpe, sciage, phytoépuration',
          'Atelier de fabrication et valorisation des essences',
          'Déjeuner dans une yourte contemporaine, balade botanique en forêt',
        ],
      },
      {
        day: 'Jour 3 — Construire',
        items: [
          'Techniques de charpente',
          'Montage des murs',
          'Réalisation du plancher, bilan du stage',
        ],
      },
    ],
    highlights: ['Aucun pré-requis', 'Immersion directe chez l’artisan', 'Dates définies ensemble'],
    note: 'Tarif et dates à reconfirmer directement avec Nicolas.',
  },
  {
    id: 'habitat-insolite',
    eyebrow: 'Formation 2',
    title: 'Habitat insolite — yourte contemporaine',
    image: '/images/cabane.jpg',
    imageAlt: 'Cabane en bois contemporaine sur pilotis, nichée dans la forêt de chênes',
    duration: '2 jours',
    price: 'Nous consulter',
    group: 'Immersion en petit groupe',
    intro:
      'Apprenez à concevoir et monter un habitat insolite, léger et réversible, en harmonie avec la forêt : structure de yourte contemporaine, matériaux naturels et locaux, et bien-être en milieu boisé.',
    program: [
      {
        day: 'Jour 1 — Concevoir',
        items: [
          'Principes de l’habitat léger et réversible',
          'Choix des essences et des matériaux naturels',
          'Structure et ossature de la yourte contemporaine',
        ],
      },
      {
        day: 'Jour 2 — Monter & habiter',
        items: [
          'Montage de la structure et de la couverture',
          'Intégration au site et sylvo-thérapie',
          'Entretien et vie au quotidien en forêt',
        ],
      },
    ],
    highlights: [
      'Aucun pré-requis',
      'Approche matériaux naturels & locaux',
      'Immersion en pleine forêt',
    ],
    note: 'Programme détaillé et tarif à confirmer avec Nicolas.',
  },
]

export type Realisation = { src: string; alt: string }

export const realisations: Realisation[] = [
  { src: '/images/palette.jpg', alt: 'Empilement de tranches de bois massif façonnées à la main' },
  { src: '/images/table-1.jpg', alt: 'Table en bois massif issue de la forêt de chênes' },
  { src: '/images/table-2.jpg', alt: 'Table en bois brut au plateau naturel' },
  { src: '/images/decoupe.jpg', alt: 'Découpe et sciage du bois à l’atelier' },
  { src: '/images/atelier.jpg', alt: 'L’atelier et la scierie de Nicolas Rabot en forêt' },
]

// NOTE : témoignages illustratifs — à remplacer par de vrais avis clients.
export type Testimonial = { quote: string; name: string; context: string }

export const testimonials: Testimonial[] = [
  {
    quote:
      'Trois jours passionnants au contact d’un artisan qui transmet vraiment son savoir. On repart avec une vision concrète de l’autonomie.',
    name: 'Camille D.',
    context: 'Stage maison écologique',
  },
  {
    quote:
      'L’immersion en forêt est unique. Nicolas prend le temps d’expliquer chaque étape, du sciage à la charpente.',
    name: 'Julien M.',
    context: 'Stage maison écologique',
  },
  {
    quote:
      'Une expérience humaine et technique. Le déjeuner dans la yourte et la balade botanique resteront des souvenirs forts.',
    name: 'Sophie L.',
    context: 'Habitat insolite',
  },
]

export const artisan = {
  portrait: '/images/atelier.jpg',
  portraitAlt: 'L’atelier et la scierie de Nicolas Rabot en pleine forêt',
  paragraphs: [
    'Artisan ébéniste et forestier installé en Haute-Garonne, entre Revel et Vaudreuille, Nicolas Rabot gère et valorise le bois de sa propre forêt de chênes selon une gestion raisonnée et durable.',
    'Chaque essence est transformée dans son atelier en objets uniques et durables. Sa démarche se concrétise par la construction de sa propre maison autonome, conçue avec des matériaux naturels, locaux et renouvelables — autonome en eau et en électricité.',
    'Ses formations d’immersion invitent à découvrir ce savoir-faire complet, du tronc à l’habitat, dans un cadre forestier à un kilomètre du Lac de Saint-Ferréol.',
  ],
  stats: [
    { value: '100 %', label: 'Bois local & forêt gérée durablement' },
    { value: 'Eau + électricité', label: 'Habitat autonome auto-construit' },
    { value: 'Petit groupe', label: 'Immersion directe chez l’artisan' },
  ],
}
