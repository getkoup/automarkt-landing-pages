(() => {
  'use strict';
  // Mobile "Claim offer" button scrolls to the nearest quote card.
  const cards = [...document.querySelectorAll('.form-card')];
  document.querySelectorAll('[data-form-jump]').forEach(link => link.addEventListener('click', event => {
    if (!cards.length) return;
    event.preventDefault();
    const nearest = cards.reduce((a, b) => Math.abs(a.getBoundingClientRect().top) <= Math.abs(b.getBoundingClientRect().top) ? a : b);
    nearest.scrollIntoView({ block: 'start' });
    nearest.focus({ preventScroll: true });
  }));

  // Review carousel arrows.
  const track = document.getElementById('reviews-track');
  const prev = document.getElementById('reviews-prev');
  const next = document.getElementById('reviews-next');
  if (track && prev && next) {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const step = () => {
      const card = track.querySelector('.review');
      return card ? card.getBoundingClientRect().width + (parseFloat(getComputedStyle(track).columnGap) || 18) : track.clientWidth;
    };
    const update = () => {
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
    };
    prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: reduce ? 'auto' : 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: reduce ? 'auto' : 'smooth' }));
    track.addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update, { passive: true });
    update();
  }

  // Gentle reveal on scroll; content stays visible without JavaScript.
  const items = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    }), { rootMargin: '0px 0px -40px 0px' });
    items.forEach(el => { el.classList.add('reveal'); io.observe(el); });
  }
  // GHL form slots: reveal the form once GHL has sized or shown it, keep its inner
  // scrollbar off (GHL's resizer turns it back on), and offer a call link if it is slow.
  document.querySelectorAll('.form-slot').forEach(slot => {
    const frame = slot.querySelector('iframe.ghl-form-frame');
    if (!frame) return;
    const startHeight = frame.style.height;
    let ready = false;
    let loaded = false;
    const show = () => {
      if (ready) return;
      ready = true;
      frame.style.visibility = 'visible';
      frame.style.opacity = '1';
      slot.classList.add('is-ready');
    };
    const signal = () => { loaded = true; slot.classList.remove('is-slow'); show(); };
    const check = () => {
      if (frame.style.visibility === 'visible' || frame.style.opacity === '1' || frame.style.height !== startHeight) signal();
    };
    const noScroll = () => {
      if (frame.getAttribute('scrolling') !== 'no') frame.setAttribute('scrolling', 'no');
      if (frame.style.overflow !== 'hidden') frame.style.overflow = 'hidden';
    };
    noScroll();
    check();
    new MutationObserver(() => { noScroll(); check(); }).observe(frame, { attributes: true, attributeFilter: ['style', 'scrolling'] });
    frame.addEventListener('load', () => setTimeout(signal, 1500), { once: true });
    const startTimers = () => {
      setTimeout(show, 6000); // never leave the skeleton over a form, even without a signal
      setTimeout(() => { if (!loaded) slot.classList.add('is-slow'); }, 8000);
    };
    if ('IntersectionObserver' in window) {
      const seen = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) { seen.disconnect(); startTimers(); }
      });
      seen.observe(slot);
    } else startTimers();
  });
})();
