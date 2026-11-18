// Outils de traduction : langue courante, textes et adresses des pages dans chaque langue.
import fr, { type Dictionary } from './fr';
import en from './en';

export const languages = {
  fr: { label: 'FR', name: 'Français', htmlLang: 'fr-FR', ogLocale: 'fr_FR' },
  en: { label: 'EN', name: 'English', htmlLang: 'en', ogLocale: 'en_GB' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';
export const langs = Object.keys(languages) as Lang[];

const dictionaries: Record<Lang, Dictionary> = { fr, en };

/** Langue de la page en cours (déduite de l'URL par Astro : / = français, /en/ = anglais). */
export function getLang(currentLocale: string | undefined): Lang {
  return currentLocale && currentLocale in languages ? (currentLocale as Lang) : defaultLang;
}

/** Textes de la langue demandée. */
export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Remplace les {variables} d'un texte : fill('Note : {note} sur 5', { note: 5 }). */
export function fill(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? `{${key}}`));
}

/** Adresse de chaque page dans chaque langue (les adresses anglaises sont traduites). */
export const routes = {
  home: { fr: '/', en: '/en/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal-notice/' },
  thanks: { fr: '/merci/', en: '/en/thank-you/' },
} satisfies Record<string, Record<Lang, string>>;

export type PageKey = keyof typeof routes;
