/** Types for scripts/pages-chunks.mjs. */
export interface Language {
  name: string;
  markets: string;
  money: string;
  tax: string;
  watch: string;
}
export const LANGUAGES: Record<string, Language>;
export interface ChunkItem {
  id: string;
  title: string;
  task?: boolean;
  done?: boolean;
  text?: string;
}
export interface Chunk {
  id: string;
  title: string;
  goal: string;
  items: ChunkItem[];
  languages?: string[];
}
export const LANGUAGE_ORDER: string[];
export const GOAL: number;
export const CHUNKS: Chunk[];
