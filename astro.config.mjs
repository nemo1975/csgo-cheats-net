import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://csgocheats.net',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/csgo-cheats/',
    '/cheats/lite/': '/products/csgo-cheats/',
    '/cheats/pro/': '/products/csgo-cheats/',
    '/cheats/elite/': '/products/csgo-cheats/complete/',
    '/cheats/compare/': '/forum/',
    '/products/battlefield-6-cheats/': '/products/csgo-cheats/',
    '/products/battlefield-6-cheats/complete/': '/products/csgo-cheats/complete/',
    '/products/battlefield-6-cheats/aimbot/': '/products/csgo-cheats/aimbot/',
    '/products/battlefield-6-cheats/esp-wallhack/': '/products/csgo-cheats/esp-wallhack/',
    '/products/fortnite-cheats/': '/products/csgo-cheats/',
    '/products/dota-2-cheats/': '/products/csgo-cheats/',
    '/products/cs2-cheats/': '/products/csgo-cheats/',
    '/products/cs2-cheats/complete/': '/products/csgo-cheats/complete/',
    '/products/cs2-cheats/aimbot/': '/products/csgo-cheats/aimbot/',
    '/products/cs2-cheats/esp-wallhack/': '/products/csgo-cheats/esp-wallhack/',
    '/contact/': '/support/',
    '/blog/best-cs2-cheats/': '/blog/best-csgo-cheats/',
    '/blog/cs2-aimbot-settings/': '/blog/csgo-aimbot-settings/',
    '/blog/cs2-cheat-pricing/': '/blog/csgo-cheat-pricing/',
    '/blog/cs2-wallhack-explained/': '/blog/csgo-wallhack-explained/',
    '/blog/cs2-cheat-setup-guide/': '/blog/csgo-cheat-setup-guide/',
    '/blog/cs2-ban-risk/': '/blog/csgo-ban-risk/',
    '/blog/how-to-choose-a-cs2-cheat-provider/': '/blog/how-to-choose-a-csgo-cheat-provider/',
    '/blog/cs2-config-presets/': '/blog/csgo-config-presets/',
    '/blog/cs2-hwid-reset/': '/blog/csgo-hwid-reset/',
    '/blog/cs2-cheat-troubleshooting/': '/blog/csgo-cheat-troubleshooting/',
    '/blog/cs2-deathmatch-and-casual/': '/blog/csgo-deathmatch-and-casual/',
    '/blog/cs2-free-vs-paid-cheats/': '/blog/csgo-free-vs-paid-cheats/',
    '/blog/best-battlefield-6-cheats/': '/blog/best-csgo-cheats/',
    '/blog/battlefield-6-aimbot-esp-features/': '/blog/csgo-aimbot-settings/',
    '/blog/battlefield-6-cheat-pricing/': '/blog/csgo-cheat-pricing/',
    '/blog/battlefield-6-esp-wallhack-explained/': '/blog/csgo-wallhack-explained/',
    '/blog/battlefield-6-cheat-setup-guide/': '/blog/csgo-cheat-setup-guide/',
    '/blog/battlefield-6-ban-risk-explained/': '/blog/csgo-ban-risk/',
    '/blog/how-to-choose-a-battlefield-6-cheat-provider/': '/blog/how-to-choose-a-csgo-cheat-provider/',
    '/blog/battlefield-6-config-presets/': '/blog/csgo-config-presets/',
    '/blog/battlefield-6-hwid-reset-guide/': '/blog/csgo-hwid-reset/',
    '/blog/battlefield-6-cheat-troubleshooting-faq/': '/blog/csgo-cheat-troubleshooting/',
    '/blog/battlefield-6-bot-lobbies-and-casual-play/': '/blog/csgo-deathmatch-and-casual/',
    '/blog/battlefield-6-free-vs-paid-cheats/': '/blog/csgo-free-vs-paid-cheats/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
