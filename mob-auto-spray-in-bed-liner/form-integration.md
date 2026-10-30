# MOB native GHL integration

## Active form
- User supplied form: `wemqB8SULRpq4HcFCqYb`, “Spray-in-bed - 30%”.
- Public widget location: `RuEepr9TxS0kkB8ZCRie`.
- Hero iframe ID: `inline-wemqB8SULRpq4HcFCqYb-hero`.
- Lower iframe ID: `inline-wemqB8SULRpq4HcFCqYb-quote`.
- One native `https://link.msgsndr.com/js/form_embed.js` script.
- User supplied sidebar layout adapted to inline placements. Cookie-consent attributes, native fields, validation and submission are retained. No custom lead endpoint.

## Styling
`ghl-form.css` is the complete form-builder Custom CSS, supplied and copied for the user. The public widget currently renders dark fields and a red submit button. Parent-page CSS supplies the glass card; it cannot style inside the cross-origin frame.

## Success flow
`form-config.js` contains only MOB’s verified public form/location IDs. `form-submit.js` redirects the page to its own `thank-you.html` only for a verified native frame-specific successful-submit message. Origin, iframe source, form ID, storage key, frame ID, location and nonempty fingerprint must match. Resize/load/errors and the separate contact-data message are ignored.

The config and listener load synchronously in the landing-page head, before either inline frame can initialize. The listener queries the frames only when a message arrives.

Message format confirmed in the public widget runtime. Handler logic tested locally using synthetic events, without making a CRM submission. The widget also has its own configured short redirect; no GHL account setting was changed.

## Verification
Direct native widget rendering and the successful-submit message format were verified. The public Netlify page was independently rendered after deployment: both inline forms were visible, with native fields/button, dark/red styling and an automatically adjusted 387px frame height. The initial local inspection browser stalled on cross-origin frames; independent public-host rendering confirmed the integration works.

No real test lead or conversion has been sent, so CRM delivery is not claimed as tested.
