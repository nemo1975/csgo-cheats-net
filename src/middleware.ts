import { defineMiddleware } from 'astro:middleware';
import { resolveCheckoutPathRedirect } from './config/checkout-redirects.mjs';

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  const destination = resolveCheckoutPathRedirect(url.pathname);
  if (destination) {
    return context.redirect(destination, 302);
  }

  const productRewrites: Array<[string, string]> = [
    ['/products/battlefield-6-cheats', '/products/csgo-cheats'],
    ['/products/fortnite-cheats', '/products/csgo-cheats'],
    ['/products/dota-2-cheats', '/products/csgo-cheats'],
    ['/products/cs2-cheats', '/products/csgo-cheats'],
  ];

  for (const [from, to] of productRewrites) {
    if (url.pathname === from || url.pathname.startsWith(`${from}/`)) {
      const rest = url.pathname.replace(from, to);
      return context.redirect(rest.endsWith('/') ? rest : `${rest}/`, 301);
    }
  }

  return next();
});
