// Sends visitors to the shared Black Sheep thank-you page after a successful GHL form submit.
// GHL posts ['set-sticky-contacts', 'embedded_iframe_<frame-id>', '<frame-id>', '<location-id>', '<fingerprint>']
// from the form frame on success. Load, resize, error and contact-data messages are ignored.
// Each form iframe carries data-form-id and data-location-id, so no IDs live in this file.
(() => {
  'use strict';
  const THANK_YOU = 'https://blacksheep.getkoup.com/thank-you.html';
  let redirected = false;

  window.addEventListener('message', event => {
    if (redirected || event.origin !== 'https://api.leadconnectorhq.com' || !Array.isArray(event.data)) return;
    const frame = [...document.querySelectorAll('iframe.ghl-form-frame')]
      .find(iframe => event.source === iframe.contentWindow);
    if (!frame || !frame.id || !frame.dataset.formId || !frame.dataset.locationId) return;

    const [action, storageKey, submittedFrameId, submittedLocationId, fingerprint] = event.data;
    if (action !== 'set-sticky-contacts' ||
        storageKey !== `embedded_iframe_${frame.id}` ||
        submittedFrameId !== frame.id ||
        submittedLocationId !== frame.dataset.locationId ||
        typeof fingerprint !== 'string' || !fingerprint.trim()) return;

    redirected = true;
    window.location.assign(THANK_YOU);
  });
})();
