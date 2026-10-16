// GHL emits this frame-specific message after a successful submission.
// Register before the embeds load; neither form clicks nor validation errors redirect.
(() => {
  'use strict';
  let redirected = false;
  window.addEventListener('message', event => {
    if (redirected || event.origin !== 'https://api.leadconnectorhq.com' || !Array.isArray(event.data)) return;
    const frame = [...document.querySelectorAll('iframe.ghl-form-frame')].find(frame => event.source === frame.contentWindow);
    if (!frame || frame.dataset.formId !== 'Vvz6NYhE1pelkUjTVOGo') return;
    const [action, storageKey, frameId, locationId, fingerprint] = event.data;
    if (action !== 'set-sticky-contacts' || locationId !== 'TXxNV98lwcFda3M2Qeuo' ||
        frameId !== frame.id || storageKey !== `embedded_iframe_${frameId}` ||
        typeof fingerprint !== 'string' || !fingerprint) return;
    redirected = true;
    window.location.assign(new URL('thank-you.html', window.location.href).href);
  });
})();
