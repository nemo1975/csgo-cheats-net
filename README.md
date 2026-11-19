# CSGOCheats — csgocheats.net

CSGO (CSGO) cheats site. Astro static build with optional Cloudflare Worker.

## Local development

```bash
npm ci
npm run dev
```

If Astro shows **“Tsconfig not found astro/tsconfigs/strict”**, stop the dev server, delete `node_modules`, and run `npm ci` again.

## Build

```bash
npm ci
npm run build
npm run preview
```

Build output: `dist/`.

## Notes

- Domain: `https://csgocheats.net`
- Product hub: `/products/csgo-cheats/`
- Gameplay screenshots and OG images are placeholders until you add CSGO media.
- Merchant checkout currently keeps the existing HANIA tracker. Confirm the CSGO catalog path before launch.
