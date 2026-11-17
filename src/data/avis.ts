export interface Avis {
  nom: string;
  texte: string;
  note: number;
  /** Langue du texte si ce n'est pas le français (ex. 'en'), pour la bonne prononciation des lecteurs d'écran */
  lang?: string;
}

export const avis: Avis[] = [
  {
    nom: 'Julien',
    texte:
      "J'ai eu l'opportunité de recevoir 2 massages de la part de Céline lors d'un séjour en Aveyron, je peux même dire de la chance, car Céline est à l'écoute de nos mots et de nos maux. 2 supers massages adaptés à mes besoins et qui m'ont accompagné lors du jeûne. Libération des tensions, un sentiment de légèreté et d'énergie retrouvée. Il y a beaucoup de précision dans ses gestes et on ressent l'expérience dans sa technique avec beaucoup de fluidité. Je recommande +++",
    note: 5,
  },
  {
    // TODO : garder en anglais ou traduire ?
    nom: 'Andrew',
    lang: 'en',
    texte:
      'Honestly, what amazing massages! Truly incredible… so much gentleness and firmness, so much attention… What an ability to be attentive to every micro-reaction to reach that level! Absolutely incredible ❤️. Thank you so much for listening so attentively and for the incredible relaxation that comes with it! It goes without saying that I recommend her without any reservation whatsoever!!! A truly exceptional massage therapist.',
    note: 5,
  },
];
