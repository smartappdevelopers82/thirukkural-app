import { ALL_133_ATHIGARAMS, ChapterInfo } from './allAthigarams';
import { KuralItem } from './thirukkuralData';
import allKuralsRaw from './allKuralsData.json';

// Cast imported dataset to KuralItem[]
export const ALL_1330_KURALS: KuralItem[] = allKuralsRaw as KuralItem[];

// Map of all 1,330 Kurals by number for O(1) instant lookup
const KURAL_BY_NUMBER = new Map<number, KuralItem>();
ALL_1330_KURALS.forEach(k => {
  KURAL_BY_NUMBER.set(k.number, k);
});

// Map of Kurals by Athigaram number (1..133)
const KURALS_BY_ATHIGARAM_NO = new Map<number, KuralItem[]>();
ALL_1330_KURALS.forEach(k => {
  const existing = KURALS_BY_ATHIGARAM_NO.get(k.athigaramNo) || [];
  existing.push(k);
  KURALS_BY_ATHIGARAM_NO.set(k.athigaramNo, existing);
});

// Get a single Kural by its exact number (1..1330)
export function getKuralByNumber(num: number): KuralItem | undefined {
  return KURAL_BY_NUMBER.get(num);
}

// Get the 10 authentic Kurals for any chapter (1..133)
export function getKuralsForAthigaram(athigaramNo: number): KuralItem[] {
  const cached = KURALS_BY_ATHIGARAM_NO.get(athigaramNo);
  if (cached && cached.length > 0) {
    return cached;
  }
  const chapter = ALL_133_ATHIGARAMS.find(c => c.no === athigaramNo) || ALL_133_ATHIGARAMS[0];
  const list: KuralItem[] = [];
  for (let num = chapter.startKural; num <= chapter.endKural; num++) {
    const item = KURAL_BY_NUMBER.get(num);
    if (item) {
      list.push(item);
    }
  }
  return list;
}

// Global search across all 1,330 Kurals, Athigarams, Iyals, Paal, and meanings
export function searchKurals(query: string, source: KuralItem[] = ALL_1330_KURALS): KuralItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return source;

  // Direct number search
  const num = parseInt(q, 10);
  if (!isNaN(num) && num >= 1 && num <= 1330) {
    const item = KURAL_BY_NUMBER.get(num);
    if (item) return [item];
  }

  return source.filter(k => 
    k.number.toString() === q ||
    k.line1.toLowerCase().includes(q) ||
    k.line2.toLowerCase().includes(q) ||
    k.athigaram.toLowerCase().includes(q) ||
    k.athigaramEn.toLowerCase().includes(q) ||
    k.iyal.toLowerCase().includes(q) ||
    k.paal.toLowerCase().includes(q) ||
    k.meaning.toLowerCase().includes(q) ||
    k.transliteration.toLowerCase().includes(q)
  );
}
