import { ReactNode } from "react";

/** Props for the `Container` layout wrapper. */
interface ContainerProps {
  children: ReactNode;
  /** Additional Tailwind classes to merge onto the wrapper div. */
  className?: string;
}

/**
 * Centred, max-width page wrapper with consistent horizontal padding.
 * Use this around every section's content to keep layout consistent.
 */
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
