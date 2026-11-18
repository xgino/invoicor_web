import { type Draft, newDraft } from "./draft";

/**
 * The draft is kept in this browser only (localStorage), so a refresh doesn't lose work.
 * It is never sent anywhere except to render the preview and the PDF. Every access is wrapped:
 * private mode or blocked storage simply means no autosave.
 */
const KEY = "invoicor-generator-draft-v1";

export function loadDraft(): Draft | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Draft>;
    const base = newDraft();
    return {
      ...base,
      ...parsed,
      sender: { ...base.sender, ...(parsed.sender ?? {}) },
      client: { ...base.client, ...(parsed.client ?? {}) },
      items: Array.isArray(parsed.items) && parsed.items.length > 0 ? parsed.items : base.items,
    };
  } catch {
    return null;
  }
}

export function saveDraft(draft: Draft): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(draft));
  } catch {
    // storage full or blocked: keep working without autosave
  }
}

export function clearDraft(): void {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}
