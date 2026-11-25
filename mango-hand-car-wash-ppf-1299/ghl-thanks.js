// Open the on-page thank-you modal (#thank-you) only after GHL reports a successful
// submission from this exact form. This page is for Meta traffic, so visitors stay here
// instead of going to the shared Mango thank-you page. GHL's form posts
//   ['set-sticky-contacts', 'embedded_iframe_<frameId>', '<frameId>', locationId, fingerprint]
// to the parent page after a submission succeeds. Load, resize, query-param and
// returning-visitor messages are ignored. No ad events or analytics are added.
(() => {
  'use strict';
  const formId = 'JVf4YIQ8z0ZBsPf6LWIi';      // GHL form "PPF (Meta) - 1299"
  const locationId = 'todSFcSuIugBi4Ef9kmv';  // Mango Hand Car Wash GHL location
  let shown = false;

  const openModal = () => {
    const modal = document.getElementById('thank-you');
    if (!modal) return;
    if (typeof modal.showModal === 'function') {
      if (!modal.open) modal.showModal();
    } else {
      modal.setAttribute('open', '');   // very old browsers: shows inline without a backdrop
    }
    const title = document.getElementById('ty-title');
    if (title) title.focus({ preventScroll: true });
  };

  document.addEventListener('click', event => {
    const modal = document.getElementById('thank-you');
    if (!modal || !modal.open) return;
    // Close button, or a click on the backdrop (the dialog element itself, outside .ty-inner).
    if (event.target.closest('[data-ty-close]') || event.target === modal) {
      if (typeof modal.close === 'function') modal.close(); else modal.removeAttribute('open');
    }
  });

  window.addEventListener('message', event => {
    if (shown || event.origin !== 'https://api.leadconnectorhq.com' ||
        !Array.isArray(event.data)) return;
    const frame = document.querySelector('iframe.ghl-form-frame');
    if (!frame || frame.dataset.formId !== formId ||
        event.source !== frame.contentWindow) return;

    const [action, storageKey, frameId, submittedLocationId, fingerprint] = event.data;
    if (action !== 'set-sticky-contacts' ||
        storageKey !== `embedded_iframe_${frame.id}` ||
        frameId !== frame.id || submittedLocationId !== locationId ||
        typeof fingerprint !== 'string' || !fingerprint.trim()) return;

    shown = true;
    openModal();
  });
})();
