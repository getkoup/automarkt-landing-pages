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
- Each iframe has a unique matching `data-layout-iframe-id`, `data-layout="{'id':'INLINE'}"`, the same user-supplied form ID/name, and the original cookie-consent attributes.
- One official script: https://link.msgsndr.com/js/form_embed.js, loaded with `defer`.
- Initial iframe height: 400 px. Official embed script owns resizing; observed native content 364 px and SDK-adjusted iframe height 369 px. No clipping, negative margins, fixed-height container, or manually generated sidebar launcher.
- Published native fields: Full Name, Phone, Car Details. Native submit text: `REQUEST FREE QUOTE`.
- Published form already contains the Mango custom CSS: light #faf9f6 fields, #20201c text, 16px inputs, orange #ff7f00 submit, transparent zero-border/zero-padding wrappers.
- Removed all preview fields, coming-soon notices and preview submit handlers. GHL owns native fields, phone-country selection, configured consent/CAPTCHA, validation and submission.
- No custom parent success redirect, simulated success, local lead storage, alternate endpoint, or another client's form ID added. GHL's configured response behavior is retained.

## Mobile action and desktop offer
- Exactly one fixed bottom action on phones: `Request Quote`.
- It scrolls to and focuses the closer of the hero and middle quote cards. The normal section call buttons retain the supplied phone number.
- Larger $99 price typography applies only at widths of 1024 px and above. Existing mobile offer sizes are retained.

## Advertising tracking
No Google Ads, GTM, GA, Meta pixels, webhooks or conversion IDs supplied or installed.
No tags or forms copied from other clients. The native GHL widget loads its own service assets, phone-country controls, configured CAPTCHA and native form-view events.

## GHL CSS handoff
`ghl-form.css` remains the complete replacement stylesheet for Mango's native form, in Styles → Advanced → Custom CSS. The user has already applied it to the supplied published widget. No GHL account edits or publication were performed by the agent. Future changes must preserve native fields, validation, consent, CAPTCHA and submission.

## Verification and publication
Form rendering, native styles and responsive sizing are checked without filling or submitting contact data. A visible form is not proof of CRM delivery; no real/test lead was submitted.
Netlify production hostname: https://mango-hand-car-wash-99.netlify.app/ . Requested custom hostname: https://mango.getkoup.com/; Hostinger CNAME is supplied for the user to add. The source retains its intentional campaign-page `noindex, nofollow` metadata. See hosting.md for release/DNS details. No advertising tags, test leads or GHL account edits are part of publication.
