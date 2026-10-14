/** 719 Auto Customs: page-local GHL attribution and measurement. */
(function () {
  'use strict';

  var frame = document.querySelector('#quote iframe.ghl-form-frame');
  var page = frame ? frame.dataset.lpPage : '';

  function dl(event, data) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: event }, data));
    if (typeof window.gtag === 'function') window.gtag('event', event, data);
  }

  var keys = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign',
    'utm_term', 'utm_content', 'matchtype', 'device'];
  var params = new URLSearchParams(location.search);
  var attribution = {};
  keys.forEach(function (key) {
    var value = params.get(key);
    try {
      if (value) sessionStorage.setItem('719_' + key, value);
      else value = sessionStorage.getItem('719_' + key);
    } catch (e) { /* Storage may be unavailable in private mode. */ }
    if (value) attribution[key] = value;
  });
  if (frame && Object.keys(attribution).length) {
    var url = new URL(frame.src);
    Object.keys(attribution).forEach(function (key) { url.searchParams.set(key, attribution[key]); });
    frame.src = url.href;
  }

  dl('lp_view', {
    lp_page: page,
    lp_has_gclid: Boolean(attribution.gclid || attribution.gbraid || attribution.wbraid),
    lp_campaign: attribution.utm_campaign || '',
    lp_device: window.matchMedia('(max-width:760px)').matches ? 'mobile' : 'desktop'
  });

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[href^="tel:"]');
    if (!link) return;
    var region = link.closest('[data-cta-region]');
    dl('phone_tap', {
      lp_page: page,
      cta_region: region ? region.getAttribute('data-cta-region')
        : (link.closest('nav') ? 'nav' : link.closest('footer') ? 'footer' : 'body')
    });
  }, true);

  var marks = [25, 50, 75, 90], seen = {};
  function onScroll() {
    var root = document.documentElement;
    var percent = (root.scrollTop + window.innerHeight) / root.scrollHeight * 100;
    marks.forEach(function (mark) {
      if (percent >= mark && !seen[mark]) {
        seen[mark] = true;
        dl('scroll_depth', { lp_page: page, percent: mark });
      }
    });
    if (seen[90]) window.removeEventListener('scroll', onScroll);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  document.querySelectorAll('video').forEach(function (video, index) {
    video.addEventListener('playing', function () {
      dl('video_play', { lp_page: page, video_index: index,
        video_src: (video.currentSrc || '').split('/').pop() });
    }, { once: true });
  });

  if (!frame) return;
  var submitted = false;
  window.addEventListener('message', function (event) {
    if (event.origin !== 'https://api.leadconnectorhq.com' ||
        event.source !== frame.contentWindow || !Array.isArray(event.data)) return;
    var data = event.data;
    // GHL emits this frame-specific notification only after successful submission.
    // Its paired contact-JSON notification, loads, and resizes are not conversions.
    if (data[0] !== 'set-sticky-contacts' || data[1] !== 'embedded_iframe_' + frame.id ||
        data[2] !== frame.id || data[3] !== frame.dataset.locationId ||
        typeof data[4] !== 'string' || !data[4] || submitted) return;
    submitted = true;
    dl('generate_lead', { lp_page: page, form_id: frame.dataset.formId });
    var destination = document.getElementById('quote').dataset.conversion;
    var thankYouUrl = new URL('thank-you.html', window.location.href).href;
    var redirected = false;
    var redirectTimer;
    function goToThankYou() {
      if (redirected) return;
      redirected = true;
      window.clearTimeout(redirectTimer);
      window.location.assign(thankYouUrl);
    }
    if (destination && typeof window.gtag === 'function') {
      // Allow the conversion to send; an ad blocker must not strand a successful lead.
      redirectTimer = window.setTimeout(goToThankYou, 2000);
      window.gtag('event', 'conversion', {
        send_to: destination, transaction_id: data[4], event_callback: goToThankYou
      });
    } else {
      goToThankYou();
    }
  });
})();
