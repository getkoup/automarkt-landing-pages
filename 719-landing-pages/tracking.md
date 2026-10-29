# Shared Tint and PPF tracking

- The restored original homepage retains its original GHL popup form `N4aOdMsxWmfjzy0Rh8Aq` and Elfsight reviews app `0480c4ff-4da0-4b1f-91d9-161f044242e1`, loaded by `https://elfsightcdn.com/platform.js`. Its recovered parent markup/controller originally had no Google Ads tag; the user-supplied Google Ads and GTM tags were added to the base homepage on 2026-10-27 as recorded below. Its original form behavior is unchanged. The common service `thank-you.html` retains page configuration for the existing Google Ads tag `AW-11364267259`; loader: `https://www.googletagmanager.com/gtag/js?id=AW-11364267259`.
- Existing quote conversion destination remains `AW-11364267259/y0-PCOe_6eccEPvp86oq`. It is emitted by each new service page's unchanged `lead.js` after the validated GHL success notification, not by the restored homepage or common thank-you page.
- Tint GHL form: `P0i3pnWcoKaPYcm7UuQe`, Tint (Google). PPF GHL form: `IF89UosER0YD5RTlnSGx`, PPf (Google). Both use location `u0zdecOvugwYiWUUOmTI` and the supplied LeadConnector embeds. No new tracking ID, pixel, or webhook was added.
- Existing origin/source/form/location/fingerprint checks, one-submission guard, transaction fingerprint, conversion callback, and two-second navigation fallback are unchanged. Attribution forwarding and other service analytics are described in each service's `tracking.md`.
- After successful submission on the shared host, the existing script requests `/tint/thank-you.html` or `/ppf/thank-you.html`. The collection's Vercel configuration responds HTTP 307 to `/thank-you.html`; both were verified to finish at the same common page.
- The common page emits no quote conversion. Actual browser visits to the shared selector, service pages without submission, and common confirmation showed zero explicit conversion events. Direct visits or reloads do not execute a conversion call from the common page. Google Ads account-side automatic URL-conversion rules were not audited.
- The same shared routing is live on `719.getkoup.com`, with valid HTTPS and the correct deployed content verified. Both branded service forms were visually checked, both shared redirects were exercised, and direct common-page visits showed zero explicit conversion events. The default Vercel alias remains live.
- Existing standalone domains and GitHub Pages retain their service-local confirmations; their hosting arrangement is not migrated or removed. Python's static local server and GitHub Pages do not process `vercel.json`.
- No real GHL test lead, synthetic message to a live embed, or live quote conversion was sent. Live GHL submission and Google Ads receipt remain unverified.
- GTM container `GTM-WHZLPNRQ` (supplied 2026-10-15 via Google Doc; same container as `/cc`) added to the head (after `<meta charset>`) and body noscript of the common `thank-you.html`. Existing Ads pageview config unchanged.
- 2026-10-15: at the user's request the two `vercel.json` redirects were removed. On `719.getkoup.com`, Tint and PPF now finish on their own `/tint/thank-you.html` and `/ppf/thank-you.html` (each links back to its own service page). The common `/thank-you.html` is no longer used by either service; it is left in place.

## Base homepage tracking — 2026-10-27
- User supplied and authorized Google Ads `AW-11364267259` and GTM `GTM-WHZLPNRQ` for `https://719.getkoup.com/`. These match the existing 719 service-page IDs.
- Added the supplied asynchronous Google Ads loader/config and GTM bootstrap to the base `index.html` head, immediately after the charset. Added GTM’s hidden noscript iframe immediately after the opening body tag.
- Only the base homepage required the snippets. Existing service and thank-you pages already have these tags, so no duplicate tags were added to them.
- No explicit conversion event, new conversion label, or form behavior was added to the restored homepage.

## Shared thank-you routing — 2026-10-29

- At the user's request, `/cc/thank-you.html`, `/tint/thank-you.html`, and `/ppf/thank-you.html` now return HTTP 307 to `/thank-you.html` in the shared Vercel project. This supersedes the 2026-10-15 routing decision above.
- All three services retain their existing validated GHL success checks, conversion destination, submission guard, conversion callback, and two-second navigation fallback. The redirect runs after those handlers request their service-local confirmation URL.
- The common thank-you page and its existing Ads/GTM snippets are unchanged; no new tracking IDs or explicit conversion events were added. Separately hosted service projects retain their local confirmations.
