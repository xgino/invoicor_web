export {};

declare global {
  interface Window {
    posthog?: {
      capture: (event: string, properties?: Record<string, unknown>) => void;
      opt_out_capturing?: () => void;
    };
    /** StatsUp tracker: `page()` counts a page change inside the site (no full reload). */
    __statsup?: { page?: (path?: string) => void };
  }
}
