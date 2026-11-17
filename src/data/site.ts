// Infos centralisées du site : à modifier ici, réutilisées partout.
export const site = {
  name: "Céla Bien-être",
  owner: "Céline",

  // SEO : titre ≈ 60 caractères max, description ≈ 155 caractères max.
  // 💡 Ajouter la ville / zone dans le titre et la description dès qu'elle est connue
  //    (ex. « Massage à domicile à Rodez »), c'est le levier n°1 pour être trouvée localement.
  title: "Massage à domicile & Toucher Conscient | Céla Bien-être",
  description:
    "Massages à domicile, en séjour de jeûne ou en retraite de yoga avec Céline : deep tissue, sportif, réflexologie plantaire, kobido, reiki.",

  domain: "www.cela-bien-etre.com",

  // Zone d'intervention (villes, département…) : alimente les données structurées pour Google.
  areaServed: [] as string[], // TODO ex. ['Rodez', 'Aveyron']

  email: "", // TODO
  phone: "", // TODO (format international conseillé : +33 6 12 34 56 78)
  instagram: "", // TODO : URL complète du profil
  planityUrl: "https://www.planity.com/cela-bien-etre-40140-soustons", // TODO : lien de la page Planity de Céline
};
