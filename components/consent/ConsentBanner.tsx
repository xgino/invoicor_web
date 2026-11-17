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
import { buttonClass } from "@/components/ui/Button";

/**
 * Small consent card, bottom of the screen. Shown until the visitor chooses; re-opened from
 * the footer. States plainly that website analytics run on US services while app data stays
 * in Germany. Decline and Accept look the same on purpose: no nudging (EU consent guidance).
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
      className="border-line bg-surface/95 text-small text-muted shadow-float fixed inset-x-4 bottom-4 z-50 mx-auto max-w-lg rounded-2xl border p-5 backdrop-blur sm:inset-x-auto sm:right-6 sm:bottom-6"
    >
      <p id="consent-title" className="text-ink mb-1 font-bold">
        Cookies for website analytics?
      </p>
      <p className="mb-4 leading-relaxed">
        With your OK we use Google Analytics and PostHog to see which pages help people. Both are US
        services, so this website usage data is processed in the US. Your account and invoice data
        in the app always stays on our servers in Germany.{" "}
        <Link
          href="/privacy#cookies"
          className="text-brand-700 focus-visible:focus-ring rounded font-medium underline underline-offset-2"
        >
          Privacy policy
        </Link>
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => choose("denied")}
          className={buttonClass({ variant: "secondary", className: "flex-1" })}
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className={buttonClass({ variant: "secondary", className: "flex-1" })}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
