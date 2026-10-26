# Power Pro Studios — $599 10-Year Ceramic Coating

Research date: 2026-10-26. Netlify publication authorized by user.

## Client and offer
- Client: Power Pro Studios, Colorado. The supplied Google share URL resolves to a search for Power Pro Studios.
- User-approved campaign: **10-Year Ceramic Coating only $599**.
- Target audience: Denver-area car, truck, and SUV owners seeking gloss, easier cleaning, and long-term paint protection.
- Website: https://www.powerprostudios.com/
- Ceramic service: https://www.powerprostudios.com/ceramic-coating
- Google business link provided by user: https://share.google/DI2ra1Foxu9KYxyn5
- Instagram: https://www.instagram.com/power_pro_studios/
- Phone: (720) 605-4910, displayed throughout the official website and corroborated by business listings. One website header href has a different number; use the repeatedly displayed number.
- Address discrepancy: official site lists 15210 Edna Dr, Brighton, CO 80603; a Google-related directory lists 10475 Irma Dr, Unit 17, Northglenn, CO 80233. User confirmed the Northglenn address. All page address/directions copy uses 10475 Irma Dr, Unit 17, Northglenn, CO 80233.
- CTA: call/text the verified public number; no lead form or submission endpoint provided. User approved call/text buttons for this preview. The user subsequently supplied the Power Pro GHL form, now embedded in both claim sections; call/text remain alternatives.

## Structure references
Inspected existing `detailnow-taylor-ceramic-coating-599` and `coast2city-ceramic-coating-499`. Preserve their order and layout: sticky header; photographic split hero with offer left and contact card right; four-column trust band; four benefit cards; dark photo/process split; five reasons; four-photo portfolio; Google review section; repeated split offer/contact CTA; FAQ; three-column footer; fixed mobile CTA.

## Branding and content
- Actual logo downloaded from Power Pro Studios' website.
- Official site CSS defines primary brand blue RGB(0,87,225), #0057e1, with black, white and gray. Use these colors, with a lighter blue on dark surfaces for legibility.
- Helvetica/Arial style sans serif, matching the official site's typography.
- Content paraphrased from the ceramic page: paint decontamination and correction before coating; application in a controlled environment; hydrophobic surface; UV/contaminant resistance; enhanced gloss and easier cleaning.
- Do not claim scratch-proof, rock-chip protection, guaranteed resale value, Carfax registration, or any other client's certifications.
- The official site lists 2-, 6-, and 9-year tiers. The 10-year $599 campaign is user supplied. Do not invent coating brand, warranty coverage, mandatory upkeep, promotional expiry, crossed-out price, or free add-ons. Package-specific prep and warranty terms are to be confirmed with the shop.
- Do not invent reviews or copy another client's reviews. Include the Google review section linking to the supplied listing unless primary-source reviews can be verified.

## Source records
- https://www.powerprostudios.com/ — logo, palette, contact information, portfolio source images.
- https://www.powerprostudios.com/ceramic-coating — service/process facts and illustrative coating photography.
- https://cleancarwashla.org/place/power-pro-studios-74700 — secondary evidence of Northglenn address; not used for ratings or testimonials.

## Downloaded assets
- `logo`: https://static.wixstatic.com/media/12bff0_a9a567be27c74abf97a86b36d3fd9970~mv2.png
- `car-01`: https://static.wixstatic.com/media/12bff0_6096bbd23b2f40379bfb98f4b67323f2~mv2.jpg
- `car-02`: https://static.wixstatic.com/media/12bff0_27554f8966b34384b2f92fbcd13b432e~mv2.jpg
- `car-03`: https://static.wixstatic.com/media/12bff0_7991aaec6f664975a04c08d0e8a0d541~mv2.jpg
- `coating-application`: https://static.wixstatic.com/media/12bff0_55fa6a61752e4f70aad95c160e773a3a~mv2.jpg
- `coating-01`: https://static.wixstatic.com/media/8e7824_a891d0c4675c45e2b04db83b921454b5~mv2.jpg
- `coating-02`: https://static.wixstatic.com/media/8e7824_55b106a3c3ac455484cf131a22d54313~mv2.jpg
- `coating-03`: https://static.wixstatic.com/media/8e7824_dd163c7d4574429a85ee6b549389de05~mv2.jpg
- `hero-source`: https://static.wixstatic.com/media/8e7824_de046d32ae7844ceb15e4aae013802bd~mv2.jpg

