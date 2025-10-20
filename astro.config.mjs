// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://astro.build/config
export default defineConfig({
  site: 'https://vivnproductions.netlify.app',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'public/_redirects',
            dest: './' // copie à la racine du dossier dist
          }
        ]
      })
    ]
  }
});
