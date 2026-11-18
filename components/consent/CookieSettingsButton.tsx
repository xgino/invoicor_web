"use client";

import { openConsentSettings } from "@/lib/consent";

/** Footer link that re-opens the consent banner. */
export function CookieSettingsButton({
  className,
  label = "Cookie settings",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={openConsentSettings}
      className={`cursor-pointer ${className ?? ""}`}
    >
      {label}
    </button>
  );
}
