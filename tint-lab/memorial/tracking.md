# Tint Lab Memorial $199 tint — tracking and form status

- **Tracking installed (2026-11-14, user request):** same Google Ads `AW-18046216903` and GTM `GTM-N3DBL3RL` as Jersey Village. See the note at the bottom.
- **GHL form:** `tWssdiOlJUT07KVQzxrG` (“Ceramic tint (Google) - 199”), GHL location `dfwu3OcgOzSxGLjc8RgN`, supplied by the user on 2026-11-14 for Tint Lab Memorial. Embedded in both form cards; `ghl-thanks.js` matches this form ID and location ID. Paste `ghl-form.css` into the form’s Custom CSS in GHL so it matches the page.
- Embeds are pre-wrapped (`<id>-div > <id>-wrapper`) so `form_embed.js` doesn’t reload the iframe. The lower form is `loading="lazy"`, and `page.css` keeps hidden iframes in place (`left:auto`) and contained (`.ep-wrapper{position:relative}`).
- Call links: (713) 829-5969 (`tel:+17138295969`) everywhere.
- Directions: Google Maps to 8700 Long Point Rd, Unit 403, Houston, TX 77055.
- Google listing link: https://share.google/9rgH7sDfVdy6m1trN
- No test lead submitted.

- 2026-11-14: user asked to use the same tracking on every Tint Lab page. Google Ads `AW-18046216903` (gtag.js) and GTM `GTM-N3DBL3RL` (head loader + body noscript) are copied from `jersey-village/` and installed once each on: hub `index.html`, `memorial/index.html`, `memorial/thank-you.html`, `galleria/index.html`, `galleria/thank-you.html`. No conversion event added.
