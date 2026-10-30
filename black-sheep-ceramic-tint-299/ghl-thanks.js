// GHL emits this frame-specific message after a successful form submission.
// Its separate contact-data, load, resize and error messages are not success.
(() => {
  'use strict';
  const formId = '5peUzH16pwlf56CJZQhz';
  const locationId = 'gtMRJUK503ZFZoQA2iUy';
  let redirected = false;

  window.addEventListener('message', event => {
    if (redirected || event.origin !== 'https://api.leadconnectorhq.com' || !Array.isArray(event.data)) return;
    const frame = [...document.querySelectorAll('iframe.ghl-form-frame')]
      .find(iframe => event.source === iframe.contentWindow && iframe.dataset.formId === formId);
    if (!frame || !frame.id) return;

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
