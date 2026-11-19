import { DISCORD_URL, PRODUCT_BASE, SUPPORT_EMAIL } from '../config/site';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { REVIEW_SUMMARY } from '../data/reviews';
import type { ExpansionCta, ExpansionFaq, ExpansionSection, ExpansionTable } from './pageExpansions.types';

const checkout = PRIMARY_CHECKOUT_PATH;

export const supportExpansion = {
  sections: [
    {
      heading: 'Support: who this page is for',
      paragraphs: [
        'This support hub is for PC players who already bought, or are about to buy, a CSGO cheat plan and need help with the loader, license moves, or checkout. We answer tickets through email and Discord. Include details up front so staff can reproduce the issue without a long back-and-forth.',
        'If you have not purchased yet, read the product comparison on our plans hub, the pre-purchase FAQ, and live status on the homepage before you pay. Support cannot override anti-cheat downtime shown on the status banner.',
      ],
    },
    {
      heading: 'What support can help with',
      subheading: 'Loader and license issues',
      paragraphs: [
        'Common tickets cover loader startup errors, missing keys after payment, HWID resets when you replace a PC, and config imports from the operator portal. Attach your order email, Windows version (10 or 11), and Steam as the launch path.',
        'For patch-day problems, wait until the status banner shows online again before reinstalling. Support will link you to the current portal build. Never download loaders from random Discord DMs.',
      ],
    },
    {
      heading: 'Checkout and billing questions',
      paragraphs: [
        'Checkout runs on the seller’s secure page linked from our site. We do not store card numbers on csgocheats.net. If payment succeeded but your portal is empty, open a ticket with the processor receipt ID and the email used at checkout.',
        'Refund rules are listed in our Terms & Conditions. Support may offer fixes or replacements when the product fails on a supported setup while the status banner showed online. Change-of-mind refunds are not offered.',
      ],
    },
    {
      heading: 'Response times and channels',
      paragraphs: [
        `Email ${SUPPORT_EMAIL} for account-specific issues that should stay on record. Discord is best for live loader walkthroughs during setup. Join via the invite linked from the homepage and open a ticket in the support channel rather than posting keys in public chat.`,
        'Include screenshots of loader errors (redact personal emails if you post publicly in the forum). Support is advertised as 24/7, but complex patch-day queues can add delay. Check #status before you escalate.',
      ],
    },
  ] satisfies ExpansionSection[],
  table: {
    caption: 'Support checklist: include in every ticket',
    headers: ['Item', 'Why it matters'],
    rows: [
      ['Order email', 'Matches your portal login and license key'],
      ['Plan tier (Complete, Aimbot, ESP)', 'Determines which modules you should see'],
      ['Windows version + build', 'Loader builds differ between 10 and 11'],
      ['Steam', 'Launch path for CSGO'],
      ['Exact error text or screenshot', 'Avoids guesswork on generic “menu not opening” reports'],
      ['Last time status banner showed online', 'Shows whether you ignored an offline warning'],
    ],
  } satisfies ExpansionTable,
  faqs: [
    {
      id: 'support-response-time',
      q: 'How fast does support usually reply?',
      a: 'Simple loader questions often get a first reply within a few hours on Discord; email may take longer on patch days. Include the checklist items so your ticket is not bounced for missing info.',
    },
    {
      id: 'support-hwid',
      q: 'How do I request an HWID reset?',
      a: 'Start the reset from your operator portal when the option is available, or email support with your order email and reason for the hardware change. Limits depend on your plan and recent resets.',
    },
    {
      id: 'support-patch',
      q: 'The loader stopped working after a game update. What now?',
      a: 'Do not reuse old configs. Check the homepage status banner and Discord #status. Wait for an online signal, download the portal build support links you to, and test in Deathmatch first.',
    },
    {
      id: 'support-payment',
      q: 'Which payment methods work at checkout?',
      a: 'Card, PayPal, Apple Pay, Google Pay, Cash App, Amazon Pay, and crypto are listed on the seller checkout page linked from our plans hub. Pick your duration (weekly, monthly, or lifetime) on that page before you pay.',
    },
    {
      id: 'support-refunds',
      q: 'Can support issue a refund?',
      a: 'Support follows the Terms & Conditions: sales are final for change-of-mind, bans, or ignoring setup guides. They may help with fixes or portal access when the product fails on a supported setup while status showed online.',
    },
    {
      id: 'support-discord-email',
      q: 'Should I use Discord or email?',
      a: 'Use Discord for interactive setup help; use email when you need a written record for billing or HWID issues. Never share license keys in public forum threads.',
    },
    {
      id: 'support-platform',
      q: 'Does support cover console or macOS?',
      a: 'No. Plans are for CSGO on Windows 10/11 via Steam only. Console and macOS are unsupported.',
    },
    {
      id: 'support-sharing',
      q: 'Can I share my loader with a friend?',
      a: 'No. Licenses are personal. Sharing keys or portal logins violates the Terms and can revoke access. Each player needs their own plan from checkout.',
    },
  ] satisfies ExpansionFaq[],
  trustHeading: 'Proof and community context',
  trustItems: [
    `${REVIEW_SUMMARY.total}+ written reviews averaging ${REVIEW_SUMMARY.average.toFixed(1)} stars are published on our player ratings hub. Read them before you open a ticket about expectations.`,
    `Discord invite: ${DISCORD_URL}`,
    'Forum threads linked from product pages show how other players solved similar loader errors. Search there before duplicating a common question.',
  ],
  cta: {
    heading: 'Still stuck?',
    body: 'Gather the checklist items above, then reach out through Discord or email. For plan comparisons or module lists, visit the product hub or full FAQ first.',
    primaryLabel: 'Email support',
    primaryHref: `mailto:${SUPPORT_EMAIL}`,
    secondaryLabel: 'Browse setup FAQ',
    secondaryHref: '/faq/',
  } satisfies ExpansionCta,
};

