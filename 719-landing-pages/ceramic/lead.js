/**
 * 719 Auto Customs - landing page lead capture and measurement.
 * Page-local copy for the ceramic landing page.
 *
 * The form endpoint lives in the HTML (data-endpoint on #quote), not in here,
 * so the worker's 6-hourly health check can verify it by fetching the live page.
 * A build that ships without it fails loudly instead of silently dropping leads.
 */
(function () {
  'use strict';

  var PHONE_DISPLAY = '(719) 437-8333';
  var PHONE_HREF = 'tel:+17194378333';

  function dl(event, data) {
    window.dataLayer = window.dataLayer || [];
    var payload = { event: event };
    if (data) for (var k in data) if (Object.prototype.hasOwnProperty.call(data, k)) payload[k] = data[k];
    window.dataLayer.push(payload);
    // Mirror to gtag so GA4 (once configured) and Ads see the same events without GTM.
    if (typeof window.gtag === 'function' && event !== 'generate_lead') window.gtag('event', event, data || {});
  }

  function adsConversion(leadId) {
    var sendTo = form && form.getAttribute('data-conversion');
    if (!sendTo || typeof window.gtag !== 'function') return;
    window.gtag('event', 'conversion', { send_to: sendTo, transaction_id: leadId || undefined });
  }

  /* ---- click ids: capture once on entry, keep for the whole session ------- */
  var KEYS = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term',
            'utm_content', 'matchtype', 'device'];
  var params = new URLSearchParams(location.search);
  var attribution = {};
  KEYS.forEach(function (k) {
    var v = params.get(k);
    try {
      if (v) sessionStorage.setItem('719_' + k, v);
      else v = sessionStorage.getItem('719_' + k);
    } catch (e) { /* private mode */ }
    if (v) attribution[k] = v;
  });

  var form = document.getElementById('quote');
  var page = (form && form.querySelector('[name="source"]') || {}).value || '';

  dl('lp_view', {
    lp_page: page,
    lp_has_gclid: Boolean(attribution.gclid || attribution.gbraid || attribution.wbraid),
    lp_campaign: attribution.utm_campaign || '',
    lp_device: window.matchMedia('(max-width:760px)').matches ? 'mobile' : 'desktop'
  });

  /* ---- phone taps: their dominant channel, so measure every one ----------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="tel:"]');
    if (!a) return;
    var region = a.closest('[data-cta-region]');
    dl('phone_tap', {
      lp_page: page,
      cta_region: region ? region.getAttribute('data-cta-region')
        : (a.closest('nav') ? 'nav' : a.closest('footer') ? 'footer' : 'body')
    });
  }, true);

  /* ---- scroll depth ------------------------------------------------------ */
  var marks = [25, 50, 75, 90], seen = {};
  var onScroll = function () {
    var h = document.documentElement;
    var pct = (h.scrollTop + window.innerHeight) / h.scrollHeight * 100;
    marks.forEach(function (m) {
      if (pct >= m && !seen[m]) { seen[m] = 1; dl('scroll_depth', { lp_page: page, percent: m }); }
    });
    if (seen[90]) window.removeEventListener('scroll', onScroll);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- video engagement -------------------------------------------------- */
  Array.prototype.forEach.call(document.querySelectorAll('video'), function (v, i) {
    var fired = false;
    v.addEventListener('playing', function () {
      if (fired) return; fired = true;
      dl('video_play', { lp_page: page, video_index: i, video_src: (v.currentSrc || '').split('/').pop() });
    });
  });

  if (!form) return;

  /* ---- honeypot ---------------------------------------------------------- */
  var pot = document.createElement('input');
  pot.type = 'text'; pot.name = 'company_website'; pot.tabIndex = -1;
  pot.setAttribute('autocomplete', 'off'); pot.setAttribute('aria-hidden', 'true');
  pot.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;opacity:0';
  form.appendChild(pot);

  /* ---- form engagement --------------------------------------------------- */
  var started = false;
  form.addEventListener('focusin', function (e) {
    if (!e.target.name || e.target.name === 'company_website') return;
    if (!started) { started = true; dl('form_start', { lp_page: page }); }
    e.target.setAttribute('data-touched', '1');
  });

  /* ---- styles for the result states -------------------------------------- */
  var css = document.createElement('style');
  css.textContent =
    '.lead-result{text-align:center;padding:14px 4px 6px}' +
    '.lead-result h2{margin-bottom:8px}' +
    '.lead-result p{font-size:.95rem;line-height:1.5;margin-bottom:10px}' +
    '.lead-result .lead-call{display:inline-block;margin-top:6px;font-weight:700;font-size:1.15rem;text-decoration:none}' +
    '.submit-btn[disabled]{opacity:.6;cursor:progress;transform:none}' +
    '.lead-error{margin-top:12px;font-size:.88rem;line-height:1.45;color:#8A1C1C;background:#FDECEC;border-radius:12px;padding:11px 13px}' +
    '.lead-error a{color:inherit;font-weight:700}';
  document.head.appendChild(css);

  function fieldsTouched() {
    return Array.prototype.filter.call(form.querySelectorAll('[data-touched]'), function (el) {
      return !el.value;
    }).map(function (el) { return el.name; });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (pot.value) return; // bot

    var btn = form.querySelector('.submit-btn');
    var endpoint = form.getAttribute('data-endpoint');
    if (!endpoint) { console.error('719: form has no data-endpoint'); return; }

    var data = {};
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.name || el.type === 'submit') return;
      // An unchecked box still carries its value attribute, so gate on .checked.
      if (el.type === 'checkbox' || el.type === 'radio') { if (el.checked) data[el.name] = el.value; return; }
      data[el.name] = el.value;
    });
    for (var k in attribution) data[k] = attribution[k];
    data.referrer = document.referrer || '';

    var label = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
    var old = form.querySelector('.lead-error');
    if (old) old.remove();

    dl('form_submit', { lp_page: page, coverage: data.package || data.coverage || '' });

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    }).then(function (out) {
      if (!out || out.ok !== true) throw new Error('rejected');
      // generate_lead fires only on a confirmed 2xx, never on button click.
      dl('generate_lead', {
        lp_page: page,
        coverage: data.package || data.coverage || '',
        vehicle_make: (data.vehicle || '').split(/\s+/)[1] || '',
        lead_id: out.id || ''
      });
      adsConversion(out.id);
      if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead', { lp_page: page, lead_id: out.id || '' });
      form.innerHTML =
        '<div class="lead-result"><h2>Got it. We\'re on it.</h2>' +
        '<p>Your request is in front of the team now. Expect a reply the same business day with real numbers for your vehicle.</p>' +
        '<p>In a hurry?</p>' +
        '<a class="lead-call" href="' + PHONE_HREF + '" data-cta-region="post-submit">' + PHONE_DISPLAY + '</a></div>';
    }).catch(function (err) {
      // Never strand the visitor: always hand them the phone number.
      if (btn) { btn.disabled = false; btn.textContent = label; }
      var box = document.createElement('div');
      box.className = 'lead-error';
      box.innerHTML = 'That did not go through. Please try once more, or call us directly at ' +
        '<a href="' + PHONE_HREF + '" data-cta-region="form-error">' + PHONE_DISPLAY + '</a> and we will take your details over the phone.';
      form.appendChild(box);
      dl('form_error', { lp_page: page, message: String(err).slice(0, 120), abandoned_fields: fieldsTouched().join(',') });
    });
  });
})();
