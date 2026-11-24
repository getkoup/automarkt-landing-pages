# Tint Lab Houston hub — tracking

- 2026-11-14: user asked to use the same tracking on every Tint Lab page. Google Ads `AW-18046216903` (gtag.js) and GTM `GTM-N3DBL3RL` (head loader + body noscript) are copied from `jersey-village/` and installed once each on: hub `index.html`, `memorial/index.html`, `memorial/thank-you.html`, `galleria/index.html`, `galleria/thank-you.html`. No conversion event added.
- 2026-11-25: hub hero form removed (was Memorial GHL form `tWssdiOlJUT07KVQzxrG`), along with the hub's `form_embed.js` and `ghl-thanks.js`. The hub is call-only now. Memorial still uses that form on `memorial/`.
- All six remaining form placements (location pages) redirect to `/thank-you` after a verified submission. The shared page includes the existing Google Ads and GTM tags once each.
- All campaign call links use +1 832-990-8365 (`tel:+18329908365`).
