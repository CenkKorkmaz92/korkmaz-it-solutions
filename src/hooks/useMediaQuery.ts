import { useState, useEffect } from "react";

/**
 * Tracks whether a CSS media query currently matches.
 *
 * @param query - A valid CSS media query string, e.g. `"(max-width: 768px)".
 * @returns `true` while the query matches, `false` otherwise.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
