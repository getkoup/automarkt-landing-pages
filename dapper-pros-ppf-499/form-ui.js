// Loading state for the GHL form slot.
// GHL's form_embed.js reveals the iframe (visibility:visible) once the form is ready;
// at that point the skeleton fades out. If the embed script is blocked or slow, the
// iframe is shown anyway after it loads, and a call/text fallback appears after 8s.
(() => {
  'use strict';
  const slot = document.getElementById('form-slot');
  const frame = slot && slot.querySelector('iframe.ghl-form-frame');
  if (!slot || !frame) return;

  let done = false;
  const ready = () => {
    if (done) return;
    done = true;
    slot.classList.add('is-ready');
    slot.classList.remove('is-slow');
    observer.disconnect();
  };
  const revealed = () => frame.style.visibility === 'visible' || frame.style.opacity === '1';

  const observer = new MutationObserver(() => { if (revealed()) ready(); });
  observer.observe(frame, { attributes: true, attributeFilter: ['style'] });
  if (revealed()) ready();

  // Safety net: if the SDK never reveals it, show the loaded form ourselves.
  frame.addEventListener('load', () => {
    setTimeout(() => {
      if (done) return;
      frame.style.visibility = 'visible';
      frame.style.opacity = '1';
      ready();
    }, 2500);
  }, { once: true });

  setTimeout(() => { if (!done) slot.classList.add('is-slow'); }, 8000);

  // GHL's iframe-resizer turns frame scrolling back on (scrolling="yes", overflow:auto).
  // Some phones render the form a few px taller than GHL measures, which shows an inner
  // scrollbar. The frame already has spare height (min-height), so keep scrolling off.
  const noScroll = () => {
    if (frame.getAttribute('scrolling') !== 'no') frame.setAttribute('scrolling', 'no');
    if (frame.style.overflow !== 'hidden') frame.style.overflow = 'hidden';
  };
  noScroll();
  new MutationObserver(noScroll).observe(frame, { attributes: true, attributeFilter: ['scrolling', 'style'] });
})();
