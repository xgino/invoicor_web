import { API_URL } from "@/lib/config";

/**
 * Calls to the public generator API (invoicor_api: API/invoices/public.py). Rate limits are enforced
 * on the server; these helpers turn its answers into plain-language errors.
 */
const BASE = `${API_URL}/invoices/public`;

export type GeneratorError =
  | { code: "rate_limited"; message: string }
  | { code: "template_locked"; message: string }
  | { code: "invalid"; message: string; fields?: Record<string, unknown> }
  | { code: "bot_check"; message: string }
  | { code: "unavailable"; message: string };

export class GeneratorApiError extends Error {
  constructor(public readonly detail: GeneratorError) {
    super(detail.message);
  }
}

async function post(path: string, body: unknown, signal?: AbortSignal): Promise<Response> {
  let res: Response;
  try {
    res = await fetch(`${BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal,
    });
  } catch (error) {
    if ((error as Error).name === "AbortError") throw error;
    throw new GeneratorApiError({
      code: "unavailable",
      message: "We can't reach the invoice service right now. Your form is saved; try again soon.",
    });
  }
  if (res.ok) return res;

  let data: { code?: string; error?: string; fields?: Record<string, unknown> } = {};
  try {
    data = await res.json();
  } catch {
    // not JSON (e.g. a 404 page while the API isn't deployed yet)
  }
  if (res.status === 429)
    throw new GeneratorApiError({
      code: "rate_limited",
      message: "You've made a lot of invoices in a short time. Please wait a little and try again.",
    });
  if (res.status === 403 && data.code === "template_locked")
    throw new GeneratorApiError({
      code: "template_locked",
      message: "This template is available in the Invoicor app.",
    });
  if (res.status === 403 && data.code === "bot_check")
    throw new GeneratorApiError({
      code: "bot_check",
      message: "Please confirm you're human and try again.",
    });
  if (res.status === 400 || res.status === 413)
    throw new GeneratorApiError({
      code: "invalid",
      message: data.error ?? "Please check the highlighted fields.",
      fields: data.fields,
    });
  throw new GeneratorApiError({
    code: "unavailable",
    message: "The invoice service isn't available right now. Your form is saved; try again soon.",
  });
}

/** The PDF (with the "Created with invoicor.com" line, added by the server). */
export async function downloadPdf(payload: unknown): Promise<Blob> {
  return (await post("/pdf/", payload)).blob();
}
