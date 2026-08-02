// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://cedricbouchard.dev',
  output: 'static',
  integrations: [sitemap()],
  build: {
    // Inline small stylesheets/scripts into the HTML instead of paying for a
    // round trip. Everything on this site is well under the threshold.
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
      // Keep the tech icons as separate files. Vite inlines assets under 4KB as
      // data: URIs by default, which put 34 copies of the same few SVGs into the
      // HTML — uncacheable bytes re-downloaded on every visit. As files they're
      // content-hashed and cached for a year.
      assetsInlineLimit: 0,
    },
  },
})
