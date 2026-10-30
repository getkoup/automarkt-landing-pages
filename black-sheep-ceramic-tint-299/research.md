# Black Sheep Auto Detailing — $299 Ceramic Window Tint

Research date: October 30, 2026.

## Brief
- Client: Black Sheep Auto Detailing, Sunnyvale, California.
- Service: professionally installed ceramic automotive window tint.
- Offer: $299, supplied by the user. Included windows, film product, vehicle eligibility, removal, tax and warranty terms must be confirmed by Black Sheep before booking; no invented coverage or performance percentages.
- Audience: Sunnyvale and Santa Clara Valley drivers seeking a cooler cabin, less glare, privacy and a cleaner appearance.
- CTA: two inline embeds of the user-supplied GHL $299 ceramic tint form; direct call alternative.
- Reference: preserve the section order and responsive structure of `detailnow-ceramic-tint-299`, with independently copied code/fonts and Black Sheep content/assets only.
- Original logo required. Download the existing logo from Black Sheep's official website; do not generate, trace, redraw or recolor it.

## Verified sources
- User Google share: https://share.google/WNLOI7KssYVDi9VTj — resolves to Google search for Black Sheep Auto Detailing.
- Official website: https://blacksheepautodetailing.com/
- Official contact: https://blacksheepautodetailing.com/contact-us
- User-supplied Instagram: https://www.instagram.com/blacksheep_autodetailing/
- Phone: (408) 915-1488; official website contact/footer.
- Address: 1155 Reed Ave, Suite D, Sunnyvale, CA 94086; official website contact/footer. The home page contains an older Willow Ave address in narrative copy; use the contact/footer address.
- Military-owned shop serving the Santa Clara Valley; official website.
- Website explicitly lists ceramic window tint among its installation services.
- Other advertised services: detailing, paint protection film, ceramic coating and paint correction. These are context, not part of this offer.
- Testimonials: short excerpts credited to Robert Coleman, Anthony Magana and Erick Duran, as reproduced on the official website. Link to source; do not invent ratings, aggregate counts or imply they review the $299 promotion.

