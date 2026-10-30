# MOB Auto Boutique — Spray-in bed liner

## Brief
- Client: MOB Auto Boutique.
- Location: 824 FM 1960 Rd, Houston, TX 77073.
- Service: spray-in truck bed liner installation.
- Offer: **Up to 30% off**, supplied by user. No expiry, fixed price, product brand or warranty supplied. Final savings, eligible service and preparation costs require shop confirmation.
- Audience: Houston, Spring and surrounding North Houston truck owners; work trucks, weekend hauling, daily-use pickups.
- CTA: vehicle quote via GHL form (user will supply later), or call **(832) 623-1662**.

## Sources checked 2026-10-29
- https://www.mobautoboutique.com/ — published shop phone/address; custom automotive services. Website blocks direct browser and HTTP access; indexed text available.
- https://www.mobautoboutique.com/Contact/Find-Us — published hours Mon–Fri 9am–6pm, weekends closed.
- https://autographixne.com/spray-in-bed-liner-services — service-category reference only; wear protection, textured finish, prep and cure considerations. Write original MOB copy. Do not transfer competitor phone, certifications, warranties, brand relationships, reviews or years in business.

## Copy direction
A tough, fitted finish for real truck use. Explain protection against scratches/scuffs, texture, cleanup, and the importance of preparation. No guaranteed dent/rust/chemical protection, exact cure times, unverifiable reviews or fabricated statistics. Liner product and installation details to be confirmed by MOB.

## Form status
User confirmed: “i will dd ghl form letter”. Provide a styled integration slot and visible call fallback. No working lead submission, no false success state, and no borrowed form IDs. Do not launch ads until GHL and conversion tracking are supplied and verified.

