// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwind from '@astrojs/tailwind';
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://promatcon.lun.web.id",

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

  integrations: [tailwind(), svelte()],
});
