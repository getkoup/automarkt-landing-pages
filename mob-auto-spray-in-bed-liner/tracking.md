# MOB tracking and lead integration

- User-supplied native GHL form: `wemqB8SULRpq4HcFCqYb`, “Spray-in-bed - 30%”.
- Form URL: https://api.leadconnectorhq.com/widget/form/wemqB8SULRpq4HcFCqYb
- Location verified in the public widget data: `RuEepr9TxS0kkB8ZCRie`.
- The provided sidebar embed is adapted to two inline placements, with unique hero/lower iframe IDs and one native form_embed.js script. Cookie-consent attributes and native validation/submission retained.
- `form-submit.js` redirects to the local thank-you.html only on the verified native frame-specific success notification, matching origin, source, form, storage key, frame, location and fingerprint. Load/resize/error messages are ignored.
- The supplied GHL widget contains a native redirect to https://bitl.to/4dSO; no GHL account settings were edited. The parent success handler navigates the page to its own branded thank-you after the verified success message.
- Call buttons: tel:+18326231662.
- User-supplied Google Ads base tag: `AW-814250742`, installed once on `index.html` and `thank-you.html`.
- User-supplied Google Tag Manager container: `GTM-KFQMB428`, installed on both pages using the standard head bootstrap and body noscript iframe. Both integrations share one dataLayer; Google tag initialization is not duplicated.
- No Google Ads conversion label was supplied. No standalone conversion event, Meta pixel or additional analytics ID is added. Tags/triggers managed inside the supplied GTM container are controlled by that account.
- The GHL success listener registers synchronously in the landing-page head before either frame initializes. The thank-you page retains its noindex directive.
- No test lead or ad conversion has been submitted. Rendering checks do not verify CRM delivery.

## Public rendering verification
Both inline native forms were verified visible on the production Netlify site after native initialization and automatic height adjustment. No test lead or conversion was submitted.

## October 30 tracking update

The user requested these IDs and the GHL thank-you flow. Both hero and lower success-message paths were checked with synthetic events, including rejection of unrelated origins, sources, form/frame/location IDs, contact-data messages, resize/error messages and duplicate success notifications. These checks do not submit a lead or fire a live conversion. Google installation reference: https://support.google.com/tagmanager/answer/14847097 and https://developers.google.com/tag-platform/gtagjs/install.
