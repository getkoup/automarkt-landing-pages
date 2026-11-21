// GHL emits this frame-specific message after a successful form submission.
// Its separate contact-data, load, resize and error messages are not success.
(() => {
  'use strict';
  const formId = 'PVMTWRl0VEx4W43xKIhg';
  const locationId = 't5M0EkA7AvyHxGLkEtXB';
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
    // Shared Coast 2 City thank-you page (coast2city.getkoup.com/thank-you). The key tells it
    // to show the $299 tint wording instead of the $499 coating wording.
    try { sessionStorage.setItem('c2c-thank-you-offer', 'tint-299'); } catch {}
    window.location.assign(new URL('/thank-you', window.location.href).href);
  });
})();
