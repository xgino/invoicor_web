/**
 * Android interest counter (ROADMAP chunk 35d). There is no Android app yet; every visit to
 * /android adds one to a public counter, as a simple signal of how many people want it.
 *
 * Stored by Abacus (abacus.jasoncameron.dev), a free counter service, so the static site needs no
 * backend. Counters stay as long as they're used (6 months after the last visit). The admin key for
 * resetting or deleting it is kept by the owner, not in this repo.
 */
const BASE = "https://abacus.jasoncameron.dev";
const COUNTER = "invoicor-web/android-page";

/**
 * Adds this visit and returns the new total, or null when the service can't be reached.
 * Automated browsers (test tools, many bots: navigator.webdriver) only read the total, so they
 * never inflate it.
 */
export async function countAndroidVisit(signal?: AbortSignal): Promise<number | null> {
  const action = typeof navigator !== "undefined" && navigator.webdriver ? "get" : "hit";
  try {
    const res = await fetch(`${BASE}/${action}/${COUNTER}`, { signal, cache: "no-store" });
    if (!res.ok) return null;
    const { value } = (await res.json()) as { value?: unknown };
    return typeof value === "number" && Number.isFinite(value) ? value : null;
  } catch {
    return null;
  }
}
