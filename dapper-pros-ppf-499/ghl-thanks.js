// Send the visitor to thank-you.html only after GHL reports a successful submission
// from this exact form. GHL's form posts
//   ['set-sticky-contacts', 'embedded_iframe_<frameId>', '<frameId>', locationId, fingerprint]
// to the parent page after a submission succeeds. Load, resize, query-param and
// returning-visitor messages are ignored. No ad events, analytics or storage are added.
(() => {
  'use strict';
  const formId = 'BKB6FnXXEL6EUkaAqjao';      // GHL form "PPF  (Meta) - 499"
  const locationId = 't4pRauen0e51uGetOHK7';  // Dapper Pros GHL location
  let redirected = false;

  window.addEventListener('message', event => {
    if (redirected || event.origin !== 'https://api.leadconnectorhq.com' ||
        !Array.isArray(event.data)) return;
    const frame = document.querySelector('iframe.ghl-form-frame');
    if (!frame || frame.dataset.formId !== formId ||
        event.source !== frame.contentWindow) return;

    const [action, storageKey, frameId, submittedLocationId, fingerprint] = event.data;
    if (action !== 'set-sticky-contacts' ||
        storageKey !== `embedded_iframe_${frame.id}` ||
        frameId !== frame.id || submittedLocationId !== locationId ||
        typeof fingerprint !== 'string' || !fingerprint.trim()) return;

    redirected = true;
    window.location.assign(new URL('thank-you.html', window.location.href).href);
  });
})();
