/**
 * Cookie consent state (decision D5). Nothing that sets cookies loads until the visitor clicks
 * "Accept" (StatsUp, which sets none, runs anyway). The choice is kept in localStorage (it's not a
 * cookie itself), with the date it was made: a "Decline" is respected for ASK_AGAIN_DAYS, then the
 * banner asks once more. An "Accept" stays until the visitor changes it in "Cookie settings".
 */
export type Consent = "granted" | "denied";

const KEY = "invoicor-consent-v1";
/**
 * Days before a visitor who declined is asked again (owner's choice, 2026-11-25). Not every visit: EU
 * regulators (e.g. the French CNIL) say repeated asking can make a later "yes" invalid, and they
 * usually expect a refusal to be kept for months; 30 days is on the short side of that.
 */
export const ASK_AGAIN_DAYS = 30;
const DAY = 24 * 60 * 60 * 1000;
export const CONSENT_EVENT = "invoicor:consent";
export const OPEN_CONSENT_EVENT = "invoicor:consent-open";

export function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw === "granted") return "granted";
    if (raw === "denied") {
      // Saved before the date was kept: start the waiting time now.
      window.localStorage.setItem(KEY, `denied:${Date.now()}`);
      return "denied";
    }
    const at = Number(raw?.startsWith("denied:") ? raw.slice(7) : NaN);
    if (Number.isFinite(at)) return Date.now() - at < ASK_AGAIN_DAYS * DAY ? "denied" : null;
    return null;
  } catch {
    return null;
  }
}

export function saveConsent(value: Consent): void {
  try {
    window.localStorage.setItem(KEY, value === "denied" ? `denied:${Date.now()}` : value);
  } catch {
    // Private mode or blocked storage: the choice applies to this page view only.
  }
  window.dispatchEvent(new CustomEvent<Consent>(CONSENT_EVENT, { detail: value }));
}

/** Re-open the banner (footer "Cookie settings" link). */
export function openConsentSettings(): void {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}

/** For useSyncExternalStore: re-render when the choice changes (this tab or another tab). */
export function subscribeConsent(onChange: () => void): () => void {
  window.addEventListener(CONSENT_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** On the server (static HTML) there is no choice yet; nothing renders until hydration. */
export const getServerConsent = (): Consent | null | undefined => undefined;
