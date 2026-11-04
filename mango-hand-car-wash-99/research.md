# Mango Hand Carwash — $99 Interior + Exterior Detail

## Client and source
- Client: Mango Hand Carwash / Mango Hand Car Wash, Houston, Texas.
- Source landing page: https://mangohandcarwash.com/hand-car-wash-new-lp/
- User-supplied Google Business Profile: https://share.google/3DIqCQqzxVgTvKx6Z
- User-supplied phone: (346) 347-2866. This overrides the old numbers on the source website.
- Source inspected November 3, 2026 using a browser (direct page fetch returns 403).

## Offer and audience
- $99 Interior + Exterior Detail, including Hyper Ceramic Wax, exactly as advertised on the supplied page.
- Source hero calls this a Summer Special. Preserve the price and package, but use season-neutral wording; no invented expiration or urgency.
- Audience: Houston daily drivers and owners of higher-end vehicles who want careful hand washing, a cleaner cabin, and a glossy exterior.
- Primary CTA: claim the $99 offer via the future Mango-specific GHL form. Until supplied, the form is a visibly unavailable preview and telephone booking remains usable.
- Secondary CTA: call (346) 347-2866; visit the supplied Google Business Profile.

## Included services, transcribed from source
Interior:
- Full interior wipe-down: dashboard, console, door panels, trim, interior surfaces.
- Crevice blowout using compressed air in vents, seams, cup holders, tight areas.
- Full vacuum: seats, carpets, floorboards, under-seat areas.
- Floor mats removed, cleaned and reinstalled.
Exterior:
- Detailed hand wash with microfiber towels.
- Interior and exterior window cleaning.
- Tire dressing on all four tires.
- Hyper Ceramic Wax for gloss and paint protection.

Other services listed by client, quoted separately: hand car wash, ceramic coating, paint correction, carpet & seat shampoo, interior detailing. Hyper Ceramic Wax is part of the $99 detail; it is not the separate ceramic coating service. Do not imply shampoo or paint correction is included in the $99 offer.

## Design and implementation
- Use the client's original logo. User's wording briefly says not to use their logo but repeatedly asks for their same logo; interpret as using the existing brand logo, not inventing a replacement.
- Brand source colors: orange #ff7f00, black, white, pale gray. Source heading font: Alata; body: Inter.
- Reuse the agency's conversion structure: hero + quote card, trust strip, package/benefits, service gallery, reviews, FAQs and final CTA; all assets and code isolated in this folder.
- Use the client's own source photography; keep original logo intact.
- Light transform/opacity entrance motion, touch-friendly layouts, reduced-motion support; no motion-dependent content visibility.
- Existing landing pages reviewed for structure only: tint-lab-tint-199 and aa-quality-auto-spa-tint-299. No tracking or client-specific content copied.

## Reviews
- Client's website embeds Google reviews through Trustindex and showed 286 reviews on inspection. Do not use an unverified numeric rating.
- Selected short excerpts: Teara Walls (return visits), Jacqueline Duong (car feels like new), Madison Free (helpful service).
- Attribute excerpts to Google reviews shown on the client's source page; link to supplied profile. Reviews describe general experiences and may concern different packages.

## Pending before publication
- Mango-specific GHL form embed/link has not been supplied. Do not send leads to the old WordPress form, another client or an invented endpoint.
- No advertising tags supplied. No tags copied from original website.
- Confirm any package conditions/taxes and current offer availability with the shop. No unsupported starting prices, savings, warranties, urgency, opening hours, or turnaround guarantees.

## Google Business Profile verified in browser
- Address: 6166 Westheimer Rd, Houston, TX 77057.
- Phone: +1 346-347-2866 (matches user).
- Live profile showed 4.7 / 5 from 442 Google reviews on November 3, 2026; the older source-site widget’s 286-review count is stale. Use the profile’s current figures.
- Review excerpts kept short (25 words total). Selected review cards on source displayed five stars.

## Asset provenance
Original logo: `/wp-content/uploads/2025/12/Mango-Hand-Carwash-Logo-Small.png` from Mango website.
Hero process photo: `/wp-content/uploads/2025/12/worker-using-air-powered-tool-during-interior-auto-2025-03-10-03-00-25-utc.jpg`.
Interior: `/wp-content/uploads/2026/05/Interior-Detail-Finished-scaled.jpg`.
Shop/gallery photos: `/wp-content/uploads/2025/12/IMG_3052-rotated.jpg`, `IMG_3045-rotated.jpg`, `IMG_2925-rotated.jpg`, `IMG_3081-rotated.jpg`.
Photographs resized/converted to WebP without changing depicted work. Source imagery is not claimed to show only the $99 package.
Alata and Inter Latin fonts downloaded from Google Fonts and served locally.

