export interface Soin {
  nom: string;
  description: string;
  tarifs: { duree: string; prix: string }[];
}

export const soins: Soin[] = [
  {
    nom: 'Massage personnalisé',
    description:
      "Le massage englobe le corps entier et sera adapté au rythme et à la pression souhaités. Je m'adapte à vous, à vos besoins et non l'inverse, alors n'hésitez pas à me dire ce dont vous avez besoin.",
    tarifs: [
      { duree: '1h', prix: '100€' },
      { duree: '2h', prix: '150€' },
    ],
  },
  {
    nom: 'Deep tissue',
    description:
      "Ce massage permet de relâcher les différentes couches du tissu musculaire ainsi que les fascias. Il s'agit d'un massage profond au cours duquel le muscle sera chauffé et étiré dans les deux sens de la fibre.",
    tarifs: [
      { duree: '1h', prix: '100€' },
      { duree: '2h', prix: '150€' },
    ],
  },
  {
    nom: 'Massage sportif',
    description:
      "Massage tonique au cours duquel les muscles sont chauffés pour favoriser leur relâchement. Des points de pression ainsi que des étirements profonds aideront à une meilleure récupération musculaire. Ce massage est recommandé en post-entraînement sportif, mais également pour toutes les personnes qui souhaitent se sentir boostées à l'issue du soin.",
    tarifs: [
      { duree: '1h', prix: '100€' },
      { duree: '2h', prix: '150€' },
    ],
  },
  {
    nom: 'Réflexologie plantaire',
    description:
      "Stimulation de points au niveau des pieds pour réénergiser l'ensemble du corps. Elle apporte également une sensation de relaxation immédiate de l'ensemble du corps.",
    tarifs: [
      { duree: '1h', prix: '95€' },
      { duree: '1h30', prix: '130€' },
    ],
  },
  {
    nom: 'Kobido',
    description:
      "Technique japonaise de massage du visage qui apporte un coup d'éclat au teint grâce à des manœuvres de drainage. Il favorise l'élimination des toxines et active l'oxygénation des cellules. La combinaison de différents mouvements liftants apporte un effet tenseur immédiat, lisse les ridules du contour des yeux et de la bouche, et réduit les rides du front.",
    tarifs: [{ duree: '50min', prix: '90€' }],
  },
  {
    nom: 'Reiki',
    description:
      "Le Reiki est une technique japonaise de mise à disposition d'énergie par apposition des mains sur l'ensemble du corps. Il se pratique par-dessus les vêtements. La personne absorbe l'énergie dont elle a besoin au moment de la séance.",
    tarifs: [{ duree: '1h', prix: '70€' }],
  },
];
