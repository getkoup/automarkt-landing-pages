// Content stays visible without JavaScript. Motion only adds an optional entrance.
if ('IntersectionObserver' in window) {
  const reveals = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('motion-reveal');
      reveals.unobserve(entry.target);
    }
  }, { threshold: 0.08 });
  document.querySelectorAll('.section-heading, .benefit, .reason, .portfolio-grid figure, .studio-statement > *, .quote-copy').forEach(element => reveals.observe(element));
}

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
  // On phones, add 12% headroom: some browsers draw the form larger than the height GHL
  // reports (user report 2026-11-21), and the extra space reads as card padding.
  const phone = matchMedia('(max-width: 760px)');
  const fit = (frame, height, width) => {
    const scale = Math.max(1, width > 0 ? frame.clientWidth / width : 1, phone.matches ? 1.12 : 1);
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
