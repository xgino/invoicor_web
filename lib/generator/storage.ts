import { type Draft, newDraft } from "./draft";

/**
 * The draft is kept in this browser only (localStorage), so a refresh doesn't lose work.
 * It is never sent anywhere except to render the preview and the PDF. Every access is wrapped:
 * private mode or blocked storage simply means no autosave.
 */
const KEY = "invoicor-generator-draft-v1";

/** Known fields only, so an old draft can't carry hidden values onto the invoice. */
function pick<T extends object>(base: T, saved: unknown): T {
  const out = { ...base };
  if (saved && typeof saved === "object") {
    for (const key of Object.keys(base) as (keyof T)[]) {
      const value = (saved as Record<string, unknown>)[key as string];
      if (typeof value === "string") out[key] = value as T[keyof T];
    }
  }
  return out;
}

export function loadDraft(): Draft | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Draft>;
    const base = newDraft();
    return {
      ...base,
      ...parsed,
      sender: pick(base.sender, parsed.sender),
      client: pick(base.client, parsed.client),
      items: Array.isArray(parsed.items) && parsed.items.length > 0 ? parsed.items : base.items,
    };
  } catch {
    return null;
  }
}

/** Saves the draft in this browser; false when storage is blocked or full. */
export function saveDraft(draft: Draft): boolean {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(draft));
    return true;
  } catch {
    return false; // storage full or blocked: keep working without autosave
  }
}

export function clearDraft(): void {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}
