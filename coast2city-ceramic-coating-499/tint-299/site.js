(() => {
  'use strict';

  const panels = [...document.querySelectorAll('.form-card')];
  document.querySelector('[data-form-jump]')?.addEventListener('click', event => {
    event.preventDefault();
    const nearest = panels.reduce((a, b) =>
      Math.abs(a.getBoundingClientRect().top) <= Math.abs(b.getBoundingClientRect().top) ? a : b
    );
    nearest.scrollIntoView({ block: 'start' });
    nearest.focus({ preventScroll: true });
  });

  const track = document.getElementById('review-track');
  const previous = document.getElementById('review-prev');
  const next = document.getElementById('review-next');
  const update = () => {
    previous.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
  };
  const move = direction => {
    const gap = parseFloat(getComputedStyle(track).gap) || 18;
    const distance = track.querySelector('.review-card').getBoundingClientRect().width + gap;
    track.scrollBy({ left: direction * distance, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  track.addEventListener('scroll', update, { passive: true });
  track.addEventListener('keydown', event => {
    if (event.target !== track || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    move(event.key === 'ArrowLeft' ? -1 : 1);
  });
  window.addEventListener('resize', update, { passive: true });
  update();
})();

// GHL forms: make each form clickable as soon as GHL's app inside it has started ("iframeLoaded").
// form_embed.js waits for an extra resize message before doing this, and a form whose height never
// changes may never send one, leaving it unclickable. Fallback: 4 s after the form frame's load event.
(() => {
  const frames = [...document.querySelectorAll('iframe.ghl-form-frame')];
  const ready = frame => frame.classList.add('is-ready');
  window.addEventListener('message', event => {
    if (event.origin !== 'https://api.leadconnectorhq.com' || event.data !== 'iframeLoaded') return;
    const frame = frames.find(f => f.contentWindow === event.source);
    if (frame) ready(frame);
  });
  frames.forEach(frame => frame.addEventListener('load', () => setTimeout(() => ready(frame), 4000), { once: true }));
})();
