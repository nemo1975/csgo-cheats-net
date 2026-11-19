import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const completeTier = (label: string) => link(label, productPath('complete'));
const aimbotTier = (label: string) => link(label, productPath('aimbot'));
const espTier = (label: string) => link(label, productPath('esp-wallhack'));
const productsIndex = (label: string) => link(label, ROUTES.products);
const faqIndex = (label: string) => link(label, ROUTES.faq);
const forumHub = (label: string) => link(label, ROUTES.forum);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if CSGO cheats are online?',
    a: a(
      'Use the live status banner on csgocheats.net and the Discord #status channel. Always confirm after a CSGO client patch or VAC Live update before you launch.',
    ),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a(
      'Checkout unlocks your operator portal with the loader, setup guide, and config library. Follow the portal steps before opening CSGO on Steam.',
    ),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using CSGO cheats?',
    a: a(
      'Yes. Any third-party modification carries risk. VAC, VAC Live, and player reports can lead to account action. Read live status and accept the risk before use.',
    ),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a(
      'CSGO on Windows 10 or Windows 11 64-bit via Steam only. Console, macOS, and Linux are not supported.',
    ),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a(
      'Yes. Start an HWID reset from your operator portal or Discord with your order email. How often you can move a key depends on your plan tier and recent resets.',
    ),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are CSGO cheat plans listed?',
    a: `${productsIndex('CSGO product hub')} lists ${completeTier('Complete cheat suite')}, ${aimbotTier('Aimbot-only tier')}, and ${espTier('ESP wallhack tier')} with module breakdowns and secure checkout links.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is CSGO ESP and wallhack?',
    a: `Player ESP and wallhack overlays show player positions, health, skeletons, and distance through smokes and cover. ${espTier('ESP wallhack modules')} covers the visual suite; ${completeTier('Complete license')} adds aimbot and misc tools on the same key.`,
    scopes: ['esp-wallhack', 'complete'],
  },
  {
    id: 'esp-vs-scripts',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP wallhack and aimbot?',
    a: `ESP and wallhack are information overlays. They do not move your crosshair. Aimbot modules on ${aimbotTier('Smooth aimbot tier')} and ${completeTier('Complete package')} handle smooth tracking, FOV, and bone priority. You can stay awareness-only on ${espTier('ESP-only plan')}.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Which plan do I need for ESP wallhack only?',
    a: `${espTier('ESP wallhack plan')} includes player and bot ESP, boxes, skeletons, snaplines, health bars, names, distance, and max range with no aimbot automation. ${completeTier('Complete plan')} adds all twelve aimbot modules plus config and crosshair tools.`,
    scopes: ['esp-wallhack'],
  },
  {
    id: 'which-tier-scripts',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'Which plan includes aimbot?',
    a: `${aimbotTier('Aimbot plan page')} ships every aimbot module: smoothness, FOV, bone selection, visible check, team and bot filters, and FOV drawing. ${completeTier('Complete suite')} includes the same aimbot stack plus the full ESP suite. ${espTier('ESP wallhack modules page')} has no aimbot.`,
    scopes: ['aimbot'],
  },
  {
    id: 'rank-plans',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'How do Complete, Aimbot, and ESP / wallhack compare?',
    a: `Map awareness only → ${espTier('ESP-only tier')}. Tracking without full ESP → ${aimbotTier('Dedicated Aimbot tier')}. All 29 modules on one key → ${completeTier('Complete tier')}. Compare tables on each product page or the ${faqIndex('FAQ index')}.`,
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS or Discord capture my overlay?',
    a: a(
      'Stream-capture modes hide overlays from OBS Game Capture and Discord screen share on supported builds. Record a local test clip before you stream or share your desktop.',
    ),
  },
  {
    id: 'live-status',
    topic: 'safety',
    icon: 'faqEacUpdate',
    q: 'What does the live status banner mean?',
    a: a(
      'Status reflects the current build against VAC Live and recent CSGO patches. It is not a permanent guarantee. Do not launch while the banner shows updating, testing, or offline.',
    ),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is ESP wallhack lower profile than aimbot?',
    a: a(
      'ESP can look quieter in a demo than obvious snap aim, but it is still third-party software. VAC Live does not ignore overlays because you left aimbot disabled.',
    ),
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Does the loader install into my CSGO game folder?',
    a: `The loader runs external with cloud config sync. Nothing is dropped into the Steam game directory. Anti-cheat risk still applies. See ${productsIndex('product requirements')} for specs.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Where do I compare plans side by side?',
    a: `Each product page includes a feature list and compare context. The ${faqIndex('setup FAQ')} collects setup, safety, and plan answers, or browse ${forumHub('CSGO player forum')} for mode-specific tips.`,
  },
  {
    id: 'who-esp',
    topic: 'plans',
    icon: 'faqWhoLite',
    q: 'Who should buy ESP / wallhack?',
    a: `Players who want Competitive and Premier awareness (boxes, skeletons, health, distance) and will not use aimbot. If you need smooth aim modules, choose ${aimbotTier('Aimbot modules')} or ${completeTier('Complete bundle')} instead.`,
    scopes: ['esp-wallhack'],
  },
  {
    id: 'who-aimbot',
    topic: 'plans',
    icon: 'faqWhoPro',
    q: 'Who should buy Aimbot?',
    a: `PC players who want smooth tracking, FOV limits, bone priority, and visible checks without paying for the full visual suite. Pair with ${espTier('ESP overlays')} or upgrade to ${completeTier('Complete upgrade')} when you want every module.`,
    scopes: ['aimbot'],
  },
  {
    id: 'who-complete',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'Who should buy Complete?',
    a: `Players who want aimbot, ESP wallhack, crosshair tools, and cloud configs on one license for Competitive, Premier, Deathmatch, and Wingman.`,
    scopes: ['complete'],
  },
  {
    id: 'javelin-update',
    topic: 'safety',
    icon: 'faqEacUpdate',
    q: 'What should I do after a CSGO or VAC Live update?',
    a: a(
      'Check csgocheats.net status and Discord #status. Wait until the banner shows online, then reload portal presets instead of reusing old smoothness or ESP range values from before the patch.',
    ),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a(
      'Open Discord after purchase with your order email, Windows version, and Steam as the launch path. Staff walk through loader setup and conservative presets live.',
    ),
  },
  {
    id: 'modes-ranked',
    topic: 'plans',
    icon: 'faqZoomRanked',
    q: 'Do plans work in Competitive, Premier, and Deathmatch?',
    a: `Yes. ${completeTier('Complete presets')}, ${aimbotTier('Aimbot presets')}, and ${espTier('ESP presets')} include mode presets in the portal. Tune ESP max distance and aimbot smoothness in Deathmatch before you queue Premier.`,
  },
  {
    id: 'radar-context',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'Do you sell a CSGO skin changer?',
    a: `Not as a standalone product right now. Current plans are ${completeTier('Complete')}, ${aimbotTier('Aimbot')}, and ${espTier('ESP / wallhack')}. Skin changer is not in the 29-module list, so we do not advertise it.`,
    scopes: ['complete'],
  },
  {
    id: 'aimbot-modules',
    topic: 'scripts',
    icon: 'faqAutoFarm',
    q: 'Which aimbot options ship on the Aimbot plan?',
    a: `Toggle and hold modes, head/neck/body/pelvis bones, smoothness, FOV, distance caps, bot and team filters, visible check, and FOV border drawing, all on ${aimbotTier('Aimbot feature list')} and ${completeTier('Complete aimbot stack')}.`,
    scopes: ['aimbot', 'complete'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private CSGO cheats?',
    a: a(
      'Private means per-user keys and maintained builds delivered through the portal, not public zip packs. Plans cover ESP wallhack, aimbot, or the full Complete suite for PC.',
    ),
  },
  {
    id: 'checkout-portal',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'Where do I download the loader?',
    a: a(
      'Only from your operator portal after checkout completes. Never from random Discord DMs or comment links. The portal also hosts HWID reset and config backup.',
    ),
  },
  {
    id: 'forum-guides',
    topic: 'products',
    icon: 'faqMore',
    q: 'Where are setup and mode guides?',
    a: `${forumHub('Forum guides')} hosts patch-day notes, OBS capture threads, and Competitive tuning tips. Product pages remain authoritative for checkout and module lists.`,
  },
  {
    id: 'upgrade-path',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Can I upgrade from Aimbot or ESP to Complete?',
    a: `Compare module lists on ${productsIndex('plan comparison hub')}, then move to ${completeTier('Complete checkout')} through checkout when you want every aimbot, visual, and misc tool on one license.`,
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `Landing pages show quick answers; the ${faqIndex('full FAQ list')} lists every topic. For long-form threads on smoothness, smokes, and stream capture, visit the ${forumHub('community discussions')}.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

/** Shared FAQ block copy + filters (home, /faq/, products). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'FAQ: CSGO cheats',
  subtitle: 'Filter by plans, ESP wallhack, aimbot, products, setup, and safety.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'Cheat FAQ',
  title: 'CSGO questions',
  subtitle: 'Straight answers on aimbot, ESP, VAC risk, and setup. See the full FAQ for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) =>
      !f.scopes &&
      ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['rank-plans', 'compare-plans', 'live-status', 'javelin-update'].includes(f.id),
  );

  const combined =
    kind === 'tier'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

export const compareRows = [
  {
    feature: 'Player & bot ESP (box, name, distance)',
    icon: 'comparePlayerEsp' as const,
    complete: true,
    aimbot: false,
    'esp-wallhack': true,
  },
  {
    feature: 'Skeleton & snapline overlays',
    icon: 'compareRadarHack' as const,
    complete: true,
    aimbot: false,
    'esp-wallhack': true,
  },
  {
    feature: 'Health bar & max distance',
    icon: 'compareWardLocator' as const,
    complete: true,
    aimbot: false,
    'esp-wallhack': true,
  },
  {
    feature: 'Stream-capture testing modes',
    icon: 'compareStreamproof' as const,
    complete: true,
    aimbot: true,
    'esp-wallhack': true,
  },
  {
    feature: 'Toggle aimbot & aim bind',
    icon: 'compareAutoCombo' as const,
    complete: true,
    aimbot: true,
    'esp-wallhack': false,
  },
  {
    feature: 'Smoothness, FOV & bone priority',
    icon: 'compareSmoothAim' as const,
    complete: true,
    aimbot: true,
    'esp-wallhack': false,
  },
  {
    feature: 'Visible check & team / bot filters',
    icon: 'compareTargetSelector' as const,
    complete: true,
    aimbot: true,
    'esp-wallhack': false,
  },
  {
    feature: 'FOV border & background drawing',
    icon: 'compareAbilityRadius' as const,
    complete: true,
    aimbot: true,
    'esp-wallhack': false,
  },
  {
    feature: 'Crosshair styling',
    icon: 'compareHotkeyMacros' as const,
    complete: true,
    aimbot: false,
    'esp-wallhack': false,
  },
  {
    feature: 'Config save, load & share',
    icon: 'compareCloudBackup' as const,
    complete: true,
    aimbot: false,
    'esp-wallhack': false,
  },
  {
    feature: 'Menu language & FPS limit',
    icon: 'comparePriorityPatch' as const,
    complete: true,
    aimbot: false,
    'esp-wallhack': false,
  },
  {
    feature: 'Full 29-module suite',
    icon: 'compareFullMapHack' as const,
    complete: true,
    aimbot: false,
    'esp-wallhack': false,
  },
];
