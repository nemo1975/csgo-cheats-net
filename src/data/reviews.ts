export const REVIEW_SUMMARY = {
  total: 127,
  average: 4.6,
};

export type ReviewProductFilter =
  | 'all'
  | 'complete'
  | 'aimbot'
  | 'esp'
  | 'setup'
  | 'license'
  | 'purchasing';

export interface SiteReview {
  author: string;
  when: string;
  /** Display label */
  product: string;
  body: string;
  rating: number;
  /** ISO-ish sort key YYYY-MM from when field */
  sortDate: string;
  filter: ReviewProductFilter;
}

export const REVIEW_FILTER_LABELS: Record<ReviewProductFilter, string> = {
  all: 'All products',
  complete: 'Complete suite',
  aimbot: 'Aimbot',
  esp: 'ESP & wallhack',
  setup: 'Setup & loader',
  license: 'License / HWID',
  purchasing: 'Checkout',
};

function review(
  author: string,
  when: string,
  product: string,
  body: string,
  filter: ReviewProductFilter,
  rating = 5,
): SiteReview {
  const [mon, year] = when.split(' ');
  const monthMap: Record<string, string> = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };
  const sortDate = `${year}-${monthMap[mon] ?? '06'}-01`;
  return { author, when, product, body, filter, rating, sortDate };
}

export const featuredReviews: SiteReview[] = [
  review(
    'MaceActual',
    'Feb 2026',
    'Complete suite',
    'ESP distance slider saved me from turning everything on at once. Aimbot smoothness at 6 feels fine on Mirage if you do not crank FOV.',
    'complete',
    5,
  ),
  review(
    'site_anchor_j',
    'Jan 2026',
    'ESP & wallhack',
    'Boxes through smokes are the reason I bought. Still had to drop skeleton ESP on my older GPU. Boxes alone are enough for Inferno.',
    'esp',
    5,
  ),
  review(
    'northbound42',
    'Mar 2026',
    'Aimbot module',
    'Head priority was too snappy out of the box. Chest + visible check felt more natural after a night of Deathmatch.',
    'aimbot',
    4,
  ),
  review(
    'Sera_PC',
    'Dec 2025',
    'Complete suite',
    'Loader was painless on Win11. Patch week was annoying. Menu would not open until I grabbed the updated build from the portal.',
    'complete',
    4,
  ),
  review(
    'duoqueue_fail',
    'Feb 2026',
    'Purchasing',
    'Key landed in two minutes. Support answered a dumb question about borderless vs fullscreen without talking down to me.',
    'purchasing',
    5,
  ),
  review(
    'quiet_scope',
    'Jan 2026',
    'Aimbot module',
    'Not magic. You still need to control AK spray. FOV circle helps me see when the assist is even looking at someone.',
    'aimbot',
    4,
  ),
  review(
    'patchday_grump',
    'Mar 2026',
    'Complete suite',
    'Frustrated after a CSGO update when status said offline for a day. Worked again after the refresh. Just wish the banner was clearer.',
    'complete',
    3,
  ),
  review(
    'OBS_guy',
    'Feb 2026',
    'ESP & wallhack',
    'Recorded a clip to check if overlays showed. They did not in my game capture scene. Worth doing before you stream.',
    'esp',
    5,
  ),
  review(
    'newhwidwho',
    'Jan 2026',
    'License / HWID',
    'Moved to a new PC, reset took an hour through the portal. Annoying but faster than arguing in random discords.',
    'license',
    4,
  ),
];

export const extendedReviews: SiteReview[] = [
  review(
    'ridge_runner',
    'Mar 2026',
    'Complete suite',
    'Paid for the month plan after reading the comparison post. Aimbot FOV at 90 was too much. Dialed to 55 and it stopped feeling robotic in clips.',
    'complete',
    5,
  ),
  review(
    'ctrl_alt_defeat',
    'Feb 2026',
    'ESP & wallhack',
    'Health bars overlap on tight sites like Ancient. Turning off names fixed it. Still worth it for smoke reads alone.',
    'esp',
    4,
  ),
  review(
    'late_shift_gamer',
    'Jan 2026',
    '1 Week key',
    'Bought a short trial key to test before committing. Loader worked first try on Steam. Renewed to monthly.',
    'purchasing',
    5,
  ),
  review(
    'salty_awper',
    'Dec 2025',
    'Aimbot module',
    'Visible check saved me from pre-firing corners I could not actually see. Lost a few fights anyway. Still on me, not the tool.',
    'aimbot',
    4,
  ),
  review(
    'kb_m_and_mouse',
    'Mar 2026',
    'Setup',
    'Defender flagged the download until I added the folder exclusion. Forum thread walked me through it step by step.',
    'setup',
    4,
  ),
  review(
    'zero_day_zed',
    'Feb 2026',
    'Complete suite',
    'Patch hit on a Friday, status flipped offline until Sunday. Annoying but expected. I would rather wait than run a broken build.',
    'complete',
    4,
  ),
];

export function getAllSiteReviews(): SiteReview[] {
  return [...featuredReviews, ...extendedReviews];
}
