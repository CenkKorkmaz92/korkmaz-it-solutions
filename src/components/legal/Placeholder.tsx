export default function Placeholder({ children }: { children: string }) {
  return (
    <span className="inline-block rounded border border-accent/40 bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
      ⚠ {children}
    </span>
  );
}