## Design and asset provenance
- Header/hero, trust strip, benefits, shop story, six reasons, gallery, reviews, lower enquiry, FAQ, footer and mobile sticky CTA follow the DetailNow reference.
- Logo inspected: original circular black/white/silver badge. Use black, white and silver (#d6d8db) throughout; do not recolor the logo. Image source URLs and checksums recorded in `assets/sources.json`.
- Use genuine vehicle photographs from Black Sheep's website portfolio. Avoid the site's explicitly AI-generated car-cleaning stock illustration. Gallery represents shop work; do not claim every vehicle received the $299 tint package.
- Fonts copied locally from the reference with their licenses.

## Delivery and integration
- Static HTML/CSS/JS; no build required.
- No tracking supplied for Black Sheep; no tracking copied from DetailNow.
- User requested GitHub Pages publication. Native Black Sheep form `5peUzH16pwlf56CJZQhz` integrated into both existing enquiry cards.
- Dummy forms and their preview submit handler removed after the user supplied the native GHL embed. Native form submission and success configuration retained.

## Local verification
- Rendered in headless Chrome at 320, 375, 390, 768, 1024 and 1440 pixels; no horizontal overflow.
- Checked dummy form validation and preview-only response, mobile CTA focus, FAQ expansion and review carousel navigation.
- No browser page errors, failed resources, broken images or external network requests during local checks.
- Original logo SHA-256 matches downloaded source bytes; all runtime assets are local to this folder.
- Local desktop and mobile screenshots are in `preview/`.

## GHL custom CSS handoff — October 30, 2026
- Read the root README, including the full-replacement CSS and generated-selector lessons, before creating `ghl-form.css`.
- Rechecked official documentation: https://help.gohighlevel.com/support/solutions/articles/155000006727 and https://help.gohighlevel.com/support/solutions/articles/155000004090-right-sidebar-in-form-and-survey-builder .
- Paste CSS inside the native FORM's Styles / Advanced / Custom CSS. Select all existing form Custom CSS, replace it with the complete `ghl-form.css`, then Save and Publish. No `<style>` tags. Page-level CSS cannot style the contents of the form iframe.
- Single-column layout with top-aligned labels: Full Name → Phone → Vehicle Year, Make & Model. Set the native button label to `Claim my $299 tint ↗` in GHL; CSS does not change field labels or button text.
- Transparent form wrappers, square dark inputs (#20232b), light text, silver focus and silver gradient submit button match the landing page. DM Sans is used if available inside GHL, with Arial/Helvetica fallbacks; page-local fonts are not inherited across the iframe boundary.
- Preserve native phone controls, validation, consent, CAPTCHA and submission. No GHL account changes or lead submissions authorized/performed.
- The user subsequently supplied Black Sheep form `5peUzH16pwlf56CJZQhz`; integration recorded below.
- Browser verification: injected the stylesheet into the published reference widget at 320px, 390px and 550px without submitting. Full Name, Phone and Car Details all computed to #20232b backgrounds, #f5f5f7 text and 16px type, with square corners. Wrapper computed transparent with zero padding/border; button showed the silver gradient and 52px height. GHL's 0.2-second input transition was allowed to settle before assertions. The reference phone field has no active country selector; conditional country-selector rules are retained for Black Sheep if enabled. Preview button copy was changed only in the local browser DOM for the screenshot. This was a reference-widget styling check, not validation of Black Sheep's as-yet-unsupplied form or its CRM submissions.

## Native GHL integration — October 30, 2026
- User supplied form `5peUzH16pwlf56CJZQhz`, “Ceramic Tint (Google Ads) - $299”, and requested integration.
- Replaced both dummy forms with native embeds, using unique inline iframe IDs and one `form_embed.js` script. Adapted the supplied sticky-sidebar layout to INLINE so the form sits within the existing page cards.
- Preserved native validation, cookie-consent attributes, submission and GHL success/redirect settings. No account changes, tracking additions or test lead submissions.
- Integration verified in Chrome at 1440px and 390px: both native frames render Full Name, Phone, Car Detail and Claim Offer controls; provider resizes each frame to 369px; no page overflow or JavaScript errors. No lead submitted. Screenshots saved under `preview/ghl-integrated-*.png`.

## GitHub Pages publication
- User requested publication to GitHub Pages.
- Existing repository Pages source: `main`, root `/`, HTTPS enabled. No hosting configuration changes needed.
- Target URL: https://getkoup.github.io/automarkt-landing-pages/black-sheep-ceramic-tint-299/
- Publish through working branch `black-sheep` and a pull request to `main`; no direct push to `main`.
- Preview screenshots are local QA artifacts excluded from Git by the page-specific `.gitignore`.
- Current status: prepared locally; branch push awaits the explicit confirmation required by the user's global AGENTS.md rule. After approval, push the working branch, create/merge the PR once required checks permit, fast-forward the clean local main checkout, and verify the successful Pages build and live form rendering.

## Netlify hosting request supersedes GitHub Pages
- User requested a fresh main sync, Netlify deployment and DNS instructions for `blacksheep.getkoup.com`.
- Fetched origin and merged `origin/main`; already current at `e06f29a`.
- Added a public-only packaging script and Netlify configuration; source remains plain static HTML/CSS/JS.
- Replaced preview-only noindex metadata with the requested custom-domain canonical.
- Netlify team verified: `sachita007`; site creation pending explicit approval under the supplied global dangerous-command rules.
- See `hosting.md` for publication status and the proposed DNS record. No DNS changes performed.

## Publication approved and configured
- User replied “yes” and confirmed adding the DNS record.
- Created Netlify project `black-sheep-ceramic-tint-299`, site ID `3ff56b19-cdcb-4b33-8ce9-af1e23d6138f`, team `sachita007`, with custom domain `blacksheep.getkoup.com`.
- Disabled the supported platform badge setting; no paid upgrade.
- Verified the user's exact CNAME against `ns1.dns-parking.com` and Cloudflare public DNS. No DNS edits performed by the agent.
- Publication PR, production upload and HTTPS verification follow. This supersedes earlier pending-approval notes.
