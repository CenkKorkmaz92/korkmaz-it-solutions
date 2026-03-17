/**
 * Inline warning badge used inside legal documents to mark content
 * that still needs to be filled in (e.g. addresses, registration numbers).
 *
 * @param children - The placeholder label text shown inside the badge.
 */
export default function Placeholder({ children }: { children: string }) {
  return (
    <span className="inline-block rounded border border-accent/40 bg-accent/10 px-2 py-0.5 text-base font-medium text-accent">
      ⚠ {children}
    </span>
  );
}
