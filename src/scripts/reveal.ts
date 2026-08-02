/**
 * Scroll reveal primitive.
 *
 * Marks any `[data-reveal]` element visible when it scrolls into view, once.
 * A single shared IntersectionObserver handles every element on the page.
 *
 * Usage:
 *   <div data-reveal>...</div>
 *   <div data-reveal style="--reveal-delay: 110ms">...</div>
 *   <div data-reveal style="--reveal-distance: 32px">...</div>
 *
 * Styling lives in src/styles/global.css. The hidden state is gated behind
 * `.reveal-ready` on <html>, which only this script sets — so if JS fails to
 * run, nothing is ever hidden.
 */

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function initReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]')
  if (targets.length === 0) return

  // Respect the user's motion preference and bail before hiding anything.
  // Also covers browsers without IntersectionObserver.
  if (prefersReducedMotion() || !('IntersectionObserver' in window)) return

  document.documentElement.classList.add('reveal-ready')

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-visible')
        // One-shot: elements don't re-hide when scrolled back past.
        observer.unobserve(entry.target)
      }
    },
    {
      // Fire slightly before the element is fully on screen so the motion
      // finishes around the time it's properly in view.
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1,
    }
  )

  for (const target of targets) observer.observe(target)
}
