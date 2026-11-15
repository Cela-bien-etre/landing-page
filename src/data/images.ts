// 📸 Toutes les images du site, au même endroit.
// Colle ici les liens Cloudinary (https://res.cloudinary.com/.../image/upload/...).
// Tant qu'un lien est vide, un emplacement gris s'affiche à la place.

export const images = {
  // Logo « Céla Bien-être » (idéalement PNG/SVG sur fond transparent)
  logo: '',
  // Petit motif rond doré décoratif
  ornement: '',

  // 1. Hero : photo de fond (Céline)
  hero: '',

  // 2. Qui suis-je : portrait avec les fleurs
  portrait: '',

  // 4. Vous pouvez faire appel à moi
  formuleDomicile: '',
  formuleJeune: '',
  formuleYoga: '',

  // 5. Les soins à domicile (une image par bloc de 2 soins)
  soins1: '',
  soins2: '',
  soins3: '',

  // 6. Séjours de jeûne : les 3 collages
  jeune1: '',
  jeune2: '',
  jeune3: '',

  // 6. Les zones les plus réceptives
  zoneDos: '',
  zoneVentre: '',
  zoneTete: '',
  zonePieds: '',

  // 7. Le soin Régénérant
  soinRegenerant: '',

  // 8. Retraites de yoga
  retraiteYoga: '',

  // 9. Mes prestations (bloc Planity)
  prestations: '',

  // 10. Contact : photo de fond
  contact: '',
};

/**
 * Ajoute les optimisations Cloudinary (format auto, qualité auto, largeur max)
 * à une URL Cloudinary. Les autres URL sont renvoyées telles quelles.
 */
export function cld(url: string, width?: number): string {
  if (!url.includes('res.cloudinary.com') || !url.includes('/upload/')) return url;
  const transforms = ['f_auto', 'q_auto', width ? `w_${width}` : null].filter(Boolean).join(',');
  return url.replace('/upload/', `/upload/${transforms}/`);
}
