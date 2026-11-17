/**
 * Typed access to the public Invoicor API (https://invoicor.com/api/docs/).
 * Used at build time; every call has a timeout and a safe fallback so an API outage
 * never breaks the build.
 */
import { API_URL } from "./config";

export interface ApiTemplate {
  slug: string;
  name: string;
  filename?: string;
  size_bytes?: number;
  tier: "free" | "starter" | "pro" | string;
}

async function getJson<T>(path: string, fallback: T, timeoutMs = 8000): Promise<T> {
  try {
    const res = await fetch(`${API_URL}${path}`, { signal: AbortSignal.timeout(timeoutMs) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as T;
  } catch (error) {
    console.warn(`[api] ${path} failed, using fallback:`, (error as Error).message);
    return fallback;
  }
}

export async function getApiTemplates(): Promise<ApiTemplate[]> {
  const data = await getJson<unknown>("/invoices/templates/", []);
  return Array.isArray(data) ? (data as ApiTemplate[]) : [];
}
