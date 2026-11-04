# Tracking and GHL integration — Mango Hand Car Wash

## Supplied client links
- Phone / click-to-call: `tel:+13463472866` — (346) 347-2866.
- Google Business Profile: https://share.google/3DIqCQqzxVgTvKx6Z
- Source website: https://mangohandcarwash.com/hand-car-wash-new-lp/

## User-supplied native GHL form
- Form name: `Wash (Google) - 99`.
- Form ID: `EBJyMhnQ0k8bKoVhscGu`.
- URL: https://api.leadconnectorhq.com/widget/form/EBJyMhnQ0k8bKoVhscGu
- User supplied a hidden sticky-sidebar embed. Adapted it to two visible **inline** placements to retain the approved page design and one mobile sticky action.
- Hero iframe: `inline-EBJyMhnQ0k8bKoVhscGu-hero`, inside `#ghl-form-slot` / `#claim`.
- Middle iframe: `inline-EBJyMhnQ0k8bKoVhscGu-second`, inside `#ghl-form-slot-second` / `#quote`.
- Each iframe has a unique matching `data-layout-iframe-id`, the native default-inline path (optional `data-layout` omitted), the same user-supplied form ID/name, and the original cookie-consent attributes.
- One official script: https://link.msgsndr.com/js/form_embed.js, loaded asynchronously with high fetch priority, preloaded before page scripts, tracking, fonts and media. GHL API, CDN and backend connections are warmed early.
- Initial iframe height: 400 px. Official embed script owns resizing; observed native content 364 px and SDK-adjusted iframe height 369 px. The slot reserves at least 369 px while GHL performs its first sizing handshake. The iframe starts visible so native content can render progressively rather than waiting behind page-authored opacity/visibility rules; the official SDK still owns subsequent styling and sizing. No CSS override, clipping, negative margins, fixed-height container or manually generated sidebar launcher.
- Published native fields: Full Name, Phone, Car Details. Native submit text: `REQUEST FREE QUOTE`.
- Published form already contains the Mango custom CSS: light #faf9f6 fields, #20201c text, 16px inputs, orange #ff7f00 submit, transparent zero-border/zero-padding wrappers.
- Removed all preview fields, coming-soon notices and preview submit handlers. GHL owns native fields, phone-country selection, configured consent/CAPTCHA, validation and submission.
- Native GHL owns lead submission. `ghl-thanks.js` now redirects the parent page to this folder’s `thank-you.html` only after the verified frame-specific successful-submit message described below. No simulated success, local lead storage or alternate submission endpoint was added.

## Mobile action and desktop offer
- Exactly one fixed bottom action on phones: `Request Quote`.
- It scrolls to and focuses the closer of the hero and middle quote cards. The normal section call buttons retain the supplied phone number.
- Larger $99 price typography applies only at widths of 1024 px and above. Existing mobile offer sizes are retained.

## Advertising tracking
- User supplied and authorized installation of Google Ads base tag `AW-17824235340` and Google Tag Manager container `GTM-NWR5JN89`.
- Installed the supplied asynchronous Google tag loader, `dataLayer` / `gtag` initialization and Ads configuration in `<head>` on `index.html` and `thank-you.html`.
- Installed the supplied asynchronous GTM loader in `<head>` and its matching noscript iframe at the bottom of `<body>` on both pages, as requested for the footer.
- Each supplied loader appears once per page. Both use the same `window.dataLayer` without resetting an existing queue.
- No separate advertising conversion event/label, phone-click conversion, GA ID, Meta pixel or webhook was supplied or added. GTM container contents and GHL tracking settings were not edited; a deployed base tag does not verify conversion reporting or CRM delivery.
No tags or forms copied from other clients. The native GHL widget loads its own service assets, phone-country controls, configured CAPTCHA and native form-view events.

## GHL CSS handoff
`ghl-form.css` remains the complete replacement stylesheet for Mango's native form, in Styles → Advanced → Custom CSS. The user has already applied it to the supplied published widget. No GHL account edits or publication were performed by the agent. Future changes must preserve native fields, validation, consent, CAPTCHA and submission.

