// Register before GHL initializes either frame. Navigate only on native success.
(() => {
  'use strict';
  const formId = 'EBJyMhnQ0k8bKoVhscGu';
  const locationId = 'todSFcSuIugBi4Ef9kmv';
  let redirected = false;

  window.addEventListener('message', event => {
    if (redirected || event.origin !== 'https://api.leadconnectorhq.com' ||
        !Array.isArray(event.data)) return;
    const frame = [...document.querySelectorAll('iframe.ghl-form-frame')]
      .find(candidate => candidate.contentWindow === event.source);
    if (!frame || frame.dataset.formId !== formId) return;

    const [action, storageKey, frameId, submittedLocationId, fingerprint] = event.data;
    if (action !== 'set-sticky-contacts' ||
        storageKey !== `embedded_iframe_${frame.id}` || frameId !== frame.id ||
        submittedLocationId !== locationId ||
        typeof fingerprint !== 'string' || !fingerprint.trim()) return;

    redirected = true;
    window.location.assign(new URL('thank-you.html', window.location.href).href);
  });
})();
