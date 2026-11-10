// Register before GHL initializes the calendar. Size it early; navigate only on native booking success.
(() => {
  'use strict';
  const calendarId = 'fQbFw7UUsWoBTrc2705c';
  let redirected = false;

  // GHL shows its own spinner once the frame document loads; hide ours then.
  document.addEventListener('load', event => {
    if (event.target && event.target.id === 'mango-booking-calendar') {
      event.target.parentElement?.classList.add('is-loaded');
    }
  }, true);

  window.addEventListener('message', event => {
    if (redirected || event.origin !== 'https://api.leadconnectorhq.com' ||
        !Array.isArray(event.data)) return;
    const frame = document.getElementById('mango-booking-calendar');
    if (!frame || frame.contentWindow !== event.source) return;

    const [action, booking] = event.data;
    // Size the calendar from its own height message; form_embed.js may arrive later.
    if (action === 'highlevel.setHeight' && booking && Number(booking.height) > 200) {
      frame.style.height = `${Math.ceil(Number(booking.height)) + 30}px`;
      return;
    }
    if (action !== 'msgsndr-booking-complete' || !booking ||
        booking.calendarId !== calendarId) return;

    redirected = true;
    window.location.assign(new URL('thank-you.html', window.location.href).href);
  });
})();
