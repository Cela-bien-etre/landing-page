// Avis clients : prénom, note et langue d'origine. Les textes (dans chaque langue) sont dans
// src/i18n/fr.ts et en.ts (avis.items). Un avis affiché dans une autre langue que l'originale
// est signalé « traduit de… » par transparence.
import type { Dictionary } from '../i18n/fr';
import type { Lang } from '../i18n';

export interface Avis {
  id: keyof Dictionary['avis']['items'];
  nom: string;
  note: number;
  langueOriginale: Lang;
}

export const avis: Avis[] = [
  { id: 'julien', nom: 'Julien', note: 5, langueOriginale: 'fr' },
  { id: 'andrew', nom: 'Andrew', note: 5, langueOriginale: 'en' },
];
