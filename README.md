# Client Landing Pages

Landing pages for our agency's clients. Each page is a fully isolated folder, deployed as its own Vercel project.

> **AI agents:** read [`AGENTS.md`](AGENTS.md) before doing anything. It has the full rules (naming, isolation, tracking, deployment).

## Structure

```
LandingPages/
├── AGENTS.md                     # rules for AI agents (Claude, Codex, Cursor…)
├── CLAUDE.md                     # points Claude Code to AGENTS.md
├── README.md                     # this file
└── <client>-<service>[-<offer>]/ # one folder per landing page
    ├── index.html
    ├── assets/
    ├── research.md
    └── tracking.md
```

**Naming:** lowercase and hyphenated, e.g. `test2-tint`, `test2-ceramic-coating-299`, `diamond-auto-ceramic-tint-399`.

**Isolation:** each folder has its own code, assets, research and tracking. Nothing is shared between folders.

## Deploying a page to Vercel

1. Vercel → **Add New → Project** → import this repo.
2. **Root Directory:** pick the page's folder (e.g. `test2-tint`).
3. **Framework Preset:** Other. Leave build command empty.
4. Deploy, then add the client's custom domain under **Settings → Domains** if needed.
5. **Settings → Build & Deployment:** enable *Skip deployments when there are no changes to the root directory*.

Repeat for each folder: one Vercel project per landing page.

> Client work is commercial use, so it needs Vercel **Pro**, not Hobby.

## Pages

