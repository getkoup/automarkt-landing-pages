# Tracking — hp-details-ceramic-coating-499

No ad/analytics tracking installed yet. Lead capture uses the GHL form below.

| Type | ID / URL | Where | Status |
|---|---|---|---|
| GHL form | `oGnO4LrgOwh6ZgCoFWTM` (“Ceramic Coating  - 499”), loader `https://link.msgsndr.com/js/form_embed.js` | `index.html` hero card (`inline-oGnO4LrgOwh6ZgCoFWTM-hero`) + quote card (`inline-oGnO4LrgOwh6ZgCoFWTM-quote`) | Live. `form-submit.js` waits for GHL's frame-specific `set-sticky-contacts` success message, shows GHL's own message for 1.2s, then redirects to `thank-you.html`. Speed: GHL domains preconnected, loader preloaded in `<head>`, hero form loads first; the quote form mounts once the hero form is ready, within 1000px of the viewport, or on a `#quote` jump. Slots reserve 340px with a skeleton until GHL reveals each form |
| GTM | _none_ | — | Add only when supplied |
| Google Ads | _none_ | — | Add only when supplied |
| Meta Pixel | _none_ | — | Add only when supplied |
