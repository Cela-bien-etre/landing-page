import type { APIRoute } from 'astro';

// robots.txt généré au build, pour que l'URL du sitemap suive toujours le domaine de astro.config.mjs
export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL('sitemap-index.xml', site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
