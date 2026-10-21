// GHL posts this frame-specific message after a successful form submission.
// Loads, validation errors and unrelated messages must not trigger navigation.
(() => {
  'use strict';
  let redirected = false;
  window.addEventListener('message', event => {
    if (redirected || event.origin !== 'https://api.leadconnectorhq.com' || !Array.isArray(event.data)) return;
    const frame = [...document.querySelectorAll('iframe.ghl-form-frame')]
      .find(frame => event.source === frame.contentWindow);
    if (!frame || frame.dataset.formId !== 'CT04c62yNk47Gkfgmq1C') return;
    const [action, storageKey, frameId, locationId, fingerprint] = event.data;
    if (action !== 'set-sticky-contacts' || locationId !== 'IO1XccMiZ8nXQAppRzmn' ||
        frameId !== frame.id || storageKey !== `embedded_iframe_${frameId}` ||
        typeof fingerprint !== 'string' || !fingerprint) return;
    redirected = true;
    window.location.assign(new URL('thank-you.html', window.location.href).href);
  });
})();
