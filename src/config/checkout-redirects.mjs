/** Checkout destinations keyed by internal product id. */
export const CHECKOUT_URLS = {
  cs2: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fcs-go',
  cloudDma: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fcloud-dma',
  hwidSpoofer: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fhwid-spoofer',
};

export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/cs2', CHECKOUT_URLS.cs2],
  ['/go/cs2/', CHECKOUT_URLS.cs2],
  ['/go/csgo', CHECKOUT_URLS.cs2],
  ['/go/csgo/', CHECKOUT_URLS.cs2],
  ['/go/battlefield-6', CHECKOUT_URLS.cs2],
  ['/go/battlefield-6/', CHECKOUT_URLS.cs2],
  ['/go/fortnite', CHECKOUT_URLS.cs2],
  ['/go/fortnite/', CHECKOUT_URLS.cs2],
  ['/go/skin-changer', CHECKOUT_URLS.cs2],
  ['/go/skin-changer/', CHECKOUT_URLS.cs2],
  ['/go/cloud-dma', CHECKOUT_URLS.cloudDma],
  ['/go/cloud-dma/', CHECKOUT_URLS.cloudDma],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.cs2],
  ['/go/ugc/', CHECKOUT_URLS.cs2],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
