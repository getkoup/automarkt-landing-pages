'use strict';

// Content is visible by default. Animate only when it is entering the viewport.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !motionPreference.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-entering');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

document.querySelectorAll('a[href="#claim"]:not([data-form-jump]), a[href="#quote"]:not([data-form-jump])').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector(link.getAttribute('href'))?.focus({ preventScroll: true });
  });
});

// The mobile CTA scrolls to the quote card.
document.querySelector('[data-form-jump]').addEventListener('click', (event) => {
  event.preventDefault();
  const cards = [...document.querySelectorAll('.form-card')];
  const nearest = cards.reduce((a, b) => Math.abs(a.getBoundingClientRect().top) <= Math.abs(b.getBoundingClientRect().top) ? a : b);
  nearest.scrollIntoView({ block: 'start', behavior: motionPreference.matches ? 'instant' : 'smooth' });
  nearest.focus({ preventScroll: true });
  history.replaceState(history.state, '', `#${nearest.id}`);
});

document.querySelector('#year').textContent = new Date().getFullYear();

