# Tracking and lead form — Detail Now ceramic tint $299

## User-supplied GHL embed
- Provided 2026-10-21.
- Form: `CT04c62yNk47Gkfgmq1C`.
- Name: `Tint  (Google) - 299 `.
- URL: https://api.leadconnectorhq.com/widget/form/CT04c62yNk47Gkfgmq1C
- Loader: https://link.msgsndr.com/js/form_embed.js (loaded once).
- Hero iframe: `inline-CT04c62yNk47Gkfgmq1C`; lower iframe adds `-lower`.
- INLINE layout, alwaysShow, alwaysActivated, neverDeactivate; supplied cookie consent attributes preserved.
- Initial supplied height: 462px; the GHL loader controls subsequent resizing.
- Native GHL validation, consent and submission retained. After GHL confirms submission, the parent page redirects to the page-local `thank-you.html`. The verified success handler queues `ghl_form_submit` with the tint form ID before redirecting, matching the original Detail Now event naming.

## Advertising and analytics
User authorized copying the original Detail Now website's Google tracking on 2026-10-21. Verified directly against https://detailnow.getkoup.com/.

| Type | ID / event | Placement |
|---|---|---|
| Google Ads tag (gtag.js) | `AW-11146644582` | Head of `index.html` and `thank-you.html` |
| Google Tag Manager | `GTM-KVP98TG2` | Head script and noscript iframe immediately after body on both pages |
| Confirmed GHL submission | `ghl_form_submit`, `formId: CT04c62yNk47Gkfgmq1C` | `ghl-thanks.js`, once after verified success and before redirect |

User authorized publication of the pending tracking and image updates on 2026-10-21 after initially requesting local changes only. No Google Ads/GTM container settings changed. Conversion reporting depends on the existing container's triggers. No other client's IDs, Meta pixels or webhooks added.

## Verification
Forms checked without sending a lead. Local preview uses live GHL endpoints: real submissions would reach Detail Now.

## Supplied form content issue
Browser inspection on 2026-10-21 shows the live embedded submit button says `Claim My $599 Coating ↗`. This needs updating inside GHL to the $299 ceramic tint CTA; the landing page cannot edit cross-origin form content. The supplied embed and submission endpoint are preserved.

Latest browser check: the GHL button now reads `Claim My $299 Coating ↗` (price updated in provider). The remaining word `Coating` should be changed to `Ceramic Tint` inside GHL.

## Submission-success redirect — 2026-10-21
- User requested a matching thank-you page reached after GHL's successful-submission message.
- `ghl-thanks.js` registers in the head before GHL loads. Requires GHL origin, the actual source iframe, supplied form ID, Detail Now location `IO1XccMiZ8nXQAppRzmn`, frame-specific storage key and ID, and a nonempty success fingerprint. Accepts the `set-sticky-contacts` success message only.
- Verified message format in GHL's current public runtime `https://stcdn.leadconnectorhq.com/_preview/DPoSWyV7.js`; GHL emits this after successful submission. Cookie-only, load, resize and unrelated messages do not redirect.
- Destination resolves relative to the landing page: `/tint/thank-you.html` on the shared host. Both hero and lower embeds are supported.
- Native form remains live. Browser message simulations test routing without submitting a lead or creating a contact. Google tracking was subsequently added locally at the user's request, as documented above.

## Local validation — Google tracking
- Original Google Ads and GTM snippets copied, with one loader/config per page and the noscript snippet immediately after body.
- Confirmed-submit event uses the tint form ID; invalid messages and initial loads do not queue it.
- Browser validation blocks Google requests to prevent local checks from sending analytics or test conversions. No real lead submitted.
