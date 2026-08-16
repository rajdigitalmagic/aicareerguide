// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdxPlugin from '@astrojs/mdx';

export default defineConfig({
  site: 'https://aicareerguide.xyz',
  integrations: [mdxPlugin(), sitemap(), tailwind()],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
});
