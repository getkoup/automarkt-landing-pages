(() => {
  'use strict';

  // Retire the loading message only when the native SDK reveals the form.
  document.querySelectorAll('.ghl-form-slot').forEach(slot => {
    const frame = slot.querySelector('iframe');
    const status = slot.querySelector('.form-loading');
    const check = () => {
      if (frame.style.visibility !== 'visible') return;
      status.hidden = true;
      observer.disconnect();
    };
    const observer = new MutationObserver(check);
    observer.observe(frame, { attributes: true, attributeFilter: ['style'] });
    check();
  });

  // Every quote button scrolls to the hero form and focuses it.
  const quote = document.getElementById('quote');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const goToQuote = () => {
    quote.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    quote.focus({ preventScroll: true });
  };
  document.querySelectorAll('[data-form-jump]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    goToQuote();
  }));

  // Shade finder: the shades SosaaTintz lists on its website.
  let vlt = 35;
  const shade = document.getElementById('vlt-shade');
  const tag = document.getElementById('vlt-tag');
  const render = () => {
    shade.style.opacity = (1 - Math.pow(vlt / 100, 1 / 2.2)).toFixed(3);
    tag.textContent = vlt + '%';
  };
  document.querySelectorAll('.vlt-stop').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('.vlt-stop').forEach(other => other.classList.toggle('active', other === button));
    vlt = parseInt(button.dataset.vlt, 10);
    render();
  }));
  document.getElementById('shade-cta').addEventListener('click', goToQuote);
  render();

  // Real Google review excerpts from the supplied SosaaTintz listing (checked Nov 3, 2026).
  const base = 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1s';
  const suffix = '!2m1!1s0x0:0xed3b13691ccacfda';
  const reviews = [
    ['Jimena Rosas', 'Ceramic tint', 'Super clean and precise work!', 'Ci9DQUlRQUNvZENodHljRjlvT2t0RU1WOVlNRTFRUzJwTlFWQkhaa1JZVDNaSlExRRAB'],
    ['Raja Jain', 'Tint & PPF', 'I had an amazing experience working with Sosaa to get my car protected by PPF and tinted.', 'Ci9DQUlRQUNvZENodHljRjlvT2pJM1NWcHdkRmh2YkRkWlZ6UnZZMGx4ZGpoUE5IYxAB'],
    ['Dennis Roberts', 'Cybertruck tint', 'I had my Cybertruck’s windows tinted, and they turned out great.', 'Ci9DQUlRQUNvZENodHljRjlvT2xoQ1FtZ3dVVlZ1UTFadVYwOXlkRWRJUjJ0RU1GRRAB']
  ];
  const card = ([name, service, quoteText, id], hidden) =>
    `<article class="review"${hidden ? ' aria-hidden="true"' : ''}><span class="stars" aria-hidden="true">★★★★★</span><p>“${quoteText}”</p>` +
    `<span class="who">${name}<small>${service} · <a href="${base}${id}${suffix}" target="_blank" rel="noopener noreferrer"${hidden ? ' tabindex="-1"' : ''}>Google review ↗</a></small></span></article>`;
  // Repeat the short list so the marquee track is wide enough to loop seamlessly.
  const set = [...reviews, ...reviews];
  document.getElementById('review-track').innerHTML =
    set.map((review, index) => card(review, index >= reviews.length)).join('') +
    set.map(review => card(review, true)).join('');
})();
