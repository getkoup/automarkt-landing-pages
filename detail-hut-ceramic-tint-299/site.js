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

// Glass + motion: scroll reveal and cursor spotlight on glass cards.
(() => {
  'use strict';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const groups = [
    '.trust-grid > div', '.section-heading > *', '.benefit', '#offer > .fine-print',
    '.studio-photo', '.studio-copy', '.reason-grid article', '.gallery-grid figure',
    '.gallery-footer', '.review-track', '.review-toolbar', '.quote-copy', '#lower-quote',
    '.faq-list details', '.final-cta .container > *', '.footer-grid > div',
  ];
  if (!reduce && 'IntersectionObserver' in window) {
    const seen = new Set();
    groups.forEach(selector => {
      const byParent = new Map();
      document.querySelectorAll(selector).forEach(el => {
        if (seen.has(el)) return;
        seen.add(el);
        const siblings = byParent.get(el.parentElement) || 0;
        byParent.set(el.parentElement, siblings + 1);
        el.style.setProperty('--i', Math.min(siblings, 5));
        el.classList.add('reveal');
      });
    });
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  if (!reduce && matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.benefit, .reason-grid article, .review-card, .form-card').forEach(card => {
      card.addEventListener('pointermove', event => {
        const box = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${event.clientX - box.left}px`);
        card.style.setProperty('--my', `${event.clientY - box.top}px`);
      }, { passive: true });
    });
  }
})();
