// Durées et tarifs des soins. Les noms et descriptions sont dans src/i18n/fr.ts et en.ts (soins.items).
import type { Dictionary } from '../i18n/fr';

export interface Soin {
  id: keyof Dictionary['soins']['items'];
  tarifs: { duree: string; prix: string }[];
}

export const soins: Soin[] = [
  {
    id: 'personnalise',
    tarifs: [
      { duree: '1h', prix: '100€' },
      { duree: '2h', prix: '150€' },
    ],
  },
  {
    id: 'deepTissue',
    tarifs: [
      { duree: '1h', prix: '100€' },
      { duree: '2h', prix: '150€' },
    ],
  },
  {
    id: 'sportif',
    tarifs: [
      { duree: '1h', prix: '100€' },
      { duree: '2h', prix: '150€' },
    ],
  },
  {
    id: 'reflexologie',
    tarifs: [
      { duree: '1h', prix: '95€' },
      { duree: '1h30', prix: '130€' },
    ],
  },
  {
    id: 'kobido',
    tarifs: [{ duree: '50min', prix: '90€' }],
  },
  {
    id: 'reiki',
    tarifs: [{ duree: '1h', prix: '70€' }],
  },
];
