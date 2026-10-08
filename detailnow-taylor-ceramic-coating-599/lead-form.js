// Lead forms post JSON to the form's data-endpoint, then go to thank-you.html.
// Until an endpoint is set, a submit never pretends to succeed: it points the visitor to the phone number.
document.querySelectorAll('form.lead-form').forEach(form => {
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');
  const say = message => { status.textContent = message; status.hidden = false; };

  form.addEventListener('submit', async event => {
    event.preventDefault();
    let firstInvalid = null;
    form.querySelectorAll('input[required]').forEach(input => {
      const valid = input.checkValidity() && (input.name !== 'phone' || input.value.replace(/\D/g, '').length >= 10);
      input.setAttribute('aria-invalid', String(!valid));
      if (!valid && !firstInvalid) firstInvalid = input;
    });
    if (firstInvalid) {
      say('Please add your name, a 10-digit phone number, and your vehicle.');
      firstInvalid.focus();
      return;
    }

    const endpoint = form.dataset.endpoint;
    if (!endpoint) {
      console.warn('[lead-form] No data-endpoint set; submission not sent.');
      say('Online requests are almost ready. For now, call or text (737) 399-2779 to claim the $599 offer.');
      return;
    }

    button.disabled = true;
    const data = Object.fromEntries(new FormData(form));
    data.page = window.location.href;
    try {
      const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!response.ok) throw new Error(response.status);
      window.location.assign(new URL('thank-you.html', window.location.href).href);
    } catch (error) {
      console.error('[lead-form] Submission failed', error);
      say('Something went wrong sending your request. Please call or text (737) 399-2779.');
      button.disabled = false;
    }
  });
});
