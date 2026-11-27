// GHL posts this frame-specific message after a successful form submission.
// Loads, resizes, validation errors and unrelated messages must not trigger navigation.
(() => {
  'use strict';
  const formId = 'pmqrzDkjpT3wMahgoyJr';      // "Ceramic Tint (Google) - 299"
  const locationId = 'y367H8XYiz9IdxzjoAav';  // GHL location that owns this form
  let redirected = false;

  window.addEventListener('message', event => {
    if (redirected || event.origin !== 'https://api.leadconnectorhq.com' || !Array.isArray(event.data)) return;
    const frame = [...document.querySelectorAll('iframe.ghl-form-frame')]
      .find(iframe => event.source === iframe.contentWindow);
    if (!frame || frame.dataset.formId !== formId || !frame.id) return;

    const [action, storageKey, frameId, submittedLocationId, fingerprint] = event.data;
    if (action !== 'set-sticky-contacts' ||
        submittedLocationId !== locationId ||
        frameId !== frame.id ||
        storageKey !== `embedded_iframe_${frameId}` ||
        typeof fingerprint !== 'string' || !fingerprint.trim()) return;

    redirected = true;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'ghl_form_submit', formId });
    window.location.assign(new URL('thank-you.html', window.location.href).href);
  });
})();
