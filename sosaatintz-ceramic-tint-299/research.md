# SosaaTintz — $399 Ceramic Window Tint

Research date: November 3, 2026.

## Brief
- Client: SosaaTintz LLC | PPF & Vinyl Wraps.
- Location: 1414 Portola Ave, Livermore, CA 94551.
- Phone: (925) 752-5705. Email: Sosaatintz18@gmail.com.
- Service: ceramic automotive window tint. Offer: $399, supplied by the user.
- Audience: Livermore, Pleasanton, Dublin, San Ramon and Bay Area drivers seeking comfort, glare reduction, privacy and a clean finish.
- CTA: two inline instances of the user-supplied native GHL enquiry form, plus genuine shop call links. Initial disconnected preview forms were replaced on November 3, 2026.
- Structure: independently copied Detail Now tint layout: hero + form, trust strip, four benefits, shop story, six reasons, gallery, Google reviews, lower form, FAQs, footer and one sticky mobile CTA.
- Package windows, film series, vehicle eligibility, old-film removal, tax and written warranty are unconfirmed. Do not imply 3M Crystalline or a windshield is included for $399.

## Verified sources
- User's Google listing: https://share.google/1zxap7oRTPHR8zRDK
- Resolved business: Google knowledge ID /g/11rd00w00s; maps CID 17094278152790396890; feature ID 0x808fe712377477f1:0xed3b13691ccacfda.
- Google listing read in the browser: 4.9/5 from 147 reviews; address and phone above. This is a dated snapshot, not a live feed.
- Official homepage: https://www.sosaatintz-ppf.com/
- Official tint page: https://www.sosaatintz-ppf.com/ceramic-window-tint-livermore-ca-bay-area
- Official Instagram: https://www.instagram.com/sosaatintz/
- Website lists 3M Ceramic IR and Crystalline film options and lifetime warranty. Performance percentages and specific film inclusion are not carried into the $399 package.
- Website and Google hours differ; omit hours pending confirmation.
- Real Google review excerpts inspected in the supplied listing: Jimena Rosas (ceramic tint), Raja Jain (tint + PPF), Dennis Roberts (Cybertruck tint). Short excerpts remain attributed to the actual customers and do not imply they bought this promotion.

## Brand and assets
- Original logo downloaded from the official Squarespace site, unchanged. Black background, white car outline and silver script; use black/white/silver styling.
- Genuine photographs downloaded from the official tint page and homepage, optimized locally as WebP. Gallery shows shop work across services, not a promise of $399 package coverage.
- Source URLs and SHA-256 checksums in assets/sources.json. Fonts and license files copied into this folder from the existing reference.

## GHL form CSS handoff
- Read root README, including the complete-replacement CSS and generated-selector lessons.
- Official instructions rechecked: https://help.gohighlevel.com/support/solutions/articles/155000006727
- Select all existing native FORM Custom CSS under Styles → Advanced → Custom CSS and replace with the complete ghl-form.css. CSS only, no style tags. Save and Publish.
- One column: Full Name → Phone → Vehicle Year, Make & Model. Native button text: Claim my $399 tint ↗. Set top margin and outer padding to zero; page supplies outer card.
- Transparent wrappers, dark square fields, light text, silver submit and focus styling. DM Sans if available inside GHL; Arial fallback. Native phone-country controls, consent, CAPTCHA, hidden fields and validation retained.
- Native form `Rm67HH8VkcRpSDQkVsSD` subsequently supplied and integrated in both cards. No GHL account edits or CRM lead submission.

## Delivery scope
- Local static page only; no build step, advertising tags, uploads or production deployment. Native GHL form resources load from the provider.
- Separate working branch: sosaatintz-ceramic-tint-299. Publication is not requested by “serve it on local live.”

