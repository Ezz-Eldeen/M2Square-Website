import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://website-one-beige-21.vercel.app',

  // Native i18n routing configuration
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false, // English stays at /, Arabic lives at /ar/*
    },
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});