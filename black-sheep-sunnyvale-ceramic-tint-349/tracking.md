# Black Sheep $349 Nano Ceramic Tint (Sunnyvale) — Tracking & Forms

- Tracking: the same tags the user supplied for the Black Sheep pages on 2026-11-26, set up exactly as on `black-sheep-ppf` (see that folder's tracking.md for the fixes made to the supplied snippets):
  - Google Tag Manager `GTM-TVXZVFZT`: standard head snippet after the trailing-slash redirect, plus the noscript iframe as the first element in `<body>`.
  - Google Ads `AW-10980273710`: `gtag/js?id=AW-10980273710` plus `gtag('config', 'AW-10980273710')` in the head.
  - CallRail swap: `https://cdn.callrail.com/companies/477740740/35b5606d540a4c6f3594/12/swap.js` just before `</body>`.
- Call links: `tel:+14089151488` (408) 915-1488.
- GHL form (supplied 2026-11-27): `sq3RLRxxRFiZKXybhhgk`, "Ceramic Tint (Google Ads) - $349 | Sunnyvale", location `gtMRJUK503ZFZoQA2iUy` (Black Sheep's main GHL location, the same as the 30% pages; read from the published form). Embedded in both cards: hero `#claim` iframe `inline-sq3RLRxxRFiZKXybhhgk` (eager) and lower `#quote-form` iframe `inline-sq3RLRxxRFiZKXybhhgk-lower` (lazy), each with `data-location-id`. One `form_embed.js` in the head. Initial height 462px from the supplied embed; GHL resizes it.
- Embed pattern copied from the Fremont page: `<id>-div` > `<id>-wrapper.ep-wrapper` > `iframe.ghl-form-frame`, so GHL does not move or reload the iframe. The form's own styling comes from its custom CSS in GHL (it already matched the page on 2026-11-27).
- Before the real form arrived, both cards briefly embedded the Fremont form as a local-only placeholder; it was never deployed.
- Successful submit: `ghl-thanks.js` (copied from `black-sheep-ppf`, no IDs in the file) redirects to the shared Sunnyvale thank-you page https://blacksheep.getkoup.com/thank-you.html. It reads the form and location IDs from each iframe's `data-form-id` / `data-location-id`.
- Local QA on 2026-11-27 ran in headless Chrome with GTM, Google Ads and CallRail requests blocked, so no hits were sent.
