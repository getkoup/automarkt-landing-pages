// Match the native GHL flow used by the other landing pages.
// Accept the verified native frame-specific success message only.
(() => {
  'use strict';
  const config = window.mobFormConfig;
  if (!config || !config.formId || !config.locationId || config.enableSuccessRedirect !== true) return;
  let redirected = false;
  window.addEventListener('message', (event) => {
    if (redirected || event.origin !== 'https://api.leadconnectorhq.com' || !Array.isArray(event.data)) return;
    const frame = [...document.querySelectorAll('iframe.ghl-form-frame')]
      .find((iframe) => event.source === iframe.contentWindow && iframe.dataset.formId === config.formId);
    if (!frame || !frame.id) return;
    const [action, storageKey, submittedFrameId, submittedLocationId, fingerprint] = event.data;
    if (action !== 'set-sticky-contacts' ||
        storageKey !== `embedded_iframe_${frame.id}` ||
        submittedFrameId !== frame.id ||
        submittedLocationId !== config.locationId ||
        typeof fingerprint !== 'string' || !fingerprint.trim()) return;
    redirected = true;
    window.location.assign(new URL('thank-you.html', window.location.href).href);
  });
})();