## Final local verification
- Static page served at http://localhost:4173/mango-hand-car-wash-99/ using Python’s local HTTP server.
- Chromium checks at 320, 390, 768 and 1440 px: no horizontal overflow, all photos/fonts loaded, no JavaScript page errors.
- Offer CTAs update the anchor and focus the quote card below the sticky header.
- Gallery opens, Escape closes it, and FAQ disclosure controls expand.
- Reduced-motion settings remove entrance animations and smooth scrolling; page content stays visible without JavaScript.
- Default-motion mobile check confirms the 0.7-second hero entrance and viewport-triggered section motion work.
- Desktop and mobile screenshots visually reviewed; shop image aspect ratio corrected.
- Results and screenshots in `qa/`; temporary browser tooling removed.
- GHL lead delivery is intentionally not tested: no Mango form embed is configured.

## Design refinement requested November 3, 2026
- Keep the original section order, original Mango logo, orange/black palette and $99 offer. Refine card radii, warm neutral surfaces, orange heading underline and button contrast.
- Promote numbered call buttons throughout the hero, package, gallery, care, FAQs and final offer. Service rows also show the number. Mobile bottom bar includes a numbered call CTA and a compact bottom-form link.
- Add a second matching form card to the final offer section. Both form previews remain explicitly unavailable pending Mango’s GHL link, requested from the user. Do not route leads elsewhere.
- Replace text-only review cards with three verified Google review excerpts and their matching customer photographs, sourced directly from the user-supplied Google Business Profile. All three source cards displayed five yellow stars.
- S King: 3 attached photos; show white SUV outside shop as main, plus cabin and shop thumbnails. Excerpt: “Car looks great and feels soooo clean!”
- Raumie Faraj: 3 attached photos; show the SUV and its wash-bay views. Excerpt: “Very detailed and handled my car with care and professionalism.”
- Mark Cunningham: 4 attached photos of the black Audi. Excerpt: “Super friendly service and attention to detail.” Label the review as a separate ceramic coating service.
- Each reviewer’s name links to the observed Google contributor review URL. Google review IDs, source image URLs and source text are recorded in `qa/google-review-sources.json`. Photos are local WebP files; never pair them with another customer’s review.
- Modal navigation stays within the selected customer’s photo set. Original shop-gallery photos form their own group. Previous/next buttons and left/right arrow keys navigate; Escape closes.

## Mango GHL custom CSS handoff
- User asked to finish the review-photo/design changes first and provide CSS to paste into GHL, following the README.
- Read README’s GHL handoff and correction lessons; consulted official HighLevel docs November 3, 2026:
  - https://help.gohighlevel.com/support/solutions/articles/155000006727
  - https://help.gohighlevel.com/support/solutions/articles/155000004090-right-sidebar-in-form-and-survey-builder
- Provide one complete replacement file: `ghl-form.css`. Transparent form wrappers, #faf9f6 fields, #20201c text, #dcd7ce borders, #ff7f00 button/focus, 6px corners, 16px input text. Input selectors outrank the GHL generated important text-input rules discussed in README. Preserve native phone controls, consent, CAPTCHA, validation, submission.
- Single-column Full Name, Phone, Vehicle Year/Make/Model; native submit label `Claim my $99 detail ↗`. Inter if already loaded in iframe; otherwise Arial. No font imports or third-party tracking added.
- Do not edit the user’s GHL account. Published Mango widget/CRM delivery testing remains pending its embed; locally verify against representative GHL markup and record that limit.

## Refinement QA
- Updated Chromium checks pass at 320, 390, 768 and 1440 px: no page overflow, no broken images or JavaScript page errors, and 16 telephone links all display the supplied number.
- Hero and bottom form links focus their matching cards below the sticky header. Two distinct form slots/unique input IDs are present.
- Verified all three review photo groups, previous/next buttons, arrow-key navigation, Escape and focus restoration; customer photo sets never mix. Shop gallery remains its own four-photo set.
- GHL CSS checked against representative markup at 320 and 390 px, including generated important input defaults: field backgrounds #faf9f6, text #20201c, 16px inputs, 6px corners, orange focus/submit, transparent zero-padding/zero-border wrappers, 104px separate-dial-code input padding. Consent remains visible and native hidden fields remain hidden.
- Default mobile hero animation runs. Desktop and mobile screenshots visually reviewed; service-row call labels corrected to a restrained size. Updated evidence saved to `qa/validation.json`, `qa/desktop-full.png`, `qa/mobile-full.png`, `qa/ghl-css-fixture.png`. The fixture is a local styling check, not a live Mango widget/CRM test.
- Readme updated with complete replacement CSS instructions. No GHL account changes, live form publication or lead submission performed.

