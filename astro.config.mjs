// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://sivoro.bio',
  integrations: [
    sitemap({
      // Exclude legal pages from sitemap (already blocked in robots.txt)
      filter: (page) => !page.includes('/privacy') && !page.includes('/terms'),
      changefreq: 'weekly',
      priority: 0.7,
      customPages: [
        'https://sivoro.bio/',
        'https://sivoro.bio/technology',
        'https://sivoro.bio/science',
        'https://sivoro.bio/products',
        'https://sivoro.bio/team',
        'https://sivoro.bio/investors',
        'https://sivoro.bio/partners',
        'https://sivoro.bio/contact',
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
