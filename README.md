# 2D Motion Portfolio — how it works

## Files
- `index.html` — the gallery grid (all assignments)
- `video.html` — the detail page for a single assignment
- `styles.css` — all styling; every editable color/font/spacing value is at the top in `:root`
- `assignments.js` — all your content (titles, dates, scores, video paths, descriptions)
- `videos/` — put your `.mp4` files in here

## To add your videos
1. Drop each `.mp4` into the `videos/` folder.
2. Make sure the filename matches what's listed in `assignments.js` for that assignment
   (or edit the `video:` path in `assignments.js` to match your actual filenames).

## To edit content (titles, dates, scores, descriptions)
Open `assignments.js`. It's a single array — one object per assignment. Nothing in the
HTML needs to change; both pages read from this file. Reorder entries in the array to
reorder them on the site (this also updates the prev/next links on the detail page).

## To restyle
Open `styles.css` and edit the values inside `:root` at the top:
- `--bg`, `--bg-elevated`, `--text`, `--text-muted`, `--accent` — colors
- `--font-display`, `--font-body`, `--font-mono` — fonts (swap in any Google Font,
  just add the `<link>` for it in the `<head>` of both HTML files)
- `--max-width`, `--gap`, `--radius` — layout spacing

## How navigation works
Clicking a card goes to `video.html?id=07` (for example). The `id` in the URL is what
tells the detail page which assignment to show — this also makes each assignment's page
a real, shareable/bookmarkable link. As a bonus, the detail page also sets a cookie
remembering the last assignment you viewed, and the gallery quietly tags that card
"Last viewed."

## To preview locally
Just open `index.html` in a browser. If your browser blocks the video files from
loading directly off disk, run a tiny local server from this folder instead, e.g.:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.
