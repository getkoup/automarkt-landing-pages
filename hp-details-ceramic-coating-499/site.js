// Content and call/text links work without JavaScript.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
document.documentElement.classList.add('js');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// GHL forms: show a skeleton until the native SDK reveals each frame.
document.querySelectorAll('.ghl-form-slot').forEach(slot => {
  const frame = slot.querySelector('iframe');
  const status = slot.querySelector('.form-loading');
  if (!frame || !status) return;
  const done = () => {
    if (slot.classList.contains('is-ready')) return;
    slot.classList.add('is-ready');
    readyObserver.disconnect();
    // Once the hero form is up, warm the lower form in the background.
    if (!frame.hasAttribute('data-deferred-form')) setTimeout(() => window.hpLoadLowerForm?.(), 300);
  };
  const readyObserver = new MutationObserver(() => { if (frame.style.visibility === 'visible') done(); });
  readyObserver.observe(frame, { attributes: true, attributeFilter: ['style'] });
  // Safety net: never leave the skeleton over a form that has loaded.
  frame.addEventListener('load', () => setTimeout(done, 2500));
});
// Only the hero form downloads at startup, so it gets the full connection.
// The lower form mounts from its stable card once it is within 1000px (or on a #quote jump).
const lowerForm = document.querySelector('[data-deferred-form]');
const lowerCard = lowerForm?.closest('.quote-actions');
const loadLowerForm = window.hpLoadLowerForm = () => {
  if (!lowerForm?.dataset.src) return;
  lowerForm.src = lowerForm.dataset.src;
  delete lowerForm.dataset.src;
};
if (lowerForm && lowerCard) {
  if ('IntersectionObserver' in window) {
    const formObserver = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      loadLowerForm();
      formObserver.disconnect();
    }, { rootMargin: '1000px 0px' });
    formObserver.observe(lowerCard);
  } else {
    loadLowerForm();
  }
  document.querySelectorAll('a[href="#quote"]').forEach(link => link.addEventListener('click', loadLowerForm));
}
// Scroll reveal with a small stagger between sibling cards.
const revealGroups = ['.section-heading', '.benefit-grid > *', '.why-grid > *', '.portfolio-grid > *', '.studio-statement', '.review-stage', '.quote-layout', '.faq-list > *', '.studio-trust > *', '.footer-grid > *'];
if ('IntersectionObserver' in window && !reduceMotion) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const element = entry.target;
      element.classList.add('is-visible');
      observer.unobserve(element);
      // Hand control back to the normal hover transitions once the reveal finishes.
      const delay = parseFloat(element.style.getPropertyValue('--reveal-delay')) || 0;
      setTimeout(() => {
        element.classList.remove('reveal', 'reveal-zoom', 'is-visible');
        element.style.removeProperty('--reveal-delay');
      }, 900 + delay * 1000);
    }
  }, { threshold: 0.08 });
  revealGroups.forEach(selector => document.querySelectorAll(selector).forEach(element => {
    const index = [...element.parentElement.children].indexOf(element);
    element.classList.add('reveal');
    if (/portfolio-grid|studio-statement|quote-layout/.test(selector)) element.classList.add('reveal-zoom');
    if (selector.includes('>')) element.style.setProperty('--reveal-delay', `${Math.min(index, 6) * 0.09}s`);
    observer.observe(element);
  }));
  // Anything already on screen at load reveals straight away.
  requestAnimationFrame(() => document.querySelectorAll('.reveal').forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight) element.classList.add('is-visible');
  }));
}
// Header condenses after scrolling; mobile CTA appears once the hero form is out of view.
const hero = document.querySelector('.daylight-hero');
const mobileCta = document.querySelector('.mobile-cta');
let ticking = false;
function onScroll() {
  ticking = false;
  document.body.classList.toggle('is-scrolled', window.scrollY > 30);
  if (mobileCta && hero) mobileCta.classList.toggle('is-hidden', window.scrollY < hero.offsetHeight * 0.55);
}
window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();
// Review cards: thumbnails swap the main photo within the same review only.
document.querySelectorAll('.review-gallery').forEach(gallery => {
  const main = gallery.querySelector('.review-photo');
  gallery.addEventListener('click', event => {
    const thumb = event.target.closest('[data-review-photo]');
    if (!thumb) return;
    if (main.getAttribute('src') === thumb.dataset.reviewPhoto) return;
    if (reduceMotion) main.src = thumb.dataset.reviewPhoto;
    else {
      main.classList.add('is-swapping');
      setTimeout(() => { main.src = thumb.dataset.reviewPhoto; main.onload = () => main.classList.remove('is-swapping'); }, 300);
    }
    gallery.querySelectorAll('[data-review-photo]').forEach(b => {
      const active = b === thumb;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', String(active));
    });
  });
});
