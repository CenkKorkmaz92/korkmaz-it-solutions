// Shared TypeScript types for the application

/** A single navigation item used in the Navbar and Footer. */
export interface NavItem {
  /** Display text for the link. */
  label: string;
  /** Target URL or hash anchor. */
  href: string;
}

/** Basic SEO metadata for a page. */
export interface SeoMeta {
  /** The page `<title>` string. */
  title: string;
  /** The meta description string. */
  description: string;
}
