# Form integration and tracking

- **No ad tracking installed.** No Google Ads, GTM, GA, Meta pixel or conversion events on the landing or thank-you page. The GHL form is named "(Meta)", so add the Meta pixel here when the user supplies it.
- **GHL form:** user-supplied native form `BKB6FnXXEL6EUkaAqjao`, "PPF  (Meta) - 499", in location `t4pRauen0e51uGetOHK7` (read from the published widget). It's embedded inline in the hero card (`#quote`) as iframe `inline-BKB6FnXXEL6EUkaAqjao`, with one `form_embed.js` loader. The supplied sticky-sidebar layout was dropped so the iframe stays mounted in the card and loads once.
- **Published fields:** First Name *, Phone *, Car Details (placeholder "Enter Your vehicle year/model/make"). The button reads "Claim My $499 Offer". The Phone placeholder now reads "Phone" (the user fixed it in GHL).
- **Fast load:**
  - preconnects to `api.leadconnectorhq.com`, `stcdn.leadconnectorhq.com`, `link.msgsndr.com` and `backend.leadconnectorhq.com`
  - a high-priority preload of `form_embed.js`
  - an eager, high-priority iframe
  - `form-ui.js` shows a shimmer skeleton in a reserved slot until GHL reveals the form, which took about 2.5s in local tests. If the SDK never reveals it, the frame is shown 2.5s after it loads; after 8s a call/text fallback line appears.
- **No inner scrollbar:** GHL's iframe-resizer turns frame scrolling back on (`scrolling="yes"`, `overflow:auto`). On some phones the form renders taller than GHL measures, which showed an inner scrollbar. `form-ui.js` keeps `scrolling="no"` and `overflow:hidden` on the frame. The frame has spare height: a 376px minimum on desktop and 392px on phones (≤560px), against 358px of measured content. A test with 70px of extra unmeasured content showed no scrollbar and the full button.
- **Thank-you redirect:** `ghl-thanks.js` sends the visitor to `thank-you.html` straight after a successful submit, instead of leaving GHL's "Thank you for taking the time…" message in the card. It acts only on the form's own success message `['set-sticky-contacts', 'embedded_iframe_inline-BKB6FnXXEL6EUkaAqjao', frameId, 't4pRauen0e51uGetOHK7', fingerprint]`, from origin `https://api.leadconnectorhq.com` and this iframe's window. Load, resize and query-param messages are ignored. The message format was checked in the current published form code and in `form_embed.js` on 2026-11-24.
- **Not done:** no real test lead was submitted, so CRM delivery and the live redirect haven't been exercised end to end.
- **Form styling:** `ghl-form.css` is the complete replacement Custom CSS. It's already present in the published form.
