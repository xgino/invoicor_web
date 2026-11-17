"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  OPEN_CONSENT_EVENT,
  getServerConsent,
  readConsent,
  saveConsent,
  subscribeConsent,
  type Consent,
} from "@/lib/consent";

/**
 * Small consent card, bottom of the screen. Shown until the visitor chooses; re-opened from
 * the footer. States plainly that website analytics run on US services while app data stays
 * in Germany.
 */
export function ConsentBanner() {
  const consent = useSyncExternalStore(subscribeConsent, readConsent, getServerConsent);
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    const reopen = () => setReopened(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  // undefined = static HTML / before hydration: render nothing.
  if (consent === undefined || (consent !== null && !reopened)) return null;

  function choose(value: Consent) {
    saveConsent(value);
    setReopened(false);
  }

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-lg rounded-2xl border border-white/10 bg-zinc-950/95 p-5 text-sm text-zinc-300 shadow-2xl backdrop-blur sm:inset-x-auto sm:right-6 sm:bottom-6"
    >
      <p id="consent-title" className="mb-1 font-bold text-white">
        Cookies for website analytics?
      </p>
      <p className="mb-4 leading-relaxed">
        With your OK we use Google Analytics and PostHog to see which pages help people. Both are US
        services, so this website usage data is processed in the US. Your account and invoice data
        in the app always stays on our servers in Germany.{" "}
        <Link href="/privacy#cookies" className="text-white underline underline-offset-2">
          Privacy policy
        </Link>
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="flex-1 rounded-xl border border-white/15 px-4 py-2.5 font-semibold text-white hover:bg-white/5"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="flex-1 rounded-xl bg-white px-4 py-2.5 font-semibold text-zinc-950 hover:bg-zinc-200"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
