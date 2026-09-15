import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ia-al-dia.vercel.app',
  integrations: [sitemap()],
});