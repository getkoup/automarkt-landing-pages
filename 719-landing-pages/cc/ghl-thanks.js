// Loaded before the forms so no submission is missed. GHL posts this only after a successful submit;
// the iframe sandbox blocks its own top-level redirect, so the page does the redirect itself.
(() => {
  const CONVERSION = 'AW-11364267259/y0-PCOe_6eccEPvp86oq';
  let submitted = false;
  window.addEventListener('message', event => {
    if (submitted || event.origin !== 'https://api.leadconnectorhq.com' || !Array.isArray(event.data)) return;
    const frame = [...document.querySelectorAll('iframe.ghl-form-frame')].find(frame => event.source === frame.contentWindow);
    if (!frame) return;
    const [action, storageKey, frameId, locationId, fingerprint] = event.data;
    if (action !== 'set-sticky-contacts' || locationId !== 'u0zdecOvugwYiWUUOmTI' ||
        frameId !== frame.id || storageKey !== `embedded_iframe_${frameId}` ||
        typeof fingerprint !== 'string' || !fingerprint) return;
    submitted = true;

    const thankYouUrl = new URL('thank-you.html', window.location.href).href;
    let redirected = false;
    let redirectTimer;
    const goToThankYou = () => {
      if (redirected) return;
      redirected = true;
      window.clearTimeout(redirectTimer);
      window.location.assign(thankYouUrl);
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'generate_lead', lp_page: 'ceramic', form_id: frame.dataset.formId });
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', { lp_page: 'ceramic', form_id: frame.dataset.formId });
      // Allow the conversion to send; an ad blocker must not strand a successful lead.
      redirectTimer = window.setTimeout(goToThankYou, 2000);
      window.gtag('event', 'conversion', {
        send_to: CONVERSION, transaction_id: fingerprint, event_callback: goToThankYou
      });
    } else {
      goToThankYou();
    }
  });
})();