| Folder | Client | Service / Offer | Live URL | Status |
|---|---|---|---|---|
| `hp-details-ceramic-coating-499` | HP Mobile Detailing (Dallas–Fort Worth, TX · mobile) | Ceramic coating · $499 10-year | [Netlify](https://hp-details-ceramic-coating-499.netlify.app/) · [Custom domain](https://hpdetails.getkoup.com/) | Netlify hosting (badge disabled; `hpdetails` CNAME pending user DNS, [hosting notes](hp-details-ceramic-coating-499/hosting.md)); Power Pro coating structure; original HP logo; red/black palette with glass panels and smooth motion; HP's own driveway photos; 7 Google photo reviews (5.0 · 198 reviews, checked 2026-11-06); GHL form `oGnO4LrgOwh6ZgCoFWTM` in hero + quote cards, redirects to `thank-you.html` after submit; [complete GHL form CSS](hp-details-ceramic-coating-499/ghl-form.css); no tracking |
| `sosaatintz-ceramic-tint-299` | SosaaTintz (Livermore, CA) | Ceramic window tint · $399 | [Netlify](https://sosaatintz-ceramic-tint-299.netlify.app/) · [Custom domain](https://sosaatintz.getkoup.com/) | Netlify hosting; custom-domain HTTPS and Hostinger CNAME verified; native-success thank-you redirect; GTM `GTM-KW3XR5DF` + Google Ads `AW-18088371755` on both pages; [hosting / DNS handoff](sosaatintz-ceramic-tint-299/hosting.md); Detail Now tint structure; original logo, official shop photos, black/white/silver branding; verified Google review excerpts; native GHL form `Rm67HH8VkcRpSDQkVsSD` in both cards; [complete GHL form CSS](sosaatintz-ceramic-tint-299/ghl-form.css) |
| `sosaatintz-ceramic-tint-249` | SosaaTintz (Livermore, CA) | Ceramic window tint · $299 (was $249; path stays /249-tint) · side windows + rear windshield | [sosaatintz.getkoup.com/249-tint](https://sosaatintz.getkoup.com/249-tint/) · [Netlify](https://sosaatintz-ceramic-tint-249.netlify.app/) | Own Netlify project, proxied from the $399 project (manual CLI deploys); 719tint layout with all copy from SosaaTintz's site; glass design; native GHL form `xnJMKy0NsimlyrFvLWx5` (Ceremic Tint - 249 (google)) inline in hero; thank-you redirect; no ad tags yet; [hosting plan](sosaatintz-ceramic-tint-249/hosting.md) |
| `mango-hand-car-wash-detail-29-call` | Mango Hand Car Wash (Houston, TX) | $29 interior + exterior special, call-only | [Netlify](https://mango-hand-car-wash-detail-29-call.netlify.app/) · [Custom domain](https://mango.getkoup.com/interior-exterior-29/) | Netlify hosting, proxied from the $99 project; [hosting notes](mango-hand-car-wash-detail-29-call/hosting.md); no form or calendar, every CTA calls (346) 347-2866; headings and copy from mangohandcarwash.com/hand-car-wash-new-lp; Google rating, photo and text reviews; package contents awaiting client confirmation; Google Ads `AW-17824235340` + GTM `GTM-NWR5JN89` |
| `mango-hand-car-wash-detail-29` | Mango Hand Car Wash (Houston, TX) | $29 interior + exterior detail | [Netlify](https://mango-hand-car-wash-detail-29.netlify.app/) · [Custom domain](https://mango.getkoup.com/detail-29/) | Netlify hosting, proxied from the $99 project; [hosting notes](mango-hand-car-wash-detail-29/hosting.md); detailing copy and photos; native GHL booking calendar `fQbFw7UUsWoBTrc2705c` in a wide hero card, thank-you page after booking; package contents awaiting client confirmation; no advertising tags installed |
| `mango-hand-car-wash-99` | Mango Hand Car Wash (Houston, TX) | $99 interior + exterior detail with Hyper Ceramic Wax | [Netlify](https://mango-hand-car-wash-99.netlify.app/) · [Custom domain](https://mango.getkoup.com/) | Netlify hosting; badge disabled; custom domain configured, Hostinger CNAME verified; [DNS handoff](mango-hand-car-wash-99/hosting.md); original Mango logo and orange/black styling; numbered call buttons and one sticky mobile Request Quote CTA; larger desktop offers; six photo reviews in a swipeable carousel; native Mango GHL form `EBJyMhnQ0k8bKoVhscGu` in hero + middle cards with single-load startup; no advertising tags installed |
| `tint-lab` | Tint Lab (Houston, TX — Jersey Village, Memorial, Galleria) | Full vehicle nano ceramic tint starting at $199 · side windows + rear windshield | [Hub](https://tintlab.getkoup.com/) · [Jersey Village](https://tintlab.getkoup.com/jersey-village/) · [Memorial](https://tintlab.getkoup.com/memorial/) · [Galleria](https://tintlab.getkoup.com/galleria/) | One folder and one Netlify site ([hosting](tint-lab/hosting.md)): hub at `/`, location pages in subfolders. Jersey Village (formerly `tint-lab-tint-199`, unchanged) keeps GHL form `yDdjh75p0NKglkWZqaoW` + `AW-18046216903`/`GTM-N3DBL3RL`. Memorial (GHL `tWssdiOlJUT07KVQzxrG`) and Galleria (GHL `3VduMxRXRdeYR6uijnwJ`) have location copy and Google reviews, no tracking yet |
| `black-sheep-ceramic-tint-299` | Black Sheep Auto Detailing (Fremont, CA) | Ceramic window tint · $299 | [Custom domain](https://blacksheep.getkoup.com/) · [Netlify](https://black-sheep-ceramic-tint-299.netlify.app/) | Live on Netlify with verified custom-domain HTTPS and DNS; DetailNow tint structure; original Black Sheep logo; updated Fremont contact details and user-supplied gallery; black/white/silver palette; native GHL form `5peUzH16pwlf56CJZQhz` in both cards; guarded success-message redirect to branded thank-you page; complete Black Sheep form CSS prepared; user-supplied GTM `GTM-TVXZVFZT` |
| `mob-auto-spray-in-bed-liner` | MOB Auto Boutique (Houston, TX) | Spray-in truck bed liners · up to 30% off | [Netlify](https://mob-auto-spray-in-bed-liner.netlify.app/) · [GitHub Pages](https://getkoup.github.io/automarkt-landing-pages/mob-auto-spray-in-bed-liner/) | Netlify live at https://mob.getkoup.com/ with verified HTTPS; supplied GHL form `wemqB8SULRpq4HcFCqYb` visible in hero + lower card; guarded thank-you redirect; official logo; six AI service images; Google Ads `AW-814250742` + GTM `GTM-KFQMB428` on landing and thank-you pages |
| `sleek-detailing-ceramic-coating-699` | Sleek Detailing (Boynton Beach, FL) | Ceramic coating · $699 10-year | [sleek.getkoup.com/cc](https://sleek.getkoup.com/cc/) · [Netlify](https://sleek-detailing-ceramic-coating-699.netlify.app/cc/) | Netlify shared-domain build: preserved $499 homepage at `/`, new $699 page at `/cc/`; custom-domain HTTPS verified with HTTP redirect; badge disabled; native forms and thank-you page |
| `power-pro-ceramic-coating-599` | Power Pro Studios (Northglenn, CO) | Ceramic coating · $599 10-year | [Netlify](https://power-pro-ceramic-coating-599.netlify.app) | Netlify hosting; `powerpro.getkoup.com` configured (external DNS required); native GHL form and verified Google reviews |
| `aa-quality-auto-spa-tint-299` | A&A Quality Auto Spa (Richmond, TX) | HITEK Ceramic IR window tint · $299 for sedans | [aaquality.getkoup.com](https://aaquality.getkoup.com/) · [Vercel](https://aa-quality-auto-spa-tint-299.vercel.app/) · [GitHub Pages](https://getkoup.github.io/automarkt-landing-pages/aa-quality-auto-spa-tint-299/) | Live on Vercel and GitHub Pages; custom domain HTTPS verified; user-supplied GHL form `Vvz6NYhE1pelkUjTVOGo`; matching thank-you page; Google Ads `AW-18361539514` + GTM `GTM-NFRKT6JQ` |
| `aa-quality-auto-spa-tint-249` | A&A Quality Auto Spa (Richmond, TX) | HITEK Ceramic IR window tint · $249 · side windows + rear windshield | [aaquality.getkoup.com/249-tint](https://aaquality.getkoup.com/249-tint/) · [Netlify](https://aa-quality-auto-spa-tint-249.netlify.app/) | Own Netlify project, proxied from the $299 Netlify site (manual CLI deploys); SosaaTintz $249 layout with all copy from A&A's site; navy/gold design with white form card; native GHL form `egn94NzYW422dhzBVdoP` (Ceramic Tint - (google) - 249); thank-you redirect; Google Ads `AW-18361539514` + GTM `GTM-NFRKT6JQ`; [hosting plan](aa-quality-auto-spa-tint-249/hosting.md) |
| `coast2city-ceramic-coating-499` | Coast 2 City Detailing & Ceramic Coatings (Wilmington, NC) | Ceramic coating · $499 5-year | [coast2city.getkoup.com](https://coast2city.getkoup.com/) · [GitHub Pages](https://getkoup.github.io/automarkt-landing-pages/coast2city-ceramic-coating-499/) | Live; GHL form + Google Ads/GTM tags |
| `detailnow-taylor-ceramic-coating-599` | Detail Now – Taylor Ceramic Coatings (Taylor, TX) | Ceramic coating · $599 10-year | [detailnow.getkoup.com](https://detailnow.getkoup.com/) · [Vercel](https://detailnow-taylor-ceramic-coating-59.vercel.app/) · [GitHub Pages](https://getkoup.github.io/automarkt-landing-pages/detailnow-taylor-ceramic-coating-599/) | Live; GHL form + Google Ads/GTM tags |
| `detailnow-ceramic-tint-299` | Detail Now (Taylor, TX) | Ceramic window tint · $299 | [detailnow.getkoup.com/tint](https://detailnow.getkoup.com/tint/) · [Vercel](https://detailnow-ceramic-tint-299.vercel.app/) | Vercel; own static project with shared-domain routing through the coating project; supplied GHL form `CT04c62yNk47Gkfgmq1C`; success-message redirect to branded thank-you page; Google Ads `AW-11146644582` + GTM `GTM-KVP98TG2` |
| `1taketints-commercial-tint` | 1TakeTints (National City / San Diego, CA) | Commercial window tint · consultation, no price | [Live](https://1taketints.getkoup.com/commercial-tint/) · [GitHub Pages](https://getkoup.github.io/automarkt-landing-pages/1taketints-commercial-tint/) | Live; GHL form; GTM-PP5PP8FZ + AW-18115164065 (shared with $299 page); no reviews |
| `1taketints-residential-tint` | 1TakeTints (National City / San Diego, CA) | Residential window tint · consultation, no price | [Live](https://1taketints.getkoup.com/res-tint/) · [GitHub Pages](https://getkoup.github.io/automarkt-landing-pages/1taketints-residential-tint/) | Live; GHL form; GTM-PP5PP8FZ + AW-18115164065 (shared with $299 page); no reviews |
| `719-ceramic-tint-299` | 719 Auto Customs (Colorado Springs, CO) | Black Friday · Ceramic Window Tint · $299 | [719.getkoup.com/tint-299](https://719.getkoup.com/tint-299/) | Live on Vercel; Netlify migration includes the single-load form fix, matching GHL form and dedicated thank-you page; mobile sticky CTA; no ad tracking |
| `719-full-front-ppf-1799` | 719 Auto Customs (Colorado Springs, CO) | Black Friday · Full Front PPF · $1,799 (regularly $2,499); complimentary door cups + door strips | [719.getkoup.com/full-front-ppf-1799](https://719.getkoup.com/full-front-ppf-1799/) | Live on Vercel; Netlify migration includes the single-load form fix, matching GHL form and dedicated thank-you page; mobile sticky CTA; no ad tracking |
| `719-partial-front-ppf-999` | 719 Auto Customs (Colorado Springs, CO) | Black Friday · Partial Front PPF · $999 (regularly $1,299); complimentary door cups + door strips | [719.getkoup.com/partial-front-ppf-999](https://719.getkoup.com/partial-front-ppf-999/) | Live on Vercel; Netlify migration includes the single-load form fix, matching GHL form and dedicated thank-you page; mobile sticky CTA; no ad tracking |
| `719-bumper-ppf-499` | 719 Auto Customs (Colorado Springs, CO) | Black Friday · Bumper PPF · $499 (regularly $799); complimentary door cups + door strips | [719.getkoup.com/bumper-ppf-499](https://719.getkoup.com/bumper-ppf-499/) | Live on Vercel; Netlify migration includes the single-load form fix, matching GHL form and dedicated thank-you page; mobile sticky CTA; no ad tracking |
| `719-landing-pages` | 719 Auto Customs (Colorado Springs, CO) | Original homepage, existing services + four Black Friday offers | [719.getkoup.com](https://719.getkoup.com/) · [Netlify preview](https://719-auto-customs.netlify.app/) · [Vercel](https://719-landing-pages.vercel.app/) | Vercel remains live; complete Netlify migration prepared, pending user DNS cutover; includes single-load offer forms; [DNS handoff](719-landing-pages/hosting-netlify.md) |
| `719-landing-pages/tint` | 719 Auto Customs (Colorado Springs, CO) | LLumar ceramic window tint · vehicle quote | [719tint.getkoup.com](https://719tint.getkoup.com/) · [Vercel](https://719-tint.vercel.app/) · [GitHub Pages](https://getkoup.github.io/automarkt-landing-pages/719-landing-pages/tint/) | Live; GHL Tint (Google) form + original Google Ads tag + thank-you page |
| `719-landing-pages/auto-tint` | 719 Auto Customs (Colorado Springs, CO) | Premium full vehicle tint starting at $249 · side windows + rear windshield | [719.getkoup.com/auto-tint](https://719.getkoup.com/auto-tint/) | Live on shared 719 site; supplied GHL $249 form `dSQWLbhJ81Ee7vepKlz5`; native GHL thank-you redirect; Google Ads `AW-11364267259` + GTM `GTM-WHZLPNRQ` |
| `719-landing-pages/ppf` | 719 Auto Customs (Colorado Springs, CO) | PPF · $599 Highway Protection package | [719ppf.getkoup.com](https://719ppf.getkoup.com/) · [Vercel](https://719-ppf.vercel.app/) · [GitHub Pages](https://getkoup.github.io/automarkt-landing-pages/719-landing-pages/ppf/) | Live; GHL PPf (Google) form + original Google Ads tag + thank-you page |
| `719-landing-pages/cc` | 719 Auto Customs (Colorado Springs, CO) | Ceramic coating · $499 10-year (copy of live 719cc page) | [719.getkoup.com/cc](https://719.getkoup.com/cc/) | Live on shared host; GHL form `oYZgIVmRdXh5I9xnMYt8` + GTM + Ads tag; own thank-you page |
| `719-landing-pages/ceramic` | 719 Auto Customs (Colorado Springs, CO) | Ceramic coating · $499 10-year double application | — | Imported; original Google Ads tag and live quote endpoint retained |

### SosaaTintz GHL CSS handoff

The complete replacement stylesheet is [sosaatintz-ceramic-tint-299/ghl-form.css](sosaatintz-ceramic-tint-299/ghl-form.css). In the native form’s **Styles → Advanced → Custom CSS**, select all existing CSS, replace it with the **entire file** (CSS only, no `<style>` tags), then **Save and Publish**. Use a single column: **Full Name → Phone → Vehicle Year, Make & Model**, with native button text **Claim my $399 tint ↗**. Set form top margin and outer padding to **0**; the landing page supplies the card and heading. The stylesheet matches the page’s transparent wrappers, dark fields, light text and silver button. Preserve native phone controls, validation, consent and CAPTCHA. Both page cards use user-supplied native form `Rm67HH8VkcRpSDQkVsSD`, “Ceremic Tint - 299”, with unique iframe IDs and one official embed loader. The hero loads immediately; the lower frame mounts its source within 1,000px of the viewport or immediately on a quote jump, leaving it out of startup downloads. Reserved 468px slots prevent card jumps; a loading message disappears only when the native SDK reveals each form. The supplied sidebar was adapted to inline cards using the default layout to avoid duplicate frame loads. Dummy forms and handlers were removed. Published fields are Full Name, Phone, Car Detail? and Email; the button should read **Claim my $399 tint ↗**. Both native frames and matching dark-field CSS verified at mobile/desktop widths. Native submission retained. A guarded frame-specific successful-submit listener now redirects to the branded `thank-you.html`; load/resize/error and contact-data messages are ignored. Both pages carry user-supplied GTM `GTM-KW3XR5DF` and Google Ads `AW-18088371755`. No account edits or real test leads. Source verification and CSS limitations are in the page’s research notes.

### SosaaTintz $249 GHL CSS handoff

The complete replacement stylesheet for form `xnJMKy0NsimlyrFvLWx5` ("Ceremic Tint - 249 (google)") is [sosaatintz-ceramic-tint-249/ghl-form.css](sosaatintz-ceramic-tint-249/ghl-form.css). In that form's **Styles → Advanced → Custom CSS**, select all existing CSS, replace it with the **entire file** (CSS only, no `<style>` tags), then **Save and Publish**. It only changes the $249 form; the $399 form keeps its own CSS. It matches the page's dark frosted-glass card: transparent wrappers, translucent rounded fields, light labels and a glossy silver button. Set the form's top margin and outer padding to 0. Verified by injecting it into a saved copy of the published widget; not applied in GHL by the agent.

### A&A Quality $249 GHL CSS handoff

The complete replacement stylesheet for form `egn94NzYW422dhzBVdoP` ("Ceramic Tint - (google) - 249") is [aa-quality-auto-spa-tint-249/ghl-form.css](aa-quality-auto-spa-tint-249/ghl-form.css). In that form's **Styles → Advanced → Custom CSS**, select all existing CSS, replace it with the **entire file** (CSS only, no `<style>` tags), then **Save and Publish**. It only changes the $249 form. It matches the page's white form card:
- transparent wrappers
- light rounded fields with navy text
- a gold focus ring
- a gold `#e0b75e` button

Fields: **First Name → Car Details → Phone**, with button text **Claim my $249 ceramic tint ↗**. The stylesheet sets a 36px top padding, which the page's -24px frame offset relies on, and adds a 10px side gutter on phones. Native consent, phone-country controls, validation and submission are kept.

Verification: injected into the published widget in a local headless Chrome at 360px and 1280px. It has not been applied in GHL by the agent.

### Mango GHL CSS handoff

The complete replacement stylesheet is [mango-hand-car-wash-99/ghl-form.css](mango-hand-car-wash-99/ghl-form.css). Inside Mango's native form, open **Styles → Advanced → Custom CSS**, select all existing CSS and replace it with the **entire file** (CSS only, no `<style>` tags), then **Save and Publish**. Use one column with **Full Name → Phone → Vehicle Year, Make & Model**; set the native button text to **Claim my $99 detail ↗**. In **Styles → Layout**, set the top margin and outer padding to **0**: the landing page provides the white card, headings and spacing. The CSS uses transparent wrappers, warm light inputs, dark text, orange `#ff7f00` buttons and focus outlines. Inter is used only if present inside the form; Arial is the fallback. Keep native consent, phone-country selection, CAPTCHA, validation and submission.

The user applied the stylesheet and supplied native form `EBJyMhnQ0k8bKoVhscGu`, “Wash (Google) - 99.” Both hero and middle quote cards embed it with unique iframe IDs and one prioritized official `form_embed.js` script. The optional explicit layout is omitted so GHL’s default inline path keeps each frame mounted and avoids a duplicate document load; the supplied sticky-sidebar layout was adapted to preserve the page and its single mobile **Request Quote** button. Published native fields are **Full Name → Phone → Car Details**, with native submit text **REQUEST FREE QUOTE**. The published widget's light inputs, orange submit and transparent wrappers were checked directly. GHL owns fields, validation, consent/CAPTCHA and native submission; no parent success redirect, account edit, publication or lead submission was performed. The complete CSS file remains the source of truth for future styling changes. Official instructions: [HighLevel custom form CSS](https://help.gohighlevel.com/support/solutions/articles/155000006727), [HighLevel form builder sidebar](https://help.gohighlevel.com/support/solutions/articles/155000004090-right-sidebar-in-form-and-survey-builder). Client-specific notes are in the page's research and tracking files.

### GHL form CSS research and Sleek handoff

**User preference:** when asked to research GHL styling online and provide CSS that the user will paste themselves, consult official online documentation and deliver the CSS. Do not interpret that request as permission to navigate the user's GHL account, edit a form, or save/publish changes there. Account work requires a separate request.

Research checked October 28, 2026:

- [HighLevel: How to Add Custom CSS to Forms, Surveys, and Quizzes](https://help.gohighlevel.com/support/solutions/articles/155000006727) confirms that field/button styling belongs inside the **form's Styles / Advanced → Custom CSS** area. Page-level CSS cannot reach fields inside a GHL iframe.
- [HighLevel: Right Sidebar in Form and Survey Builder](https://help.gohighlevel.com/support/solutions/articles/155000004090-right-sidebar-in-form-and-survey-builder) documents the Styles, Themes and Advanced controls. Custom CSS overrides theme/style settings; save and check the desktop/mobile preview after applying it.
- Paste CSS only, without `<style>` tags. Keep native fields, submit behavior, validation, phone-country controls and any configured consent/CAPTCHA elements.

Sleek's ready-to-paste stylesheet is [sleek-detailing-ceramic-coating-699/ghl-form.css](sleek-detailing-ceramic-coating-699/ghl-form.css). It matches the page's transparent form background, dark glass-style inputs, magenta button and cyan focus colors. The landing-page card supplies the outer glass effect. Use a single-column form with **Full Name → Phone → Car Details** and native button text **Claim My $699 Coating ↗**. Satoshi is used if loaded in the form; otherwise Arial is the fallback. CSS cannot change field labels/button text or connect CRM submissions. **Use the complete stylesheet:** replace the entire form Custom CSS with `ghl-form.css`. An earlier small `ghl-input-fix.css` patch was intended only as an addition; using it alone removes the wrapper/label/phone styling and leaves the default white form. That patch is deprecated. The full stylesheet now overrides HighLevel's stronger `input[type=text][class=form-control]` rules and uses consistent dark field backgrounds, with transparent outer wrappers. It has been visually checked against the published form's native markup/styles in a local preview; applying/publishing it inside GHL remains the user's step.

**Current handoff status (October 28, 2026):** CSS was provided for the user to apply inside GHL. The user subsequently supplied native form `miZbCrRh26uIcFtKrRlV`, “Ceramic Coating ($699) - Google,” and asked for integration. Both landing-page enquiry panels now embed that form, using unique iframe IDs and one native `form_embed.js` script. The earlier SMS enquiry forms and handlers were removed. Native GHL submission is retained. The page now listens for the verified frame-specific successful-submit message and redirects to its own `thank-you.html`; it ignores load/resize/error messages. No conversion tag is added. Do not equate a loading/rendering check with a verified CRM lead submission; no test lead is authorized by this styling/integration task. Netlify hosting is configured with the platform badge disabled; the original $499 homepage is preserved at `/` and the new $699 page is published under `/cc/`. The user corrected its child-zone routing from Hostinger CDN to Netlify; the original homepage, `/cc/` and confirmation now return HTTPS 200 with a valid Let’s Encrypt certificate, and HTTP redirects to HTTPS. Preserve this child DNS zone and its mail records; removing it is unnecessary. See [hosting.md](sleek-detailing-ceramic-coating-699/hosting.md) for the deployment target and Hostinger record. Client-specific details and verification are recorded in [research.md](sleek-detailing-ceramic-coating-699/research.md) and [tracking.md](sleek-detailing-ceramic-coating-699/tracking.md).

#### Lessons from the GHL CSS correction — future agents must read

- **Provide one complete replacement stylesheet.** A small patch was previously given for two light inputs. When that patch became the entire Custom CSS, the original transparent-wrapper, label, phone and button rules disappeared, exposing GHL's default white form. The handoff was unclear; avoid repeating it.
- **State the action explicitly:** “Select all existing form Custom CSS, replace it with this complete stylesheet, then Save and Publish.” Copy the complete file to the clipboard when requested, and verify the clipboard matches the file. Do not describe an additive patch as replacement CSS.
- **Inspect the actual published widget before diagnosing the cascade.** GHL generated `#_builder-form .form-builder--item input[type=text][class=form-control]` with important background, color, border and padding rules. The original generic custom selector did not outrank it. Phone renders with a different control/selector, so a correct-looking phone field does not prove text inputs are styled correctly.
- **Check the whole form, not only the reported inputs:** outer wrapper background/border/padding, all input backgrounds and text, placeholders, phone-country spacing, focus/autofill and submit button. Preserve consent, CAPTCHA, validation and native submission behavior.
- **Verify before claiming the fix works.** The current complete stylesheet was checked locally against the published form's native HTML/styles: all three fields computed to `#252b35` with white text and 16px type; the outer form wrapper was transparent with zero border/padding. This was a local rendering check, not a GHL account edit, user-side publish, or CRM submission test. State that distinction accurately.
- **Keep the handoff current.** The source of truth is [ghl-form.css](sleek-detailing-ceramic-coating-699/ghl-form.css); `ghl-input-fix.css` is deprecated. Put client-specific evidence in the page's research notes and update this README when the integration status changes.

### Black Sheep GHL CSS handoff

The complete replacement stylesheet is [black-sheep-ceramic-tint-299/ghl-form.css](black-sheep-ceramic-tint-299/ghl-form.css). In the native form's **Styles → Advanced → Custom CSS**, select all existing CSS, replace it with the entire file (no `<style>` tags), then Save and Publish. It matches the Black Sheep page with transparent wrappers, dark square inputs, light text and a silver button. Use a single column with **Full Name → Phone → Vehicle Year, Make & Model**, and set the native button text to **Claim my $299 tint ↗**. The user supplied GHL form `5peUzH16pwlf56CJZQhz`, “Ceramic Tint (Google Ads) - $299”; both enquiry cards now embed it inline with unique iframe IDs and one native `form_embed.js` script. The supplied sidebar layout was adapted to preserve the existing page structure; native validation and submission are retained. No account edits or lead submissions were performed. Verification evidence is in the page's research notes.

### Tint Lab GHL CSS handoff

The complete replacement stylesheet is [tint-lab/jersey-village/ghl-form.css](tint-lab/jersey-village/ghl-form.css). In the native form’s **Styles → Advanced → Custom CSS**, select all existing CSS, replace it with this entire file (CSS only, no `<style>` tags), then **Save and Publish**. It matches the Tint Lab enquiry cards with a transparent outer wrapper, warm dark inputs, light text and an orange `#f36329` button. Use a single column with **Full Name → Phone → Vehicle Year, Make & Model**, and set the native button text to **Get my $199 tint quote ↗**. DM Sans is used only if available within the form iframe; otherwise Arial is the fallback. Keep native consent, CAPTCHA, validation and submission. The user supplied form `yDdjh75p0NKglkWZqaoW`, “Tint (Google) - 199.” Both enquiry cards now embed it inline, adapting the supplied sticky-sidebar layout to preserve the page structure; each iframe has a unique ID and shares one native `form_embed.js` script. The published widget contains the Tint Lab stylesheet. GHL owns fields, validation, consent and native submission. A guarded listener now sends the parent to the branded `thank-you.html` only after the verified frame-specific successful-submit message; load/resize/error and contact-data messages are ignored. The confirmation uses the original logo, supplied contact details and noindex metadata. Demo forms/handlers were removed. No account edit, publish, real lead or CRM delivery test performed.

### HP Mobile Detailing GHL CSS handoff

The complete replacement stylesheet is [hp-details-ceramic-coating-499/ghl-form.css](hp-details-ceramic-coating-499/ghl-form.css). In the native form's **Styles → Advanced → Custom CSS**, select all existing CSS, replace it with the entire file (CSS only, no `<style>` tags), then **Save and Publish**. It matches the HP page's frosted-glass cards: transparent outer wrapper, translucent glass inputs, light text, a red focus ring and a glossy red `#be1c1e` button. Use a single column with **Full Name → Phone → Car Details** (as published), and set the native button text to **Get my $499 quote ↗**. Both page cards embed user-supplied form `oGnO4LrgOwh6ZgCoFWTM` (“Ceramic Coating  - 499”) as inline iframes with unique IDs and one `form_embed.js` loader; a guarded frame-specific success listener shows GHL's message for 1.2s, then redirects to `thank-you.html`. No real test lead submitted. The CSS was checked locally against saved native GHL widget markup; it has not been applied in GHL or submission-tested.



The 719 collection is grouped under `719-landing-pages/`, with independent `tint/`, `ppf/`, and `ceramic/` source folders. At the user's request, `index.html` restores the original Hostinger $599 PPF homepage rather than the temporary service chooser. Its original styles, script, images, and promotional video are isolated in `assets/homepage/`; the original GHL quote popup and Elfsight reviews embed are retained. Each service keeps its own assets, media, lead script, research, and tracking notes; no page references sibling-folder files. The common `thank-you.html` has separate collection-local imagery in `assets/`.

Local preview from the repository root:

```sh
python3 -m http.server 7190 --bind 127.0.0.1 --directory 719-landing-pages
```

Open `http://127.0.0.1:7190/`, or `/tint/`, `/ppf/`, and `/ceramic/`. Tint and PPF use the supplied live GHL embeds; Ceramic retains the original Cloudflare quote endpoint. All retain the original Google Ads tag. Submitting a quote reaches the shop.

The branded site is live at [719.getkoup.com](https://719.getkoup.com/), with the original PPF homepage at `/`, [Tint](https://719.getkoup.com/tint/), the new [PPF page](https://719.getkoup.com/ppf/), and one shared [service thank-you page](https://719.getkoup.com/thank-you.html). The default [Vercel alias](https://719-landing-pages.vercel.app/) remains working. Project `719-landing-pages` publishes the collection root from `main`, using the existing `sachita007s-projects` Hobby team, static/Other preset, no build command, and unaffected-root deployment skipping. This group-level project is the user's requested shared-domain arrangement; the independent service projects are retained.

On the shared Vercel project, `vercel.json` normalizes service paths with trailing slashes and redirects both service-local thank-you requests to `/thank-you.html`. Each form navigates only after its validated GHL success notification, allowing the existing Ads conversion to send before navigation, with a two-second fallback. Direct thank-you visits do not emit the quote conversion. The live service pages, GHL forms, common confirmation, HTTP redirects, and local desktop/mobile-width layouts were verified without submitting a lead.

Ceramic is explicitly excluded from this shared project for now: `/ceramic` and its child paths return HTTP 404. Its existing source and independent hosting are unchanged. Python's local server and GitHub Pages do not apply Vercel routing rules; the local common page is `/thank-you.html`, while those hosts retain the service-local thank-you pages.

`719.getkoup.com` is attached to the shared project and ownership-verified by Vercel. Hostinger's separately managed **`719.getkoup.com` DNS zone** masked the originally recommended parent-zone CNAME. The user disabled CDN for that hostname, changed its zone-apex A record from the Hostinger origin to Vercel, and removed its Hostinger AAAA record. The active record is:

| DNS zone | Type | Host | Target | TTL |
|---|---|---|---|---|
| `719.getkoup.com` | A | `@` | `216.198.79.1` | 1800 |

The address is this project's rank-1 IPv4 recommendation from Vercel's domain-configuration API. **Do not apply this `@` change to the parent `getkoup.com` zone.** Keep Hostinger CDN disabled for the `719` hostname; other website records, mail records, and nameservers are unchanged. The assistant issued a Vercel-managed certificate for `719.getkoup.com` only, without a plan upgrade. Valid HTTPS and the expected content were verified at `/`, `/tint/`, `/ppf/`, and `/thank-you.html`; both new service forms were visually checked and both shared thank-you redirects were exercised without submitting a lead.

The DNS cutover moves the entire hostname, including `/`, to Vercel. The user subsequently chose to retain the original PPF homepage at `/` while keeping the new service paths. Its HTML and resources were recovered directly from the old Hostinger origin without reverting DNS or deleting Hostinger files. The original quote popup, Escape-to-close behavior, and actual muted video playback were smoke-tested locally. Existing independent service domains are not moved by this cutover.

The existing independent thank-you pages at [719tint.getkoup.com/thank-you.html](https://719tint.getkoup.com/thank-you.html) and [719ppf.getkoup.com/thank-you.html](https://719ppf.getkoup.com/thank-you.html) remain working, as do their default Vercel and GitHub Pages routes.

Tint and PPF are published as independent, GitHub-linked Vercel projects `719-tint` and `719-ppf`, with root directories set to their service paths and skipping unaffected-root deployments enabled. Per the user's explicit hosting decision, they use the existing `sachita007s-projects` Hobby team; no upgrade or transfer was performed. GitHub Pages publishes this repo from `main`. The existing Ceramic project at `719cc.getkoup.com` was not modified.

Custom domains `719tint.getkoup.com` and `719ppf.getkoup.com` are live. The user added the following DNS records; each hostname was then attached to its corresponding Vercel project and verified. Both HTTPS pages and their embedded GHL forms were checked without submitting a lead:

| Type | Host | Target |
|---|---|---|
| CNAME | `719tint` | `858de8226fb1bfba.vercel-dns-017.com` |
| CNAME | `719ppf` | `b64f50a3d19e8f05.vercel-dns-017.com` |

These targets were obtained from Vercel's domain-configuration API for the respective projects. Do not change the existing Ceramic record or the domain's nameservers.

## Ad click tracking (gclid + UTMs → GHL)

Goal: every GHL lead stores the Google Ads click ID (`gclid`) so it can be matched to the keyword/campaign that brought it in.

> **Status:** process documented only. **Not yet applied** to `coast2city-ceramic-coating-499` or `detailnow-taylor-ceramic-coating-599` (decided 2026-10-10). Apply per page when asked.

### 1. Google Ads (once per ad account)
Admin → Account settings → **Auto-tagging** → check "Tag the URL that people click through from my ad" → Save. Without this there is no gclid.

### 2. GHL (once per location, then per form)
1. Settings → Custom Fields → add **Single Line** contact fields: `gclid`, `gbraid`, `wbraid`, and optionally `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`.
2. In each form, add those fields, set them to **Hidden**, and set each field's **Query Key** to its own name (e.g. `gclid`). Labels may vary: look for "Hidden field" / "Query key" / "populate from URL".
3. Save. Each client is a separate GHL location, so repeat for each one.

GHL's `form_embed.js` hands the parent page's URL parameters to the embedded form (`fetch-query-params`), so hidden fields fill from `?gclid=…` on our page.

### 3. Page script (per landing page folder; copy it, don't share it)
Place in `<head>` of `index.html` and `thank-you.html`, **above** `form_embed.js`. Saves gclid/UTMs for 90 days and restores them into the URL on return visits, so the form still receives them.

```html
<!-- Ad click capture: keeps gclid/UTMs for 90 days so the GHL form's hidden fields always receive them. -->
<script>
  (function () {
    var KEYS = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    var STORE = 'adClick', DAYS = 90;
    try {
      var url = new URL(window.location.href);
      var fromUrl = {};
      KEYS.forEach(function (k) { var v = url.searchParams.get(k); if (v) fromUrl[k] = v; });

      if (fromUrl.gclid || fromUrl.gbraid || fromUrl.wbraid || fromUrl.utm_source) {
        // New ad click: save it (it replaces any older click).
        fromUrl.savedAt = Date.now();
        localStorage.setItem(STORE, JSON.stringify(fromUrl));
        return;
      }

      // No click info in the address: restore a saved click if it's under 90 days old.
      var saved = JSON.parse(localStorage.getItem(STORE) || 'null');
      if (!saved || Date.now() - saved.savedAt > DAYS * 864e5) return;
      KEYS.forEach(function (k) { if (saved[k] && !url.searchParams.has(k)) url.searchParams.set(k, saved[k]); });
      history.replaceState(history.state, '', url.toString());
    } catch (e) { /* storage blocked (private mode): the form still works, just without a restored gclid */ }
  })();
</script>
```

Log it in that folder's `tracking.md` when added.

### 4. Test
1. Open `https://<page>/?gclid=TEST123&utm_source=google` and submit a test lead → the GHL contact shows `gclid = TEST123`.
2. Close the tab, reopen the page **without** `?gclid`, submit again → the new contact still shows `TEST123`.
3. Delete the test contacts. An empty gclid means the hidden field's Query Key in GHL is wrong.