export const aboutExpansion = {
  sections: [
    {
      heading: 'CSGO: what this site covers',
      paragraphs: [
        'CSGOCheats.net is an editorial and commerce front for PC players comparing aimbot, ESP, wallhack, and full-suite plans before checkout. We publish module breakdowns, setup notes, forum links, and honest downtime reminders, not official game support.',
        'Players landing here usually want a clear map from marketing claims to what the operator portal actually ships: which modules belong to Complete versus Aimbot-only, how keys deliver, and where to read patch-day status.',
      ],
    },
    {
      heading: 'Forums, checkout paths, and player resources',
      paragraphs: [
        `The forum hosts setup threads, OBS capture notes, and Competitive tuning discussions from other buyers. Checkout paths start on our plans hub and finish on the seller page linked through ${checkout}. Plan durations and modules match the tiers described on product detail pages.`,
        'Use the blog for long-form comparisons (pricing, ban risk, HWID resets) and the FAQ for quick filters by topic. Reviews summarize buyer feedback without replacing your own due diligence on status and compatibility.',
      ],
    },
    {
      heading: 'How plans differ on this site',
      subheading: 'Complete, Aimbot, and ESP / wallhack',
      paragraphs: [
        'Complete bundles all 29 modules (12 aimbot, 9 visual, 8 misc). Aimbot-only ships tracking modules without the full ESP suite. ESP / wallhack focuses on overlays: boxes, skeletons, snaplines, health, without aim automation.',
        'Each product page lists the modules, checkout steps, and system requirements (Windows 10/11, Steam). Upgrade paths are explained on tier pages when you outgrow a smaller plan.',
      ],
    },
    {
      heading: 'Updates, accuracy, and independence',
      paragraphs: [
        'When CSGO or anti-cheat systems change, we update product copy, blog posts, and status reminders. Module lists should match the portal; if they diverge, trust the portal download and ask support.',
        'We are not affiliated with Valve. Game names are used for identification. Using third-party tools violates game rules and carries ban risk. Read our ban-risk article before purchase.',
      ],
    },
  ] satisfies ExpansionSection[],
  table: {
    caption: 'CSGOCheats.net site map for new visitors',
    headers: ['Resource', 'Best for'],
    rows: [
      ['Plans hub', 'Comparing Complete, Aimbot, and ESP tiers'],
      ['Product detail pages', 'Module lists, screenshots, and how to get a key'],
      ['FAQ index', 'Filtered answers on setup, safety, and plans'],
      ['Forum', 'Player threads on configs and patch day'],
      ['Blog', 'Long guides on pricing, ESP layouts, and HWID resets'],
      ['Support', 'Loader errors, billing, and HWID resets'],
    ],
  } satisfies ExpansionTable,
  faqs: [
    {
      id: 'about-what-is',
      q: 'Is this the official CSGO website?',
      a: 'No. This is an independent resource and storefront front-end for third-party PC tools. Valve does not operate or endorse this site.',
    },
    {
      id: 'about-buy',
      q: 'Where do I actually purchase a plan?',
      a: `Choose a tier on the plans hub, then checkout through the seller link (${checkout}). Your key and loader unlock in the operator portal after payment.`,
    },
    {
      id: 'about-forum-faq',
      q: 'Should I read the forum or the FAQ first?',
      a: 'Start with the FAQ for structured answers. Use the forum for anecdotal tuning tips and patch-day chatter linked from product pages.',
    },
    {
      id: 'about-updates',
      q: 'How often is content updated?',
      a: 'Product pages and blog posts are revised when modules or loader requirements change. Always check the live status banner before you play after a patch.',
    },
    {
      id: 'about-platforms',
      q: 'Which platforms do you cover?',
      a: 'Windows 10 and 11 for CSGO through Steam. Console and macOS are out of scope.',
    },
    {
      id: 'about-risk',
      q: 'Does buying here guarantee I will not be banned?',
      a: 'No. Third-party tools carry risk. We document status and setup honestly, but you accept ban risk when you use cheats.',
    },
    {
      id: 'about-modules',
      q: 'How many modules are in Complete?',
      a: 'Complete includes 29 modules: 12 aimbot, 9 visual, and 8 misc tools. Smaller tiers subset those lists. Compare tables on each product page.',
    },
    {
      id: 'about-help',
      q: 'Where do I get human help?',
      a: `Visit the Support page for email (${SUPPORT_EMAIL}) and Discord linked from the homepage. Include order email and platform details in tickets.`,
    },
  ] satisfies ExpansionFaq[],
  trustHeading: 'Social proof we can show today',
  trustItems: [
    `Our reviews hub lists ${REVIEW_SUMMARY.total}+ entries with an average of ${REVIEW_SUMMARY.average.toFixed(1)} stars. Filter by product or setup topic before you buy.`,
    'Live status on the homepage and Discord #status is the authority for online/offline. Do not queue if either shows downtime.',
    'Module counts on product pages should match the operator portal. If they do not, trust the portal.',
  ],
  cta: {
    heading: 'Ready to compare plans?',
    body: 'Move from this overview to the plans hub, pick a tier, and read the buy steps before checkout. Check status on the homepage first.',
    primaryLabel: 'Compare cheat plans',
    primaryHref: PRODUCT_BASE,
    secondaryLabel: 'Read player reviews',
    secondaryHref: '/reviews/',
  } satisfies ExpansionCta,
};

