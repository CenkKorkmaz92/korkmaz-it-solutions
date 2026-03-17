/**
 * Merges class name strings, filtering out falsy values.
 * Lightweight alternative to clsx for simple conditional class composition.
 *
 * @param inputs - Any number of class strings or falsy values.
 * @returns A single space-separated class string.
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}
