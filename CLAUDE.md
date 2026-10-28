# L.D Construction: site notes for Claude

Static multi-page site for L.D Construction, built by getPresented. Hosted on GitHub Pages. This repo is **public**: never put private data (WhatsApp number on file, billing, plan, personal details) in it. Those live in the getPresented private client list.

## The business
- **Name:** L.D Construction (written "L.D", with the dot)
- **Line:** All joinery and construction work
- **Services (from their own logo sheet):** renovations, conversions, bathrooms, kitchens, windows, doors, glazing, roofing, PVC, gutters, gardens, excavation
- **Phone (public):** 07311 822986 (`tel:+447311822986`). WhatsApp link uses the same number: confirm it is a WhatsApp number.
- **Domain:** ldconstruction.trade
- **Not yet known:** area covered, email address, owner's name, insurance/accreditations. Do not invent any of these. Leave them out until supplied.

## Files
```
index.html            Home: headline, hero photo, one teaser photo, services summary, quote band
work/index.html       Our work: the full gallery (jobs, "More jobs", lightbox)
services/index.html   What we do: the 12 services, linking to jobs on /work/
quote/index.html      Get a quote: call / WhatsApp, and what to send
404.html              Minimal not-found page (styles inline)
assets/site.css       ONE shared stylesheet for every page (change design here, once)
assets/lightbox.js    Lightbox, used on /work/ only. Reads window.LD_DATA from that page
assets/images/<project>/<n>.webp       Full photos (739-1000px wide, 3:4)
assets/images/<project>/<n>-sm.webp    480px thumbnails used in the grid
assets/fonts/         Self-hosted Bodoni Moda + Montserrat (subset woff2). No Google Fonts calls.
assets/logo-mark.png  The client's LD monogram, black with transparent background (recoloured in CSS with a mask)
assets/og-image.jpg   1200x630 share image
CNAME, robots.txt, sitemap.xml, _config.yml, EDITS.md, CLAUDE.md, README.md
```
All asset links are root-absolute (`/assets/...`) so they work from any page.
The header, footer and mobile call bar are repeated in each page: when you change one (new nav link, footer text), change **every** page including `404.html` if relevant.
`_config.yml` stops CLAUDE.md, README.md, EDITS.md and docs/ being published.

## Design (keep it consistent)
- **Idea:** let the work do the talking. Dark, plain page; real site photos; one memorable moment (the spirit level in the hero that settles on load).
- **Palette (dark, from the work itself):** bg `#1C2124` (roof slate) · panel `#272D31` (photo wells, contact band) · head `#F4F5F2` (plasterboard white: headings, buttons, logo) · body `#D6DBD7` · mute `#A6AFAA` · line `#3C454A` · level blue `#1B8FCC` (the blue spirit level in the photos; only for the level graphic and focus rings) and `#6CC1F2` for blue text/links. All text passes WCAG AAA (7:1) on bg and panel. Client asked for dark background with light text (28 Oct 2026): do not return to a white page.
- **Type:** Bodoni Moda (headings, echoes the monogram) with `font-variation-settings:"opsz" 30` so hairlines stay visible at large sizes. Montserrat for everything else (it is the typeface on their logo sheet).
- **No** all-caps labels, eyebrow text, stock icons, gradients (except the level graphic), testimonial cards or scroll animations.
- Sentence case, plain British English, no hype.

## Voice (keep it premium)
**The idea:** *Level, plumb and square.* Precision, shown rather than claimed. The spirit level in the hero and in many of the photos is the through-line. Every page should sound like the same quiet, certain person.
- Name the material or the craft decision (steel, oak, slate, brick; "steel takes the load", "checked plumb"), not a quality adjective ("high-quality", "professional", "tailored").
- Short, certain sentences. No "we pride ourselves", "passionate", "dedicated", "second to none", exclamation marks, or explaining why we are writing.
- Captions and project text should point at what the photo actually shows.
- One idea per heading. Headlines are statements, not labels where we can help it ("See how it is done.", "Tell us what you are planning.").
- Call to action stays plain and consistent: "Get a quote", "Call", "Message on WhatsApp".
- Premium comes from restraint. If a line does not add something visible or true, cut it.

## Copy rules
- **No testimonials or star ratings** until real Google reviews exist. Never write or fake one.
- **No promises** the client hasn't agreed (response times, "free quotes", guarantees, years in business, "fully insured") until confirmed in writing by the client.
- Photo captions and the short project descriptions were **inferred from the photos**. Anything not obviously visible should be checked with the client. Never claim a location, customer type or date that isn't supplied.
- Six services on the list have no photos yet (bathrooms, windows, doors, glazing, PVC, gutters). They appear in the list without a "See photos" link; add one when photos arrive.

## How to change things
**Edit text, phone, links:** edit the page directly. The phone number appears on every page (nav, hero, quote band, call bar, WhatsApp link), in the home page JSON-LD, in `404.html` and baked into `assets/og-image.jpg`. Search the repo for `7311` and update every one.

**Add photos to an existing project:** (1) add `n.webp` (max 1000px wide, 3:4, quality ~80) and `n-sm.webp` (480px wide) to `assets/images/<project>/`; (2) add an entry to the project's `photos` array in `window.LD_DATA` in the `<script>` at the bottom of `work/index.html`; order in the array is the lightbox order; (3) update the "N photos" / "See all N photos" text.

**Add a new project:** in `work/index.html`, copy an existing `<article class="job">` (featured) or `<li>` in `ul.cards` (compact), give it a unique `id`, point its buttons at a new key via `data-project` / `data-i`, and add that key to `LD_DATA`. If it matches a service, update that service's "See photos" link in `services/index.html`.

**Keep the home page short.** It deliberately has just two photos and one route to a quote. Do not move the gallery or long lists back onto it.

**New page:** copy `quote/index.html`, change title/description/canonical/og:url and the nav `aria-current`, add it to the nav and footer on every page and to `sitemap.xml`.

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
- [ ] Quote page has no form (no email address yet). If an email is supplied, consider adding a FormSubmit form
- [ ] Confirm project captions/descriptions with the client. Claims to check: "for homes and commercial spaces", "every photograph taken on site, no staging", "built plumb and checked with the level", "we repair the valleys, flashings and flat sections" (lead roof), "the roof itself becomes the feature" (timber roof), and that they are happy with "Level, plumb and square" as the headline
- [ ] Photos for bathrooms, windows, doors, glazing, PVC, gutters; finished "after" shots for jobs shown mid-build
- [ ] Google Business Profile; then real Google reviews for the site
- [ ] Add site to Cloudflare Web Analytics (paste beacon where marked in `<head>`) and Search Console
- [ ] Decide whether to keep the "Site by getPresented." footer credit
