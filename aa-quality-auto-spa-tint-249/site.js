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

  // Shade finder: the HITEK Ceramic IR shades A&A lists on its website.
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

  // Verbatim Google review excerpts from A&A Quality Auto Spa's listing (checked Oct 15, 2026; see research.md).
  const reviews = [
    ["Simon Longer", "Tint / cabin comfort", "Looks amazing, interiors way less hot", "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT214R1FXb3pTa0o2TFhCT1ZYRnhTMWMzWVhseE5YYxAB!2m1!1s0x0:0x9853607c58e67a80!3m1!1s2@1:CAIQACodChtycF9oOmxGQWozSkJ6LXBOVXFxS1c3YXlxNXc%7C%7C?hl=en-GB"],
    ["Rosie", "Tint consultation · Ceramic Ultra", "Abraham took his time in explaining the levels of tint and options.", "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pSbFNFOURiM2h4TFV4aVZtMUtabVF0WWs1SmJIYxAB!2m1!1s0x0:0x9853607c58e67a80!3m1!1s2@1:CAIQACodChtycF9oOjRlSE9Db3hxLUxiVm1KZmQtYk5JbHc%7C%7C?hl=en-GB"],
    ["Ryan Clark", "Truck tint & ceramic coating", "I had a ceramic coating and window tint done for my truck. They did a great job", "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2t4R1YwRkNla1p1WHpkUE1VZDJXa0ZQT1ZSelRXYxAB!2m1!1s0x0:0x9853607c58e67a80!3m1!1s2@1:CAIQACodChtycF9oOkxGV0FCekZuXzdPMUd2WkFPOVRzTWc%7C%7C?hl=en-GB"],
    ["Paul Ruffino", "Window tint & vehicle care", "Had both of my cars detailed, ceramic-coated, and with the latest tech in window tint replaced.", "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT201R2JWZFZaMWg2Ym1sWWNtVnFSVTlmVmsxb1EzYxAB!2m1!1s0x0:0x9853607c58e67a80!3m1!1s2@1:CAIQACodChtycF9oOm5GbVdVZ1h6bmlYcmVqRU9fVk1oQ3c%7C%7C?hl=en-GB"],
    ["Manohar Perumal", "Tesla Model Y windshield tint", "He is very knowledgeable, professional, and offers very reasonable prices. Highly recommended!", "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21wNmFGOUdPR0ZyUTNKSlZpMUNPWGg2TFZsQmJuYxAB!2m1!1s0x0:0x9853607c58e67a80!3m1!1s2@1:CAIQACodChtycF9oOmp6aF9GOGFrQ3JJVi1COXh6LVlBbnc%7C%7C?hl=en-GB"]
  ];
  const card = ([name, service, quoteText, url], hidden) =>
    `<article class="review"${hidden ? ' aria-hidden="true"' : ''}><span class="stars" aria-hidden="true">★★★★★</span><p>“${quoteText}”</p>` +
    `<span class="who">${name}<small>${service} · <a href="${url}" target="_blank" rel="noopener noreferrer"${hidden ? ' tabindex="-1"' : ''}>Google review ↗</a></small></span></article>`;
  // The track holds the list twice so the marquee loops seamlessly.
  const set = reviews;
  document.getElementById('review-track').innerHTML =
    set.map((review, index) => card(review, index >= reviews.length)).join('') +
    set.map(review => card(review, true)).join('');
})();
