# SosaaTintz $249 — tracking and form

## Native GHL form (user-supplied, Nov 12, 2026)
- Form ID: xnJMKy0NsimlyrFvLWx5, "Ceremic Tint - 249 (google)".
- URL: https://api.leadconnectorhq.com/widget/form/xnJMKy0NsimlyrFvLWx5
- Location ID: Js9PuizigDvJKsbdeqFB (found in the published widget HTML; same SosaaTintz location as the $399 form).
- Loader: https://link.msgsndr.com/js/form_embed.js (one copy).
- Supplied as a sticky sidebar; embedded inline in the hero with unique frame ID `inline-xnJMKy0NsimlyrFvLWx5`. Trigger, activation, deactivation and cookie-consent attributes kept.
- ghl-thanks.js redirects to thank-you.html only on GHL's frame-specific successful-submit message (set-sticky-contacts with matching frame ID, location ID and a fingerprint). Same logic as the $399 page.

## Ad tags
- None yet. The user has not supplied GTM / Google Ads / Meta IDs for this page. The $399 page's GTM-KW3XR5DF and AW-18088371755 were deliberately NOT copied; add them (or new ones) only when the user asks.

## Success signal check — November 12, 2026 (no real lead submitted)
- Published form setting: on submit = show GHL message ("Thank you for taking the time to complete this form."), no GHL redirect URL.
- GHL's current bundle (https://stcdn.leadconnectorhq.com/_preview/BuCXqppA.js) posts `["set-sticky-contacts", "embedded_iframe_<iFrameId>", <iFrameId>, <locationId>, <fingerprint>]` to the parent inside its success handler, which runs only after the submission request returns successfully.
- ghl-thanks.js was tested with a fake form frame from a second local origin: the frame-specific success message went to the thank-you page; the `_ud` contact-data message alone and a wrong location ID were ignored.
- Bundle file names change when GHL deploys; re-check if the redirect ever stops working.