## Review treatment and local preview
- Verified the supplied business in Google Search and Google Maps through the browser on 2026-10-26: **4.8 / 5 from 166 Google reviews**. The page dates this snapshot.
- Added seven real five-star review excerpts, with the corresponding Google profile images: Kirk Ramsey, Alonzo Botello, Michelle Valle, Anselmo Rodriguez, Cherry Hill Blooms, Kevin Valdez, and Maria Martin. Excerpts are at most 25 words per reviewer and link to their source.
- Six cards refer to ceramic coating work (some include other packages). Maria Martin’s carousel card shows her paint-correction review and three photos actually attached to that review. The attribution identifies them as customer paint-correction photos.
- Google profile images, review links, source image URLs, and verification date are recorded in `google-reviews.json`. All displayed images are downloaded to this page’s own `assets/` folder. No unrelated customer photo is assigned to a reviewer.
- Primary listing: https://share.google/DI2ra1Foxu9KYxyn5
- Maria Martin review and attached photos: https://maps.app.goo.gl/CibMQ9NS9xABJwA96
- Kirk Ramsey review: https://maps.app.goo.gl/FjppXccWUivrsXD99
- Portfolio uses three vehicle images from the official homepage and one clearly described application image from the ceramic service page. No other client’s vehicles or reviews are used.
- Start locally: `python3 -m http.server 5990 --bind 127.0.0.1 --directory power-pro-ceramic-coating-599` from the repository root.
- No build step, external font service, or runtime dependencies.

## Verification
- Browser checked at 1440, 1024, 768, 390, and 320px widths: all images loaded, no horizontal overflow, no JavaScript errors, no external runtime requests.
- FAQ toggles, in-page anchors, telephone/SMS destinations, and content without JavaScript checked. No call or message was sent.
- Desktop and mobile screenshots visually reviewed; small-screen heading spacing corrected.
- Local asset paths verified; `node --check site.js` and `git diff --check` passed.
- QA tooling and screenshots are local-only in ignored `.qa/`; not needed to run the page.

## GHL form kit and reference inspection
- Read HighLevel’s official documentation for Form Builder → Styles → Advanced → Custom CSS, HTML elements, and external embeds.
- Inspected the actual published GHL form used by the Detail Now reference page in Chrome. It has three required fields: Full Name, Phone, Car Details; light gray inputs; a full-width “Claim My $599 Coating ↗” button; and a dark card. No fields were filled or submitted on that business’s form.
- Inspected native markup and computed styles: `#_builder-form`, `.hl_form-builder--main`, `.ghl-form-wrap`, `.form-field-wrapper`, `.form-builder--item`, `.field-label`, `.form-control`, `.countryphone`, `.form-builder--btn-submit`, `button[type="submit"]`, and nested `.button-text` rich text.
- Revised Power Pro’s kit to match that three-field arrangement and spacing. Light #e9ecef fields, #111926 card, #0057e1 button, Arial/Helvetica typography. Controls are 54px high and the button 52px. Input text is 16px for mobile readability.
- The CSS removes default GHL outer gutters/border without clipping the iframe, preserving room for native validation and dynamically added content. It explicitly overrides nested button-label colors.
- Deliverables: `ghl-form.css`, optional `ghl-form-header.html` and `ghl-form-footer.html`, `ghl-form-setup.html` with copy/download controls, and `ghl-form-preview.html` with local sample markup.
- Use native GHL fields and the native submit button; HTML snippets are decorative content, not replacement form inputs. Do not duplicate the header/footer when the landing-page card already contains that copy. Keep configured consent/terms/CAPTCHA elements.
- The preview has no submission endpoint, sends no information, and does not store entered values. The supplied native Power Pro GHL form is now embedded on the landing page. Lead delivery and the post-submission action are not tested because no lead was submitted.
- No reference client’s form ID, embed script, lead destination, or tracking was installed on the Power Pro page.
- Official CSS placement: https://help.gohighlevel.com/support/solutions/articles/155000006727-how-to-add-custom-css-to-forms-surveys-and-quizzes-
- Official HTML elements: https://help.gohighlevel.com/support/solutions/articles/155000007400-html-editor-security-validation
- Official embedding: https://help.gohighlevel.com/support/solutions/articles/155000004524-embedding-highlevel-forms-on-non-highlevel-websites

## Native GHL embed integration
- User supplied form `JAahMoKthyRlpg2Fts3w`, named Ceramic Coating (Google), on 2026-10-26.
- Replaced temporary call/text-only blocks in the hero and lower quote cards with this native iframe. Kept call/text alternatives and the Northglenn address. Primary offer links now lead to the hero form.
- Added the official form embed script once, preserved all supplied activation and cookie-consent settings, and gave repeated instances unique DOM IDs. Height begins at the supplied 434px and remains under GHL’s resize control.

