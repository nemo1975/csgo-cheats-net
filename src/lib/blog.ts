import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;

/** Newest first, then prompt list order when dates match. */
export const BLOG_LIST_ORDER = [
  'best-csgo-cheats',
  'csgo-aimbot-settings',
  'csgo-cheat-pricing',
  'csgo-wallhack-explained',
  'csgo-cheat-setup-guide',
  'csgo-ban-risk',
  'how-to-choose-a-csgo-cheat-provider',
  'csgo-config-presets',
  'csgo-hwid-reset',
  'csgo-cheat-troubleshooting',
  'csgo-deathmatch-and-casual',
  'csgo-free-vs-paid-cheats',
] as const;

export const BLOG_PAGE_SIZE = 12;

export async function getAllBlogPosts(): Promise<BlogEntry[]> {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => {
    const dateDiff = b.data.date.getTime() - a.data.date.getTime();
    if (dateDiff !== 0) return dateDiff;
    const ai = BLOG_LIST_ORDER.indexOf(a.id as (typeof BLOG_LIST_ORDER)[number]);
    const bi = BLOG_LIST_ORDER.indexOf(b.id as (typeof BLOG_LIST_ORDER)[number]);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });
}

export function blogPageCount(total: number): number {
  return Math.max(1, Math.ceil(total / BLOG_PAGE_SIZE));
}

export function paginateBlogPosts(posts: BlogEntry[], page: number): BlogEntry[] {
  const start = (page - 1) * BLOG_PAGE_SIZE;
  return posts.slice(start, start + BLOG_PAGE_SIZE);
}

const BLOG_READ_LABELS: Record<string, string> = {
  'best-csgo-cheats': 'Read buyer guide',
  'csgo-aimbot-settings': 'Read settings guide',
  'csgo-cheat-pricing': 'Read pricing guide',
  'csgo-wallhack-explained': 'Read wallhack guide',
  'csgo-cheat-setup-guide': 'Read setup guide',
  'csgo-ban-risk': 'Read ban risk guide',
  'how-to-choose-a-csgo-cheat-provider': 'Read provider checklist',
  'csgo-config-presets': 'Read preset guide',
  'csgo-hwid-reset': 'Read HWID guide',
  'csgo-cheat-troubleshooting': 'Read troubleshooting FAQ',
  'csgo-deathmatch-and-casual': 'Read Deathmatch guide',
  'csgo-free-vs-paid-cheats': 'Read free vs paid guide',
};

/** Unique card CTA per post (not "read more"). */
export function blogReadGuideLabel(slug: string, title: string): string {
  return BLOG_READ_LABELS[slug] ?? `Read ${title.split(':')[0]?.trim() ?? 'guide'}`;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogEntry | undefined> {
  const posts = await getAllBlogPosts();
  return posts.find((post) => post.id === slug);
}

export function blogPostPath(slug: string): string {
  return `/blog/${slug}/`;
}

export function formatBlogDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function readingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(4, Math.round(words / 220));
}

export function getRelatedBlogPosts(post: BlogEntry, all: BlogEntry[], limit = 3): BlogEntry[] {
  const others = all.filter((p) => p.id !== post.id);
  const sameCategory = others.filter((p) => p.data.category === post.data.category);
  const pool = sameCategory.length >= limit ? sameCategory : others;
  return pool.slice(0, limit);
}
