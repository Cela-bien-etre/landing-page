// Infos centralisées du site : à modifier ici, réutilisées partout.
export const site = {
  name: "Céla Bien-être",
  owner: "Céline",

  // Titre et description (SEO) : dans src/i18n/fr.ts et en.ts (meta), une version par langue.

  domain: "www.cela-bien-etre.com",

  // Ville de rattachement (sans adresse précise : Céline se déplace à domicile).
  city: "Soustons",
  postalCode: "40140",
  region: "Landes",

  // Zone d'intervention : alimente les données structurées pour Google.
  // À ajuster avec Céline (idéalement la même liste que sur sa fiche Google).
  areaServed: [
    "Soustons",
    "Vieux-Boucau-les-Bains",
    "Messanges",
    "Azur",
    "Moliets-et-Maâ",
    "Seignosse",
    "Soorts-Hossegor",
    "Capbreton",
    "Angresse",
    "Tosse",
    "Saint-Geours-de-Maremne",
    "Magescq",
  ],

  email: "", // TODO
  phone: "", // TODO (format international conseillé : +33 6 12 34 56 78)
  instagram: "", // TODO : URL complète du profil
  // Lien de partage de la fiche Google (Google Business Profile)
  googleBusinessUrl: "https://maps.app.goo.gl/du14ZRGC7cBLkR3X9",
  planityUrl: "https://www.planity.com/cela-bien-etre-40140-soustons", // TODO : lien de la page Planity de Céline
};
