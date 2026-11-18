import { type Draft, type DraftItem, MAX_ITEMS, emptyItem, newDraft } from "@/lib/generator/draft";

/** All changes to the generator draft go through here (one typed store, ROADMAP 32d). */
export type Action =
  | { type: "replace"; draft: Draft }
  | { type: "field"; key: keyof Draft; value: Draft[keyof Draft] }
  | { type: "sender"; key: keyof Draft["sender"]; value: string }
  | { type: "client"; key: keyof Draft["client"]; value: string }
  | { type: "item"; id: string; key: keyof Omit<DraftItem, "id">; value: string }
  | { type: "addItem" }
  | { type: "removeItem"; id: string }
  | { type: "moveItem"; id: string; by: -1 | 1 }
  | { type: "newInvoice" }
  | { type: "reset" };

/** "INV-0041" → "INV-0042"; anything else gets "-2". */
export function nextInvoiceNumber(current: string): string {
  const m = current.match(/^(.*?)(\d+)$/);
  if (!m) return `${current || "INV"}-2`;
  const [, prefix, digits] = m;
  return `${prefix}${String(Number(digits) + 1).padStart(digits!.length, "0")}`;
}

export function reducer(draft: Draft, action: Action): Draft {
  switch (action.type) {
    case "replace":
      return action.draft;
    case "field":
      return { ...draft, [action.key]: action.value };
    case "sender":
      return { ...draft, sender: { ...draft.sender, [action.key]: action.value } };
    case "client":
      return { ...draft, client: { ...draft.client, [action.key]: action.value } };
    case "item":
      return {
        ...draft,
        items: draft.items.map((i) =>
          i.id === action.id ? { ...i, [action.key]: action.value } : i,
        ),
      };
    case "addItem":
      return draft.items.length >= MAX_ITEMS
        ? draft
        : { ...draft, items: [...draft.items, emptyItem()] };
    case "removeItem": {
      const items = draft.items.filter((i) => i.id !== action.id);
      return { ...draft, items: items.length > 0 ? items : [emptyItem()] };
    }
    case "moveItem": {
      const items = [...draft.items];
      const from = items.findIndex((i) => i.id === action.id);
      const to = from + action.by;
      if (from < 0 || to < 0 || to >= items.length) return draft;
      [items[from], items[to]] = [items[to]!, items[from]!];
      return { ...draft, items };
    }
    case "newInvoice": {
      // Keep the business, template and settings; start a fresh client and lines.
      const fresh = newDraft();
      return {
        ...draft,
        invoice_number: nextInvoiceNumber(draft.invoice_number),
        issue_date: fresh.issue_date,
        due_date: fresh.due_date,
        client: fresh.client,
        items: fresh.items,
      };
    }
    case "reset":
      return newDraft();
  }
}
