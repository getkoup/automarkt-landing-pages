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

// Keep each customer's review photographs together, separate from the shop gallery.
const photoButtons = [...document.querySelectorAll('.gallery-button, .review-photo-button')];
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');
const lightboxToolbar = lightbox.querySelector('.lightbox-toolbar');
const lightboxPosition = lightbox.querySelector('.lightbox-position');
let activePhotos = [];
let activePhotoIndex = 0;

function displayPhoto(index) {
  activePhotoIndex = (index + activePhotos.length) % activePhotos.length;
  const button = activePhotos[activePhotoIndex];
  lightboxImage.src = button.dataset.image;
  lightboxImage.alt = button.querySelector('img').alt;
  lightboxCaption.textContent = button.dataset.caption;
  lightboxPosition.textContent = `${activePhotoIndex + 1} / ${activePhotos.length}`;
  lightboxToolbar.hidden = activePhotos.length < 2;
}

// Native modal behavior provides Escape, keyboard focus containment and focus restoration.
if (typeof lightbox.showModal === 'function') {
  photoButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.photoGroup || 'shop';
      activePhotos = photoButtons.filter((photo) => (photo.dataset.photoGroup || 'shop') === group);
      displayPhoto(activePhotos.indexOf(button));
      lightbox.showModal();
    });
  });
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.querySelectorAll('[data-photo-step]').forEach((button) => {
    button.addEventListener('click', () => displayPhoto(activePhotoIndex + Number(button.dataset.photoStep)));
  });
  lightbox.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    displayPhoto(activePhotoIndex + (event.key === 'ArrowRight' ? 1 : -1));
  });
  lightbox.addEventListener('click', (event) => {
    const rect = lightbox.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) lightbox.close();
  });
} else {
  photoButtons.forEach((button) => {
    button.addEventListener('click', () => window.open(button.dataset.image, '_blank', 'noopener,noreferrer'));
  });
}

// The single mobile CTA chooses the closer of the two inline quote cards.
document.querySelector('[data-form-jump]').addEventListener('click', (event) => {
  event.preventDefault();
  const cards = [...document.querySelectorAll('.form-card')];
  const nearest = cards.reduce((a, b) => Math.abs(a.getBoundingClientRect().top) <= Math.abs(b.getBoundingClientRect().top) ? a : b);
  nearest.scrollIntoView({ block: 'start', behavior: motionPreference.matches ? 'instant' : 'smooth' });
  nearest.focus({ preventScroll: true });
  history.replaceState(history.state, '', `#${nearest.id}`);
});

document.querySelector('#year').textContent = new Date().getFullYear();

// Review carousel stays natively swipeable; controls add one-card navigation.
const reviewTrack = document.querySelector('#review-track');
const reviewCards = [...reviewTrack.querySelectorAll('.review-card')];
const reviewControls = document.querySelector('.review-controls');
const previousReviews = reviewControls.querySelector('[data-review-step="-1"]');
const nextReviews = reviewControls.querySelector('[data-review-step="1"]');
const reviewPosition = reviewControls.querySelector('.review-position');
reviewControls.hidden = false;
function updateReviewPosition() {
  const style = getComputedStyle(reviewTrack);
  const gap = parseFloat(style.gap) || 20;
  const step = reviewCards[0].getBoundingClientRect().width + gap;
  const first = Math.max(0, Math.round(reviewTrack.scrollLeft / step));
  const visible = Number(getComputedStyle(reviewTrack.closest('.review-carousel')).getPropertyValue('--visible-reviews')) || 1;
  previousReviews.disabled = reviewTrack.scrollLeft <= 2;
  nextReviews.disabled = reviewTrack.scrollLeft >= reviewTrack.scrollWidth - reviewTrack.clientWidth - 2;
  const last = Math.min(first + visible, reviewCards.length);
  reviewPosition.textContent = visible === 1 ? `${first + 1} / ${reviewCards.length}` : `${first + 1}–${last} / ${reviewCards.length}`;
}
function moveReviews(direction) {
  const gap = parseFloat(getComputedStyle(reviewTrack).gap) || 20;
  reviewTrack.scrollBy({ left: direction * (reviewCards[0].getBoundingClientRect().width + gap), behavior: motionPreference.matches ? 'instant' : 'smooth' });
}
previousReviews.addEventListener('click', () => moveReviews(-1));
nextReviews.addEventListener('click', () => moveReviews(1));
reviewTrack.addEventListener('scroll', updateReviewPosition, { passive: true });
reviewTrack.addEventListener('keydown', (event) => {
  if (event.target !== reviewTrack || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  moveReviews(event.key === 'ArrowRight' ? 1 : -1);
});
window.addEventListener('resize', updateReviewPosition, { passive: true });
updateReviewPosition();
