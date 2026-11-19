export interface AddonProduct {
  id: 'cloud-dma' | 'hwid-spoofer';
  name: string;
  description: string;
  buyUrl: string;
  highlights: string[];
  image?: string;
  imageAlt?: string;
}

export const ADDON_PRODUCTS: AddonProduct[] = [
  {
    id: 'cloud-dma',
    name: 'Cloud DMA',
    description:
      'Optional hardware-assisted path referenced in the misc module list for players who run supported DMA setups alongside CSGO.',
    buyUrl: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fcloud-dma',
    image: '/images/addons/cloud-dma.png',
    imageAlt: 'Cloud DMA icon',
    highlights: [
      'Pairs with the Cloud-DMA module option',
      'Separate checkout from the main CSGO license',
      'Review requirements on the seller page',
    ],
  },
  {
    id: 'hwid-spoofer',
    name: 'HWID Spoofer',
    description:
      'Standalone utility for hardware identity changes when you move PCs or rebuild Windows. Details and scope are listed at checkout.',
    buyUrl: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fhwid-spoofer',
    image: '/images/addons/hwid-spoofer.png',
    imageAlt: 'HWID Spoofer icon',
    highlights: [
      'For legitimate hardware changes, not ban recovery',
      'Independent of CSGO cheat tiers',
      'Confirm compatibility before purchase',
    ],
  },
];
