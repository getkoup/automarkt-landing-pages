// Native overflow and scroll snap remain usable without JavaScript. No autoplay.
(() => {
  const track = document.querySelector('#review-track');
  const controls = document.querySelector('.review-controls');
  if (!track || !controls) return;
  const cards = [...track.querySelectorAll('.review-card')];
  if (!cards.length) return;
  const previous = controls.querySelector('[data-review-step="-1"]');
  const next = controls.querySelector('[data-review-step="1"]');
  const position = controls.querySelector('output');
  const cardLeft = card => card.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft - track.clientLeft;
  const maxScroll = () => Math.max(0, track.scrollWidth - track.clientWidth);
  let leading = 0;
  let frame = 0;

  function currentIndex() {
    return cards.reduce((nearest, card, index) =>
      Math.abs(cardLeft(card) - track.scrollLeft) < Math.abs(cardLeft(cards[nearest]) - track.scrollLeft) ? index : nearest, 0);
  }
  function updateControls() {
    leading = currentIndex();
    previous.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= maxScroll() - 2;
    // The fraction names the leading review, not a page or the total visible cards.
    position.textContent = `${leading + 1} / ${cards.length}`;
  }
  function move(direction) {
    const index = Math.max(0, Math.min(cards.length - 1, currentIndex() + direction));
    track.scrollTo({ left: Math.min(maxScroll(), cardLeft(cards[index])) });
  }
  controls.addEventListener('click', event => {
    const button = event.target.closest('button[data-review-step]');
    if (button && !button.disabled) move(Number(button.dataset.reviewStep));
  });
  track.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'Home' || event.key === 'End') {
      track.scrollTo({ left: event.key === 'Home' ? 0 : maxScroll() });
    } else move(event.key === 'ArrowLeft' ? -1 : 1);
  });
  track.addEventListener('scroll', () => {
    if (frame) return;
    frame = requestAnimationFrame(() => { frame = 0; updateControls(); });
  }, { passive: true });
  track.addEventListener('scrollend', updateControls);
  if ('ResizeObserver' in window) {
    new ResizeObserver(() => {
      track.scrollTo({ left: Math.min(maxScroll(), cardLeft(cards[leading])), behavior: 'instant' });
      updateControls();
    }).observe(track);
  }
  controls.hidden = false;
  updateControls();
})();
