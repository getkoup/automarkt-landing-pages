(() => {
  'use strict';
  // Location buttons open each location's own landing page.
  const local = ['localhost', '127.0.0.1'].includes(location.hostname);
  document.querySelectorAll('[data-location-page]').forEach(link => {
    // Live: same-domain paths (/jersey-village/, /memorial/, /galleria/) proxied by netlify.toml.
    // Local preview from the repo root: the sibling folders.
    const live = link.dataset.liveUrl;
    if (local) link.href = `/${link.dataset.locationPage}/`;
    else if (live) link.href = live;
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
