# A&A Quality Auto Spa — $299 Ceramic IR tint

Researched 2026-10-15 before page implementation.

## Ceramic tint content update — 2026-10-16
- User requested replacing the screenshot's “What to expect” installation checklist with the offer-and-details approach at https://tamiami.getkoup.com/ and a local preview. Clarified that ceramic tint must be explicit in the heading and content.
- Matched the reference's ceramic-tint details section with the heading “Ceramic tint. The details matter.” Wrote A&A-specific copy in the existing six-card layout: $299 ceramic tint sedan offer, HITEK Ceramic IR film, Richmond shop, shop gallery/customer reviews, lifetime film warranty, and ceramic tint aftercare.
- Rechecked https://aaqualityautospa.com/automotive-window-tinting before editing. Ceramic IR is $299 for sedans, up to 75% infrared rejection at 5% shade, 99% UV protection, non-metallic and signal-safe, with a lifetime manufacturer warranty. Other vehicles are quoted individually.
- Kept all claims specific to A&A's Ceramic IR package. The reference's $399 price, included windows and Naples details do not apply to A&A.

## Form placeholder update — 2026-10-16
- User requested matching the Tamiami form, removing the vehicle-type selector and making the forms dummy until they supply GHL.
- Inspected the reference form: Full Name, Car Details, Phone, marketing consent and preview button. Matched the three enquiry fields and preview button at both A&A positions; consent setup is deferred to the client’s GHL embed.
- Removed SMS composition and submission behavior. Preview buttons do nothing and a visible note explains the placeholder state.

## Client and offer
- Client: A&A Quality Auto Spa (the business behind the user's Google share link; not a client named “End A”).
- Address: 1810 First Oaks St, Suite 190, Richmond, TX 77406.
- Phone / text: (832) 993-8411. Email: aaqualityautospa@gmail.com.
- Service: automotive window tint, HITEK Ceramic IR.
- Offer: $299, as requested by the user. The official website confirms Ceramic IR at $299 **for sedans**; SUVs and trucks are quoted by vehicle. Exact glass coverage, old-film removal and tax are not confirmed; the page asks visitors to confirm coverage with the shop and does not invent inclusions, savings or deadlines.
- Audience: Richmond and Fort Bend County drivers who want lower cabin heat, less glare, UV protection and privacy.
- Selling points verified on the official tint page: up to 75% infrared rejection for Ceramic IR (at 5% shade), 99% UV protection, non-metallic film, lifetime manufacturer warranty, professional installation, typical 2–4 hour appointment / 3–5 days before rolling down windows.
- Primary CTA: on-page dummy enquiry form awaiting the client’s GHL embed. Fields: Full Name, Car Details, Phone, matching the Tamiami reference. No vehicle-type selector. Buttons perform no action; no form values are stored or transmitted. Alternate call and official booking/contact links remain available.

## Sources
- User-supplied Google profile: https://share.google/fkKTXEMhBbJTzeqmd
- Google place ID: ChIJ4TjKFMQfQYYRgHrmWHxgU5g
- Google listing verified visibly in Chrome: A&A Quality Auto Spa, 5.0 from 29 Google reviews. Rating is a dated snapshot, not a live widget.
- Official site: https://aaqualityautospa.com/
- Official tint details: https://aaqualityautospa.com/automotive-window-tinting
- Official booking: https://aaqualityautospa.com/contact
- Profile posts advertise a separate $249 grand-opening promotion. User explicitly requested $299; official $299 Ceramic IR sedan package used instead.
- Google and official website hours conflict (Google shows closing 9 pm; website 7 pm). Hours omitted; visitors call to confirm.

## Structure and brand
- Corrected to use the existing `1taketints-commercial-tint/index.html` / `page.css` as the actual template, following the user's clarification. The first iteration changed too much and has been replaced.
- Preserve its layout and section sequence: header → light photo hero, offer copy left / dummy enquiry right → four-column trust strip → four benefit cards → dark shop story and six reasons → four-image gallery → repo-style Google review carousel → lower quote section with second enquiry panel → FAQ → shop footer → mobile fixed address/CTA.
- Google review carousel uses the existing repo's review-card pattern, also present in Detail Now's page.
- Base stylesheet is copied locally from the 1TakeTints page. Typography, spacing, grids, hero composition and responsive behavior retained. A&A's gold, navy, silver and blue replace the other client's brand colors. A&A's actual logo is local.
- No other client's photos, quotes, film brands, contacts, tracking or submission endpoints copied. No client CRM was supplied; both enquiry positions are non-submitting placeholders awaiting A&A's GHL form.
- No competitor claims or unsupported price comparisons needed for this brief.

## Review handling
- Quotes are short, verbatim excerpts of reviews visibly read on this exact Google listing. Individual sources and photo mapping are recorded in `assets/sources.json`.
- Simon Longer: tint/heat feedback; his actual uploaded gray Ford hatchback photo, never paired with another reviewer.
- Jose Garcia: general shop/customer-service feedback; his actual shop-bay photo, labeled as a shop experience rather than a claim about the $299 package.
- Rosie -, Ryan Clark, Paul Ruffino, Manohar Perumal: text-only cards. No invented portraits or vehicle photos. Rosie explicitly reviewed Ceramic Ultra, which is labeled separately from the advertised Ceramic IR offer.
- Initial badges are typography, not fabricated reviewer photos. Photo captions credit the original reviewer.
- Google review stars visibly consist of five star icons on each selected review.

## Validation after template correction
- Desktop and 390px mobile visual checks completed with the actual 1TakeTints CSS and layout. Two enquiry panels and all six Google review cards present.
- Local resource/anchor/ID checks, JavaScript syntax, folder isolation and git whitespace checks pass. No test enquiry sent.
