// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Domaine final : sert aux URL canoniques, au sitemap, au robots.txt et aux images de partage.
  // ⚠️ Doit correspondre au domaine réellement branché sur Netlify.
  site: 'https://www.cela-bien-etre.com',
  integrations: [
    sitemap({
      // La page de remerciement n'a rien à faire dans les résultats de recherche
      filter: (page) => !page.includes('/merci'),
    }),
  ],
});
