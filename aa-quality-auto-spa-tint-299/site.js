(() => {
  'use strict';
  const lowerForm = document.getElementById('inline-Vvz6NYhE1pelkUjTVOGo-lower');
  const warmLowerForm = () => {
    if (!lowerForm.dataset.src) return;
    lowerForm.src = lowerForm.dataset.src;
    delete lowerForm.dataset.src;
  };
  // GHL temporarily moves initializing iframes offscreen. Observe the stable
  // card wrapper and assign its source before visitors reach it.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      warmLowerForm();
      observer.disconnect();
    }, { rootMargin: '1200px 0px' });
    observer.observe(lowerForm.closest('.ghl-crop'));
  } else {
    warmLowerForm();
  }
  // Same mobile CTA behavior as the 1TakeTints reference: select the nearest enquiry panel.
  const panels = [...document.querySelectorAll('.daylight-card, .quote-panel')];
  document.querySelector('[data-form-jump]').addEventListener('click', event => {
    event.preventDefault();
    const nearest = panels.reduce((a, b) => Math.abs(a.getBoundingClientRect().top) <= Math.abs(b.getBoundingClientRect().top) ? a : b);
    if (nearest.contains(lowerForm)) warmLowerForm();
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
