// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dokos.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'zh', 'fr', 'hi', 'de', 'ja', 'ru', 'ko'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
