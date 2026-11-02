// Redirect only after GHL reports a successful submission from this exact form.
// No advertising events, analytics, attribution capture or browser storage are added.
(() => {
  'use strict';
  const formId = 'FFUHbQMRdU5jkO6uSQO7';
  const locationId = 'u0zdecOvugwYiWUUOmTI';
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
