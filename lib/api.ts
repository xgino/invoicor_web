/**
 * Typed access to the public Invoicor API (https://invoicor.com/api/docs/).
 *
 * Used at build time. Every response is validated with zod (the API's OpenAPI schema doesn't
 * describe these responses yet, see types/api.generated.ts), and every call has a timeout and a
 * safe fallback, so an API outage or change never breaks the build or ships bad data.
 */
import { z } from "zod";
import { API_URL } from "./config";

const templateSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  filename: z.string().optional(),
  size_bytes: z.number().optional(),
  tier: z.string(),
});
const currencySchema = z.object({ code: z.string(), name: z.string(), symbol: z.string() });
const languageSchema = z.object({ code: z.string(), name: z.string() });

export type ApiTemplate = z.infer<typeof templateSchema>;
export type ApiCurrency = z.infer<typeof currencySchema>;
export type ApiLanguage = z.infer<typeof languageSchema>;

export class ApiError extends Error {
  constructor(
    public readonly path: string,
    message: string,
  ) {
    super(`[api] ${path}: ${message}`);
  }
}

async function request(path: string, timeoutMs: number): Promise<Response> {
  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, { signal: AbortSignal.timeout(timeoutMs) });
  } catch (error) {
    throw new ApiError(path, (error as Error).message);
  }
  if (!res.ok) throw new ApiError(path, `HTTP ${res.status}`);
  return res;
}

/** Fetch a JSON list, keep only the items that match the schema, and fall back to [] on failure. */
async function getList<S extends z.ZodType>(path: string, schema: S, timeoutMs = 8000) {
  try {
    const data: unknown = await (await request(path, timeoutMs)).json();
    if (!Array.isArray(data)) throw new ApiError(path, "expected a list");
    const valid: z.infer<S>[] = [];
    for (const item of data) {
      const parsed = schema.safeParse(item);
      if (parsed.success) valid.push(parsed.data);
      else console.warn(`[api] ${path}: skipped an item that doesn't match the expected shape`);
    }
    return valid;
  } catch (error) {
    console.warn(`${(error as Error).message}, using an empty list`);
    return [];
  }
}

export const getApiTemplates = () => getList("/invoices/templates/", templateSchema);
export const getApiCurrencies = () => getList("/invoices/currencies/", currencySchema);
export const getApiLanguages = () => getList("/invoices/languages/", languageSchema);

/** Rendered HTML of a template with sample data, or null if unavailable. */
export async function getApiTemplatePreview(slug: string): Promise<string | null> {
  try {
    return await (
      await request(`/invoices/templates/${encodeURIComponent(slug)}/preview/`, 8000)
    ).text();
  } catch (error) {
    console.warn((error as Error).message);
    return null;
  }
}
