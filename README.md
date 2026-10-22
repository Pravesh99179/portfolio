# Pravesh Agrawal, portfolio

Vite + React + TypeScript. Static, about 58 kB of gzipped JS, self-hosted Geist font, light and dark from the system setting.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Edit content

Pages: `/` home, `/work`, `/work/<slug>`, `/experience`, `/about`, `/contact` (in `src/pages/`).

- `src/content/site.ts`: intro facts, principles, bio, specialties, roles with highlights, education.
- `src/content/caseStudies.ts`: case studies. An entry with `blocks` gets its own page at `/work/<slug>`
  and appears under Selected work. An entry without `blocks` shows as a row under More work.
  Block types: `text`, `list`, `sequence`, `image`. Put images in `public/work/<slug>/` (WebP preferred).

## Photo and covers

- Portrait: put a photo at `public/me.jpg` and set `photo: "/me.jpg"` in `src/content/site.ts`. It appears in the right column.
- Work card covers: add `cover: "/work/<slug>/cover.webp"` to a case study. Without one, the card shows a typographic cover.

## Deploy on Vercel

Import the repo in Vercel. It detects Vite (build `npm run build`, output `dist`).
`vercel.json` routes deep links like `/work/aftershoot-galleries` to the app and caches hashed assets.
