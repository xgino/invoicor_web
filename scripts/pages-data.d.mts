/** Types for scripts/pages-data.mjs. */
import type { Row } from "./pages-lib.mjs";
export const PAGES_DIR: string;
export function fileOf(category: { id: string }): string;
export function loadRows(root: string): Row[];
export function saveRows(root: string, rows: Row[]): void;
