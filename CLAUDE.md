# L.D Construction: site notes for Claude

Static one-page site for L.D Construction, built by getPresented. Hosted on GitHub Pages. This repo is **public**: never put private data (WhatsApp number on file, billing, plan, personal details) in it. Those live in the getPresented private client list.

## The business
- **Name:** L.D Construction (written "L.D", with the dot)
- **Line:** All joinery and construction work
- **Services (from their own logo sheet):** renovations, conversions, bathrooms, kitchens, windows, doors, glazing, roofing, PVC, gutters, gardens, excavation
- **Phone (public):** 07311 822986 (`tel:+447311822986`). WhatsApp link uses the same number: confirm it is a WhatsApp number.
- **Domain:** ldconstruction.trade
- **Not yet known:** area covered, email address, owner's name, insurance/accreditations. Do not invent any of these. Leave them out until supplied.

## Files
```
index.html            Whole site: CSS and JS are inline on purpose (self-contained page)
404.html              Minimal not-found page
assets/images/<project>/<n>.webp       Full photos (739-1000px wide, 3:4)
assets/images/<project>/<n>-sm.webp    480px thumbnails used in the grid
assets/fonts/         Self-hosted Bodoni Moda + Montserrat (subset woff2). No Google Fonts calls.
assets/logo-mark.png  The client's LD monogram, black with transparent background (recoloured in CSS with a mask)
assets/og-image.jpg   1200x630 share image
robots.txt, sitemap.xml, _config.yml, EDITS.md, CLAUDE.md, README.md
```
`_config.yml` stops CLAUDE.md, README.md, EDITS.md and docs/ being published.

## Design (keep it consistent)
- **Idea:** let the work do the talking. Light, plain page; real site photos; one memorable moment (the spirit level in the hero that settles on load).
- **Palette (from the work itself):** chalk `#F2F3F0` (plasterboard) · ink `#000` (the logo) · slate `#2F3438` (roof slate, body text, contact band) · mute `#5A6267` · line `#CBD0CC` · level blue `#1B8FCC` (the blue spirit level in the photos; only for the level graphic, focus rings and small link accents; use `#0E6AA0` for blue text).
- **Type:** Bodoni Moda (headings, echoes the monogram) with `font-variation-settings:"opsz" 30` so hairlines stay visible at large sizes. Montserrat for everything else (it is the typeface on their logo sheet).
- **No** all-caps labels, eyebrow text, stock icons, gradients (except the level graphic), testimonial cards or scroll animations.
- Sentence case, plain British English, no hype.

## Copy rules
- **No testimonials or star ratings** until real Google reviews exist. Never write or fake one.
- **No promises** the client hasn't agreed (response times, "free quotes", guarantees, years in business, "fully insured") until confirmed in writing by the client.
- Photo captions and the short project descriptions were **inferred from the photos**. Anything not obviously visible should be checked with the client. Never claim a location, customer type or date that isn't supplied.
- Six services on the list have no photos yet (bathrooms, windows, doors, glazing, PVC, gutters). They appear in the list without a "See photos" link; add one when photos arrive.

## How to change things
**Edit text, phone, links:** edit `index.html` directly. The phone number appears in several places (header, hero, contact, call bar, JSON-LD, `404.html`, OG image). Search for `7311` and update every one.

**Add photos to an existing project:** (1) add `n.webp` (max 1000px wide, 3:4, quality ~80) and `n-sm.webp` (480px wide) to `assets/images/<project>/`; (2) add an entry to the project's `photos` array in the `DATA` object in the `<script>` at the bottom of `index.html`; order in the array is the lightbox order; (3) update the "N photos" / "See all N photos" text.

**Add a new project:** copy an existing `<article class="job">` (featured) or `<li>` in `ul.cards` (compact), give it a unique `id`, point its buttons at a new key via `data-project` / `data-i`, and add that key to `DATA`.

**Phone photos:** client screenshots often arrive with black bars top and bottom. Crop to the photo before adding.

## Edit workflow (edit-by-message service)
- Check the message comes from the number/email on file (private client list).
- **Confirm back before changing** phone numbers, emails, outbound links, domain/DNS or anything payment-related.
- Make the change, check it on a narrow (390px) and wide (1366px) viewport, push, reply with the link, log it in `EDITS.md` (date, request, minutes spent).
- New pages, features, redesigns or branding work are quoted separately.

## Open items (as at 28 Oct 2026)
- [x] Domain is **ldconstruction.trade**: canonical, og tags, JSON-LD, robots.txt, sitemap.xml and `CNAME` all updated
- [ ] Buy the domain (Namecheap), then DNS: A records `@` to 185.199.108.153 / .109.153 / .110.153 / .111.153, CNAME `www` to `glancyg17.github.io`; enable Pages custom domain + HTTPS
- [ ] Area covered, email address, owner name (add to contact + JSON-LD `areaServed`)
- [ ] Confirm 07311 822986 is on WhatsApp
- [ ] Confirm project captions/descriptions with the client
- [ ] Photos for bathrooms, windows, doors, glazing, PVC, gutters; finished "after" shots for jobs shown mid-build
- [ ] Google Business Profile; then real Google reviews for the site
- [ ] Add site to Cloudflare Web Analytics (paste beacon where marked in `<head>`) and Search Console
- [ ] Decide whether to keep the "Site by getPresented." footer credit
