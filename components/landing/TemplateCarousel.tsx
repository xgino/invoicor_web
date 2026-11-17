"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/lib/config";

export interface CarouselTemplate {
  slug: string;
  name: string;
  tier?: string;
}

/**
 * Horizontal template gallery. The list comes from the API at build time (so names are in the
 * HTML); the rendered previews are fetched in the browser and shown in sandboxed iframes.
 */
export function TemplateCarousel({ initial }: { initial: CarouselTemplate[] }) {
  const [templates, setTemplates] = useState<CarouselTemplate[]>(initial);
  const [previews, setPreviews] = useState<Record<string, string>>({});

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function load() {
      let list = initial;
      if (list.length === 0) {
        // Build-time fetch failed: try again in the browser.
        try {
          const res = await fetch(`${API_URL}/invoices/templates/`, { signal: controller.signal });
          const data: unknown = await res.json();
          if (Array.isArray(data)) list = (data as CarouselTemplate[]).slice(0, 16);
        } catch {
          return;
        }
        if (cancelled) return;
        setTemplates(list);
      }
      for (const t of list) {
        fetch(`${API_URL}/invoices/templates/${t.slug}/preview/`, { signal: controller.signal })
          .then((r) => r.text())
          .then((html) => {
            if (!cancelled) setPreviews((prev) => ({ ...prev, [t.slug]: html }));
          })
          .catch(() => {});
      }
    }
    load();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [initial]);

  if (templates.length === 0) return null;

  return (
    <div
      className="tmpl-scroll"
      style={{
        display: "flex",
        gap: 18,
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        padding: "8px 0 24px",
      }}
    >
      {templates.map((t) => {
        const html = previews[t.slug];
        return (
          <div
            key={t.slug}
            className="tmpl-card"
            style={{
              flex: "0 0 210px",
              scrollSnapAlign: "start",
              borderRadius: 14,
              overflow: "hidden",
              background: "#fff",
              border: "1px solid rgba(255,255,255,.08)",
              boxShadow: "0 4px 20px rgba(0,0,0,.06)",
            }}
          >
            <div
              style={{
                width: 210,
                height: 280,
                overflow: "hidden",
                position: "relative",
                background: "#f8f8f8",
              }}
            >
              {html ? (
                <iframe
                  srcDoc={html}
                  title={`${t.name} invoice template preview`}
                  loading="lazy"
                  sandbox=""
                  tabIndex={-1}
                  style={{
                    width: 794,
                    height: 1123,
                    transform: "scale(0.264)",
                    transformOrigin: "top left",
                    border: "none",
                    pointerEvents: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      border: "2px solid #ddd",
                      borderTopColor: "#999",
                      borderRadius: "50%",
                      animation: "spin .8s linear infinite",
                    }}
                  />
                </div>
              )}
            </div>
            <div
              style={{
                padding: "10px 14px 12px",
                background: "#fafafa",
                borderTop: "1px solid #f0f0f0",
              }}
            >
              <p style={{ fontSize: 12, fontWeight: 700, margin: 0, color: "#1a1a1a" }}>{t.name}</p>
              {t.tier && t.tier !== "free" && (
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: t.tier === "pro" ? "#7c3aed" : "#2563eb",
                    textTransform: "uppercase",
                    letterSpacing: ".04em",
                  }}
                >
                  {t.tier}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
