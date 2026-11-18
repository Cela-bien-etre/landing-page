// 🇫🇷 Tous les textes du site en français.
// La version anglaise (en.ts) doit garder exactement la même structure.

const fr = {
  meta: {
    // SEO : titre ≈ 60 caractères max, description ≈ 155 caractères max.
    // La ville dans le titre et la description est le levier n°1 pour être trouvée localement.
    title: 'Massage à domicile à Soustons (Landes) | Céla Bien-être',
    description:
      'Massages à domicile à Soustons et alentours (Seignosse, Hossegor, Vieux-Boucau…) avec Céline : deep tissue, sportif, réflexologie, kobido, reiki.',
    ogImageAlt: 'Céline, Céla Bien-être',
  },

  common: {
    newTab: ' (nouvel onglet)',
    bookPlanity: 'Réserver sur Planity',
    backHome: "← Retour à l'accueil",
  },

  langSwitch: {
    label: 'Choix de la langue',
  },

  hero: {
    title: 'Massages à domicile',
    location: 'à {city} & alentours',
    soins: 'Personnalisé - Deep tissue - Sportif - Réflexologie plantaire - Kobido - Reiki',
    quote: "« La meilleure façon de se reconnecter à Soi est de toucher le corps avec l'intention de l'écouter avec le cœur. »",
    contact: 'Me contacter',
  },

  about: {
    title: 'Je vous accompagne à prendre conscience de vos besoins à travers le Toucher Conscient.',
    paragraphs: [
      "Depuis l'enfance, j'aime prendre soin des gens qui me sont chers, les écouter, faire attention à leur bien-être, leur faire plaisir par de petites attentions…",
      "C'est cet Amour de l'autre qui m'a guidée vers le massage.",
      "Masser quelqu'un, ce n'est pas juste toucher un corps, c'est s'y connecter, s'investir, plonger dans l'intention de faire du bien. C'est un échange subtil d'âme à âme. C'est puissant.",
      "Au fil de ces dix-huit années de pratique, je me suis trouvée et épanouie dans ce rapport à l'autre, authentique, individualisé et privilégié.",
    ],
    photoAlt: 'Portrait de Céline parmi les fleurs',
  },

  toucher: {
    title: "Qu'est-ce que le Toucher Conscient ?",
    bienfaits: [
      'Conscientiser les zones sensibles',
      'Dénouer les tensions physiques',
      'Permettre au mental de relâcher',
      'Déposer le corps en confiance',
      'Renouer avec le Toucher',
      "Favoriser l'ouverture du cœur",
      "S'aligner avec qui l'on est dans sa globalité",
      'Se reconnecter à Soi',
      'Optimiser les bienfaits du jeûne ou du séjour de yoga en faisant circuler les fluides et énergies du corps (détox)',
    ],
  },

  formules: {
    title: 'Vous pouvez faire appel à moi :',
    domicile: 'À votre domicile, dans votre cocon de douceur',
    jeune: "Dans le cadre d'un séjour de Jeûne & Randonnée",
    yoga: "Lors d'une retraite de Yoga & Méditation",
  },

  soins: {
    title: 'Les soins à domicile :',
    subtitle: 'chaque massage est adapté en fonction de vos besoins du moment',
    photoAlt: 'Massage à domicile',
    tarifsLabel: 'Tarifs {soin}',
    // Les durées et les prix sont dans src/data/soins.ts
    items: {
      personnalise: {
        nom: 'Massage personnalisé',
        description:
          "Le massage englobe le corps entier et sera adapté au rythme et à la pression souhaités. Je m'adapte à vous, à vos besoins et non l'inverse, alors n'hésitez pas à me dire ce dont vous avez besoin.",
      },
      deepTissue: {
        nom: 'Deep tissue',
        description:
          "Ce massage permet de relâcher les différentes couches du tissu musculaire ainsi que les fascias. Il s'agit d'un massage profond au cours duquel le muscle sera chauffé et étiré dans les deux sens de la fibre.",
      },
      sportif: {
        nom: 'Massage sportif',
        description:
          "Massage tonique au cours duquel les muscles sont chauffés pour favoriser leur relâchement. Des points de pression ainsi que des étirements profonds aideront à une meilleure récupération musculaire. Ce massage est recommandé en post-entraînement sportif, mais également pour toutes les personnes qui souhaitent se sentir boostées à l'issue du soin.",
      },
      reflexologie: {
        nom: 'Réflexologie plantaire',
        description:
          "Stimulation de points au niveau des pieds pour réénergiser l'ensemble du corps. Elle apporte également une sensation de relaxation immédiate de l'ensemble du corps.",
      },
      kobido: {
        nom: 'Kobido',
        description:
          "Technique japonaise de massage du visage qui apporte un coup d'éclat au teint grâce à des manœuvres de drainage. Il favorise l'élimination des toxines et active l'oxygénation des cellules. La combinaison de différents mouvements liftants apporte un effet tenseur immédiat, lisse les ridules du contour des yeux et de la bouche, et réduit les rides du front.",
      },
      reiki: {
        nom: 'Reiki',
        description:
          "Le Reiki est une technique japonaise de mise à disposition d'énergie par apposition des mains sur l'ensemble du corps. Il se pratique par-dessus les vêtements. La personne absorbe l'énergie dont elle a besoin au moment de la séance.",
      },
    },
  },

  jeune: {
    title: 'Séjours de jeûne :',
    subtitle: 'Un accompagnement sur mesure',
    collageAlts: ['Séjour de jeûne : jus et collations', 'Massage pendant un séjour de jeûne', 'Massage en pleine nature'],
    zonesTitle: 'Les zones les plus réceptives',
    zonePhotoAlt: 'Massage : {zone}',
    zones: {
      dos: {
        zone: 'Le dos',
        etat: 'Tendu',
        texte: [
          "Par des mouvements doux ou profonds, le massage du dos va permettre de libérer les tensions. Ce n'est pas pour rien que l'on dit : « j'en ai plein le dos ».",
          "Que l'on aille chercher les nœuds ou que l'on enveloppe généreusement le corps, qu'importe, tant que le Toucher résonne de façon juste dans le corps.",
        ],
      },
      ventre: {
        zone: 'Le ventre',
        etat: 'Noué',
        texte: [
          'Le ventre est le centre de nos émotions. Il nous parle !',
          "Les émotions les plus enfouies se cachent dans le ventre ; masser le ventre les libère, et une sensation d'ouverture du plexus solaire se crée instantanément.",
          'La respiration devient alors plus fluide, naturelle et pleine.',
        ],
      },
      tete: {
        zone: 'La tête',
        etat: 'Embrumée',
        texte: [
          "Le stress est caractérisé par une charge mentale intense et dense. Une sensation de brouillard mental empêche d'y voir clair.",
          "Masser le visage et le cuir chevelu dissipe immédiatement cette image. L'esprit s'évade pour mieux se retrouver dans l'instant présent et le monde physique. La pensée devient alors claire, facile, et un sentiment de paix apparaît.",
        ],
      },
      pieds: {
        zone: 'Les pieds',
        etat: 'Gonflés',
        texte: [
          'Cette zone est constamment sollicitée du fait de la posture debout. Les pieds emmagasinent les toxines. Ils supportent tout !',
          "Le massage favorise la circulation sanguine, donc l'élimination de ces toxines. Il aide à drainer, à dégonfler, et une sensation de légèreté se fait sentir.",
        ],
      },
    },
    regenerantTitle: 'Un soin spécialement créé pour les jeûneurs',
    regenerantPhotoAlt: 'Céline réalisant le soin Régénérant',
    regenerantNom: 'Le soin Régénérant',
    regenerantTexte: [
      "Il combine les techniques du Kobido, de la réflexologie plantaire et un travail du ventre afin de se focaliser sur la détox de l'organisme. Il draine, stimule, dénoue les tensions et réénergise l'ensemble du corps.",
      'Sensation de légèreté et de bien-être absolu.',
    ],
  },

  retraites: {
    title: 'Les retraites de Yoga - Méditation',
    paragraphs: [
      "Lorsque vous organisez une retraite de yoga et que vous souhaitez amener vos yogis au bout de l'expérience que vous proposez, le Toucher Conscient est indispensable !",
      'Le massage permet de finaliser le chemin parcouru à travers les différentes pratiques et de revenir à son corps. Chaque geste est conscientisé et ressenti avec une réelle intention.',
      "J'ai élaboré une prise en charge spécifique pour ce format…",
    ],
    note: 'La durée des massages est ajustée au nombre de personnes.',
    contact: 'Contactez-moi pour plus de renseignements',
    photoAlt: 'Méditation face à la mer au coucher du soleil',
  },

  avis: {
    prestationsTexte: ["Retrouvez l'ensemble des soins que je propose sur Planity.", 'Vous pourrez également y réserver directement.'],
    prestationsTitle: '', // vide = pas de titre affiché
    title: "Ils m'ont fait confiance",
    client: 'Client',
    traduit: 'traduit de l’anglais',
    note: 'Note : {note} sur 5',
    google: 'Voir tous les avis sur Google',
    // Les prénoms et les notes sont dans src/data/avis.ts
    items: {
      julien:
        "J'ai eu l'opportunité de recevoir 2 massages de la part de Céline lors d'un séjour en Aveyron, je peux même dire de la chance, car Céline est à l'écoute de nos mots et de nos maux. 2 supers massages adaptés à mes besoins et qui m'ont accompagné lors du jeûne. Libération des tensions, un sentiment de légèreté et d'énergie retrouvée. Il y a beaucoup de précision dans ses gestes et on ressent l'expérience dans sa technique avec beaucoup de fluidité. Je recommande +++",
      andrew:
        "Honnêtement, quels massages incroyables ! Vraiment extraordinaires… tant de douceur et de fermeté, tant d'attention… Quelle capacité à être attentive à chaque micro-réaction pour atteindre ce niveau ! Absolument incroyable ❤️. Merci infiniment pour cette écoute si attentive et pour la détente incroyable qui l'accompagne ! Il va sans dire que je la recommande sans la moindre réserve !!! Une masseuse vraiment exceptionnelle.",
    },
  },

  contact: {
    title: 'Vous avez une demande ?',
    intro:
      'Une idée cadeau ou un projet de séjour ? Remplissez ce formulaire et je vous recontacterai pour échanger et trouver ce qui vous correspond le mieux !',
    honeypot: 'Ne pas remplir :',
    requiredNote: ["Les champs marqués d'un", 'sont obligatoires.'],
    profil: 'Vous êtes',
    particulier: 'Un particulier',
    professionnel: 'Un professionnel',
    professionnelHint: '(séjour, retraite…)',
    name: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    optional: '(facultatif)',
    message: 'Message',
    consent: "J'accepte que mes coordonnées soient utilisées pour être recontacté·e.",
    submit: 'Envoyer',
    successTitle: 'Merci pour votre message !',
    successText: 'Je vous recontacte très vite.',
    // Messages affichés par le script du formulaire
    errors: {
      profil: 'Merci d’indiquer si vous êtes un particulier ou un professionnel.',
      name: 'Merci d’indiquer votre nom.',
      email: 'Merci d’indiquer une adresse email valide.',
      phone: 'Ce numéro de téléphone ne semble pas valide.',
      message: 'Merci d’écrire votre message.',
      consent: 'Merci d’accepter d’être recontacté·e pour envoyer votre demande.',
      invalid: 'Certains champs sont à corriger.',
    },
    status: {
      sending: 'Envoi en cours…',
      error: 'Oups, le message n’a pas pu être envoyé. Réessayez ou contactez-moi directement.',
    },
  },

  footer: {
    rights: 'Tous droits réservés.',
    legal: 'Mentions légales',
  },

  legal: {
    title: 'Mentions légales',
    metaTitle: 'Mentions légales | Céla Bien-être',
    metaDescription: 'Mentions légales et politique de confidentialité du site Céla Bien-être.',
  },

  merci: {
    metaTitle: 'Merci | Céla Bien-être',
    title: 'Merci pour votre message !',
    text: 'Je vous recontacte très vite.',
    back: "Retour à l'accueil",
  },
};

export default fr;
export type Dictionary = typeof fr;
