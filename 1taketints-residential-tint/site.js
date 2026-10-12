// Mobile quote bar: jump to whichever form is closest so its fields land just under the sticky header.
const formPanels = [...document.querySelectorAll('.daylight-card, .quote-panel')];
document.querySelector('[data-form-jump]').addEventListener('click', event => {
  event.preventDefault();
  const nearest = formPanels.reduce((a, b) => Math.abs(a.getBoundingClientRect().top) <= Math.abs(b.getBoundingClientRect().top) ? a : b);
  nearest.scrollIntoView({ block: 'start' });
  nearest.focus({ preventScroll: true });
});
