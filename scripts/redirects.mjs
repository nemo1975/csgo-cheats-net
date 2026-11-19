/** Static path redirects (301). Keys are pathname without query/hash. */
const CSGO_HUB = '/products/csgo-cheats/';
const CSGO_COMPLETE = '/products/csgo-cheats/complete/';

export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', CSGO_HUB],
  ['/cheats/', CSGO_HUB],
  ['/cheats/lite', CSGO_HUB],
  ['/cheats/lite/', CSGO_HUB],
  ['/cheats/pro', CSGO_HUB],
  ['/cheats/pro/', CSGO_HUB],
  ['/cheats/elite', CSGO_COMPLETE],
  ['/cheats/elite/', CSGO_COMPLETE],
  ['/cheats/compare', '/forum/'],
  ['/cheats/compare/', '/forum/'],
  ['/products/fortnite-cheats', CSGO_HUB],
  ['/products/fortnite-cheats/', CSGO_HUB],
  ['/products/dota-2-cheats', CSGO_HUB],
  ['/products/dota-2-cheats/', CSGO_HUB],
  ['/products/battlefield-6-cheats', CSGO_HUB],
  ['/products/battlefield-6-cheats/', CSGO_HUB],
  ['/products/cs2-cheats', CSGO_HUB],
  ['/products/cs2-cheats/', CSGO_HUB],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