## Offer placement and expanded review carousel
- User requested moving the second offer above the bottom and using the same scrollable, partial-card, soft-shadow review treatment as other agency pages.
- Moved the complete second $99 offer/form section after the care section and before reviews. Hero form remains in place; second slot is now `#ghl-form-slot-second`, and all existing `#quote` links still target its card.
- Matched the Black Sheep review-carousel structure: three full desktop cards / two tablet / one mobile with partial neighboring cards, soft edge blur, card shadows, native swipe/scroll snap, previous/next buttons, keyboard arrows, and a position indicator. No autoplay or duplicate review clones.
- Google profile showed 442 reviews. The first three were a selected subset, not the total found. Expanded the page to six reviews with 15 matching customer photographs. The full-review link remains available.
- Additional verified five-star reviews: Omar BaniHani (one attached wash-bay photo), Janet Sanders (one truck photo), Yvonne Nwi (three Range Rover/interior photos). Quotes are short excerpts; attribution links lead to the observed Google contributor reviews. No claim these all received the $99 package.
- Additional source evidence in `qa/google-review-additional-sources.json`; source photos downloaded locally and visually checked. Existing quote attribution and ceramic-coating distinction preserved.

## Middle-offer / review-carousel QA
- Chromium verification passed at 320, 390, 768 and 1440 px, with no document overflow, broken image loads or JavaScript errors.
- The second offer starts at 51.8–55.4% of page height across these widths: after the care section and before reviews. Its quote anchor/focus target passes.
- Six review cards / 15 matching customer photographs / two form slots confirmed.
- Verified next/previous controls, disabled endpoints, partial-card peeks, accurate position output (one/two/three visible by viewport), arrow-key navigation and all six lightbox photo groups, including single-photo reviews.
- Updated full-page screenshots reviewed. Carousel screenshots in `qa/mobile-reviews-peek.png` and `qa/desktop-reviews-peek.png` show the partial neighboring cards and soft edge shadows. Evidence: `qa/carousel-validation.json`.
- GHL custom CSS remains unchanged. Native embed integration is still pending; no lead submission, account change or publication performed.

## Native GHL integration, desktop offer sizing and single mobile action
- User supplied form `EBJyMhnQ0k8bKoVhscGu`, “Wash (Google) - 99,” including the official embed script.
- Adapted the supplied hidden sticky-sidebar layout into two visible inline cards, matching the approved structure. Distinct iframe/layout IDs for hero and middle placement; one official embed script. Original form identity and cookie-consent attributes retained.
- Published widget inspected directly: Full Name, Phone, Car Details, native `REQUEST FREE QUOTE` button. The user has already published the Mango CSS: #faf9f6 backgrounds, #20201c text, 16px inputs, orange submit, transparent outer wrappers with no border or padding.
- Removed preview forms and handlers. No account edits, native label changes, remote CSS publication or lead submission performed. Native validation, phone-country controls, configured CAPTCHA and response behavior remain GHL-owned.
- Laptop/desktop price size increased using min-width:1024px rules: hero $99 136–170px; middle $99 146–180px, with proportionate dollar symbols and package text. Mobile prices retain their existing 89/97px hero and 100px middle sizes.
- Replaced the two-button mobile bar with exactly one full-width fixed `Request Quote` action. It selects the closer quote card, scrolls below the header and focuses it; reduced-motion preference is respected. Section call buttons continue to show (346) 347-2866.
- No new thank-you redirect, conversion pixel, simulated success, or local lead storage. Official native SDK handles iframe sizing.

## Native form and offer verification
- Checks passed at 320, 390, 768, 1024, 1366, 1440 and 1920 px. Both native GHL iframes load and show all three fields and submit button; one SDK script; no separate sidebar launcher; no document or iframe horizontal overflow.
- Actual published widget styles verified in each iframe, not only a fixture: #faf9f6 input backgrounds, #20201c text, 16px inputs, native required-field metadata, transparent zero-padding/zero-border wrappers. Submit stays within the resized iframe; SDK observed height 369 px.
- Mobile prices unchanged: 320 px viewport hero 89 px / middle 100 px; 390 px viewport hero 97 px / middle 100 px. Laptop 1366 px: hero 150.26 px / middle 157.09 px. Desktop 1440 px: hero 158.4 px / middle 165.6 px.
- Exactly one mobile sticky Request Quote link; it targets the hero card from the top and the middle card nearby, preserving header clearance. Both native forms stay visible and retain their fields after jumps.
- Native form screenshots visually reviewed after rendering settled. Initial native loading/repaint can show blank fields momentarily; no forced visibility, artificial loading timeout, or CSS crop added.
- Evidence: `qa/ghl-integration-validation.json`, current desktop/mobile hero and full screenshots, and `qa/mobile-native-fields.png`. No contact data filled and no test lead submitted. No CRM delivery or successful-submit behavior claimed.

