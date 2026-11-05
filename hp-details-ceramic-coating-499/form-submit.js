// Redirect to the branded thank-you page only after a native GHL success.
// GHL's form_embed.js posts ['set-sticky-contacts', 'embedded_iframe_<frameId>', '<frameId>', locationId, fingerprint]
// after a successful submission. Load/resize/error messages and returning-visitor contact data are ignored.
(() => {
  'use strict';
  const formId = 'oGnO4LrgOwh6ZgCoFWTM'; // GHL form “Ceramic Coating  - 499”
  let redirected = false;
  window.addEventListener('message', event => {
    if (redirected || event.origin !== 'https://api.leadconnectorhq.com' || !Array.isArray(event.data)) return;
    const frame = [...document.querySelectorAll('iframe.ghl-form-frame')].find(candidate => candidate.contentWindow === event.source);
    if (!frame || frame.dataset.formId !== formId) return;
    const [action, storageKey, frameId, locationId, fingerprint] = event.data;
    if (action !== 'set-sticky-contacts' || storageKey !== `embedded_iframe_${frame.id}` || frameId !== frame.id ||
        typeof locationId !== 'string' || !locationId || typeof fingerprint !== 'string' || !fingerprint.trim()) return;
    redirected = true;
    // Let GHL's own success message show for a moment, then open the thank-you page.
    setTimeout(() => window.location.assign(new URL('thank-you.html', window.location.href).href), 1200);
  });
})();
