/**
 * Cookie consent state (decision D5). Nothing that sets cookies or sends analytics loads until
 * the visitor clicks "Accept". The choice is kept in localStorage (it's not a cookie itself).
 */
export type Consent = "granted" | "denied";

const KEY = "invoicor-consent-v1";
export const CONSENT_EVENT = "invoicor:consent";
export const OPEN_CONSENT_EVENT = "invoicor:consent-open";

export function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function saveConsent(value: Consent): void {
  try {
    window.localStorage.setItem(KEY, value);
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
