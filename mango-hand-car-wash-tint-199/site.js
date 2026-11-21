(() => {
  'use strict';

  // Memorial's native, one-card review navigation; no autoplay or cloned reviews.
  const track = document.getElementById('review-track');
  const previous = document.getElementById('review-prev');
  const next = document.getElementById('review-next');
  const position = document.getElementById('review-position');
  const controls = document.querySelector('.review-controls');
  const cards = [...(track?.querySelectorAll('.review-card') || [])];
  if (!track || !previous || !next || !position || !controls || !cards.length) return;

  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const update = () => {
    const bounds = track.getBoundingClientRect();
    const rectangles = cards.map(card => card.getBoundingClientRect());
    const visible = rectangles.flatMap((rect, index) =>
      rect.left >= bounds.left - 2 && rect.right <= bounds.right + 2 ? [index] : []
    );
    // While a swipe is between snap points, report the most visible card if none is complete.
    if (!visible.length) {
      const widths = rectangles.map(rect => Math.max(0,
        Math.min(rect.right, bounds.right) - Math.max(rect.left, bounds.left)
      ));
      visible.push(widths.indexOf(Math.max(...widths)));
    }
    const first = visible[0] + 1;
    const last = visible[visible.length - 1] + 1;
    const label = `${first === last ? first : `${first}–${last}`} / ${cards.length}`;
    if (position.textContent !== label) position.textContent = label;
    previous.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
  };

  const move = direction => {
    const bounds = track.getBoundingClientRect();
    const maximum = Math.max(0, track.scrollWidth - track.clientWidth);
    const stops = [...new Set(cards.map(card => Math.max(0, Math.min(maximum,
      card.getBoundingClientRect().left - bounds.left + track.scrollLeft
    ))))];
    // Use actual card edges so fractional widths, resizing and the final peek stay accurate.
    const target = direction > 0
      ? stops.find(stop => stop > track.scrollLeft + 2) ?? maximum
      : stops.reverse().find(stop => stop < track.scrollLeft - 2) ?? 0;
    track.scrollTo({ left: target, behavior: motion.matches ? 'instant' : 'smooth' });
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
  if ('ResizeObserver' in window) new ResizeObserver(update).observe(track);
  controls.hidden = false;
  update();
})();

// GHL forms: make each form clickable as soon as GHL's app inside it has started ("iframeLoaded").
// form_embed.js waits for an extra resize message before doing this, and a form whose height never
// changes may never send one, leaving it unclickable. Fallback: 4 s after the form frame's load event.
(() => {
  const ORIGIN = 'https://api.leadconnectorhq.com';
  const frames = [...document.querySelectorAll('iframe.ghl-form-frame')];
  const sized = new WeakSet();
  const ready = frame => frame.classList.add('is-ready');
  // Keep the frame at least as tall as the whole form, so the form never scrolls inside it.
  // GHL reports the form's height and width in the form's own pixels; scale by the real frame
  // width in case the form is rendered at a different size from the page.
  const fit = (frame, height, width) => {
    const scale = width > 0 ? Math.max(1, frame.clientWidth / width) : 1;
    frame.style.minHeight = `${Math.ceil(height * scale) + 5}px`;
  };
  // Ask GHL's resizer inside the form to measure again; it answers only if the height changed.
  const remeasure = frame => frame.contentWindow?.postMessage('[iFrameSizer]resize', ORIGIN);
  window.addEventListener('message', event => {
    if (event.origin !== ORIGIN) return;
    const frame = frames.find(f => f.contentWindow === event.source);
    if (!frame) return;
    const size = typeof event.data === 'string' && event.data.match(/^\[iFrameSizer\][^:]*:(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):/);
    if (size) {
      sized.add(frame);
      fit(frame, Number(size[1]), Number(size[2]));
      return;
    }
    // GHL posts this as ["iframeLoaded"]; accept the bare string too.
    const action = Array.isArray(event.data) ? event.data[0] : event.data;
    if (action !== 'iframeLoaded') return;
    ready(frame);
    // If GHL's resizer never attached to this frame, attach it with form_embed.js's own options.
    setTimeout(() => {
      if (sized.has(frame) || typeof window.iFrameResize !== 'function') return;
      window.iFrameResize({ checkOrigin: false, scrolling: true, heightCalculationMethod: 'offset', autoResize: true, sizeHeight: true }, frame);
    }, 2000);
    // Catch text or layout that grows after the first measurement.
    [1500, 4000, 8000].forEach(ms => setTimeout(() => remeasure(frame), ms));
  });
  frames.forEach(frame => frame.addEventListener('load', () => setTimeout(() => ready(frame), 4000), { once: true }));
})();
