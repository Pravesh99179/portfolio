# Media

Static files in this folder are served as-is from the site root, e.g.
`public/media/videos/demo.mp4` → `/media/videos/demo.mp4`.

- `videos/` — `.mp4` / `.webm` (keep files small; compress before committing)
- `images/` — screenshots, thumbnails, posters
- `docs/` — PDFs such as a resume

Usage in code:

```tsx
<video src="/media/videos/demo.mp4" poster="/media/images/demo-poster.jpg" controls muted playsInline />
```
