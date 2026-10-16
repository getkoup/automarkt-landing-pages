# Tracking — A&A Quality Auto Spa $299 tint

## User-supplied GHL form — 2026-10-16
- Form ID: `Vvz6NYhE1pelkUjTVOGo`.
- Form name/title: `Ceramic Tint - (google)`.
- Endpoint: https://api.leadconnectorhq.com/widget/form/Vvz6NYhE1pelkUjTVOGo.
- Embed loader: https://link.msgsndr.com/js/form_embed.js, loaded once per page.
- Placement: hero and lower quote panels. Unique iframe IDs: `inline-Vvz6NYhE1pelkUjTVOGo` and `inline-Vvz6NYhE1pelkUjTVOGo-lower`; each has a matching `data-layout-iframe-id` and the same client form ID.
- Preserved supplied INLINE layout, alwaysShow/alwaysActivated/neverDeactivate settings, `data-cookie-consent="true"` and `data-cookie-consent-provider="auto"`.
- Loading: early connections to the form, loader and `https://stcdn.leadconnectorhq.com` CDN; high-priority preload for the same loader (no second script execution); both iframes explicitly eager using the standard supplied source URLs. These loading changes did not add tracking IDs or submission destinations.
- Initial iframe height is 498px; GHL's loader manages resizing. Fields and submission are handled by the user's GHL form, including its consent controls and configured follow-up behavior. The page listens for the validated GHL success notification to navigate to its own thank-you page; it adds no separate conversion event. No test lead submitted.

Google Ads and GTM codes were supplied and installed on 2026-10-16 as recorded below. GHL's supplied third-party embed manages its own storage/cookie behavior; the landing page adds no custom attribution capture.

Other contact destinations: tel:+18329938411; https://aaqualityautospa.com/contact.
Google profile/review links are evidence and navigation links. Images/fonts and page CSS/JavaScript are local; the user-supplied GHL form and its embed loader are external.

## Google Ads + Google Tag Manager — 2026-10-16
- User-supplied source: [A & A Quality - Tracking Codes](https://docs.google.com/document/d/1sqedxVddDupYo_Tgk8w_9997PTs3aB70N8hCOeDqZeM/edit?tab=t.0).
- Google Ads tag: `AW-18361539514`; async gtag loader and config in the head of `index.html` and `thank-you.html`.
- GTM container: `GTM-NFRKT6JQ`; supplied loader in both heads, supplied noscript iframe immediately after each opening body tag.
- No conversion label/event snippet was provided. No custom Ads conversion call or invented label added; the supplied GTM container’s conversion configuration was not inspected or changed.
- `ghl-thanks.js` registers before the embeds. Only a frame-specific `set-sticky-contacts` success message from the actual A&A iframe at `https://api.leadconnectorhq.com`, with matching frame ID, storage key, A&A location `TXxNV98lwcFda3M2Qeuo` and nonempty fingerprint, redirects to relative `thank-you.html` once.
- Both the hero and lower form use the same success flow. Load, resize, contact-JSON messages, malformed/unrelated messages and validation errors do not redirect. Direct thank-you visits execute only the supplied base tags; no page-side conversion event is emitted.
- Current GHL form configuration and runtime verified read-only. No lead submitted.
- Verification: browser checks passed at 1440px, 390px and 320px; both form success redirects passed, malformed/unrelated messages were rejected, duplicate messages navigated once, and the supplied tag configs initialized on both pages. External scripts were blocked in the local test, so no advertising events or leads were sent.
