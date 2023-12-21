import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import Icons from 'unplugin-icons/vite'

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  vite: {
    plugins: [
      Icons({
        compiler: 'vue3',
      })
    ]
  }
});