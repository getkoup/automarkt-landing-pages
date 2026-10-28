// GHL emits this frame-specific notification after a successful submission.
// Ignore its separate contact-data message, loads, resizes and validation errors.
(() => {
  'use strict';
  const formId = 'miZbCrRh26uIcFtKrRlV';
  const locationId = 'f6fUue4LeG1hdz4hZJeO';
  let redirected = false;

  window.addEventListener('message', (event) => {
    if (redirected || event.origin !== 'https://api.leadconnectorhq.com' || !Array.isArray(event.data)) return;

    const frame = [...document.querySelectorAll('iframe.ghl-form-frame')]
      .find((iframe) => event.source === iframe.contentWindow && iframe.dataset.formId === formId);
    if (!frame) return;

    const [action, storageKey, submittedFrameId, submittedLocationId, fingerprint] = event.data;
    if (action !== 'set-sticky-contacts' ||
        storageKey !== `embedded_iframe_${frame.id}` ||
        submittedFrameId !== frame.id ||
        submittedLocationId !== locationId ||
        typeof fingerprint !== 'string' || !fingerprint.trim()) return;

    redirected = true;
    window.location.assign(new URL('thank-you.html', window.location.href).href);
  });
})();
