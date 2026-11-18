import { beforeEach, describe, expect, it } from "vitest";
import { CONSENT_EVENT, readConsent, saveConsent, subscribeConsent } from "@/lib/consent";

// Minimal browser globals: an event target plus localStorage.
function fakeWindow(storage: Map<string, string> | null) {
  const target = new EventTarget();
  return Object.assign(target, {
    localStorage: {
      getItem: (k: string) => {
        if (!storage) throw new Error("blocked");
        return storage.get(k) ?? null;
      },
      setItem: (k: string, v: string) => {
        if (!storage) throw new Error("blocked");
        storage.set(k, v);
      },
    },
  });
}

describe("consent", () => {
  beforeEach(() => {
    (globalThis as { window?: unknown }).window = fakeWindow(new Map());
  });

  it("has no choice until the visitor makes one (nothing may load)", () => {
    expect(readConsent()).toBeNull();
  });

  it("remembers the choice and notifies listeners", () => {
    let calls = 0;
    const unsubscribe = subscribeConsent(() => calls++);
    saveConsent("granted");
    expect(readConsent()).toBe("granted");
    saveConsent("denied");
    expect(readConsent()).toBe("denied");
    expect(calls).toBe(2);
    unsubscribe();
    saveConsent("granted");
    expect(calls).toBe(2);
  });

  it("ignores unknown stored values", () => {
    window.localStorage.setItem("invoicor-consent-v1", "maybe");
    expect(readConsent()).toBeNull();
  });

  it("survives blocked storage (private mode) and still fires the event", () => {
    (globalThis as { window?: unknown }).window = fakeWindow(null);
    let fired = false;
    window.addEventListener(CONSENT_EVENT, () => (fired = true));
    expect(readConsent()).toBeNull();
    expect(() => saveConsent("denied")).not.toThrow();
    expect(fired).toBe(true);
  });
});