## Initial dummy-form local verification (before native integration)
- Page rendered in shared browser at 320, 390, 768 and 1440px. No horizontal overflow; all eight image elements decoded; all form inputs use 16px text.
- Both dummy forms retain required-field validation and show a clear preview response on valid submit. No requests, localStorage or sessionStorage writes occurred.
- Mobile sticky CTA focuses the nearest form panel. Review carousel moves between cards; native FAQ details open.
- All local assets, font paths, internal anchors and unique IDs checked. Runtime requests remain local; no inherited client tracking or embed code.
- GHL CSS checked at 320px and 480px against representative local native markup including the stronger generated text-input selector documented in README. All three inputs compute to #20232b background, #f5f5f7 text and 16px type; phone country-code padding is 104px. Form wrapper is transparent with zero padding/border; silver gradient submit is at least 52px. Hidden fields, consent checkbox, validation and required-field behavior remain present.
- This initial CSS check validated a local stylesheet fixture, before the native form was supplied. It was not a CRM submission test.
- Local server: http://127.0.0.1:7299/ (Python static server rooted in this page folder).


## Native GHL integration — November 3, 2026
- User supplied form `Rm67HH8VkcRpSDQkVsSD`, “Ceremic Tint - 299”, and requested integration.
- Replaced both dummy forms with the exact native form URL and unique frame IDs. One official deferred form_embed.js loader. No dummy form interception remains.
- Adapted the supplied hidden sticky sidebar to visible inline cards; omit the optional data-layout to use the single-load default inline path documented in README. Initial height is the supplied 459px and provider resizing remains enabled.
- Preserved activation, deactivation, cookie-consent, native validation and submission. No advertising tags, parent thank-you redirect, GHL account changes or real lead submissions added.

- Native integration verified in isolated headless Chrome at 390px and 1440px: both frames visible, provider resizes each to 468px, no page or widget horizontal overflow, one embed loader and zero dummy forms.
- Actual published native fields: Full Name, Phone, Car Detail?, Email; button: “Claim my $299 tint ↗”. All four native inputs render with #20232b backgrounds and #f5f5f7 text, confirming the matching CSS is already in the published widget.
- No form filled or submitted. Rendering checks do not verify CRM delivery. Local QA details are in the ignored qa/native-integration.json.


## Form startup improvement — November 3, 2026
- User reported slow form loading. Shared-browser inspection confirmed both native form documents originally began together (39ms and 41ms after navigation), although the lower form was more than 4,000px down the page. There was no duplicate/reparent reload to remove.
- Moved native-loader preload and preconnections ahead of local fonts and imagery. Warm api.leadconnectorhq.com, link.msgsndr.com, stcdn.leadconnectorhq.com and backend.leadconnectorhq.com. Keep one official deferred loader.
- Hero remains eager. The lower iframe stays mounted in its original slot with its real source in data-src until it is within 1,000px of the viewport. IntersectionObserver starts it once; a quote jump starts it immediately. Browsers without IntersectionObserver load it eagerly; a noscript link opens the native form.
- Do not use native loading=lazy on an already initialized GHL iframe: the SDK temporarily moves unready frames offscreen, which can interfere with lazy loading. Deferring its source instead lets the official iframeLoaded event initialize the frame normally. No SDK reload, explicit data-layout or iframe reparenting.
- Reserve 468px, matching the measured native height, while GHL performs its visibility/resizing handshake. Added a small loading status; it is removed only after the SDK sets the frame visible. No timer pretends the form is ready, and no forced field visibility/cropping.
- Desktop check: one form document at startup, second document only after scrolling to the lower card; one request per frame and one embed loader. Both frames then visible at 468px and remain children of their original slots.
- Mobile at 390px: lower source initially deferred, quote jump focuses the lower card and starts it; both native forms eventually visible/resized, no horizontal overflow, and no duplicate document requests. Fields verified in the browser accessibility tree. Native fields, form ID, consent, validation and submission retained. No form filled or submitted.
- QA evidence: ignored qa/loading-flow.json. Samples were not controlled cold-cache timing benchmarks; no percentage speedup claimed. HighLevel still controls the form's own server response and application startup.


