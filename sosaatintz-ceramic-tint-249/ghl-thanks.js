// GHL emits this frame-specific message after a successful form submission.
// Its separate contact-data, load, resize and error messages are not success.
(() => {
  'use strict';
  const formId = 'xnJMKy0NsimlyrFvLWx5';
  const locationId = 'Js9PuizigDvJKsbdeqFB';
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
    // Shared SosaaTintz thank-you page (sosaatintz.getkoup.com/thank-you, served by the $399 project).
    // The key points its "Back to the offer" link at /299-tint/.
    try { sessionStorage.setItem('sosaatintz-thank-you-offer', '299-tint'); } catch {}
    window.location.assign('https://sosaatintz.getkoup.com/thank-you');
  });
})();