## Design
Premium automotive look, charcoal, warm white and accent color to be informed by the official logo where retrievable. Official white/transparent logo is now stored unchanged in `assets/mob-official-logo.png`, replacing the earlier temporary text wordmark. Primary red matches the official website (#D10000), with secondary red #EC1C2D and black/white neutral surfaces. Mobile-first, prominent offer and tap-to-call, simple page navigation, focused service education, FAQ and quote panel. All assets local to this folder.

## Generated asset
Built-in image_gen used. Hero is illustrative AI-generated marketing imagery, not a MOB installation photograph. Optimized page asset: `assets/truck-bed-hero.webp`.

Final prompt: “Premium photorealistic commercial automotive photograph of a graphite full-size pickup with open tailgate and freshly applied textured black spray-in bed liner, elevated rear three-quarter view in a clean dark automotive workshop, subtle red light, crisp realistic liner texture, no people, logos, words or watermarks; illustrative marketing imagery.”

## Verification
- Previewed in Chrome at 320px, 390px, 768px and the default desktop width. No horizontal page overflow; service heading fits its container.
- Visually inspected mobile hero and desktop quote panel.
- Verified native quote anchor navigation and FAQ expansion. All six call links use MOB’s published number.
- Images and fonts loaded successfully. All asset references stay inside this folder, fragment targets exist and IDs are unique.
- Static site, no build step. Final assets total approximately 1.43 MB including all responsive variants and font licenses.
- GHL submission and ad conversions remain untested because the user will supply the form and tracking later.
- Prepared on the `auto-botui` working branch; publishing requires a PR into `main`.

## Hero form and glass refinement
- User requested a form in the hero as well as the lower quote section, with a darker/glass visual treatment.
- Added a second explicitly labeled GHL integration space in a translucent smoked-glass card, with blur, fine borders, soft highlights, and a no-blur fallback.
- Hero quote and mobile sticky quote links target the hero card. The lower quote section remains available.
- Both placements await the client’s GHL embed; no lead submission behavior was added. Use unique iframe IDs and load the native embed script once when integrating.
- Refinement verified at 320px, 390px, 768px and desktop: no page overflow; hero quote shortcut reaches the card; mobile glass card and desktop hero visually inspected.

## Google Ads offer hierarchy correction
- User emphasized the discount as the primary selling point. Hero now leads with a large “UP TO 30% OFF” display above the spray-in bed liner heading; the form’s former small discount badge is removed.
- Glass hero form and lower quote placement retained. Checked desktop and 390px phone visually, plus 320px overflow: offer fits without horizontal scrolling.

## Expanded generated service imagery
- Rechecked the reference service page on 2026-10-29: wear protection, textured grip, UV/weather, chemical/stain resistance, and application/surface preparation are its five service topics.
- Generated five distinct service illustrations with built-in image_gen; exact prompts and saved asset paths are in image-prompts.md.
- The first three illustrate wear, grip, and dirt/spill care in the benefit cards. A new masking/preparation image replaces the repeated hero crop in the finish section. A separate weather section shows the sunlight/rain image with product-dependent specifications clearly stated.
- The cleanup illustration depicts routine dirt removal; it does not demonstrate chemical resistance. Both stain and weather performance must be confirmed against the liner selected by MOB.
- Images are optimized to WebP; benefit cards include smaller 600px variants, responsive srcset, lazy loading and explicit dimensions. Visible captions identify the imagery as illustrative/AI generated. Hero offer and both GHL integration spaces remain in place.

## Standard form file format
- User requested the same form file and native GHL format as the other landing pages. Added local `ghl-form.css`, `form-config.js`, `form-submit.js`, `thank-you.html`, and `form-integration.md`.
- Both page cards use a dark form background so one published GHL form stylesheet can serve both placements.
- Redirect logic tested locally: disabled until configured, rejects wrong origin/source/action/storage/frame/location/fingerprint, and accepts a matching event once. No external submission or conversion was made.
- Actual MOB form styling and CRM delivery remain unverified until the embed is supplied.
- Checked all six distinct images load, desktop photo layout and preparation/weather sections visually, responsive card layout and smaller sources at 390px, plus no overflow at 320px. Thank-you page visually inspected.

## GitHub Pages verification publication
- User requested a public GitHub Pages URL to share for verification.
- Existing repository Pages source confirmed as `main`, root `/`, HTTPS enabled. No hosting configuration change needed.
- Target: https://getkoup.github.io/automarkt-landing-pages/mob-auto-spray-in-bed-liner/
- This is a review/verification build. Forms remain clearly labeled previews pending MOB’s native GHL embed; no CRM submission or ad conversion is enabled.

## Official logo and brand correction — 2026-10-30
- User requested the actual brand logo and matching website colors. Retrieved the original PNG from https://www.mobautoboutique.com/Portals/19/logo.png through the loaded official website’s browser session, preserving its original bytes and transparency (340 × 216).
- Source website branding: primary red #D10000, secondary red #EC1C2D, white/black. Kept the dark glass card treatment and large up to 30% off hero offer.
- Replaced the temporary text wordmark in the header, footer, and thank-you page. The original logo also supplies the favicon. Updated native GHL custom CSS to the same red palette.
- Verified original logo loaded at 340 × 216, preserving its aspect ratio, on desktop and 390px mobile. No horizontal overflow. Header/footer/thank-you use the original local PNG.

## Native GHL form and Netlify preparation
- User supplied form `wemqB8SULRpq4HcFCqYb` (“Spray-in-bed - 30%”). Verified public widget location `RuEepr9TxS0kkB8ZCRie` and the exact frame-specific native success notification in its runtime.
- Replaced both preview panels with native inline GHL iframes using unique IDs; included one embed script and retained cookie-consent settings. Guarded redirect leads to branded thank-you page only after native success.
- Direct widget rendering shows Full Name, Phone, Car Details and Request Free Quote, styled in dark/red. No CRM lead was submitted. A minimal local iframe also stalled in the inspection browser, so embedded rendering needs public-host verification.
- User confirmed intended hostname `mob.getkoup.com`, correcting the initial spelling. Netlify public-only build is ready; see hosting.md for the planned project and Hostinger record.
