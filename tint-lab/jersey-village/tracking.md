# Tint Lab $199 tint — tracking and form status

- User-supplied GHL form: **Tint (Google) - 199**, form ID `yDdjh75p0NKglkWZqaoW`.
- Native URL: https://api.leadconnectorhq.com/widget/form/yDdjh75p0NKglkWZqaoW
- Embedded in both existing enquiry cards (`hero-form-slot` and `lower-form-slot`).
- Unique iframe IDs: `inline-yDdjh75p0NKglkWZqaoW` and `inline-yDdjh75p0NKglkWZqaoW-lower`.
- Adapted user-supplied STICKY_SIDEBAR configuration to INLINE so the forms stay in the established page structure. Native trigger, activation, form ID/name and cookie-consent settings retained.
- One native script: https://link.msgsndr.com/js/form_embed.js . It owns resize/embedding behavior. Fields, validation, consent and submission belong to GHL.
- Removed both demo forms and their local placeholder handlers/notices. GHL owns native submission; the parent listens only for verified completion.
- Added `ghl-thanks.js` to navigate the parent page to relative `thank-you.html` only after the verified frame-specific native GHL success message. No GHL account setting changed; its native fields/validation/submission stay intact. No conversion event added.
- User-applied Tint Lab custom CSS is present in the published widget. Source file: `ghl-form.css`. No GHL account changes performed by the agent.
- User-supplied Google Ads ID: **AW-18046216903**. The supplied async gtag.js loader and configuration are installed once in the head of both `index.html` and `thank-you.html`.
- User-supplied Google Tag Manager container: **GTM-N3DBL3RL**. The supplied head loader and body noscript iframe are installed once on both pages. Noscript is immediately after the opening body tag.
- No separate GA, Meta, webhook, conversion label or conversion event supplied or added. No other-client IDs copied.
- No test lead submitted. Isolated browser success-message simulations verify redirect behavior, not CRM delivery.
- User-confirmed address: 14518 Hempstead Rd, Suite 5C, Houston, TX 77040, United States. Google Maps directions target that exact address.
- All six call links use user-supplied (832) 212-0354 (`tel:+18322120354`).
- Brand website: https://www.trytintlab.com/
- User-provided Google listing: https://share.google/XYLd88qdMgYyPmSMh
- Publication follows the PR-to-main and Netlify workflow. No Google Ads, GTM or GHL account edit performed.

- Fixed mobile bar has one full-width “Get my $199 tint quote” CTA, which jumps to the nearest enquiry panel. Call buttons remain in the header, hero, both cards, final CTA and footer.

## Successful-submit confirmation
- Message contract verified in the actual widget’s published script: `https://stcdn.leadconnectorhq.com/_preview/Bad1Kqw2.js`. It posts a frame-specific `set-sticky-contacts` tuple only after successful submission.
- Guard validates origin `https://api.leadconnectorhq.com`, actual iframe window source, form `yDdjh75p0NKglkWZqaoW`, iframe/storage identity, location `pxdhJJfDvMjUfbPgeNBe` and a nonempty string fingerprint. Load/resize/error, `_ud` contact data, wrong origin/window/form/frame/location and empty values are ignored. Redirect happens once.
- No contact payloads or fingerprints are stored, logged or sent by this page handler.
- `thank-you.html` uses the original logo, supplied address/phone, call/back/directions links and noindex metadata. It confirms an enquiry; appointments are confirmed by the team. The supplied base Google Ads/GTM tags load on this page; no separate conversion event was added to direct visits.
- Browser fixtures intercepted all GHL requests to avoid real submissions. Both actual browser iframe-source/origin success simulations redirected; 15 negative cases were rejected.

## Supplied Google Ads and GTM installation
- Source: user’s pasted Header/Footer snippets for Tint Lab, November 2, 2026.
- Exact IDs retained: `AW-18046216903`, `GTM-N3DBL3RL`. No custom thank-you conversion or event label invented. Tags configured inside the supplied GTM container remain owned by the user.
- This page’s guarded GHL success handler, native forms, nano ceramic offer, phone, address and layout are unchanged.
- Installation checks cover ID counts, head/body placement, inline loader execution and script availability. They do not verify campaign attribution, conversion configuration or lead delivery. No test lead or conversion is intentionally triggered.
