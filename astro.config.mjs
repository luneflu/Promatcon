// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import svelte from "@astrojs/svelte";
import { i18n } from "astro-i18n-aut/integration";

const locales = {
  en: "en",
  id: "id",
};
const defaultLocale = "en";

// https://astro.build/config
export default defineConfig({
  site: "https://promatcon.lun.web.id",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "IBM Plex Sans",
      cssVariable: "--font-ibm-plex-sans",
    },
    {
      provider: fontProviders.fontsource(),
      name: "IBM Plex Mono",
      cssVariable: "--font-ibm-plex-mono",
    },
  ],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["swiper/element/bundle", "viewerjs", "apextree"],
    },
  },

  trailingSlash: "never",
  build: {
    format: "directory",
  },
  integrations: [svelte(), i18n({ locales, defaultLocale })],
});
