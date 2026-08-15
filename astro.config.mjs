// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/rss'; // Note: Ensure sitemap and mdx imports match your package setup
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdxPlugin from '@astrojs/mdx';

export default defineConfig({
  site: 'https://aicareerguide.xyz',
  integrations: [mdxPlugin(), sitemap(), tailwind()],
  output: 'static',
  build: {
    // Automatically inline critical CSS to eliminate render-blocking requests
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
