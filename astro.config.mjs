// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://dynamic-liger-875847.netlify.app/",
  integrations: [preact()]
});