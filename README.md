# yourdomain.com

Personal site. Hand-written HTML + CSS, one small vanilla JS file, no
build step, no framework, no dependencies. Hosted free on GitHub Pages.

## Why no build tools

This is a deliberate choice, not a missing step. At this size (a handful
of pages), a bundler/framework adds complexity without adding capability.
If the site later grows large enough that copy-pasting the header/nav
into every new page gets painful, the natural next step is a tiny static
site generator (e.g. [Eleventy](https://www.11ty.dev/)) — but that's a
"when it hurts" upgrade, not a day-one requirement.

## Folder structure

```
.
├── index.html                        # homepage — also the canonical page template
├── 404.html                          # GitHub Pages serves this for any bad URL
├── blog/
│   ├── index.html                    # lists every entry in posts.json
│   ├── posts.json                    # source of truth for all blog posts
│   ├── the-end-of-everything.html    # one static page per post
│   ├── on-christmas-lights-by-paul-baribeau.html
│   ├── four-books.html
│   └── short-story-lost-watch.html
├── music/
│   ├── index.html                    # lists every entry in albums.json
│   └── albums.json                   # source of truth for all albums
├── photography/
│   └── index.html                    # stub — still hardcoded HTML, see note below
├── books/
│   └── index.html                    # stub — still hardcoded HTML, see note below
├── assets/
│   ├── css/
│   │   └── style.css                 # the ONLY stylesheet — sectioned & commented
│   ├── js/
│   │   ├── main.js                   # small site-wide behavior (last-updated, nav highlight)
│   │   └── content.js                # fetches posts.json / albums.json and renders them
│   └── img/                          # images + favicon.ico go here
├── CNAME                             # tells GitHub Pages your custom domain
├── .gitignore
└── README.md                          # you are here
```

Each top-level section gets its own folder, so its URL is clean
(`yourdomain.com/blog/` instead of `yourdomain.com/blog.html`).

### Why one CSS file and one JS file (well, two JS files now)

At this scale, splitting CSS/JS across many small files just adds tags
to keep in sync across every page for no real benefit. `style.css` stays
one sectioned file. JS split into two only because they do genuinely
different jobs: `main.js` is tiny site-wide behavior every page uses;
`content.js` is the JSON-fetching/rendering logic that only blog, music,
and the homepage need. Both stay small enough to read start to finish.

## Blog and music are JSON-driven — photography and books aren't yet

Blog and music entries change more often than the rest of the site, and
without a shared data source, adding one meant hand-editing HTML in two
places: the section's own list, and the homepage's "Latest" tile. That's
exactly the kind of duplication that's worth automating even in an
otherwise no-build-tool site.

So: `blog/posts.json` and `music/albums.json` are now the single source
of truth for those two sections. `assets/js/content.js` fetches them and
renders:

1. The full list on that section's own index page
   (`#blog-list` / `#music-list` containers).
2. Just the newest entry (array index `0`) into that section's homepage
   tile. If the JSON file is empty, `content.js` removes that tile
   entirely rather than showing a placeholder.

Photography and books are small enough right now that they're still
hardcoded `.entry` blocks in their own `index.html`, same as blog/music
used to be. Worth converting to the same JSON pattern once either of
them has enough entries that keeping the homepage tile in sync by hand
becomes annoying — same signal as everything else in this README: change
things when the duplication starts to hurt, not before.

### Adding a blog post

1. Write the post as its own static HTML page, e.g. `blog/my-post.html`,
   copying the structure of an existing post page (same
   `.site-header`/`.site-footer`, your writing inside `<main>`).
2. Add an entry to the **top** of `blog/posts.json` (newest first):
   ```json
   {
     "slug": "my-post",
     "title": "My Post Title",
     "date": "2026-08-01",
     "read_time": "4 min read",
     "blurb": "One or two sentences shown in the list."
   }
   ```
3. That's it — `blog/index.html` and the homepage's Blog tile both pick
   this up automatically on next page load. No other file to touch.

### Adding an album

Same pattern, in `music/albums.json` (newest first). Only full albums —
no individual tracks, no playlists, by design:

```json
{
  "title": "Album Title",
  "artist": "Artist Name",
  "date_added": "2026-08-01",
  "note": "optional one-line note, or an empty string"
}
```

## Mobile-friendliness

The whole layout is a single centered column (`max-width: 700px`) that
already fits narrow screens without changes. Explicit mobile handling:

- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  on every page
- Nav and footer use `flex-wrap: wrap` so they wrap instead of overflowing
- `.latest-grid` tiles reflow via CSS grid `auto-fit` — 4 columns on
  desktop down to 1–2 on a phone, no horizontal scrolling
- A `@media (max-width: 480px)` block tightens padding/font size on phones

Test by resizing your browser window or using your browser devtools'
device toolbar.

## Local preview

Because `content.js` uses `fetch()` to load the JSON files, this site
must be viewed over an actual HTTP connection — **not** by
double-clicking `index.html`. Browsers block both stylesheet loading
(`/assets/...` absolute paths resolve to your filesystem root, not the
site root) and `fetch()` of local files when a page is opened via
`file://`. From the project folder:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000`. This is also much closer to how the
real site behaves once deployed.

## Adding a new page

1. Copy an existing page as a starting point — the `<head>`,
   `.site-header`, and `.site-footer` blocks should be **identical**
   across every page. Only `<title>`, the meta description, and the
   contents of `<main>` change.
2. If it's a new top-level section, add it to the `.site-nav` list in
   **every** existing page (still manual — see the note on JSON above
   for when that stops being fine).

## Deploying (GitHub Pages + your existing domain)

1. Push this repo to GitHub (public repo, any name).
2. In the repo: **Settings → Pages → Source**, select the `main` branch,
   root folder. Save.
3. Edit `CNAME` in this repo to contain your actual domain
   (`yourdomain.com`, no `http://`, no trailing slash) — GitHub reads
   this file to know which custom domain to serve.
4. At your domain registrar, set DNS:
   - For a root domain (`yourdomain.com`): four `A` records pointing at
     GitHub's IPs — `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`.
   - For a `www` subdomain instead: one `CNAME` record pointing at
     `yourusername.github.io`.
   - (Optional, recommended) do both, and add a `www` → root redirect,
     or vice versa, so the site works either way people type it.
5. Back in **Settings → Pages**, enter your custom domain and check
   "Enforce HTTPS" once DNS has propagated (can take a few minutes to a
   few hours).

Full reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Before you push

- [ ] Replace `Your Name`, the tagline, and the bio text in `index.html`
- [ ] Replace `you@example.com` and the GitHub link in `index.html`
- [ ] Replace `yourdomain.com` in `CNAME` with your real domain
- [ ] Swap the filler content in `photography/` and `books/` for real
      content
- [ ] Double-check `blog/posts.json` against your original posts —
      migrated content, may want your own re-read
- [ ] Add a real `favicon.ico` to `assets/img/` (or remove the `<link
    rel="icon">` tags if you don't want one yet)
