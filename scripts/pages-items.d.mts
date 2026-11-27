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
export interface Item {
  id: string;
  title: string;
  text?: string;
  /** Task ids (S1 …) that must be done before this item can be built. */
  needs?: string[];
}
export interface Task extends Item {
  done: boolean;
  text: string;
}
export const PREFIX: Record<string, string>;
export const TASKS: Task[];
export const ITEMS: Item[];
export const LANGUAGE_SOURCES: string[];
export const ORDER: string[];
export const LANGUAGE_ORDER: string[];
export const GOAL: number;
export const LANGUAGES: Record<string, Language>;
