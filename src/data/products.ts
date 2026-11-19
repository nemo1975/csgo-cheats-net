import { t } from '../i18n';
import { checkoutForSlug } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedForumSlugs: string[];
}

/** Forum threads paired with each product detail page */
export const productRelatedForumSlugs: Record<string, string[]> = {
  complete: [
    'aimbot-smoothness-and-fov-sweet-spot',
    'esp-boxes-too-bright-at-night-maps',
    'save-config-profiles-between-pcs',
    'patch-day-menu-not-opening',
    'smoke-executes-and-esp-on-dust2',
  ],
  aimbot: [
    'aimbot-smoothness-and-fov-sweet-spot',
    'head-vs-chest-bone-priority',
    'triggerbot-vs-full-aim-sniper',
    'first-loader-setup-windows-11',
    'patch-day-menu-not-opening',
  ],
  'esp-wallhack': [
    'esp-boxes-too-bright-at-night-maps',
    'skeleton-esp-fps-drop-1080ti',
    'smoke-executes-and-esp-on-dust2',
    'obs-game-capture-showing-overlay',
    'head-vs-chest-bone-priority',
    'how-long-wait-after-game-update',
  ],
};

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Check status',
    desc: 'Confirm CSGO cheats are online on our status banner before you buy, especially right after a game or VAC Live update.',
  },
  {
    num: '02',
    title: 'Pick a plan',
    desc: 'Pick weekly, monthly, or lifetime access on the checkout page. Complete includes all 29 modules; Aimbot and ESP / wallhack focus on tracking or visuals only.',
  },
  {
    num: '03',
    title: 'Pay securely',
    desc: 'Checkout supports card, PayPal, and crypto. Your key unlocks instantly in the portal with free updates during your license.',
  },
  {
    num: '04',
    title: 'Install & play',
    desc: 'Download the loader from your portal, load a conservative preset, and launch CSGO on Steam. Discord support is there if setup looks off.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'CSGO receives frequent updates. Confirm module availability on the live status panel before you purchase or launch. Overlay density and aim settings that work in Deathmatch may need retuning for Competitive or Premier after patches.';

const sharedLimitations =
  'Third-party software in CSGO can violate the Steam Subscriber Agreement and Valve’s game rules, and can lead to VAC, VAC Live, or other account action. You use this software at your own risk. Compatibility and availability can change after game, anti-cheat, or Windows updates without notice.';

const csgoSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 or Windows 11 (64-bit).' },
  { icon: 'reqEpic', text: 'CSGO on PC via Steam. Apply the latest game patch before launch.' },
  { icon: 'reqCpu', text: 'Intel or AMD CPU that meets CSGO minimum specs.' },
  { icon: 'reqWifi', text: 'Stable internet for instant key delivery, portal access, and loader updates.' },
  { icon: 'reqSettings', text: 'Administrator rights for loader install; check live status after anti-cheat updates.' },
];

const aimbotModules = [
  'Toggle Aimbot',
  'Aim Always',
  'Bone Selection (Head, Neck, Body, Pelvis)',
  'Customizable Aim Bind',
  'Customizable Smoothness',
  'Customizable FOV',
  'Customizable Distance',
  'Target Bots',
  'Target Teams',
  'Visible Check',
  'Draw FOV Border',
  'Draw FOV Background',
] as const;

const visualModules = [
  'Player ESP',
  'Bot ESP',
  'Max Distance',
  'Health Bar',
  'Skeleton',
  'Snapline',
  'Box',
  'Name',
  'Distance',
] as const;