## Netlify publication request — November 3, 2026
- User requested Netlify deployment and a DNS record for sosaatintz.getkoup.com, with DNS added by the user in Hostinger.
- Prepared production canonical and removed local-preview noindex metadata. Added public-only static packaging, Netlify configuration and hosting handoff. Native forms and loading optimization retained.
- Source push/project creation/upload require the explicit yes mandated by the user's global command instructions. No remote mutations performed during preparation.


## Publication approved and Netlify project created
- User replied yes. Created Netlify project sosaatintz-ceramic-tint-299 in sachita007, site ID 3d5740d8-f419-446e-8946-0a3690bc605f; custom domain sosaatintz.getkoup.com assigned.
- User's Hostinger CNAME verified on authoritative, Cloudflare and Google DNS. No DNS account changes performed.
- Source release proceeds through PR to main and local main sync before production upload. Public package excludes local research, tracking notes and browser profiles.


## User tracking and native thank-you flow — November 3, 2026
- User supplied GTM-KW3XR5DF and Google Ads AW-18088371755 and requested a thank-you page, native success-message redirect and redeployment.
- Added the supplied IDs to landing and thank-you pages. GTM uses the standard initialization event and body noscript; consolidated the duplicate gtag initialization. No explicit conversion event because no conversion label was supplied.
- Inspected the published SosaaTintz widget without submitting: location Js9PuizigDvJKsbdeqFB; provider success handler in https://stcdn.leadconnectorhq.com/_preview/CLHgssjH.js emits separate _ud contact data and a frame-specific set-sticky-contacts message. Only the latter is accepted.
- ghl-thanks.js validates provider origin, actual sending iframe, form ID, storage key, submitted frame ID, location and fingerprint, then redirects once to thank-you.html. It does not intercept or alter native submission.
- Branded thank-you page uses original logo, Livermore address/phone, call/back/directions links and the same user tags. Copy confirms receipt of an enquiry, not a booked appointment. Marked noindex.
- Public packaging now includes thank-you.html, thank-you.css and ghl-thanks.js while preserving exclusions for local QA and notes.
- Custom-domain HTTPS now returns HTTP 200 with normal certificate validation; earlier certificate delay has cleared.
- Validation: 38 isolated redirect checks passed, covering both card IDs, duplicate success, wrong origin/source/form/frame/storage/location, empty or non-string fingerprints, contact-data and load/resize/error messages.
- Browser fixtures using the native iframe origin confirmed hero and lower success messages each reach thank-you.html. All analytics and CRM traffic blocked during simulations; no real lead submitted. Thank-you layout inspected at 320, 390 and 1440px with no overflow, correct phone/directions, one GTM startup event and one Ads config per page.
- Public release package includes 20 files and resolves both pages' assets. Correct tags/IDs present once; no inherited client tracking; JS syntax and diff whitespace checks pass. Production verification follows PR merge and deployment.


## Offer update — November 4, 2026
- User requested replacing the existing live $299 offer with $399, keeping the same page/domain. Updated every landing-page price, CTA, package/FAQ mention, metadata and thank-you copy.
- Existing source folder and Netlify project retain their historical -299 names to preserve the requested in-place update, hosting, DNS and form integration. This is not a second campaign/page.
- Tracking IDs, native form ID, success-message guards and loading behavior retained. Native iframe button copy is owned by GHL and checked separately.

- Native button verified still says Claim my $299 tint ↗. GHL editor requires sign-in in this session. User explicitly chose “Leave the GHL button for me”; native GHL form/account edits are excluded from this update. User will change/publish that button separately.
- Static package validated: 14 new-price mentions on landing page, two on thank-you; zero old-price mentions in either HTML page; tracking IDs and success listener preserved.

## Offer coverage (2026-11-07)

User confirmed the tint offer covers the **side windows + rear windshield** (front windshield not included), matching the Tint Lab page. Shown under the hero price, in the quote price block, the offer FAQ, reason card, fine print and meta description.
