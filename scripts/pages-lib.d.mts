/** Types for scripts/pages-lib.mjs (used by tests/site/pages-log.test.ts). */
export type Row = Record<string, string>;
export const COLUMNS: string[];
export const LOCALIZE: string[];
export const LOCALES: string[];
export const TOO_CLOSE: number;
export const CLOSE: number;
export function parseCsv(text: string): Row[];
export function toCsv(rows: Row[]): string;
export function tokens(text: string): string[];
export function similarity(a: string, b: string): number;
export function closest(
  rows: Row[],
  keyword: string,
  lang?: string,
  limit?: number,
): Array<{ row: Row; score: number }>;
export function overlaps(rows: Row[]): Array<{ a: Row; b: Row; score: number }>;
export function section(row: Row): string;
export function renderPagesMd(rows: Row[]): string;
export function renderPlanMd(rows: Row[]): string;
export function renderPlanFiles(rows: Row[]): Record<string, string>;
export function renderLanguageTable(): string;
export function renderRules(text: string): string;
export function rulesHeading(category: { id: string; title: string }): string;
export function rulesSection(text: string, category: { id: string; title: string }): string | null;
