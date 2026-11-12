# SosaaTintz — $249 Ceramic Window Tint (/249-tint)

Created: November 12, 2026.

## Brief
- Client: SosaaTintz LLC, 1414 Portola Ave, Livermore, CA 94551. Phone (925) 752-5705.
- Service: ceramic window tint. Offer: **$249, side windows + rear windshield** (user-supplied). Front windshield not included.
- Planned URL: https://sosaatintz.getkoup.com/249-tint/ (sub-path on the existing $399 domain).
- Audience: Livermore / Tri-Valley drivers (Pleasanton, Dublin, San Ramon) arriving from Google Ads (form name says "google").
- CTA: one inline native GHL form in the hero, plus call links and a mobile sticky bar.

## Structure and design
- Structure copied from 719tint.getkoup.com (`719-landing-pages/tint`): top bar with call link → hero (form left, offer right) → shade finder → stats tiles → CTA bar → light "dyed vs ceramic" section → 4-step process rail → (added) photo gallery → review marquee → CTA bar → FAQ → final CTA → footer.
- Content, photos, logo, fonts and colors come from `sosaatintz-ceramic-tint-299` (copied, not linked): black/white/silver, Bebas Neue display + DM Sans body, silver-gradient buttons.
- 719's LLumar film figures were not reused: SosaaTintz's film for this package is unconfirmed, so the stats row shows the offer, coverage, Google rating and the generic "no metal in ceramic film" fact.
- Shade finder uses California rules: front side windows need at least 70% VLT; rear side windows and rear windshield may be darker with dual side mirrors. The photo darkening is labeled an illustration.

## Facts reused from the $399 page research (verified Nov 3, 2026)
- Google: 4.9/5, 147 reviews (dated snapshot). Listing: https://share.google/1zxap7oRTPHR8zRDK
- Review excerpts: Jimena Rosas, Raja Jain, Dennis Roberts, linked to their Google reviews. Marked as not reviews of this offer.
- Website advertises lifetime warranty options; the page asks customers to confirm the written coverage for this package.
- Unconfirmed: film series in the $249 package, eligibility, old-film removal, taxes. The page says the shop confirms these before booking.

## Form
- Native GHL form `xnJMKy0NsimlyrFvLWx5`, "Ceremic Tint - 249 (google)". See tracking.md.
- The supplied snippet was a sticky sidebar. It is shown inline in the hero card instead (data-layout omitted so GHL uses its default inline path, as on the $399 page).

## Local preview
- `python3 -m http.server 7249` from a temp folder with a `249-tint` symlink to this folder → http://127.0.0.1:7249/249-tint/
- Headless Chrome on localhost keeps GHL iframes hidden (the working $399 form behaves the same there), so form rendering must be checked in a normal browser or after deploy.

## Revision — November 12, 2026 (form, glass design, speed)
- Form card was white, but the published $249 form already carries SosaaTintz's dark CSS (light labels), so labels were invisible. The card is now dark frosted glass.
- Glass design: sticky frosted top bar, glass form card, badges, shade controls, stat tiles, process steps, FAQ items, gallery captions and mobile bar; rounded corners and glossy silver buttons. Solid fallback where backdrop-filter is unsupported.
- New complete GHL stylesheet `ghl-form.css` (glass fields, 12px radius, glossy silver button). Checked by injecting it into a saved copy of the published widget on the glass card: labels, fields and button render correctly. Not applied in GHL; the user pastes it.
- Speed: GHL's own widget (~22KB document, then ~400KB of scripts, phone libraries and Roboto) is most of the wait and can't be changed from the page. The page now preloads form_embed.js, preconnects to every GHL/Google Fonts/storage origin the widget uses, drops the hero image and font preloads so the form downloads first, and shows a shimmer placeholder shaped like the form.
- Measured time to the form being shown (Chrome DevTools, cache disabled, 3 runs each, noisy connection): this page 2.5–5.3s; live $399 page 2.8–6.5s.
- When ad tags are added, they should load after the form; on the $399 page GTM + gtag (~340KB) start at the same moment as the form and compete with it.
- Differences from the 719tint structure: hero uses a photo, not 719's video; the stats show offer facts instead of LLumar figures; a gallery section was added; a mobile sticky bar was added.

## Copy rewrite — November 12, 2026: all content from SosaaTintz
User asked that all page content come from SosaaTintz, not from the 719 page. Every block of copy reused from 719tint was removed.

Sources (fetched Nov 12, 2026):
- Home: https://www.sosaatintz-ppf.com/ (specialist intro, Tesla & luxury list, "1,000+ vehicles protected", aftercare & checkup support, service-area FAQ, "Advanced heat blocking, designed for cooler interior, lifetime warranty").
- Tint page: https://www.sosaatintz-ppf.com/ceramic-window-tint-livermore-ca-bay-area ("Stay cooler, drive more comfortably", "Precision tint installation for Tesla, luxury & daily driven vehicles", "Elevate your vehicle's look", heat rejection, privacy, ceramic line: up to 92% IR / up to 99% UV, signal friendly, fade resistant, lifetime warranty, best-for list, all tint FAQs incl. shades 70/50/35/20/15/5 and the 48-hour roll-down advice).
- Google listing (4.9, 147 reviews) and the three review excerpts, from the Nov 3 research.
- The $249 offer and side windows + rear windshield coverage: user.

Removed because it wasn't SosaaTintz content: "Cheap tint turns purple" section, California tint-law labels in the shade picker, 719-derived step copy and FAQs.
Remaining text that isn't SosaaTintz wording is plain interface text: button labels, "Preview only: the photo is darkened to suggest each shade", the form loading text, the $249 FAQ answer built from the user's offer, and the thank-you confirmation sentence.
Not used: website hours (they differ from Google), mobile service (unclear for this offer), 3M brand name (the $249 film is unconfirmed; the ceramic-line figures are SosaaTintz's own claims and the page attributes them).
