export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'CSGO Cheats for PC | Aimbot, ESP & Wallhack',
    description:
      'CSGO cheats for PC. Compare aimbot, ESP, and wallhack plans, check Steam compatibility, and read setup notes before checkout.',
  },
  '/products/csgo-cheats/': {
    title: 'CSGO Cheats Download | Complete, Aimbot & ESP Plans',
    description:
      'Download CSGO cheats for PC: compare Complete, Aimbot, and ESP wallhack plans, module lists, and key lengths before you buy.',
  },
  '/products/csgo-cheats/complete/': {
    title: 'CSGO Cheat Features | Complete Aimbot & ESP Suite',
    description:
      'Full CSGO cheat features on one key: 29 modules covering aimbot, ESP wallhack, crosshair tools, and cloud configs for CSGO on Steam.',
  },
  '/products/csgo-cheats/aimbot/': {
    title: 'CSGO Aimbot | Smooth FOV, Bones & Visible Check',
    description:
      'CSGO aimbot with smoothness, FOV limits, bone selection, and visible checks. Tune for rifles and AWP, or pair it with the ESP plan.',
  },
  '/products/csgo-cheats/esp-wallhack/': {
    title: 'CSGO ESP | Player Boxes, Skeletons & Wallhack',
    description:
      'CSGO ESP and wallhack overlays: boxes, skeletons, health, names, and distance through smokes on Dust II, Mirage, and other Active Duty maps.',
  },
  '/blog/': {
    title: 'CSGO Guides | Setup, Aimbot Tuning & Ban Risk',
    description:
      'CSGO guides for PC players: loader setup, aimbot settings, ESP layouts, pricing, and VAC risk notes before you buy CSGO cheats.',
  },
  '/reviews/': {
    title: 'CSGO Cheats Reviews | Player Notes on Aimbot & ESP',
    description:
      'Read CSGO cheats reviews from PC players covering aimbot feel, ESP clutter, loader setup, and how keys arrived after checkout.',
  },
  '/forum/': {
    title: 'CSGO Cheats Forum | Loader, Aimbot & ESP Threads',
    description:
      'CSGO cheats forum for loader setup, aimbot smoothness, ESP colors, and patch-day talk from CSGO players on Steam.',
  },
  '/faq/': {
    title: 'CSGO Cheats FAQ | VAC Risk, Plans & Setup',
    description:
      'CSGO cheats FAQ: Steam and Windows requirements, aimbot vs ESP, plan lengths, HWID reset, loader setup, and what to check after a CSGO update.',
  },
  '/terms/': {
    title: 'Terms | CSGO Cheats License, Delivery & Refunds',
    description:
      'Terms for buying CSGO cheats on csgocheats.net: license use, delivery, refunds, and account risk on CSGO for PC.',
  },
  '/privacy/': {
    title: 'Privacy | Cookies & Contact Data on CSGOCheats',
    description:
      'How csgocheats.net uses analytics, cookies, and support messages when you browse CSGO cheat pages. Checkout runs on the merchant site.',
  },
  '/about/': {
    title: 'About CSGOCheats.net | CSGO Plans, Forums & Checkout',
    description:
      'About CSGOCheats.net: independent CSGO cheat comparisons, forum threads, checkout paths, and FAQs for CSGO on Windows.',
  },
  '/support/': {
    title: 'CSGO Cheats Support | Loader, Keys & Checkout Help',
    description:
      'Support for CSGO cheats: loader setup, HWID resets, billing questions, ticket checklist, email, and Discord help after you buy.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
