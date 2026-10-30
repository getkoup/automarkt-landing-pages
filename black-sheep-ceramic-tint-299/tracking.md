# Black Sheep Ceramic Tint — Tracking & Forms

- Google Tag Manager: `GTM-TVXZVFZT`, explicitly supplied by the user on October 30, 2026.
- Standard GTM JavaScript snippet installed once near the top of `index.html`’s `<head>`.
- Matching noscript iframe installed once immediately after the opening `<body>`, following Google’s documented placement. The user labeled this block “Footer”; it is placed in the supported body position without changing its ID or contents.
- Corrected the malformed supplied closing comment (`<!-- End Google Tag Manager →`) to a valid HTML `-->` comment so it cannot hide subsequent page markup.
- No separate Google Ads, GA, Meta pixel, webhook or conversion ID added. Tags configured inside this GTM container are managed by the user.
- Source: user-supplied snippets. Installation guidance: https://support.google.com/tagmanager/answer/14847097 .
- No synthetic conversion event or test lead sent.
- No DetailNow tracking, forms, reviews or contact details copied into this page.
- Both enquiry panels embed the user-supplied native GHL form. Dummy fields and preview-only submit handlers have been removed. Native GHL validation, consent and submission remain unchanged.
- GHL form: `5peUzH16pwlf56CJZQhz`, “Ceramic Tint (Google Ads) - $299”.
- URL: https://api.leadconnectorhq.com/widget/form/5peUzH16pwlf56CJZQhz
- The supplied sticky-sidebar configuration is adapted to INLINE layout inside both existing quote cards, with unique iframe IDs. Native `form_embed.js` is included once and handles frame resizing.
- Cookie-consent attributes retained. No lead submission test performed; native GHL success/redirect settings retained.
- Custom CSS source: `ghl-form.css`; changes inside GHL must be published there to affect the iframe.
- Direct call links: `tel:+15103916010` (510-391-6010), explicitly supplied by the user; supersedes the website’s previous number.
- Google business link supplied by user: https://share.google/WNLOI7KssYVDi9VTj
- Instagram supplied by user: https://www.instagram.com/blacksheep_autodetailing/
- Official website and testimonial source: https://blacksheepautodetailing.com/
- Directions: Google Maps query for 2878 Prune Ave R, Fremont, CA 94539, explicitly supplied by the user.

## Installation verification

- Chrome local check: exactly one `gtm.js?id=GTM-TVXZVFZT` request, HTTP 200, and the container appears in `window.google_tag_manager`. One `gtm.js` startup event in dataLayer.
- Matching noscript block is the first body element. Both native GHL forms still load; no horizontal overflow or page errors observed.
- This verifies container loading and placement, not individual conversions, tags or account-side trigger configuration. No conversion event or test lead sent.
