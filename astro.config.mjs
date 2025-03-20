import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  site: "https://abrahamicm.github.io/",
  base: "/abrahamicm.github.io/", // Nombre del repo en GitHub Pages
  output: "static", // Necesario para GitHub Pages
  build: {
    outDir: "docs" // Cambia la carpeta de salida de dist a docs
  },
  integrations: [tailwind(), mdx(), sitemap(), icon(), AstroPWA({
    mode: 'production',
    base: '/',
    scope: '/',
    includeAssets: ['favicon.svg'],
    manifest: {
      name: 'Astro PWA',
      short_name: 'Astro PWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
    },
    devOptions: {
      enabled: true,
      navigateFallbackAllowlist: [/^\/$/],
    },
  })],
});
