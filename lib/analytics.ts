/**
 * The only place that sends analytics events (ROADMAP chunk 14c). Components never call
 * PostHog or GA directly, so swapping tools or adding cookie consent is a change in one file.
 *
 * Event names follow `area_action`, e.g. `cta_click`, `nav_app_click`, `gen_generate`.
 */
export type EventProps = Record<string, string | number | boolean | undefined>;

export function track(event: string, props: EventProps = {}): void {
  if (typeof window === "undefined") return;
  window.posthog?.capture(event, props);
}
