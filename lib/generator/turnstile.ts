/**
 * Cloudflare Turnstile bot check for the PDF button (ROADMAP 31c, 34a). Only active when
 * NEXT_PUBLIC_TURNSTILE_SITE_KEY is set at build time (Stage X, X19); otherwise it's skipped and
 * the server's rate limits still apply. The script loads only when someone clicks "Download PDF".
 */
const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
const SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

interface TurnstileApi {
  render: (el: HTMLElement, options: Record<string, unknown>) => string;
  execute: (id: string) => void;
  reset: (id: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export const turnstileEnabled = SITE_KEY !== "";

let loading: Promise<TurnstileApi> | null = null;
function load(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  loading ??= new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = SCRIPT;
    s.async = true;
    s.onload = () =>
      window.turnstile ? resolve(window.turnstile) : reject(new Error("turnstile"));
    s.onerror = () => reject(new Error("turnstile"));
    document.head.appendChild(s);
  });
  return loading;
}

/** A one-time token, or undefined when the check is off. Shows a challenge only if needed. */
export async function turnstileToken(container: HTMLElement): Promise<string | undefined> {
  if (!turnstileEnabled) return undefined;
  const api = await load();
  container.replaceChildren();
  return new Promise((resolve, reject) => {
    const id = api.render(container, {
      sitekey: SITE_KEY,
      appearance: "interaction-only",
      execution: "execute",
      callback: (token: string) => resolve(token),
      "error-callback": () => reject(new Error("turnstile")),
    });
    api.execute(id);
  });
}
