// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dokos.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'zh', 'fr', 'hi', 'de', 'ja', 'ru', 'ko', 'bn', 'id', 'it', 'th', 'tr', 'vi'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('test'),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
          pt: 'pt-BR',
          zh: 'zh-CN',
          fr: 'fr-FR',
          hi: 'hi-IN',
          de: 'de-DE',
          ja: 'ja-JP',
          ru: 'ru-RU',
          ko: 'ko-KR',
          bn: 'bn-BD',
          id: 'id-ID',
          it: 'it-IT',
          th: 'th-TH',
          tr: 'tr-TR',
          vi: 'vi-VN',
        },
      },
    }),
  ],
});
