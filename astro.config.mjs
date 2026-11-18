// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Domaine final : sert aux URL canoniques, au sitemap, au robots.txt et aux images de partage.
  // ⚠️ Doit correspondre au domaine réellement branché sur Netlify.
  site: 'https://www.cela-bien-etre.com',
  // Adresses toujours terminées par « / » (comme Netlify les sert) : canoniques, hreflang et sitemap identiques
  trailingSlash: 'always',

  // Deux langues : le français à la racine (/), l'anglais sous /en/.
  // Les pages sont générées à l'avance (site statique) ; les textes sont dans src/i18n/.
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    sitemap({
      // Les pages de remerciement n'ont rien à faire dans les résultats de recherche
      filter: (page) => !page.includes('/merci') && !page.includes('/thank-you'),
      // Indique à Google, dans le sitemap, que /xxx et /en/xxx sont des traductions l'une de l'autre
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en' } },
    }),
  ],
});
