# Google Ads and GHL lead capture

- Google Ads tag retained: `AW-11364267259`.
- Loader: `https://www.googletagmanager.com/gtag/js?id=AW-11364267259`.
- Quote conversion retained: `AW-11364267259/y0-PCOe_6eccEPvp86oq`.
- GHL form supplied by the user: **PPf (Google)**, `IF89UosER0YD5RTlnSGx`.
- Form URL: `https://api.leadconnectorhq.com/widget/form/IF89UosER0YD5RTlnSGx`.
- GHL location: `u0zdecOvugwYiWUUOmTI`, verified in the published form configuration.
- Embed loader, once per page: `https://link.msgsndr.com/js/form_embed.js`.
- Call links: `tel:+17194378333`.
- Page-local `lead.js` retains gclid, gbraid, wbraid, UTM parameters, matchtype, and device in sessionStorage under `719_` keys and forwards them into the iframe URL. GHL's loader merges iframe query parameters into the form's attribution data. Custom contact-field storage still depends on GHL configuration and has not been verified with a submitted contact.
- Page, phone-tap, scroll-depth, and video events remain. Page source is `lp-ppf`; GHL's separate form ID identifies the service. Parent-page form focus/error measurement was removed because those fields now live in a cross-origin iframe.
- Successful-submit tracking validates the message origin, actual iframe window, frame-specific storage key and iframe ID, expected location, and a nonempty submission fingerprint. Only GHL's successful `set-sticky-contacts` frame notification triggers `generate_lead` and the Ads conversion. Its paired contact-JSON notification and load/resize notifications are ignored; repeated fingerprints are deduplicated per page load.
- The event contract was inspected in GHL's current form runtime and embed loader. Google Ads receipt and live GHL submission have not been verified; no live test lead or conversion was sent.
- The custom Cloudflare form endpoint and its submit handler were removed from this page. Ceramic is unchanged.
- Local preview uses the real GHL form and existing Ads tag. Submitting the form creates a real lead.
