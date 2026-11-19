import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_URL, PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'CSGOCheats',
    domain: 'csgocheats.net',
    title: 'CSGO Cheats for PC | Aimbot, ESP & Wallhack',
    description:
      'CSGO cheats for PC. Compare aimbot, ESP, and wallhack plans, check Steam compatibility, and read setup notes before checkout.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: '/', label: 'Home', mobileLabel: 'Return to homepage' },
    { href: `${productBase}`, label: 'Cheats Plans', mobileLabel: 'View cheats plans' },
    { href: '/blog/', label: 'Guides', mobileLabel: 'Read setup guides' },
    { href: '/forum/', label: 'Discussions', mobileLabel: 'Join player discussions' },
    { href: '/reviews/', label: 'Ratings', mobileLabel: 'See player ratings' },
    { href: '/faq/', label: 'Q&A', mobileLabel: 'Open pre-purchase Q&A' },
  ],
  hero: {
    status: 'CSGO online',
    eyebrow: 'PC tools for CSGO',
    titleLine1: 'CSGO Cheats for PC',
    titleLine2: '',
    subtitle:
      'CSGO cheats for Competitive, Premier, Deathmatch, and Wingman. Tune aimbot smoothness, ESP boxes, and wallhack distance so you actually see the retake instead of guessing through a smoke.',
    ctaPrimary: 'Compare cheat plans',
    ctaDiscord: 'Join Discord',
    modesLabel: 'Modes',
    modes: ['Competitive', 'Premier', 'Deathmatch', 'Wingman'],
    metrics: [
      { label: 'Player feedback', strong: '127+ reviews' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Support', strong: '24/7' },
      { label: 'Capture-friendly', strong: 'Stream-safe' },
    ],
  },
  features: {
    eyebrow: 'Feature set',
    title: 'CSGO cheat modules',
    subtitle:
      'CSGO cheats grouped the way the menu actually works: aimbot, ESP wallhack, configs, and loader updates. No vehicle radar. This is a 5v5 tac shooter.',
    items: [
      {
        title: 'CSGO Aimbot',
        subtitle: 'Smooth tracking, per weapon',
        desc: 'CSGO aimbot with smoothness, FOV, and bone priority you can save separately for rifles, SMGs, pistols, and AWP.',
        bullets: [
          'Smoothness and FOV sliders',
          'Bone priority: head, neck, chest, or closest',
          'Separate profiles for AK, M4, AWP, and pistols',
          'Visible check so you are not locking through walls',
          'Presets for Competitive, Premier, and Deathmatch',
        ],
        tags: ['csgo aimbot', 'csgo cheats', 'smoothness'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'ESP / Wallhack',
        subtitle: 'Players through cover',
        desc: 'Player boxes, skeletons, health, distance, and team colors through smokes, molotovs, and common wallbang spots.',
        bullets: [
          'Player boxes, skeletons, HP and distance',
          'Team color filters',
          'Range cap so Mirage mid does not drown in tags',
        ],
        tags: ['csgo wallhack', 'csgo esp', 'player boxes'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Crosshair tools',
        subtitle: 'Style, size, thickness',
        desc: 'Built-in crosshair options so you are not fighting the default CSGO crosshair while you test FOV drawing.',
        bullets: [
          'Enable, style, size, and thickness',
          'Works alongside FOV border drawing',
          'Save it with the rest of your config',
        ],
        tags: ['csgo crosshair', 'csgo hacks', 'fov draw'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'Visible check',
        subtitle: 'Line of sight',
        desc: 'Aimbot only pulls when the target is actually visible. Useful on Dust II long and Inferno apartments where wallbang bait is easy to overdo.',
        bullets: ['Skip targets behind solid cover', 'Pairs with bone priority', 'Leave it on for Premier'],
        tags: ['visible check', 'csgo aimbot', 'premier'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Config system',
        subtitle: 'Cloud presets',
        desc: 'Save aimbot and ESP settings per mode. Sync configs across PCs from the portal.',
        bullets: [
          'Cloud backup for aimbot and ESP profiles',
          'Hot-swap presets between modes',
          'Export and import for teammates',
        ],
        tags: ['cloud config', 'presets', 'csgo cheats'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Stream-safe capture',
        subtitle: 'Clean feed on record',
        desc: 'Overlays stay on your display while OBS, Game Bar, and common capture tools see a normal game picture.',
        bullets: [
          'OBS and Game Bar friendly modes',
          'Toggle visibility per module',
          'Setup notes in the customer portal',
        ],
        tags: ['stream-safe', 'OBS', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Mode presets',
        subtitle: 'Premier to Deathmatch',
        desc: 'Defaults for Premier, Competitive, Deathmatch, and Wingman. Start conservative, then raise FOV after a few maps.',
        bullets: [
          'Tighter FOV for Competitive',
          'Wider ESP range for Deathmatch',
          'Conservative defaults you can raise later',
        ],
        tags: ['Premier', 'Competitive', 'Deathmatch'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Loader updates',
        subtitle: 'After game patches',
        desc: 'Discord #status and the site banner call out when CSGO or VAC Live builds change. Grab the matching portal build before you queue.',
        bullets: [
          'Portal downloads for current builds',
          'Discord #status for patch windows',
          'Config library stays versioned',
        ],
        tags: ['patch updates', 'loader', 'status'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-5',
      },
      {
        title: 'Support channel',
        subtitle: 'Setup help',
        desc: 'Discord staff walk through loader steps, weapon configs, and license moves when you are stuck mid-setup.',
        bullets: ['24/7 Discord coverage', 'Ticket templates on Support', 'FAQ for common errors'],
        tags: ['24/7 support', 'discord', 'setup'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-5',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'CSGO hacks with fast updates',
    subtitle:
      'Patch days break cheap loaders and leave you in ticket queues. We ship builds quickly, keep aimbot defaults readable for rifle rounds, and answer on Discord around the clock.',
    usLabel: 'CSGOCheats',
    otherLabel: 'Typical shop',
    rows: [
      {
        title: 'Loader updates after patches',
        desc: 'New builds usually go out within hours of a major CSGO or VAC Live update. Check Discord #status before you queue Premier.',
        descAlt:
          'After a CSGO or VAC Live patch, refreshed loader builds typically land within hours. Confirm #status on Discord before you queue.',
      },
      {
        title: 'Readable aimbot defaults',
        desc: 'Smoothness, FOV, and bone priority start conservative for Competitive. Tighten them when you are comfortable.',
        descAlt:
          'Out of the box, aimbot smoothness, FOV, and bone priority stay modest on Competitive so you can raise them once you are used to the menu.',
      },
      {
        title: 'Discord support',
        desc: 'Real people help with loader setup, weapon configs, and license moves. Coverage is 24/7.',
      },
      {
        title: 'External loader + stream-safe modes',
        desc: 'External loader with capture-friendly options so overlays stay off your stream feed.',
      },
      {
        title: 'Cloud configs',
        desc: 'Save Competitive, Deathmatch, and per-weapon settings and load them on another PC.',
      },
      {
        title: 'License moves',
        desc: 'Hardware resets and PC changes go through Discord or the portal instead of locking you to one machine forever.',
        descAlt:
          'Need a new rig or fresh Windows install? HWID resets and license transfers run through the portal or Discord instead of tying you to a single PC.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Usual time to ship a loader after a major CSGO update.',
      },
      {
        value: '24/7',
        title: 'Support',
        desc: 'Discord help for setup, configs, and checkout questions.',
      },
      {
        value: '127+',
        title: 'Reviews',
        desc: 'Written feedback from PC players using aimbot and ESP on csgocheats.net.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup',
    titleLead: 'Get running in',
    titleHighlight: 'three steps',
    intro:
      'Pick a plan, download the loader from your portal, load a mode preset, then launch CSGO on Steam. Discord help is there if something looks off.',
    ctaPrimary: 'Open product hub',
    ctaSecondary: 'CSGO setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Choose a plan and download',
        desc: 'Finish checkout, open the portal, and download the latest Windows loader.',
      },
      {
        step: 'Step 2',
        title: 'Load a preset',
        desc: 'Run the loader, pick Competitive or Deathmatch defaults, and tune aimbot and ESP to taste.',
      },
      {
        step: 'Step 3',
        title: 'Check status and play',
        desc: 'Confirm the status banner is online, launch CSGO on Steam, and use your saved config.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform',
    title: 'Windows PC',
    subtitle: 'Check the status banner after CSGO updates before you launch.',
    items: [
      'Windows 10 & 11',
      'Steam',
      'CSGO client',
      'Auto updater',
      'Config cloud sync',
      'Discord support',
      'License reset',
      'External loader',
    ],
  },
  cheats: {
    eyebrow: 'Plans',
    title: 'CSGO cheat tiers',
    subtitle:
      'Complete suite, focused aimbot, or ESP and wallhack. Pick the CSGO hacks package that matches how you play.',
    viewAll: 'Compare all plans',
    explore: 'Explore',
    items: [
      {
        badge: 'Most popular',
        tier: 'Full suite',
        name: 'Complete',
        title: 'Complete CSGO Cheats',
        desc: 'Full CSGO cheats bundle: aimbot, ESP wallhack, crosshair tools, cloud configs, and priority patch notes.',
        features: [
          'Aimbot + weapon profiles',
          'ESP / wallhack',
          'Crosshair tools',
          'Cloud configs',
          'Stream-safe modes',
        ],
        more: 24,
        href: `${productBase}complete/`,
        variant: 'popular',
      },
      {
        badge: 'Combat focus',
        tier: 'Aim',
        name: 'Aimbot',
        title: 'CSGO Aimbot',
        desc: 'CSGO aimbot with smooth tracking, FOV control, and per-weapon presets for rifle rounds and AWP angles.',
        features: ['Smooth aimbot', 'FOV and bone priority', 'AK / M4 / AWP profiles', 'Mode presets', 'Cloud backup'],
        more: 7,
        href: `${productBase}aimbot/`,
        variant: 'essential',
      },
      {
        badge: 'Awareness',
        tier: 'Vision',
        name: 'ESP & Wallhack',
        title: 'CSGO ESP & Wallhack',
        desc: 'Player ESP and wallhack so you read smokes, rotates, and close-range fights without guessing who is on the other side of a wall.',
        features: ['Player ESP / wallhack', 'Skeletons & boxes', 'Team filters', 'Stream-safe overlay'],
        more: 5,
        href: `${productBase}esp-wallhack/`,
        variant: 'essential',
      },
    ],
  },
  products: {
    eyebrow: 'Shop',
    title: 'CSGO cheat products',
    subtitle:
      'Module packages (Complete, Aimbot, ESP & Wallhack) plus weekly, monthly, and lifetime keys for CSGO on Steam.',
    viewAll: 'View all plans',
    get: 'View plan',
    explore: 'Explore',
    items: [
      {
        badge: 'Most popular',
        category: 'Full suite',
        title: 'Complete',
        subtitle: 'Aimbot, ESP, configs',
        desc: 'Everything in one CSGO cheats package: aimbot, wallhack, crosshair tools, and cloud configs.',
        features: ['Full aimbot suite', 'ESP / wallhack', 'Crosshair tools', 'Cloud configs'],
        more: 25,
        href: `${productBase}complete/`,
      },
      {
        badge: 'Combat',
        category: 'Aimbot',
        title: 'Aimbot',
        subtitle: 'Tracking and weapon profiles',
        desc: 'CSGO aimbot with smoothness, FOV, and weapon-specific presets for Competitive and Deathmatch.',
        features: ['Smooth aimbot', 'Per-weapon profiles', 'Mode presets', 'Cloud backup'],
        more: 8,
        href: `${productBase}aimbot/`,
      },
      {
        badge: 'Vision',
        category: 'ESP',
        title: 'ESP & Wallhack',
        subtitle: 'Player awareness',
        desc: 'Player wallhack and ESP for reading smokes and rotates in Competitive, Premier, Deathmatch, and Wingman.',
        features: ['Player ESP', 'Skeletons', 'Team filters', 'Max distance'],
        more: 5,
        href: `${productBase}esp-wallhack/`,
      },
    ],
  },
  forumHome: {
    eyebrow: 'Community',
    title: 'CSGO cheat forums',
    subtitle: 'Config shares, patch-day notes, and mode tips from players running aimbot and ESP on PC.',
    viewAll: 'Browse forums',
  },
  reviews: {
    totalLabel: '127+ reviews',
  },
  toolkit: {
    eyebrow: 'Menu layout',
    title: 'CSGO cheat menu, organized',
    subtitle: 'Modules are grouped so you can tune aimbot and ESP between rounds without hunting through tabs.',
    items: [
      {
        num: '01',
        label: 'Aimbot',
        title: 'Tracking that adapts per weapon',
        desc: 'Smoothness, FOV, sticky aim, and bone priority in one aimbot panel.',
      },
      {
        num: '02',
        label: 'ESP',
        title: 'Wallhack that stays readable',
        desc: 'Boxes, skeletons, distance, health, and team color filters.',
      },
      {
        num: '03',
        label: 'Crosshair',
        title: 'Style that matches your FOV draw',
        desc: 'Size, thickness, and style saved with the rest of the config.',
      },
      {
        num: '04',
        label: 'Filters',
        title: 'Teams, bots, and distance',
        desc: 'Skip teammates, cap ESP range, and keep Deathmatch readable.',
      },
      {
        num: '05',
        label: 'Weapons',
        title: 'Per-weapon aimbot profiles',
        desc: 'Save AK, M4, AWP, and pistol presets and swap with hotkeys.',
      },
      {
        num: '06',
        label: 'Profiles',
        title: 'Configs for every mode',
        desc: 'Competitive, Premier, Deathmatch, and Wingman presets with cloud backup.',
      },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 steps',
    titleBefore: 'From plan to',
    titleHighlight: 'in-game tools.',
    subtitle: 'Choose a tier, download the loader, enable modules, and save configs for your next CSGO session.',
    ctaLabel: 'View plans',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check status',
        desc: 'Read the live banner on csgocheats.net before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Pick a tier',
        desc: 'Choose Complete, Aimbot, or ESP & Wallhack based on the modules you need.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch and configure',
        desc: 'Download from the portal, enable modules, and test in Deathmatch first.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your config',
        desc: 'When settings feel right, save Competitive and Deathmatch presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Notes',
    title: 'Quick tips',
    items: [
      {
        num: '01',
        title: 'After patches',
        desc: 'Check Discord and the portal status before you queue Premier after a CSGO update.',
      },
      {
        num: '02',
        title: 'Start slow',
        desc: 'Use default aimbot smoothness and ESP range first, then raise them if you need more aggression.',
      },
      {
        num: '03',
        title: 'Discord help',
        desc: 'Stuck on the loader or configs? Ask in Discord and staff will walk you through it.',
      },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'CSGO cheats support: loader, checkout & help',
    subtitle: 'Loader, checkout, and account help for PC players.',
    channels: [
      {
        icon: 'users',
        title: 'Before you buy',
        desc: 'Ask about tiers and what each plan includes.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Email support',
        desc: 'Loader errors, license moves, and account issues.',
        linkLabel: 'support@csgocheats.net',
        href: 'mailto:support@csgocheats.net',
      },
      {
        icon: 'navFaq',
        title: 'FAQ',
        desc: 'Compatibility, risk, and setup answers.',
        linkLabel: 'View FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Discord',
        desc: 'Support online 24/7.',
        linkLabel: 'Contact page',
        href: '/support/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The email you used at checkout on csgocheats.net.' },
      { title: 'Platform', desc: 'Windows 10 or 11, Steam, and your CSGO build.' },
      { title: 'Error detail', desc: 'Screenshot or exact text from the loader or game client.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'CSGO cheats FAQ',
    subtitle: 'Compatibility, risk, plans, and setup. Straight answers before you checkout.',
    items: [
      {
        num: '01',
        q: 'Where do I check if CSGO cheats are online?',
        a: 'The live status banner is on csgocheats.net and in the Discord #status channel. Always check after a CSGO or VAC Live update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide, and config library via our secure checkout. Follow the guide before launching CSGO.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party CSGO cheats?',
        a: 'Yes. Any modification carries risk. VAC, VAC Live, and Overwatch-style reports can lead to account action. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'CSGO on Windows 10/11 64-bit through Steam only. Console and macOS are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes. Use the license reset in your portal or open a Discord ticket. Limits depend on your plan.',
      },
      {
        num: '06',
        q: 'Where are products listed?',
        a: 'Complete, Aimbot, and ESP & Wallhack plans live on our CSGO cheats product hub with feature lists and checkout when you are ready.',
      },
    ],
  },
  footer: {
    tagline: 'CSGO cheats for PC: aimbot, ESP, and wallhack.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: `${productBase}complete/`, label: 'Complete cheats', ariaLabel: 'Complete plan' },
      { href: `${productBase}`, label: 'All products', ariaLabel: 'Products' },
      { href: '/blog/', label: 'CSGO guides', ariaLabel: 'Blog' },
      { href: '/forum/', label: 'Community forums', ariaLabel: 'Forums' },
      { href: '/reviews/', label: 'Player reviews', ariaLabel: 'Reviews' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About CSGOCheats.net: CSGO plans, forums, checkout',
      description:
        'We publish tier comparisons, setup notes, and live status for PC players comparing aimbot, ESP, and wallhack modules before checkout.',
      sections: [
        {
          heading: 'CSGOCheats.net: who we are',
          paragraphs: [
            'CSGOCheats.net is an independent PC resource for CSGO aimbot, ESP, and wallhack plans. We explain what each plan includes, how the loader works, and where to check live status before you queue.',
            'Product and game names on this site are for identification only. We do not represent Valve, Counter-Strike, or Steam.',
          ],
        },
        {
          heading: 'What we offer',
          paragraphs: [
            'Complete, Aimbot, and ESP & Wallhack tiers cover different module sets on Windows 10 and 11. The forums and FAQ walk through configs, patch-day checks, and conservative presets for Competitive, Premier, Deathmatch, and Wingman.',
            'Pages refresh when the loader or anti-cheat landscape changes. Always read the homepage status banner and Discord #status before you launch a session.',
          ],
        },
        {
          heading: 'How we stay accurate',
          paragraphs: [
            'Module lists on each product page mirror what the operator portal ships today, not outdated forum screenshots. When a patch lands, we update compatibility notes and link to setup threads that match the current build.',
            'If something on the site disagrees with your portal download, treat the portal as source of truth and open a support ticket with your order email.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Use Discord or email for loader errors, compatibility, and checkout questions. Include your order email, Steam as the launch path, and Windows version so staff can reproduce the issue quickly.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy: cookies and contact data when you browse',
      description:
        'Your privacy matters when you browse product pages. This overview explains how csgocheats.net handles analytics, cookies, contact messages, and secure checkout.',
      sections: [
        {
          heading: 'Privacy: information we collect',
          paragraphs: [
            'We may collect basic analytics such as page views, device type, browser, and approximate region through Google Analytics when it is enabled. Checkout runs on external pages operated by the seller. We do not store payment card numbers on csgocheats.net.',
            'If you email support, we keep the address and message content until your ticket is resolved. Data-related requests should mention the email you used so we can locate prior threads.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics show which product pages people use so we can fix broken links and improve content. We do not sell personal data or share it with ad networks beyond standard analytics processors configured in our account settings.',
            'Support tickets are used only to answer loader, license, and checkout questions. Delete requests are handled manually. See the section below on retention.',
          ],
        },
        {
          heading: 'Cookies and similar tech',
          paragraphs: [
            'We use basic analytics cookies to understand traffic patterns. You can block cookies in your browser; core pages remain readable without them.',
            'Third-party checkout pages may set their own cookies when you leave this site to complete a purchase. Review the seller’s notices before paying.',
          ],
        },
        {
          heading: 'Your choices and retention',
          paragraphs: [
            'You can opt out of analytics by using private browsing modes or blocking Google Analytics. For questions about data we hold, contact us through the Support page with the subject line “Data request”.',
            'Analytics logs rotate on the provider’s schedule. Support emails are kept for a reasonable period after closure, then archived or deleted unless law requires longer retention.',
          ],
        },
        {
          heading: 'Policy updates',
          paragraphs: [
            'We may revise this policy when tooling or checkout partners change. Material updates will be reflected on this page; continued use of the site after changes means you accept the revised terms.',
            'Purchase and refund rules remain in Terms & Conditions. For billing disputes, use Support rather than this page.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms for CSGO Cheats | License & Refunds',
      description:
        'Terms for buying CSGO cheats on csgocheats.net: license use, delivery, refunds, and account risk.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: November 2026. By using csgocheats.net or buying a product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell CSGO cheat plans (Complete, Aimbot, ESP & Wallhack) through a portal and Windows loader for CSGO on Steam.',
            'Product pages list what is included when you buy. Features can change when CSGO or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. csgocheats.net does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching CSGO.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. Device limits depend on your plan and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, anti-cheat penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup (CSGO on Steam on Windows 10/11, current loader from the portal, and the live status banner showing online when you started), contact us through the Support page. Include your order email, Windows version, game build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for CSGO can conflict with game updates and anti-cheat systems including VAC and VAC Live. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue Premier or Competitive while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'CSGO Cheats Support | Loader & Checkout',
      description: 'CSGO cheats support for loader setup, license moves, and checkout help at csgocheats.net.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Shop cheat plans',
    browseCheatsMobile: 'Shop plans',
    homeAria: 'CSGOCheats home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join CSGOCheats on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
