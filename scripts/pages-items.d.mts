/** Types for scripts/pages-items.mjs. */
export interface Language {
  name: string;
  markets: string;
  money: string;
  tax: string;
  watch: string;
  numbers: string;
  rate: string;
  keys: { template: string; industry: string; tool: string };
}
export interface Group {
  /** A range of page IDs of one category: "D1–D20". */
  range: string;
  title: string;
  text?: string;
  /** Task ids (S1 …) that must be done before this group can be built. */
  needs?: string[];
}
export interface Task {
  id: string;
  title: string;
  done: boolean;
  text: string;
}
export const PREFIX: Record<string, string>;
export const TASKS: Task[];
export const GROUPS: Group[];
export const ORDER: string[];
export const LANGUAGE_NEEDS: Record<string, { types: string[]; urls: string[] }>;
export const LANGUAGE_ORDER: string[];
export const GOAL: number;
export const LANGUAGES: Record<string, Language>;
