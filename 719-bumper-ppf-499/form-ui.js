// Give the native enquiry form the first network/rendering slot.
// Start decorative video only after the iframe loads; mobile and reduced-motion skip it.
(() => {
  'use strict';
  const frame = document.querySelector('iframe.ghl-form-frame');
  const video = document.querySelector('.hero-video');
  if (!frame || !video || window.matchMedia('(max-width:768px), (prefers-reduced-motion:reduce)').matches) return;
  let started = false;
  const startVideo = () => {
    if (started) return;
    started = true;
    const play = () => {
      video.querySelectorAll('source[data-src]').forEach(source => {
        source.src = source.dataset.src;
      });
      video.load();
      video.play().catch(() => {});
    };
    if ('requestIdleCallback' in window) window.requestIdleCallback(play, { timeout: 2000 });
    else window.setTimeout(play, 500);
  };
  frame.addEventListener('load', startVideo, { once: true });
  // Covers a cached iframe finishing before this deferred script runs.
  window.addEventListener('load', startVideo, { once: true });
})();
