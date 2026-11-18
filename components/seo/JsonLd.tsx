type JsonLdData = Record<string, unknown> | null | undefined;

/** Renders one or more JSON-LD blocks. `null` entries are skipped. */
export function JsonLd({ data }: { data: JsonLdData | JsonLdData[] }) {
  const items = (Array.isArray(data) ? data : [data]).filter(
    (d): d is Record<string, unknown> => d != null,
  );
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Escape "<" so content can never close the script tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
