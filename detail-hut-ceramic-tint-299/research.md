# The Detail Hut: $299 Nano Ceramic Tint

Research date: November 27, 2026.

## Brief
- Client: **The Detail Hut** (Fremont, CA). Short name `detail-hut`.
- User-supplied Google listing: https://share.google/QtkpSv0WoEDjkHouE (resolves to the Google listing "The Detail Hut", kgmid `/g/11h10vv61j`, Maps CID `0xccdbdbe688df0691`).
- Offer: **$299 nano ceramic tint, side windows + rear windshield**. This matches the "Tint special" card on thedetailhut.com ("Nano ceramic tint, $299, for the side and rear windows").
- Structure and copy pattern: copied from the Tint Lab Memorial page (`tint-lab/memorial`, https://tintlab.getkoup.com/memorial/), with the same sections in the same order: header, hero + quote card, trust strip, benefits, studio, 6 reasons, gallery, Google review carousel, quote band, FAQ, final CTA and footer. The `tint-lab` folder was not modified.
- Design: colours, type and shapes taken from thedetailhut.com:
  - near-black `#0b0b0d` background with `#131317` cards and `#23232a` borders
  - red `#e3262b` accent, with a red gradient `#ff3b3f → #c4151a` on pill buttons
  - Montserrat 800 headings and Inter body text (both self-hosted from Google Fonts, OFL)
  - 16px rounded cards and pill tags, like the site's specials grid
- Layout rhythm (client request): dark and light sections in the same order as the Tint Lab Memorial page. Dark: header, hero, trust strip, shop + 6 reasons, quote and footer. White (`.light`): benefits, gallery and FAQ. Light grey (`.light.soft`): reviews and final CTA. Dark sections use frosted dark glass and light sections use frosted white glass.

## Copy focus (client request, 2026-11-27)
Wording: the client wants **"ceramic tint" only, never "nano ceramic"** anywhere on the page. One review (Arvin Khorram) said "nano-ceramic tint on all windows". It is shown as "…tint on all windows…" so the customer's words are trimmed, not changed.

The copy is mostly about ceramic tint. It uses general facts about the product, not specs for a particular film:
- metal-free, so it doesn't interfere with phone, GPS, radio or Bluetooth
- targets infrared heat, so it doesn't have to be dark to work
- helps block UV
- cuts glare and keeps a clear view out

There are no percentages or brand specs. Customers are told to ask for the exact film and its specs with their quote. The trust strip's 4th item is now "Metal-free ceramic film / No phone, GPS or radio interference" (it used to be Affirm).

## Business facts (Google listing, checked 2026-11-27)
- Address: **4021 Clipper Ct, Fremont, CA 94538**, United States.
  - Note: the Facebook bio still shows an older address (46560 Fremont Blvd Ste 118). The page uses the Google listing address.
- Phone: **(510) 455-4554** (`tel:+15104554554`).
- Hours: **open daily, 9 am – 6 pm**. Google warned that Black Friday might change the hours.
- Rating: **4.8★ from 66 Google reviews** (63 five-star, 3 one-star).
  - Client request (2026-11-27): show the **4.8★ rating only**, never the review count, anywhere on the page.
- Website: https://www.thedetailhut.com/. Email: thedetailhut@gmail.com. Instagram: @thedetailhut (4.3K followers).
- Website claims used on the page: since 2018; focus on Teslas and luxury cars; STEK certified installer; "Five stars since 2018". The shop accepts Affirm, but the client asked for copy focused on ceramic tint, so Affirm was removed from the page on 2026-11-27.
- Second location: Roseville (new, no phone yet). It is not mentioned on this page.
- Team names from reviews: owners Ali and Jay, plus Dan, Jacob and George.

## Reviews used (verbatim excerpts, trimmed with "…")
All are 5★ and mention tint.
1. Shakhzod Usmanov: Toyota Crown window tint, 2 months ago.
2. Hussain Ahmed: 2026 Tesla Model 3 tint, 3 months ago.
3. Arvin Khorram: Model Y, nano ceramic tint on all windows, 3 days ago.
4. Chris Zeoli: Porsche Macan lowering + tint, 9 months ago.
5. Kevin Patel: Tesla wrap + tint, 2 days ago. The original text says "Tesla yl"; the page shows "Tesla …".
6. Paulo Santos: window tint, a month ago. The original spells it "Deatail Hut"; the page shows "[Detail] Hut".

Reviews to avoid:
- Ruben Vardanyan (1★): BMW i8, said the tint had a purplish glare and bubbles.
- luis orozco (1★): quoted $350, then charged about $700.
- Miguel Santillan (5★, but says a tint cut was not clean).

Because of these, the page makes no "no purple fade" claims and repeats "confirm your exact price before booking" several times.

## Photos (`assets/`)
| File | Source |
|---|---|
| `logo.webp` | thedetailhut.com `assets/logo.png`, trimmed |
| `icon.png` | thedetailhut.com `assets/icon.png` (favicon) |
| `hero-studio.webp` | thedetailhut.com `assets/prep.webp` (Model Y in the hex-light studio) |
| `shop-fremont.webp` | thedetailhut.com `assets/arrive.webp` (shop exterior with sign) |
| `gallery-model-y.webp` | thedetailhut.com `assets/reveal.webp` |
| `gallery-crown-front.webp`, `gallery-crown-side.webp`, `gallery-crown-rear.webp` | Shakhzod Usmanov's Google review photos (Toyota Crown tint). The licence plate on the rear photo is blurred. |

## Pending
- **GHL form:** embedded 2026-11-27 (`pmqrzDkjpT3wMahgoyJr`, see tracking.md).
- **GHL form styling:** `ghl-form.css` in this folder is the Custom CSS to paste into the GHL form (Styles → Custom CSS). Submit label: "Get my $299 tint quote ↗". The page doesn't load this file; it lives here for reference.
- Tracking (GTM / Google Ads / Meta) is not supplied yet. See `tracking.md`.
- Thank-you page: built (`thank-you.html` + `thank-you.css`). `ghl-thanks.js` redirects to it after a successful form submission. No test lead has been submitted yet.
- Hosting and domain.
