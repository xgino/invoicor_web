/** Types for scripts/pages-categories.mjs. */
export interface Category {
  id: string;
  title: string;
  match: (row: Record<string, string>) => boolean;
  url: string;
  key: string;
  blueprint: string;
  data: string;
  can: string[];
  cannot: string[];
  links: string;
  languages: string;
}
export const CATEGORIES: Category[];
