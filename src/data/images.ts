// 📸 Toutes les images du site, au même endroit.
// Colle ici les liens Cloudinary (https://res.cloudinary.com/.../image/upload/...).
// Tant qu'un lien est vide, un emplacement gris s'affiche à la place.

export const images = {
  // Logo « Céla Bien-être » (idéalement PNG/SVG sur fond transparent)
  logo: "https://res.cloudinary.com/mlx0vnmw/image/upload/v1794946340/cela_logo_fond_transparent.png",
  // Petit motif rond doré décoratif
  ornement:
    "https://res.cloudinary.com/mlx0vnmw/image/upload/v1794944995/Boule-fond-transparent.png",

  // 1. Hero : photo de fond (Céline)
  hero: "https://res.cloudinary.com/mlx0vnmw/image/upload/v1793541602/DSC_0310.jpg",

  // 2. Qui suis-je : portrait avec les fleurs
  portrait:
    "https://res.cloudinary.com/mlx0vnmw/image/upload/v1793542471/Untitled_Design.png",

  // 4. Vous pouvez faire appel à moi
  formuleDomicile:
    "https://res.cloudinary.com/mlx0vnmw/image/upload/v1793541846/Copy_of_Event.jpg",
  formuleJeune:
    "https://res.cloudinary.com/mlx0vnmw/image/upload/v1793541896/8fd491bb-1768-4e6f-95b4-9ed67d4ad3cb.jpg",
  formuleYoga:
    "https://res.cloudinary.com/mlx0vnmw/image/upload/v1793541454/Yoga_coucher_de_soleil.jpg",

  // 5. Les soins à domicile (une image par bloc de 2 soins)
  soins1:
    "https://res.cloudinary.com/mlx0vnmw/image/upload/v1793541846/Copy_of_Event.jpg",
  soins2:
    "https://res.cloudinary.com/mlx0vnmw/image/upload/v1793541846/Copy_of_Event.jpg",
  soins3:
    "https://res.cloudinary.com/mlx0vnmw/image/upload/v1793541846/Copy_of_Event.jpg",

  // 6. Séjours de jeûne : les 3 collages
  jeune1:
    "https://res.cloudinary.com/mlx0vnmw/image/upload/v1793541456/Je%C3%BBne3.png",
  jeune2:
    "https://res.cloudinary.com/mlx0vnmw/image/upload/v1793541454/Je%C3%BBne1.png",
  jeune3:
    "https://res.cloudinary.com/mlx0vnmw/image/upload/v1793541232/Je%C3%BBne2.png",

  // 6. Les zones les plus réceptives
  zoneDos: "https://res.cloudinary.com/mlx0vnmw/image/upload/v1793542978/t.png",
  zoneVentre:
    "https://res.cloudinary.com/mlx0vnmw/image/upload/v1793541599/DSC_0314.jpg",
  zoneTete:
    "https://res.cloudinary.com/mlx0vnmw/image/upload/v1793542833/Untitled_Design_1.png",
  zonePieds:
    "https://res.cloudinary.com/mlx0vnmw/image/upload/v1794945318/pieds.png",

  // 7. Le soin Régénérant
  soinRegenerant:
    "https://res.cloudinary.com/mlx0vnmw/image/upload/v1794945440/Hello_Site_internet_5.png",

  // 8. Retraites de yoga
  retraiteYoga:
    "https://res.cloudinary.com/mlx0vnmw/image/upload/v1793541454/Yoga_coucher_de_soleil.jpg",

  // 9. Mes prestations (bloc Planity)
  prestations:
    "https://res.cloudinary.com/mlx0vnmw/image/upload/v1794945442/Hello_Site_internet_6.png",

  // 10. Contact : photo de fond
  contact:
    "https://res.cloudinary.com/mlx0vnmw/image/upload/v1794905821/Hello_Site_internet_2.png",
};

/**
 * Ajoute les optimisations Cloudinary (format auto, qualité auto, largeur max)
 * à une URL Cloudinary. Les autres URL sont renvoyées telles quelles.
 * Avec une hauteur, l'image est recadrée sur le sujet (c_fill, g_auto).
 */
export function cld(
  url: string,
  width?: number,
  options: { height?: number; format?: string } = {},
): string {
  if (!url.includes("res.cloudinary.com") || !url.includes("/upload/"))
    return url;
  const { height, format = "auto" } = options;
  const transforms = [
    `f_${format}`,
    "q_auto",
    width ? `w_${width}` : null,
    height ? `h_${height},c_fill,g_auto` : null,
  ]
    .filter(Boolean)
    .join(",");
  return url.replace("/upload/", `/upload/${transforms}/`);
}

/**
 * Photo du hero en deux versions : paysage pour desktop, recadrage vertical
 * centré sur le visage (g_auto) pour mobile. Partagées par Hero.astro et le préchargement.
 */
export const heroImages = images.hero
  ? {
      desktop: cld(images.hero, 1920),
      mobile: cld(images.hero, 900, { height: 1600 }),
    }
  : null;

/** Point de bascule desktop / mobile du hero (doit rester aligné avec Hero.css). */
export const HERO_MOBILE_MAX = 800;

/**
 * Image de partage (Facebook, WhatsApp, LinkedIn…) : 1200×630 en JPG,
 * car certains réseaux ne lisent pas le WebP/AVIF servi par f_auto.
 */
export const ogImage = images.hero
  ? cld(images.hero, 1200, { height: 630, format: "jpg" })
  : "";
