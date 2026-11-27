/** Types for scripts/pages-categories.mjs. */
export interface Category {
  id: string;
  title: string;
  match: (row: Record<string, string>) => boolean;
}
export const CATEGORIES: Category[];
