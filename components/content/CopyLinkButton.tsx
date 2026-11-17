"use client";

import { Check, Link as LinkIcon } from "lucide-react";
import { useState } from "react";

/** Copies a deep link to an element on the current page (e.g. one FAQ answer). */
export function CopyLinkButton({ anchorId }: { anchorId: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    const url = `${window.location.origin}${window.location.pathname}#${anchorId}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.hash = anchorId;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="shrink-0 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 hover:text-blue-600 focus-visible:opacity-100"
      aria-label="Copy link to this question"
      title={copied ? "Link copied" : "Copy link to this question"}
    >
      {copied ? <Check className="h-4 w-4" /> : <LinkIcon className="h-4 w-4" />}
    </button>
  );
}