const miscModules = [
  'Crosshair (Enable, Style, Size, Thickness)',
  'Config System (Save, Load, Share, Delete)',
  'Menu Language (English, Chinese)',
  'FPS Limit',
  'Menu Bind',
  'Unload Bind',
  'AWS option',
  'Cloud-DMA option',
] as const;

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  gpEsp: {
    src: `${gameplay}/csgo-player-esp.png`,
    alt: 'CSGO player ESP wallhack with a boxed enemy, name, health, and distance',
    caption: 'Player ESP',
    captionDesc: 'Boxes, names and distance readouts in a CSGO round.',
  },
  gpAimbot: {
    src: `${gameplay}/csgo-awp-wallhack.png`,
    alt: 'CSGO AWP wallhack through a wall with a boxed player in scope',
    caption: 'AWP wallhack',
    captionDesc: 'Scoped AWP view with a boxed player through the wall.',
  },
  gpSkeleton: {
    src: `${gameplay}/csgo-chams-esp.png`,
    alt: 'CSGO filled player ESP overlay with health and dropped weapons',
    caption: 'Filled ESP',
    captionDesc: 'Solid player overlay through cover, plus health and distance.',
  },
  gpBox: {
    src: `${gameplay}/csgo-snapline-esp.png`,
    alt: 'CSGO snapline ESP with dropped item tags during a bomb plant',
    caption: 'Snaplines',
    captionDesc: 'Range lines and dropped-item tags while the bomb is planted.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(PRODUCT_BASE, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'csgo-cheats';
}

