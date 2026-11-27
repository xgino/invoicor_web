/** Types for scripts/similarity.mjs. */
export const MAX_ALIKE_CONTENT: number;
export const MAX_ALIKE_BUILT: number;
export const SHINGLE: number;
export function words(s: string): string[];
export function shingles(list: string[], n?: number): Set<string>;
export function containment(a: Set<string>, b: Set<string>): number;
export function mainText(html: string): string;
export function isHubAndChild(a: string, b: string): boolean;
export interface ShinglePage {
  id: string;
  group: string;
  shingles: Set<string>;
}
export function nearCopies(
  pages: ShinglePage[],
  max: number,
): Array<{ a: string; b: string; score: number }>;
export function closestPair(pages: ShinglePage[]): { a: string; b: string; score: number } | null;
