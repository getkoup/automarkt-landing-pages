(() => {
  'use strict';
  // Retire the loading message only when the native SDK reveals the form.
  // A document load alone does not mean the form's fields are usable yet.
  document.querySelectorAll('.ghl-form-slot').forEach(slot => {
    const frame = slot.querySelector('iframe');
    const status = slot.querySelector('.form-loading');
    const check = () => {
      if (frame.style.visibility !== 'visible') return;
      status.hidden = true;
      readyObserver.disconnect();
    };
    const readyObserver = new MutationObserver(check);
    readyObserver.observe(frame, { attributes: true, attributeFilter: ['style'] });
    check();
  });
  // Only the hero downloads during startup. Keep the lower iframe mounted;
  // setting its src near the viewport lets GHL initialize it through its native
  // iframeLoaded message without a second loader or an iframe reparent/reload.
  const deferredForm = document.querySelector('[data-deferred-form]');
  const loadForm = () => {
    if (!deferredForm?.dataset.src) return;
    deferredForm.src = deferredForm.dataset.src;
    delete deferredForm.dataset.src;
    formObserver?.disconnect();
  };
  let formObserver;
  if (deferredForm) {
    if ('IntersectionObserver' in window) {
      formObserver = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) loadForm();
      }, { rootMargin: '1000px 0px' });
      formObserver.observe(deferredForm.closest('.quote-panel'));
    } else {
      loadForm();
    }
  }
  // The mobile claim button opens the nearest enquiry panel.
  const panels = [...document.querySelectorAll('.daylight-card, .quote-panel')];
  document.querySelector('[data-form-jump]').addEventListener('click', event => {
    event.preventDefault();
    const nearest = panels.reduce((a, b) => Math.abs(a.getBoundingClientRect().top) <= Math.abs(b.getBoundingClientRect().top) ? a : b);
    if (nearest.contains(deferredForm)) loadForm();
    nearest.scrollIntoView({ block: 'start' });
    nearest.focus({ preventScroll: true });
  });
  const track = document.getElementById('review-track');
  const previous = document.getElementById('review-prev');
  const next = document.getElementById('review-next');
  const cards = [...track.querySelectorAll('.review-card')];
  const update = () => {
    previous.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
  };
  const move = direction => {
    const gap = parseFloat(getComputedStyle(track).gap) || 18;
    track.scrollBy({left: direction * (cards[0].getBoundingClientRect().width + gap), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  };
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  track.addEventListener('scroll', update, {passive:true});
  track.addEventListener('keydown', event => {
    if (event.target !== track || !['ArrowLeft','ArrowRight'].includes(event.key)) return;
    event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1);
  });
  window.addEventListener('resize', update, {passive:true});
  update();
})();