## Netlify publication request
- User authorized Netlify production deployment and normal PR merge without another approval question, requested badge removal, and will add Hostinger DNS themselves.
- Corrected target hostname: `mango.getkoup.com` (no `go.`). The original getcook.com hostname used Afternic DNS; user explicitly corrected it to getkoup.com.
- Created Netlify project `mango-hand-car-wash-99`, site ID `c15d6e87-820b-4995-892c-21876664c128`, in existing sachita007 team. Set custom_domain to mango.getkoup.com and built_with_badge_enabled to false; verified API response.
- Default URL: https://mango-hand-car-wash-99.netlify.app/ . Custom-domain DNS handoff: CNAME `mango` → `mango-hand-car-wash-99.netlify.app`, TTL 1800, in the getkoup.com zone. No Hostinger/DNS edits performed.
- Added isolated static packager and Netlify config. All 35 public files resolve in the local packaged preview; internal notes, QA and GHL CSS handoff are excluded. Font licenses added from official Google Fonts sources.
- Source publication follows feature-branch PR → normal GitHub merge → fetch/fast-forward local main → build/upload from that merged main. No direct main push, force push, admin override or branch-protection change.
- Live release and badge verification evidence is recorded in ignored qa files. Custom-hostname HTTPS is dependent on the user's CNAME update.

## Live form startup performance correction
- User reported slow loading after the initial release and requested improvement/redeployment.
- Cold Chromium network trace on the initial production page reproduced four native GHL form document requests: each of the two iframe elements loaded twice. The official loader’s optional explicit INLINE-layout branch reparents an already loaded iframe into a generated wrapper, causing the second load. This matches the independently documented 719 fix already in this repo.
- Removed optional `data-layout` from both Mango frames so the native default-inline path keeps each iframe mounted in its original slot. Form IDs, unique frame IDs, consent attributes, fields, validation, CAPTCHA and native submission remain unchanged.
- Moved GHL preconnections and a high-priority native-loader preload ahead of fonts/media; added the native backend preconnection. Frame slots reserve 369 px during the native sizing handshake, with visibility controlled by GHL. No forced early paint or artificial loading timeout.
- After-change mobile trace: exactly two form document requests and two load events over twelve seconds (one per card), versus four/two per card before. Both three-field forms render with no overflow/errors. Observed readiness was about 3.2s locally versus 5.4s on the prior live version; host/network differences mean this is diagnostic evidence, not a controlled latency guarantee.
- Independent checks at 320 and 1440 px confirm one document load per card, original DOM parents retained, visible native forms, phone-country controls, one sticky CTA and correct quote navigation. No test lead submitted. Evidence: `qa/form-loading-profile.json` and `qa/single-load-validation.json`.
- Hostinger authoritative DNS plus Cloudflare and Google resolvers now return the requested CNAME for mango.getkoup.com. User’s actual saved TTL is 14400 seconds. Certificate activation is handled separately from this form change.


## Requested local revisions — 2026-11-04
- Replace the hero headline with “The Best Hand Car Wash in Houston, TX.”, matching the supplied client screenshot. Keep the $99 offer and remaining page structure; size the longer headline to fit phones and desktops.
- Add Mango-branded `thank-you.html` with request confirmation, $99 package reminder, next steps, shop address, call button and a return link. Clarify that the team confirms the visit; the form itself does not book an appointment.
- Connect both native GHL frames to the local thank-you page through the verified successful-submit postMessage. See tracking.md for exact form, account and message validation.
- Local review only. Do not push, merge, deploy or edit GHL account settings for this request. Local source: `http://localhost:4173/mango-hand-car-wash-99/`; local confirmation: `http://localhost:4173/mango-hand-car-wash-99/thank-you.html`.


## Authorized release and form startup — 2026-11-04
The user subsequently requested faster form loading and redeployment, authorizing publication of the reviewed headline and thank-you flow. Prioritize the first native form, load the lower form near its section, remove page-authored initial hiding and allow the official SDK to initialize asynchronously. Keep fields, phone controls, CAPTCHA, consent and submissions native. See tracking.md for trace observations and verification limits; no lead was submitted.
