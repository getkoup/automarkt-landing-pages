# Shared Tint and PPF tracking

- The service selector has no lead form or Google Ads tag. The common `thank-you.html` retains page configuration for the existing Google Ads tag `AW-11364267259`; loader: `https://www.googletagmanager.com/gtag/js?id=AW-11364267259`.
- Existing quote conversion destination remains `AW-11364267259/y0-PCOe_6eccEPvp86oq`. It is emitted by each service's unchanged `lead.js` after the validated GHL success notification, not by the selector or common thank-you page.
- Tint GHL form: `P0i3pnWcoKaPYcm7UuQe`, Tint (Google). PPF GHL form: `IF89UosER0YD5RTlnSGx`, PPf (Google). Both use location `u0zdecOvugwYiWUUOmTI` and the supplied LeadConnector embeds. No new tracking ID, pixel, or webhook was added.
- Existing origin/source/form/location/fingerprint checks, one-submission guard, transaction fingerprint, conversion callback, and two-second navigation fallback are unchanged. Attribution forwarding and other service analytics are described in each service's `tracking.md`.
- After successful submission on the shared host, the existing script requests `/tint/thank-you.html` or `/ppf/thank-you.html`. The collection's Vercel configuration responds HTTP 307 to `/thank-you.html`; both were verified to finish at the same common page.
- The common page emits no quote conversion. Actual browser visits to the shared selector, service pages without submission, and common confirmation showed zero explicit conversion events. Direct visits or reloads do not execute a conversion call from the common page. Google Ads account-side automatic URL-conversion rules were not audited.
- The same shared routing is configured for `719.getkoup.com`, which is attached to the project but awaits the user's DNS record. The default Vercel alias is live and verified.
- Existing standalone domains and GitHub Pages retain their service-local confirmations; their hosting arrangement is not migrated or removed. Python's static local server and GitHub Pages do not process `vercel.json`.
- No real GHL test lead, synthetic message to a live embed, or live quote conversion was sent. Live GHL submission and Google Ads receipt remain unverified.
