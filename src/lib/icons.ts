/**
 * Tech icon resolution.
 *
 * Icons are vendored from devicon v2.17.0 into src/assets/icons/ rather than
 * hot-linked from a CDN. That removes a third-party DNS + TLS handshake from
 * the critical path and pins the version, so an upstream rename can't silently
 * blank out the icons in production.
 *
 * Vite rewrites each import to a content-hashed URL under /_astro/, which
 * vercel.json serves with a one-year immutable cache.
 */

const iconUrls = import.meta.glob<string>('../assets/icons/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
})

/** Filename (without .svg) -> hashed public URL. */
const registry = new Map<string, string>(
  Object.entries(iconUrls).map(([path, url]) => [
    path.split('/').pop()!.replace(/\.svg$/, ''),
    url,
  ])
)

/**
 * Icons whose artwork is near-black and would vanish against the dark page
 * background. These get a light chip behind them (see `.iconChip` styles).
 */
const NEEDS_BACKDROP = new Set(['flask-original', 'ros-original'])

export interface ResolvedIcon {
  url: string
  needsBackdrop: boolean
}

/**
 * Resolve a devicon slug to a local asset URL.
 *
 * Returns null when the icon isn't vendored, so callers can render text only
 * instead of a broken image. This replaces the old runtime `onError` handler:
 * a missing icon is now caught at build time rather than in the user's browser.
 */
export function resolveIcon(
  slug: string,
  variant = 'original'
): ResolvedIcon | null {
  const key = `${slug}-${variant}`
  const url = registry.get(key)
  if (!url) {
    console.warn(`[icons] no vendored icon for "${key}" — rendering label only`)
    return null
  }
  return { url, needsBackdrop: NEEDS_BACKDROP.has(key) }
}
