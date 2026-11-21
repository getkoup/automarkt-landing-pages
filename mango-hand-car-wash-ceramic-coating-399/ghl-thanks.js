// Register before GHL initializes either frame. Navigate only on native success.
(() => {
  'use strict';
  const formId = 'Zol7Aux9eVRdqN5ddAmM';
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
    // Shared Mango thank-you page (mango.getkoup.com/thank-you, served by the $99 project).
    // The key tells it to show this offer's wording instead of the $99 detail.
    try { sessionStorage.setItem('mango-thank-you-offer', 'ceramic-coating-399'); } catch {}
    window.location.assign('https://mango.getkoup.com/thank-you');
  });
})();
