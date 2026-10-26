// GHL's native form_embed.js uses this message after a successful contact submission.
// Accept only messages from one of this page's Power Pro form windows.
(() => {
  const formId = 'JAahMoKthyRlpg2Fts3w';
  let redirected = false;
  window.addEventListener('message', event => {
    if (redirected || event.origin !== 'https://api.leadconnectorhq.com' || !Array.isArray(event.data)) return;
    const frame = [...document.querySelectorAll('iframe.ghl-form-frame')].find(frame => event.source === frame.contentWindow);
    if (!frame || frame.dataset.formId !== formId) return;
    const [action, , frameIdOrContact, locationId, fingerprint] = event.data;
    if (action !== 'set-sticky-contacts' || typeof locationId !== 'string' || !locationId || typeof fingerprint !== 'string' || !fingerprint) return;
    let submitted = frameIdOrContact === frame.id;
    if (!submitted && typeof frameIdOrContact === 'string') {
      try {
        const contact = JSON.parse(frameIdOrContact);
        submitted = contact !== null && typeof contact === 'object' && !Array.isArray(contact) && Object.keys(contact).length > 0;
      } catch { submitted = false; }
    }
    if (!submitted) return;
    redirected = true;
    window.location.assign(new URL('thank-you.html', window.location.href).href);
  });
})();