const tierAbout: Record<string, ProductPage['about']> = {
  complete: [
    {
      type: 'p',
      text: 'CSGO Complete bundles all 29 modules: 12 aimbot options, 9 visual overlays, and 8 misc tools. One license covers Competitive, Premier, Deathmatch, and Wingman instead of splitting aim and visuals across two keys.',
    },
    { type: 'h2', text: 'Built for 5v5 rounds' },
    {
      type: 'p',
      text: 'Save configs to the cloud, swap menu language, and cap FPS so overlays stay readable on Dust II long or Mirage mid. Start with portal presets before you raise smoothness or ESP range.',
    },
  ],
  aimbot: [
    {
      type: 'p',
      text: 'The Aimbot plan focuses on the 12 tracking modules: smoothness, FOV, bone selection, team and bot filters, and visible checks. You skip the full visual suite if you already run a minimal HUD.',
    },
    { type: 'h2', text: 'Tune before you queue' },
    {
      type: 'p',
      text: 'Draw FOV border and background help you see lock range without cluttering center screen. Pair conservative smoothness with visible check enabled for Competitive rifle rounds.',
    },
  ],
  'esp-wallhack': [
    {
      type: 'p',
      text: 'ESP / wallhack covers the nine visual modules: player and bot ESP, boxes, skeletons, snaplines, health bars, names, distance, and max range. Pick this when map awareness matters more than aim automation.',
    },
    { type: 'h2', text: 'Readable overlays at range' },
    {
      type: 'p',
      text: 'On Mirage and Inferno, max distance and team color filters keep tags usable. Test skeleton vs box layouts in Deathmatch before you rely on them in Premier.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  complete: [
    { type: 'h2', text: 'All 29 modules included' },
    {
      type: 'p',
      text: 'Aimbot options cover toggle and hold modes, bone selection, smoothness, FOV, distance limits, bot and team targeting, visible check, and FOV drawing. Visual options add player and bot ESP with health, skeleton, snapline, box, name, and distance controls. Misc tools include crosshair styling, config save/load/share, menu binds, FPS limit, and language selection.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'If you start on Aimbot or ESP / wallhack and want the full suite later, compare module lists on each product page and move to Complete through checkout when you are ready for every category on one key.',
    },
  ],
  aimbot: [
    { type: 'h2', text: 'Aimbot module breakdown' },
    {
      type: 'p',
      text: 'Enable toggle or always-on aim, pick head, neck, body, or pelvis bones, and bind aim to a key that fits your grip. Smoothness and FOV sliders control how aggressively the reticle moves; distance caps stop long-range snaps. Target bots or teams separately, require visible line-of-sight, and optionally draw FOV border and background for reference.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Many players pair this plan with forum threads on smoothness and FOV before their first Premier session. If you need player boxes and skeletons, compare the ESP / wallhack plan or step up to Complete.',
    },
  ],
  'esp-wallhack': [
    { type: 'h2', text: 'Visual module breakdown' },
    {
      type: 'p',
      text: 'Player ESP and bot ESP share max distance, health bar, skeleton, snapline, box, name, and distance toggles. Filter colors for friendlies vs enemies, shorten range on dense sites like Inferno banana, and use skeleton mode when you track movement through smokes.',
    },
    { type: 'h2', text: 'Layout tips' },
    {
      type: 'p',
      text: 'Snaplines help orientation on vertical maps like Nuke; boxes stay cleaner for streaming layouts. Save a Competitive preset and a Deathmatch preset through the config system when you buy Complete, or add misc tools later if you only need visuals today.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  complete: {
    images: slide('gpEsp', 'gpAimbot', 'gpSkeleton', 'gpBox'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: csgoSystemRequirements,
    fullFeatures: [...aimbotModules, ...visualModules, ...miscModules],
    overview: {
      title: 'Overview',
      paragraphs: [
        'CSGO is a round-based tactical shooter. Complete CSGO cheats add aimbot tuning and ESP wallhack so you read executes instead of guessing through a smoke.',
        'This plan includes all 29 modules: 12 aimbot options, 9 visual overlays, and 8 misc tools (config save/load, crosshair, menu binds, FPS limit, and more). Instant delivery, free updates during your key, and 24/7 setup help are included.',
        'Always re-check live status before launch, especially after a CSGO or VAC Live update.',
      ],
    },
  },
  aimbot: {
    images: slide('gpAimbot', 'gpEsp'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: csgoSystemRequirements,
    fullFeatures: [...aimbotModules],
    overview: {
      title: 'CSGO Aimbot: smooth FOV and bones',
      paragraphs: [
        'The Aimbot plan delivers all twelve tracking modules: smoothness, FOV, bone selection, visible check, and team or bot filters, without the full ESP suite.',
        'Use FOV drawing and distance caps to keep locks readable on long angles. Pair with ESP / wallhack or Complete if you want boxes and skeletons on the same key.',
      ],
    },
  },
  'esp-wallhack': {
    images: slide('gpEsp', 'gpSkeleton', 'gpBox'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: csgoSystemRequirements,
    fullFeatures: [...visualModules],
    overview: {
      title: 'CSGO ESP and wallhack',
      paragraphs: [
        'ESP / wallhack includes nine visual modules: player and bot overlays, health bars, skeletons, snaplines, boxes, names, distance, and max range.',
        'Tune colors and distance before Premier. Use the screenshots on this page to compare box, filled overlay, and snapline layouts.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    if (!content) {
      throw new Error(`Missing product content for cheat slug "${slug}"`);
    }
    const displayName = cheat.title;
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedForumSlugs: productRelatedForumSlugs[slug] ?? [],
    };
  });
}

export const productPages: ProductPage[] = buildTierPages();

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = slide('gpEsp', 'gpSkeleton', 'gpBox', 'gpAimbot');

export function getProductFeatureGroups(slug: string): { heading: string; features: readonly string[] }[] {
  if (slug === 'aimbot') {
    return [{ heading: 'Aimbot', features: aimbotModules }];
  }
  if (slug === 'esp-wallhack') {
    return [{ heading: 'ESP / Visuals', features: visualModules }];
  }
  return [
    { heading: 'Aimbot', features: aimbotModules },
    { heading: 'ESP / Visuals', features: visualModules },
    { heading: 'Additional options', features: miscModules },
  ];
}

export const productHub = {
  path: PRODUCT_BASE,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'CSGO cheats for PC: Complete suite, Aimbot, and ESP / wallhack plans with config saves for Competitive and Deathmatch.',
  buyUrl: checkoutForSlug('csgo-cheats'),
};