## Review structure correction
- Compared the complete review markup, base styles, review-variants.css, and review-variants.js in both Detail Now and Coast 2 City.
- Replaced the two-row review grid and separate photo feature with their native horizontal carousel: rounded white cards, neighboring-card peeks, scroll snapping, side arrow controls, review counter, and the same desktop/tablet/mobile breakpoints.
- Reused the layout code by copying it into this page’s own files, with Power Pro colors and only Power Pro review content.
- All seven verified excerpts and corresponding profile images remain. Maria Martin’s three attached customer photos now appear inside her review card. No unrelated image is assigned to another reviewer.

- Verified the carousel’s Next button advances its range counter (1–3 / 7 to 2–4 / 7). At 390px, the page has no horizontal overflow, shows one complete 290px card with neighboring peeks, and loads all review images.
- Removed native lazy loading from the lower GHL iframe: the official embed runtime initially places frames off-screen, which can prevent a lazy frame from ever loading. Both instances now follow the supplied embed’s normal loading behavior.

## Coast 2 City form/call layout correction
- Compared Coast 2 City’s hero, form cards, lower quote card, and pinned mobile CTA markup.
- Removed the call/text fine print and address row from beneath the hero form, plus the repeated contact/address block beneath the lower form. Removed the extra offer eyebrow/shield from the hero card.
- Both cards now contain only an offer heading, helper sentence, and the supplied native GHL form. Each uses a local wrapper and GHL-controlled height; no client-specific clipping offsets were copied.
- Hero call button displays (720) 605-4910 and opens the phone dialer, like Coast 2 City. The mobile bar follows its single quote-button structure.
- Review photo explanation: only Maria Martin’s attached vehicle photos were verified. The other six cards retain their real Google profile images; no additional review photos were claimed or added.

- Confirmed both hero and lower native GHL submit buttons are visible after switching to Coast 2 City’s standard eager iframe attributes. Hero iframe resized to 382px. No lead was entered or submitted.

## Additional Google photo review check
- Reopened the primary Google Maps listing and searched reviews for `ceramic`, scrolled to the end of the results, then checked `coating`.
- More car-photo reviews do exist: Elias Arriola (ceramic window tint), Shay S (window tint), Maria Cervantes (truck review; service not confirmed from the collapsed text), Hayden Sluss (window tint), Kyah Shamari (window tint), Esteban J (window tint), and E Carr (window tint).
- The completed coating reviews checked (Kirk Ramsey, Alonzo Botello, Michelle Valle, Anselmo Rodriguez, Cherry Hill Blooms, Alex Perez, Kevin Valdez) showed no attached review-photo controls. Gary Molden describes booking/getting a coating; no attached photos were shown. Maria Martin’s photos are of paint correction before a planned coating. This is a verified-result limitation, not a claim that no coating photos exist anywhere.
- Checked Alonzo Botello’s separate public Photos tab because his profile lists 18 photos. The photos displayed belong to Meineke Car Care Center and The Wine Tour, not Power Pro; they were not used. Source: https://www.google.com/maps/contrib/117966080282024395642/photos
- Primary source: https://share.google/DI2ra1Foxu9KYxyn5 . No service labels or photo attribution on the landing page were changed as part of this question.

## Uniform review cards
- At the user’s request, removed Maria Martin’s vehicle-photo collage from the displayed carousel so all seven cards use the same text-and-profile-image layout. Retained the genuine reviewer profile images, review excerpts, ratings, and source links.

## Netlify publication
- User requested Netlify hosting, removal of Powered by Netlify branding, and external DNS instructions. User chose `powerpro.getkoup.com`.
- Created the isolated `power-pro-ceramic-coating-599` Netlify project and assigned the chosen hostname. No existing Netlify project or unrelated DNS record was modified.
- Disabled the project-wide Powered by Netlify badge in Netlify settings.
- Added `build.mjs` and `netlify.toml` to package only public static files. Private/local QA, research, and the GHL styling kit are excluded from the upload. Removed the local-preview noindex tag and set the canonical URL to the chosen custom hostname.
- Hosting details and the exact CNAME record are in `hosting.md`.

## Thank-you page
- User requested a thank-you page and automatic parent-page navigation after a successful native GHL submission.
- Added a Power Pro-branded `thank-you.html` with request confirmation, a phone CTA, and a link back to the offer. It does not claim that an appointment has been booked.
- Added origin/source/form validation for GHL’s current success message format, following the primary `form_embed.js` runtime and the existing landing-page implementation without copying other clients’ identifiers or tracking.
- Added both the redirect script and thank-you page to the isolated Netlify publish package.
- Verification: 18 isolated message-handler checks passed, covering both iframe instances and both success payload formats, duplicate-message handling, and rejection of unrelated messages/origins/windows/forms. These tests use synthetic messages and do not submit a real lead.