export const productHubExpansion = {
  sections: [
    {
      heading: 'Cheats hub intro: pick the right CSGO tier',
      paragraphs: [
        'This hub is for PC players who want CSGO cheats with a clear module list before checkout. You will compare Complete (all 29 modules), Aimbot-only (12 tracking modules), and ESP / wallhack (9 visual modules), then choose a key duration that matches how often you play.',
        'Every tier includes portal delivery, free updates during your license window, and Discord-assisted setup as advertised on product detail pages. Re-check the homepage status banner before each session, especially after VAC Live or game patches.',
      ],
    },
    {
      heading: 'What each plan includes',
      subheading: 'Modules and focus',
      paragraphs: [
        'Complete adds aimbot smoothness, FOV, bone selection, team and bot filters, visible checks, player and bot ESP, skeletons, snaplines, health bars, crosshair tools, cloud configs, menu binds, and FPS limiting in one license.',
        'Aimbot strips visuals but keeps tracking controls for players who already run a minimal HUD. ESP / wallhack keeps awareness overlays without moving your crosshair, useful for smoke reads and rotates.',
      ],
    },
    {
      heading: 'Checkout and delivery',
      paragraphs: [
        'Standard tiers offer weekly, monthly, and lifetime access windows on the merchant checkout page linked from each Buy button. Keys appear in the operator portal immediately after payment.',
        'Payment methods listed on the seller checkout include card, PayPal, mobile wallets, and crypto. Confirm on the live checkout page before you pay. HWID resets are handled through the portal or support when you change PCs.',
      ],
    },
    {
      heading: 'Setup path after purchase',
      paragraphs: [
        'Acquisition steps on each product page follow the same rhythm: verify status, pick a plan, pay, download the portal loader, test configs in Deathmatch, then save Competitive presets. Support and forum threads linked from detail pages expand each step.',
        'System requirements are Windows 10 or 11 64-bit, Steam, and hardware that meets CSGO itself. External loader architecture means files are not dropped into game directories. Risk remains, but setup stays isolated.',
      ],
    },
  ] satisfies ExpansionSection[],
  table: {
    caption: 'Plan comparison: Complete vs Aimbot vs ESP / wallhack',
    headers: ['', 'Complete', 'Aimbot', 'ESP / wallhack'],
    rows: [
      ['Module count', '29 (12 + 9 + 8 misc)', '12 aimbot modules', '9 visual modules'],
      ['Best for', 'Full-suite players', 'Tracking without full ESP', 'Map awareness without aim automation'],
      ['Typical modes', 'Competitive, Premier, Deathmatch', 'Rifle and AWP fights', 'Smoke reads and positioning'],
      ['Upgrade path', '—', 'Step up via checkout to Complete', 'Step up via checkout to Complete'],
      ['Weekly / monthly / lifetime', 'Weekly, monthly, or lifetime', 'Same plan options', 'Same plan options'],
    ],
  } satisfies ExpansionTable,
  faqs: [
    {
      id: 'hub-beginner',
      q: 'Which plan should a first-time buyer choose?',
      a: 'If you want both tracking and visuals, start with Complete. If you only need ESP callouts, pick ESP / wallhack. If you already see enemies and only need aim help, pick Aimbot.',
    },
    {
      id: 'hub-updates',
      q: 'Are updates included?',
      a: 'Yes. Free updates during your active key are included. Still check status after CSGO patches before you launch.',
    },
    {
      id: 'hub-requirements',
      q: 'What PC setup is required?',
      a: 'Windows 10 or 11, CSGO through Steam, and a portal account after checkout. See each product page for the full requirement list.',
    },
    {
      id: 'hub-payment',
      q: 'How does checkout work from this hub?',
      a: `Select a tier card, click Buy, and finish on the seller checkout page. Return to the portal for the loader, not third-party download links.`,
    },
    {
      id: 'hub-ban-risk',
      q: 'What ban risk should I expect?',
      a: 'Any third-party tool can trigger anti-cheat action. Read our ban-risk blog post and never play Premier while status shows offline or testing.',
    },
    {
      id: 'hub-hwid',
      q: 'Can I move my key to a new PC?',
      a: 'Use the HWID reset flow in the portal or contact support with your order email. Frequency limits depend on your plan.',
    },
    {
      id: 'hub-stream',
      q: 'Will overlays show on stream?',
      a: 'Stream-capture modes are discussed in forum threads linked from ESP product pages. Test OBS or Discord capture locally before going live.',
    },
    {
      id: 'hub-support',
      q: 'Where do I get help after buying?',
      a: `Open the Support page for ${SUPPORT_EMAIL} and Discord, or search forum threads linked from your product detail page.`,
    },
  ] satisfies ExpansionFaq[],
  trustHeading: 'Before you buy',
  trustItems: [
    `${REVIEW_SUMMARY.total}+ reviews (${REVIEW_SUMMARY.average.toFixed(1)}★ average) live on our ratings hub. Filter by Complete, Aimbot, or ESP topics.`,
    'Live status on the homepage and Discord #status is the authority for online/offline. Do not queue if either shows downtime.',
    'Skin changer is not in the current module list. Do not expect it on these three plans.',
  ],
  cta: {
    heading: 'Choose a tier and checkout',
    body: 'Open a product detail page for the full module list, then return here to pick your key duration when you are ready to pay.',
    primaryLabel: 'View Complete suite',
    primaryHref: `${PRODUCT_BASE}complete/`,
    secondaryLabel: 'Read pricing guide',
    secondaryHref: '/blog/csgo-cheat-pricing/',
  } satisfies ExpansionCta,
};

export function expansionFaqsToSchema(faqs: ExpansionFaq[]) {
  return faqs.map((item) => ({ q: item.q, a: item.a }));
}
