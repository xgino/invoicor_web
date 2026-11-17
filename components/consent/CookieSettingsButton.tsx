"use client";

import { openConsentSettings } from "@/lib/consent";

/** Footer link that re-opens the consent banner. */
export function CookieSettingsButton({ style }: { style?: React.CSSProperties }) {
  return (
    <button
      type="button"
      onClick={openConsentSettings}
      style={{
        background: "none",
        border: 0,
        padding: 0,
        cursor: "pointer",
        textAlign: "left",
        font: "inherit",
        ...style,
      }}
    >
      Cookie settings
    </button>
  );
}