## Verification and publication
Form rendering, native styles and responsive sizing are checked without filling or submitting contact data. A visible form is not proof of CRM delivery; no real/test lead was submitted.
Netlify production hostname: https://mango-hand-car-wash-99.netlify.app/ . Live custom hostname: https://mango.getkoup.com/; the user added the Hostinger CNAME and HTTPS is verified. The source retains its intentional campaign-page `noindex, nofollow` metadata. See hosting.md for release/DNS details. The supplied advertising tags are included in publication; no test leads or GHL account edits were performed.

## Loading correction
The optional explicit INLINE layout caused the official SDK to move each loaded iframe into a generated wrapper, triggering a second document load. Omit `data-layout` so GHL uses its default inline path and the frame stays inside its original slot. Cold traces changed from four form document requests (two per card) to two total (one per card). Both cards retain native fields, validation, CAPTCHA, cookie-consent attributes and submission behavior. No form-submit APIs were replaced or tested with contact data.

## Thank-you update — 2026-11-04
- Requested parent destination: `thank-you.html`, resolving to `https://mango.getkoup.com/thank-you.html` in the authorized release. The user first requested local review, then authorized publication with the form-speed update.
- `ghl-thanks.js` registers synchronously in the head before the native SDK initializes either form. It accepts only `set-sticky-contacts` from the actual hero or middle GHL frame at `https://api.leadconnectorhq.com`, with Mango form ID `EBJyMhnQ0k8bKoVhscGu`, matching frame ID and `embedded_iframe_<frame ID>` storage key, location `todSFcSuIugBi4Ef9kmv`, and a nonempty fingerprint.
- Successful messages navigate once to the same-folder thank-you page. Load, resize, error, `_ud` contact-data, unrelated origins/windows/forms/locations and malformed messages do not navigate. Contact data is not logged, stored by this handler or included in the URL.
- Message shape was confirmed in Mango’s published native GHL bundle. The published widget also has action type `1` and an existing account redirect value `https://yherwellness.specialvippromo.com/thankyoupage-1428`. No GHL account configuration was edited; the parent listener handles navigation after the native success notification.
- The thank-you page repeats only Mango’s already supplied base Ads/GTM tags. It emits no custom conversion event. Existing container rules still control any URL-based reporting.
- Verified both native frame paths with synthetic events in JS and a local browser; negative cases are rejected and duplicates redirect only once. Responsive checks passed at 320, 390, 768 and 1440 pixels. External tracking requests were blocked during local QA. No form or lead was submitted; native submission/CRM delivery was not tested.

## Native loading optimization — 2026-11-04
- Hero iframe is eager; the second iframe uses browser-native `loading="lazy"` and retains its actual native URL, form ID, consent settings and success listener. Cold mobile and desktop checks must show one form document initially and the second when scrolling near its section.
- Preconnect and SDK preload hints appear immediately after charset, before any scripts. The official SDK is asynchronous with high fetch priority and supports initialization during document parsing. The small synchronous success listener registers before it.
- Removed page-authored initial `visibility:hidden;opacity:0` from both frames. Do not impose a second visibility gate on the form while the remote SDK is loading; its native styles and resizing remain authoritative.
- Removed hero-image preload/high priority and set the backdrop to low priority, allowing the native form to take precedence. No widgets, API endpoints, validation, phone controls, CAPTCHA or submission code were replaced.
- Cold mobile observations on the same local host: before, both form documents requested immediately and ready at 22.3s; after, only the hero document initially and ready at 5.5s. Remote response times varied, so these are individual observations rather than a controlled speed guarantee.
- No live conversions or contacts were generated for QA. Browser automation blocks external advertising requests; verified native fields and navigation without submitting contact data.

## Deferred-form wake-up
A stable-card IntersectionObserver switches the lower iframe to eager loading 600px before its card enters view. This avoids intermittent native lazy-loading stalls when GHL positions an initializing iframe outside the viewport. The lower iframe initially uses `about:blank` with its native URL in `data-src`. The observer sets eager loading, assigns that URL once and removes `data-src`. This avoids browser-dependent lazy thresholds and guarantees the lower GHL document does not compete at startup. The iframe stays mounted; its native URL is assigned only once. The native SDK discovers it through its own iframeLoaded message. Browsers without IntersectionObserver load it eagerly as a fallback.
